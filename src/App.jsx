import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login.jsx'
import Profile from './components/Profile.jsx'
import UserContext from './context/UserContext.js'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Overview of Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
