import SignInForm from "../../components/SignInForm/SignInForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm-component"
import './UserAuth.scss'

const UserAuth = () => {
    return (
        <div className="userAuthContainer">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default UserAuth