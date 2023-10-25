/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GeneralInfoForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const form = 'generalInfoForm';

    useEffect(() => {
        if (props.isEditing) {
            setFullName(props.infoToEdit.fullName);
            setEmail(props.infoToEdit.email)
            setPhone(props.infoToEdit.phone);
        }
    }, [props.isEditing, props.infoToEdit.fullName, props.infoToEdit.email, props.infoToEdit.phone]);

    
    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
        }
        e.preventDefault();
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const formInfo = {
            fullName: fullName,
            email: email,
            phone: phone,
            form: form,
        };
        props.saveInputData(formInfo);
        setFullName("");
        setEmail("");
        setPhone("");
    };

    const formValid = () => {
        return fullName.length && email.length && phone.length;
    }

    return (
        <div className="general-info-div">
            <p className="input-heading">General Information</p>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    placeholder="Full Name"
                    autoComplete="name"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    autoComplete="email"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    autoComplete="tel"
                    onChange={handleChange}
                    required
                />
                <div></div>
                <button className='save' type='submit' disabled={!formValid()}>Save</button>
            </form>
        </div>

    )
}

GeneralInfoForm.propTypes = {
    saveInputData: PropTypes.func,
    isEditing: PropTypes.bool,
    infoToEdit: PropTypes.node,
}

export default GeneralInfoForm;