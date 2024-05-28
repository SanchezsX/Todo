
import { TodoBoardProps } from '@/types/types'
import ModalButton from './ModalButton'
import TodoList from './TodoList'

const TodoBoard = ({ title, subtitle, tasks }: TodoBoardProps) => {
  const plus = true

  return (
    <div className="bg-secondary w-[430px] h-[630px] rounded-[25px] ">
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] font-semibold p-5 ">{title}</h4>
        {tasks.length === 0 ? null : <ModalButton Plus={plus} />}
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[500px]">
          <p className=" text-[16px] mb-4 opacity-50 px-4 text-center">{subtitle}</p>
          <ModalButton />
        </div>
      ) : (
        <>
          {tasks.map((task: string) => (
            <TodoList
              todos={task}
              key={task}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default TodoBoard
