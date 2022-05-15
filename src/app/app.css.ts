import { globalStyle } from '@vanilla-extract/css'
import { vars } from '~/styles'

globalStyle('*, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  // light mode
  color: vars.color.black,
  backgroundColor: vars.color.white,
  // dark mode
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: vars.color.white,
      backgroundColor: vars.color.gray['800'],
    },
  },
})
