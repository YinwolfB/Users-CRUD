import { useEffect } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'
import { FormUser } from './hooks/components/FormUser'

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
    <FormUser
      createUser={createUser}
    ></FormUser>
    </div>
  )
}

export default App
