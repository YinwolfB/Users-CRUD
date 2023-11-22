/* eslint-disable react/prop-types */

export const UserCard = ({ user, delateUser, setInfoUpdate,setIsDisable }) => {

    const handleDelate = () => {
        delateUser('/users', user.id)
    }

    const handelEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }

    return (
        <article>
            <h3>{user.first_name} {user.last_name}</h3>
            <ul>
                <li><span>Email: </span><span>{user.email}</span></li>
                <li><span>Birthday: </span><span>{user.birthday}</span></li>
            </ul>
            <button onClick={handleDelate}><i className='bx bxs-trash-alt'></i></button>
            <button onClick={handelEdit}><i className='bx bxs-edit' ></i></button>
        </article>
    )
}
