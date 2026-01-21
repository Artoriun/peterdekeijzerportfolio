import express from 'express'
import ContactSubmission from '../models/ContactSubmission.js'
import { validateContactSubmission, handleValidationErrors } from '../middleware/validation.js'
import { sendContactNotification } from '../utils/email.js'

const router = express.Router()

// POST - Submit contact form
router.post('/submit', validateContactSubmission, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, message, subject } = req.body
    const userAgent = req.get('user-agent') || 'Unknown'
    const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown'

    const submission = new ContactSubmission({
      name,
      email,
      message,
      subject,
      userAgent,
      ipAddress
    })

    await submission.save()

    // Send email notifications asynchronously
    sendContactNotification(submission).catch(err => {
      console.error('Email notification error:', err)
    })

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you shortly.',
      submissionId: submission._id
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
    const submissions = await ContactSubmission.find()
      .sort({ createdAt: -1 })
      .limit(100)

    res.status(200).json({
      success: true,
      count: submissions.length,
      submissions
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
    const submission = await ContactSubmission.findById(req.params.id)
    
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
    const submission = await ContactSubmission.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

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
    await ContactSubmission.findByIdAndDelete(req.params.id)

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
