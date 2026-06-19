import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        // Boom-style solid white CTA
        white:
          'bg-white text-black hover:bg-white/90',
        primary:
          'bg-[#7c5cff] text-white hover:bg-[#6a4cf0] shadow-[0_8px_30px_-8px_rgba(124,92,255,0.7)]',
        gradient:
          'bg-[linear-gradient(100deg,#0099ff,#814ac8_55%,#df7afe)] text-white hover:brightness-110 shadow-[0_8px_30px_-10px_rgba(129,74,200,0.8)]',
        // Boom-style dark bordered secondary
        outline:
          'border border-white/15 bg-transparent text-white hover:bg-white/[0.06]',
        ghost: 'text-white/80 hover:text-white hover:bg-white/[0.06]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-6 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

export { buttonVariants }
