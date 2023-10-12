import { useState, useEffect } from 'react';

const GeneralInfoForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const form = 'generalInfoForm';

    if (props.isEditing) {
        useEffect(() => {
            setFullName(props.infoToEdit.fullName);
            setEmail(props.infoToEdit.email)
            setPhone(props.infoToEdit.phone);
            //setIsShown(true);
        }, []);
    }

    /*const toggleForm = (e) => {
        setIsShown(!isShown)
    }*/

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
            //isShown: isShown,
        };
        props.saveInputData(formInfo);
        setFullName("");
        setEmail("");
        setPhone("");
        //setIsShown(false);
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
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
                <button className='save' type='submit' disabled={!formValid()}>Save</button>
            </form>
        </div>

    )
}

export default GeneralInfoForm;