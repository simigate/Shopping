import './FormInput.scss'
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='formInput' >
            <input className='input' {...otherProps} />
            {label && (
                <label className={`formInputLabel ${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;