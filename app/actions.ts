'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (name.length < 2 || name.length > 100) {
    return { status: 'error', message: 'Please enter your full name.' }
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (message.length < 10 || message.length > 3000) {
    return { status: 'error', message: 'Please tell us a little more about your project.' }
  }

  return {
    status: 'success',
    message: `Thank you, ${name.split(' ')[0]}. The studio will be in touch within two business days.`,
  }
}
