import { SignUpForm } from '~/features/signup'
import type { Page } from '~/shared/types/app'

export const SignUpPage: Page = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
    </div>
  )
}
