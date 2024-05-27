import { ContainerProps } from '@/types/types'
import { cn } from '@nextui-org/react'

const Container = ({
  children,
  width = '100%',
  className = '',
}: ContainerProps) => {
  return (
    <div
      style={{ maxWidth: width }}
      className={cn('mx-auto px-4', className)}
    >
      {children}
    </div>
  )
}

export default Container
