import { style } from '@vanilla-extract/css'
import { contentShow, overlayShow, vars } from '~/styles'

export const overlay = style({
  backgroundColor: vars.color.black,
  position: 'fixed',
  inset: 0,

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${overlayShow} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
  },
})

export const content = style({
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: 'fit-content',
  maxWidth: '450px',
  maxHeight: '85vh',
  overflowY: 'auto',
  padding: 25,

  ':focus': { outline: 'none' },

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
  },
})
