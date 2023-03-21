
import './Button.scss'

export const BUTTON_TYPE_CLASSES = {
    base: 'baseContainer',
    google: 'googleSignIn',
    inverted: 'inverted',
};

/* const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);
 */
const Button = ({ children, buttonType, ...otherProps }) => {
    return <button className={`baseContainer ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}> {children}</button >;
};

export default Button;