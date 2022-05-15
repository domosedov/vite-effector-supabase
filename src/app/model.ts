import { sample } from 'effector'
import { createGate } from 'effector-react'
import { authModel } from '~/entities/auth'

export const AppGate = createGate('AppGate')

sample({
  clock: AppGate.open,
  filter: AppGate.status,
  target: authModel.validateUser,
})
