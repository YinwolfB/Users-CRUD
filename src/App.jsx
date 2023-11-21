import { useEffect } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'

function App() {
  
  const url = 'https://users-crud.academlo.tech'
const [ users, getUsers,createUser,delateUser, updateUser ] = useCrud(url)

useEffect(() => {
  getUsers('/users')
}, [])

console.log(users)

  return (
    <div>
      <h1>Users</h1>

    </div>
  )
}

export default App
