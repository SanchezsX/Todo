import React, { createContext, useEffect, useState, ReactNode } from 'react'

interface Task {
  id: number
  text: string
  category: 'Todays' | 'This week' | 'Eventually'
}

interface TodoContextType {
  tasks: Task[]
  TodoBoardTypes: string[]
  selectedCategory: 'Todays' | 'This week' | 'Eventually'
  handleAddTask: (
    value: string,
    category: 'Todays' | 'This week' | 'Eventually'
  ) => void
  handleDeleteTask: (id: number) => void
  setSelectedCategory: (value: 'Todays' | 'This week' | 'Eventually') => void
}

const TodoContext = createContext<TodoContextType>({
  tasks: [],
  selectedCategory: 'Todays',
  TodoBoardTypes: [],
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  setSelectedCategory: () => {},
})

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const TodoBoardTypes = ['Todays', 'This week', 'Eventually']
  const [selectedCategory, setSelectedCategory] = useState<
    'Todays' | 'This week' | 'Eventually'
  >('Todays')

  const handleAddTask = (
    value: string,
    category: 'Todays' | 'This week' | 'Eventually'
  ) => {
    if (value.trim() !== '') {
      const newTask: Task = { id: Date.now(), text: value, category }
      const updatedTasks = [...tasks, newTask]
      setTasks(updatedTasks)

      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      setTasks(storedTasks)
    } catch (error) {
      console.error('Failed to parse tasks from localStorage:', error)
      setTasks([])
    }
  }, [])

  return (
    <TodoContext.Provider
      value={{
        tasks,
        TodoBoardTypes,
        selectedCategory,
        setSelectedCategory,
        handleAddTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
