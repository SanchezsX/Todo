import { useContext } from 'react'
import Container from '../components/Container'
import TodoBoard from '@/components/TodoBoard'
import Title from './subcomponents/Title'
import ModalButton from '@/components/ModalButton'

import ColorSelector from '@/components/ColorSelector'
import TodoContext from '@/context/TodoContext'

function App() {
  const { TodoBoardTypes, tasks } = useContext(TodoContext)
  const subtitles = [
    'Hurray! No more todos for today!',
    'Great! No more todos for this week!',
    'No other things to do. Good job!',
  ]
  return (
    <div className="bg-secondary">
      <Container
        width="1400px"
        className="h-screen flex flex-col justify-end pb-10 "
      >
        <div className="flex justify-between items-center">
          <Title />
          <div className="flex items-center gap-5">
            <ColorSelector />
            <ModalButton titleButton="Add Todo" />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
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
