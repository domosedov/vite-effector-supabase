import * as React from 'react'
import { useEvent } from 'effector-react'
import { authModel } from '~/entities/auth'

export const SignUpForm: React.FC = () => {
  const emailId = React.useId()
  const passwordId = React.useId()
  const signup = useEvent(authModel.signUpViaCredentials)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements
    const email = (formElements[emailId as unknown as number] as HTMLInputElement).value
    const password = (formElements[passwordId as unknown as number] as HTMLInputElement).value
    signup({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input id={emailId} type='email' name='email' />
      </div>
      <div>
        <label htmlFor={passwordId}>Email</label>
        <input id={passwordId} type='password' name='password' />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
