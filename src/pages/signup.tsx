import * as React from 'react'
import { SignUpForm } from '~/features/signup'
import type { Page } from '~/shared/types/app'
import { AnimatePresence, motion, type PanInfo, type Variants } from 'framer-motion'

export const SignUpPage: Page = () => {
  return (
    <div className=''>
      <h1>Sign up</h1>
      <SignUpForm />
      <Carousel />
    </div>
  )
}

const variants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? -1000 : 1000,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 1000 : -1000,
  }),
}

const wrap = (index: number, total: number) => {
  if (index < 0) {
    return total - 1
  }
  if (index === total) {
    return 0
  }
  return index
}

const Slide: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div className='grid grid-cols-[256px_1fr] gap-5'>
      <div className='h-64 w-64'>
        <img
          src={`https://picsum.photos/400/300`}
          alt='Image'
          className='h-full w-full touch-none select-none rounded-md object-cover'
          draggable={false}
        />
      </div>

      <div>
        {index} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit itaque eligendi
        laboriosam quos blanditiis, provident cum ipsam consectetur quae id ipsa voluptate odio
        reiciendis ipsum, laudantium, recusandae voluptatum corporis explicabo!
      </div>
    </div>
  )
}

const Slides = Array.from({ length: 5 }).map((_, i) => <Slide index={i} key={i} />)

const Carousel: React.FC = () => {
  const [[index, direction], setIndex] = React.useState([0, 0])

  const paginate = (newDirection: number) => {
    const newIndex = wrap(index + newDirection, 5)
    setIndex([newIndex, newDirection])
  }

  const handlePanEnd = (_event: Event, { offset: { x } }: PanInfo) => {
    if (x > 200) paginate(-1)
    if (x < -200) paginate(1)
  }

  return (
    <div className='bg-slate-800 px-4 py-10'>
      <div className='relative mx-auto h-80 max-w-4xl'>
        <button
          onClick={() => paginate(-1)}
          type='button'
          className='absolute -left-5 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded bg-yellow-300'
        >
          <span className='sr-only'>Prev</span>
        </button>
        <button
          onClick={() => paginate(1)}
          type='button'
          className='absolute -right-5 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded bg-yellow-300'
        >
          <span className='sr-only'>Next</span>
        </button>
        <div className='relative h-80 overflow-hidden rounded-lg bg-white'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className='absolute inset-0 flex cursor-grab items-center justify-center p-8 px-20'
              variants={variants}
              initial='enter'
              animate='visible'
              exit='exit'
              key={index}
              custom={direction}
              transition={{
                type: 'tween',
              }}
              drag={'x'}
              dragConstraints={{ left: 0, right: 0 }}
              onPanEnd={handlePanEnd}
            >
              {Slides[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
