import TodoContext from '@/context/TodoContext'
import { Checkbox } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
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
      >
        <div className="bg-[#18181B]  w-[380px] py-3 pl-4 rounded-[15px] flex justify-between mx-auto text-[14px] mb-2 pr-3">
          <Checkbox
            defaultSelected
            lineThrough
            isSelected={isSelectedCheckbox}
            onValueChange={setIsSelectedCheckbox}
            color="primary"
            classNames={{ label: ' text-[14px]' }}
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
