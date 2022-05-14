import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'
import * as styles from './dialog.css'

export const Root = DialogPrimitive.Root
export const Portal = DialogPrimitive.Portal
export const Trigger = DialogPrimitive.Trigger
export const Close = DialogPrimitive.Close
export const Title = DialogPrimitive.Title
export const Description = DialogPrimitive.Description

export const Overlay = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogOverlayProps>(
  ({ className, ...restProps }, forwardedRef) => (
    <DialogPrimitive.Overlay
      ref={forwardedRef}
      className={clsx(styles.overlay, className)}
      {...restProps}
    />
  ),
)

Overlay.displayName = 'Overlay'

export const Content = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
  ({ className, ...restProps }, forwardedRef) => (
    <DialogPrimitive.Content
      ref={forwardedRef}
      className={clsx(styles.content, className)}
      {...restProps}
    />
  ),
)

Content.displayName = 'Content'
