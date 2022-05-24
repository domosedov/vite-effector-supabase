import type { FC } from 'react'
import type { LoaderFunction } from 'react-router-dom'

export type Page<T = unknown> = FC<T> & {
  loader?: LoaderFunction
}
