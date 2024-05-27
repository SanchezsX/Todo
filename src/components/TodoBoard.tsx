import { useState } from 'react'
import ModalButton from './ModalButton'
import TodoList from './TodoList'
import { motion, AnimatePresence } from 'framer-motion'
interface TodoBoardProps {
  title: string
  subtitle: string
  tasks: any
}

const TodoBoard = ({ title, subtitle, tasks }: TodoBoardProps) => {
  const [plus, setPlus] = useState(true)
  return (
    <div className="bg-secondary w-[430px] h-[630px] rounded-[25px]">
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] font-semibold p-5 ">{title}</h4>
        {tasks.length === 0 ? null : <ModalButton Plus={plus} />}
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[500px]">
          <p className=" text-[16px] mb-4 opacity-50">{subtitle}</p>
          <ModalButton />
        </div>
      ) : (
        <AnimatePresence>
          {tasks.map((task: string) => (
            <TodoList
              todos={task}
              key={task}
            />
          ))}
        </AnimatePresence>
      )}
    </div>
  )
}

export default TodoBoard
