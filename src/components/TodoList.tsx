import { useContext, useState } from 'react'
import { Checkbox, cn } from '@nextui-org/react'
import { MdDeleteForever } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import TodoContext from '@/context/TodoContext'
const TodoList = ({ todos }: { todos: any }) => {
  const [isSelectedCheckbox, setIsSelectedCheckbox] = useState(false)
  const { handleDeleteTask } = useContext(TodoContext)

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
            'flex justify-between mx-auto mb-2 pr-3 '
          )}
        >
          <Checkbox
            defaultSelected
            lineThrough
            isSelected={isSelectedCheckbox}
            onValueChange={setIsSelectedCheckbox}
            color="primary"
            classNames={{ label: ' text-[14px] text-wrap' }}
          >
            {todos.text}
          </Checkbox>
          <button onClick={() => handleDeleteTask(todos.id)}>
            <MdDeleteForever size={22} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TodoList
