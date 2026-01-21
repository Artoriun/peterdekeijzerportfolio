import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export const sendContactNotification = async (submission) => {
  try {
    // Email to Peter
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${submission.subject || submission.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Subject:</strong> ${submission.subject || 'No subject provided'}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <hr/>
        <p><small>Submitted at: ${new Date(submission.createdAt).toLocaleString()}</small></p>
      `
    })

    // Confirmation email to visitor
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: submission.email,
      subject: 'We received your message - Peter de Keijzer',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${submission.name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <hr/>
        <p><strong>Your Message Summary:</strong></p>
        <p><strong>Subject:</strong> ${submission.subject || 'No subject provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <hr/>
        <p>Best regards,<br>Peter de Keijzer</p>
      `
    })
  } catch (error) {
    console.error('Error sending email:', error)
    // Don't throw - submission is already saved
  }
}
