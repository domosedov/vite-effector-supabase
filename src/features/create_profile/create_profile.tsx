import * as React from 'react'
import { useEvent } from 'effector-react'
import { profileModel } from '~/entities/profile'

export const CreateProfileForm: React.FC = () => {
  const firstNameId = React.useId()
  const lastNameId = React.useId()
  const createProfile = useEvent(profileModel.createProfile)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const firstName = (
      event.currentTarget.elements[firstNameId as unknown as number] as HTMLInputElement
    ).value
    const lastName = (
      event.currentTarget.elements[lastNameId as unknown as number] as HTMLInputElement
    ).value
    createProfile({ first_name: firstName, last_name: lastName })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={firstNameId}>First name</label>
      <input id={firstNameId} type='text' name='firstName' />
      <label htmlFor={lastNameId}>Last name</label>
      <input id={lastNameId} type='text' name='lastName' />
      <button type='submit'>Create</button>
    </form>
  )
}
