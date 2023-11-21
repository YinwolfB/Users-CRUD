import { useEffect } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'

function App() {
  
  const url = 'https://user-crud.academlo.tech'
const [ users, getUsers,createUser,delateUser, updateUser ] = useCrud()

useEffect(() => {
  getUsers()
}, [])


  return (
    <div>
      <h1>Users</h1>

    </div>
  )
}

export default App
