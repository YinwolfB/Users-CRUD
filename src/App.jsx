import { useEffect, useState } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'
import { FormUser } from './components/FormUser'
import { UserCard } from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, delateUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Users</h1>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
              key={user.id} // Asegúrate de que user.id sea único para cada usuario
              user={user}
              delateUser={delateUser}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
