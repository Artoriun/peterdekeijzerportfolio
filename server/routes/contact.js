import express from 'express'
import ContactSubmission from '../models/ContactSubmission.js'
import { validateContactSubmission, handleValidationErrors } from '../middleware/validation.js'
import { sendContactNotification } from '../utils/email.js'

const router = express.Router()

// In-memory storage for demo (if MongoDB is not available)
let demoSubmissions = []

// POST - Submit contact form
router.post('/submit', validateContactSubmission, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, message, subject } = req.body
    const userAgent = req.get('user-agent') || 'Unknown'
    const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown'

    let submission
    let useDatabase = false

    try {
      // Try to use MongoDB if available
      submission = new ContactSubmission({
        name,
        email,
        message,
        subject,
        userAgent,
        ipAddress
      })
      await submission.save()
      useDatabase = true
    } catch (dbError) {
      // Fallback to in-memory storage for demo
      submission = {
        _id: Date.now().toString(),
        name,
        email,
        message,
        subject,
        userAgent,
        ipAddress,
        read: false,
        replied: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      demoSubmissions.push(submission)
    }

    // Send email notifications asynchronously
    sendContactNotification(submission).catch(err => {
      console.error('Email notification error:', err)
    })

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you shortly.',
      submissionId: submission._id,
      demo: !useDatabase ? 'Data stored in memory (demo mode)' : undefined
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your submission. Please try again later.'
    })
  }
})

// GET - Retrieve all submissions (protected route - add auth later)
router.get('/submissions', async (req, res) => {
  try {
    let submissions

    try {
      // Try to fetch from MongoDB
      submissions = await ContactSubmission.find()
        .sort({ createdAt: -1 })
        .limit(100)
    } catch (dbError) {
      // Return demo submissions if MongoDB is not available
      submissions = demoSubmissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 100)
    }

    res.status(200).json({
      success: true,
      count: submissions.length,
      submissions,
      demo: submissions.length > 0 && !submissions[0]._doc ? 'Using in-memory storage' : undefined
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions'
    })
  }
})

// GET - Get single submission
router.get('/submissions/:id', async (req, res) => {
  try {
    let submission

    try {
      // Try MongoDB first
      submission = await ContactSubmission.findById(req.params.id)
    } catch (dbError) {
      // Search in demo submissions
      submission = demoSubmissions.find(s => s._id === req.params.id)
    }

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.status(200).json({
      success: true,
      submission
    })
  } catch (error) {
    console.error('Error fetching submission:', error)
    res.status(500).json({
      success: false,
      message: 'Error fetching submission'
    })
  }
})

// PATCH - Mark as read
router.patch('/submissions/:id/read', async (req, res) => {
  try {
    let submission

    try {
      // Try MongoDB first
      submission = await ContactSubmission.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
      )
    } catch (dbError) {
      // Update in demo submissions
      const demoSubmission = demoSubmissions.find(s => s._id === req.params.id)
      if (demoSubmission) {
        demoSubmission.read = true
        submission = demoSubmission
      }
    }

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.status(200).json({
      success: true,
      submission
    })
  } catch (error) {
    console.error('Error updating submission:', error)
    res.status(500).json({
      success: false,
      message: 'Error updating submission'
    })
  }
})

// DELETE - Delete submission
router.delete('/submissions/:id', async (req, res) => {
  try {
    let deleted = false

    try {
      // Try MongoDB first
      const result = await ContactSubmission.findByIdAndDelete(req.params.id)
      deleted = !!result
    } catch (dbError) {
      // Delete from demo submissions
      const index = demoSubmissions.findIndex(s => s._id === req.params.id)
      if (index > -1) {
        demoSubmissions.splice(index, 1)
        deleted = true
      }
    }

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Submission deleted'
    })
  } catch (error) {
    console.error('Error deleting submission:', error)
    res.status(500).json({
      success: false,
      message: 'Error deleting submission'
    })
  }
})

export default router
