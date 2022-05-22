import * as React from 'react'
import { CreateProfileForm } from '~/features/create_profile'
import { SignUpForm } from '~/features/signup'

export const SignUpPage: React.FC = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
      <div>----</div>
      <CreateProfileForm />
    </div>
  )
}
