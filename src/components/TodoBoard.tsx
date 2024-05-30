import { useEffect, useState } from 'react'
import { TodoBoardProps } from '@/types/types'
import ModalButton from './ModalButton'
import TodoList from './TodoList'

const TodoBoard = ({ title, subtitle, tasks }: TodoBoardProps) => {
  const [secondaryColor, setSecondaryColor] = useState('')

  const [boardColor, setBoardColor] = useState('')
  const plus = true

  const determineBgColor = (color: string): string => {
    switch (color) {
      case '#0F172A':
        return '#1E293B'
      case '#18181B':
        return '#27272A'
      case '#171717':
        return '#262626'
      case '#1C1917':
        return '#292524'
      default:
        return color
    }
  }

  useEffect(() => {
    const secondary = getComputedStyle(document.documentElement)
      .getPropertyValue('--secondary-color')
      .trim()
    setSecondaryColor(secondary)
    const bgColor = determineBgColor(secondary)
    setBoardColor(bgColor)
  }, [])

  useEffect(() => {
    const updateColors = () => {
      const tertiary = determineBgColor(secondaryColor)

      document.documentElement.style.setProperty('--tertiary-color', tertiary)
      setBoardColor(determineBgColor(secondaryColor))
    }

    updateColors()
  }, [secondaryColor])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const secondary = getComputedStyle(document.documentElement)
        .getPropertyValue('--secondary-color')
        .trim()
      setSecondaryColor(secondary)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="bg-tertiary"
      style={{
        backgroundColor: boardColor,
        width: '430px',
        height: '630px',
        borderRadius: '25px',
      }}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] font-semibold p-5">{title}</h4>
        {tasks.length === 0 ? null : <ModalButton Plus={plus} />}
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[500px]">
          <p className="text-[16px] mb-4 opacity-50 px-4 text-center">
            {subtitle}
          </p>
          <ModalButton />
        </div>
      ) : (
        tasks.map((task: string) => (
          <TodoList
            todos={task}
            key={task}
          />
        ))
      )}
    </div>
  )
}

export default TodoBoard
