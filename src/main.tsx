import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/page/App.tsx'
import '@/assets/global.css'
import { NextUIProvider } from '@nextui-org/react'
import { TodoProvider } from './context/TodoContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </NextUIProvider>
  </React.StrictMode>
)
