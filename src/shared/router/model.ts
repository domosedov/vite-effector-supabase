import { createGate } from 'effector-react'
import type { NavigateFunction, Location, Navigation } from 'react-router-dom'

type RouterGateProps = {
  navigate?: NavigateFunction
  location?: Location
  navigation?: Navigation
}

export const RouterGate = createGate<RouterGateProps>({
  name: 'RouterGate',
})

export const $navigate = RouterGate.state.map(state => state.navigate)
export const $location = RouterGate.state.map(state => state.location)
export const $navigation = RouterGate.state.map(state => state.navigation)
