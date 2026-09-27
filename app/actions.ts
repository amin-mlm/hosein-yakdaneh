export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// This is a static site with no backend, so the inquiry is validated on the
// client. Kept in the same shape as an action so it can be used with
// `useActionState` from a client component
export async function submitInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (name.length < 2 || name.length > 100) {
    return { status: 'error', message: 'لطفاً نام و نام خانوادگی خود را وارد کنید.' }
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return { status: 'error', message: 'لطفاً یک نشانی ایمیل معتبر وارد کنید.' }
  }
  if (message.length < 10 || message.length > 3000) {
    return { status: 'error', message: 'لطفاً کمی بیشتر درباره پروژه‌تان بنویسید.' }
  }

  return {
    status: 'success',
    message: `سپاس از شما، ${name.split(' ')[0]}. استودیو ظرف دو روز کاری با شما تماس خواهد گرفت.`,
  }
}
