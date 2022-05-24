import * as React from 'react'
import { useNavigate, useLocation, useNavigation } from 'react-router-dom'
import { RouterGate } from './model'

export const NavigationWatcher: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const navigation = useNavigation()

  return <RouterGate location={location} navigate={navigate} navigation={navigation} />
}
