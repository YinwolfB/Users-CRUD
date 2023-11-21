import { useEffect, useState } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'
import { FormUser } from './hooks/components/FormUser'
import { UserCard } from './hooks/components/UserCard'

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
      ></FormUser>
      <div>
        {
          users && users.map(user => (
            <UserCard
              key={user.id}
              user={user}
              delateUser={delateUser}
              setInfoUpdate={setInfoUpdate}
            ></UserCard>
          ))
        }
      </div>
    </div>
  )
}

export default App
