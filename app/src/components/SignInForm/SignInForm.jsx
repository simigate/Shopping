import './SignInForm.scss'
import Button from '../Button/Button-component';
import { signInGooglePopUp, createUserDocFromAuth } from "../../utils/Firebase.utils"
import FormInput from '../FormInput/FormInput-component';
import { useState } from 'react';
const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields
    const signInwithGooglePopUp = async () => {
        let { user } = await signInGooglePopUp()
        //console.log(user);
        const userDocRef = await createUserDocFromAuth(user);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                <div className='buttonsContainer'>
                    <Button onClick={signInwithGooglePopUp}>
                        Sign In
                    </Button>
                    <Button buttonType='google' onClick={signInwithGooglePopUp}>
                        Google
                    </Button>
                </div>
            </form>

        </div >
    )


}
export default SignInForm