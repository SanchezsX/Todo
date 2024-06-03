import { useContext, useState, useEffect } from 'react'
import { Checkbox, cn } from '@nextui-org/react'
import { MdDeleteForever } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import TodoContext from '@/context/TodoContext'
import confetti from 'canvas-confetti'

const TodoList = ({ todos }: { todos: any }) => {
  const { handleDeleteTask } = useContext(TodoContext)
  const [isSelectedCheckbox, setIsSelectedCheckbox] = useState(() => {
    const savedState = localStorage.getItem(`todo-${todos.id}`)
    return savedState ? JSON.parse(savedState) : false
  })

  const handleConfetti = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    })

    handleDeleteTask(todos.id)
  }
  useEffect(() => {
    localStorage.setItem(`todo-${todos.id}`, JSON.stringify(isSelectedCheckbox))
  }, [isSelectedCheckbox, todos.id])
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        layout
        className="px-2"
      >
        <div
          className={cn(
            'bg-[#18181B] py-3 pl-4 rounded-[15px] text-[14px]',
            'flex justify-between mx-auto mb-2 pr-3'
          )}
          style={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            wordBreak: 'break-all',
          }}
        >
          <Checkbox
            defaultSelected
            lineThrough
            isSelected={isSelectedCheckbox}
            onValueChange={setIsSelectedCheckbox}
            color="primary"
            classNames={{ label: 'text-[14px]', icon: 'text-black' }}
          >
            {todos.text}
          </Checkbox>
          <button onClick={handleConfetti}>
            <MdDeleteForever size={22} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TodoList
