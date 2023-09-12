import './Signin.css'

function SignIn () {
    return(
        <div className='conteiner_signin'> 
            <form className='box_signin' action="">
                <label className='gap1' for="Nome">Name: <input type='text' name='Nome'/></label>
                <label  for="Password">Password: <input type='password' name='Password'/></label>
                <label className='gap2' for="e-mail">e-mail: <input type='email' name='e-mail'/></label>
            </form>
            <a href='#'>Join Now</a>
        </div>
    )
}

export default SignIn;