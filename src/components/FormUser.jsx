/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

export const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, isDisable, setIsDisable }) => {

    

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])


    const submit = data => {
        if (infoUpdate) {
            //update
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate(null)
        } else {
            //Create
            createUser('/users', data)
        }
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleExit =()=>{
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setInfoUpdate()
    }

    return (
        <div className={`formContainer ${isDisable && 'form__disable'}`} >
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h2 className="form__title"> <span> Form User</span> </h2>
                <div onClick={handleExit} className="form__x"><i className='bx bxs-exit'></i></div>
                <label className="form__label"> <span className="form__span">Email </span>  <input className="form__input"{...register('email')} type="email" /> </label>
                <label className="form__label"> <span className="form__span">Password </span>  <input className="form__input"{...register('password')} type="password" /> </label>
                <label className="form__label"> <span className="form__span">First name</span>  <input className="form__input"{...register('first_name')} type="text" /> </label>
                <label className="form__label"> <span className="form__span">Last name</span>  <input className="form__input"{...register('last_name')} type="text" /> </label>
                <label className="form__label"> <span className="form__span">Birthday</span>  <input className="form__input"{...register('birthday')} type="date" /> </label>
                <button className="form__btn">Submit</button>
            </form>
        </div>
    )
}
