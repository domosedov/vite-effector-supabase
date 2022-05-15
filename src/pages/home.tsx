import * as React from 'react'
import { Link } from 'react-router-dom'
import { useEvent } from 'effector-react'
import { authModel } from '~/entities/auth'
import { Button } from '~/shared/ui/button'
import { paths } from '.'
import { Dialog } from '~/shared/ui/dialog'

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={paths.todo(666)}>Single todo</Link>
      <Button color='secondary'>Test 2</Button>
      <DemoDialog />
      <LoginForm />
    </div>
  )
}

const LoginForm: React.FC = () => {
  const [signIn, signOut] = useEvent([authModel.signInViaCredentials, authModel.signOut])
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
      <Button type='button' onClick={() => signOut()}>
        Sign out
      </Button>
      <form onSubmit={handleSubmit}>
        <input id={emailId} ref={emailRef} type='email' name='email' required />
        <input id={passwordId} ref={passwordRef} type='password' name='password' required />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

const DemoDialog: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color='primary'>Test 1</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae error dignissimos
          itaque harum. Delectus saepe illum, veAccusantium molestiae non soluta, ratione doloremque
          porro alias?
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
