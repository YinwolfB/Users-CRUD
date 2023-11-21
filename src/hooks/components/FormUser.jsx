import { useForm } from "react-hook-form"

export const FormUser = () => {

const {handleSubmit, register, reset } = useForm()
const submit = data =>{

}

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    Email
                    <input {...register('email')} type="email" />
                </label>
                <label>
                    Password
                    <input {...register('password')} type="password" />
                </label>
                <label>
                    First name
                    <input {...register('first_name')} type="text" />
                </label>
                <label>
                    Last name
                    <input {...register('last_name')} type="text" />
                </label>
                <label>
                    Birthday
                    <input {...register('birthday')} type="date" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
