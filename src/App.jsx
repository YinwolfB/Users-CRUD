/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'
import { FormUser } from './components/FormUser'
import { UserCard } from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)

  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, delateUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleCreateUser = () =>{
    setIsDisable(false)
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleCreateUser} className='form__btn'>Create new User</button>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
              key={user.id} // Asegúrate de que user.id sea único para cada usuario
              user={user}
              delateUser={delateUser}
              setInfoUpdate={setInfoUpdate}
              setIsDisable={setIsDisable}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
