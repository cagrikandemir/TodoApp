import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoWrapper from './components/TodoWrapper'
import './App.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoWrapper />
    </StrictMode>,
)
