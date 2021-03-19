import React, { FC, useState } from 'react'

    const [value, setValues] = useState<any>({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [err, setErr] = useState<any>('')

const signup:FC = () => {

    const { name, email, password, password2 } = value;

    const inputHandle = (e:any) => {
        setValues({ ...value, [e.target.name]: e.target.value })
    }

const submitHandle=(e:any)=>{

}


    return (
        <div>
           <form action="" onSubmit={submitHandle} className=" shadow p-5 rounded bg_dark_signup" noValidate>
                <h3 className="text-center text-light">Sign Up</h3>
                <h6 className="text-danger" id="error"> {err ? err : ''} </h6>
                <div className="form-group">
                    <input value={name} onChange={inputHandle} name="name" placeholder="Name" type="text" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={email} onChange={inputHandle} name="email" placeholder="Email" type="email" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={password} onChange={inputHandle} name="password" placeholder="Password" type="password" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={password2} onChange={inputHandle} name="password2" placeholder="Confirm Password" type="password" className="form-control shadow-none" />
                </div>
                <button className="btn btn-outline-light shadow-none">Submit</button>
                <h6 className="mt-3 text-light">Already have an account? <a href='/'>Log In</a> </h6>
            </form>
        </div>
    )
}

export default signup
