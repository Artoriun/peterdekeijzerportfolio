import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

interface SubmissionResponse {
  success: boolean
  message: string
  submissionId?: string
  errors?: Array<{ path: string; msg: string }>
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitForm = async (data: ContactFormData): Promise<SubmissionResponse> => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch(`${API_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result: SubmissionResponse = await response.json()

      if (!response.ok) {
        const errorMessage = result.errors
          ? result.errors.map((e) => e.msg).join(', ')
          : result.message || 'Failed to submit form'
        setError(errorMessage)
        return result
      }

      setSuccess(true)
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while submitting the form'
      setError(errorMessage)
      return {
        success: false,
        message: errorMessage
      }
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setError(null)
    setSuccess(false)
  }

  return {
    submitForm,
    loading,
    error,
    success,
    resetForm
  }
}
