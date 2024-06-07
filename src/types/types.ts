export interface ContainerProps {
  children: React.ReactNode
  width?: string
  className?: string
}

export interface TodoBoardProps {
  title: string
  subtitle: string
  tasks: any
}

export type Category = 'Todays' | 'This week' | 'Eventually'
export type ModalPlacement = 'auto' | 'center' | 'top' | 'bottom' | 'top-center' | 'bottom-center' | undefined