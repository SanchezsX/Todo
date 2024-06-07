import { useEffect, useState } from 'react'
import { TodoBoardProps } from '@/types/types'
import ModalButton from './ModalButton'
import TodoList from './TodoList'
import { determineBgColor } from '@/helpers/determineBgColor'

const TodoBoard = ({ title, subtitle, tasks }: TodoBoardProps) => {
  const [secondaryColor, setSecondaryColor] = useState('')
  const [boardColor, setBoardColor] = useState('')
  const plus = true

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
      className="rounded-2xl w-[430px] h-[630px] max-[600px]:min-h-[430px] max-[600px]:w-full"
      style={{
        backgroundColor: boardColor,
      }}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] font-semibold p-5">{title}</h4>
        {tasks.length === 0 ? null : <ModalButton Plus={plus} />}
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[500px] max-[600px]:h-[350px]">
          <p className="text-[16px] mb-4 opacity-50 px-4 text-center">
            {subtitle}
          </p>
          <ModalButton titleButton={`Add todo ${title}`} />
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
