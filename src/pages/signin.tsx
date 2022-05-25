import * as React from 'react'
import { useEvent } from 'effector-react'
import type { Page } from '~/shared/types/app'
import { signInFeatureModel } from '~/features/sign_in'

export const SignInPage: Page = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <LoginForm />
    </div>
  )
}

const LoginForm: React.FC = () => {
  const signIn = useEvent(signInFeatureModel.signIn)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const emailId = React.useId()
  const passwordId = React.useId()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    if (email && password) {
      signIn({ email, password })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-start gap-y-4'>
          <div>
            <input
              id={emailId}
              ref={emailRef}
              type='email'
              name='email'
              required
              className='rounded border border-blue-400 p-2'
            />
          </div>
          <div>
            <input
              id={passwordId}
              ref={passwordRef}
              type='password'
              name='password'
              required
              className='rounded border border-blue-400 p-2'
            />
          </div>
          <button
            type='submit'
            className='rounded bg-blue-500 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-rose-500 hover:duration-200'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
