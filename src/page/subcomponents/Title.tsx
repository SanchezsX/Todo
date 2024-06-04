import { cn } from '@nextui-org/react'

const Title = () => {
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = currentDate.toLocaleDateString('en-US', options)
  return (
    <h1
      className={cn(
        ' text-4xl font-semibold mb-10 text-primary ',
        'max-[600px]:text-2xl max-[600px]:mb-0'
      )}
    >
      {formattedDate}
    </h1>
  )
}

export default Title
