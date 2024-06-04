import { useContext } from 'react'
import Container from '../components/Container'
import TodoBoard from '@/components/TodoBoard'
import Title from './subcomponents/Title'
import ModalButton from '@/components/ModalButton'

import ColorSelector from '@/components/ColorSelector'
import TodoContext from '@/context/TodoContext'
import { cn } from '@nextui-org/react'
import { subtitles } from '@/helpers/subtitle'

function App() {
  const { TodoBoardTypes, tasks } = useContext(TodoContext)

  return (
    <div className="bg-secondary">
      <Container
        width="1400px"
        className="h-screen flex flex-col justify-end pb-10 "
      >
        <div
          className={cn(
            'flex justify-between items-center ',
            'max-[600px]:mb-10 max-[600px]:mt-5'
          )}
        >
          <Title />
          <div className="flex items-center gap-5">
            <ColorSelector />
            <ModalButton titleButton="Add Todo" />
          </div>
        </div>
        <div
          className={cn(
            'flex gap-5 justify-between ',
            'max-[600px]:flex-col max-[600px]:overflow-x-auto max-[600px]:items-center'
          )}
        >
          {TodoBoardTypes.map((type) => (
            <TodoBoard
              key={type}
              title={type}
              tasks={tasks.filter((task) => task.category === type)}
              subtitle={subtitles[TodoBoardTypes.indexOf(type)]}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default App
