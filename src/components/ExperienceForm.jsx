import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const ExperienceForm = (props) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [tasks, setTasks] = useState('');
    const [startDate, setStartDate] = useState('');
    const [leaveDate, setLeaveDate] = useState('');
    const [form] = useState('experienceForm');

    if (props.isEditing) {
        useEffect(() => {
            setTitle(props.infoToEdit.title);
            setCompany(props.infoToEdit.company);
            setTasks(props.infoToEdit.tasks);
            setStartDate(format(new Date(props.infoToEdit.startDate), 'yyyy-MM-dd'));
            setLeaveDate(format(new Date(props.infoToEdit.leaveDate), 'yyyy-MM-dd'));
        }, []);
    }

    const formValid = () => {
        return (
            title.length &&
            company.length &&
            tasks.length &&
            startDate.length &&
            leaveDate.length
        );
    };

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'company':
                setCompany(value);
                break;
            case 'tasks':
                setTasks(value);
                break;
            case 'startDate':
                setStartDate(value);
                break;
            case 'leaveDate':
                setLeaveDate(value);
                break;
        }
        e.preventDefault();
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        const formInfo = {
            title: title,
            company: company,
            tasks: tasks,
            startDate: format(new Date(startDate.replaceAll('-', '/')), "MMM',' yyyy"),
            leaveDate: format(new Date(leaveDate.replaceAll('-', '/')), "MMM',' yyyy"),
            form: form,
            //isShown: isShown,
        };
        props.saveInputData(formInfo);
        setTitle('');
        setCompany('');
        setTasks('');
        setStartDate('');
        setLeaveDate('');
        //setIsShown(false);
    };
    
    return (
        <div className="experience-div">
            <p className="input-heading">Experience</p>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="title">Job Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    placeholder="Job Title"
                    onChange={handleChange}
                />
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    placeholder="Company"
                    onChange={handleChange}
                />
                <label htmlFor="tasks">Main Tasks:</label>
                <input
                    type="text"
                    id="tasks"
                    name="tasks"
                    placeholder="Main Tasks"
                    value={tasks}
                    onChange={handleChange}
                />
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={handleChange}
                />
                <label htmlFor="leaveDate">End Date:</label>
                <input
                    type="date"
                    id="leaveDate"
                    name="leaveDate"
                    value={leaveDate}
                    onChange={handleChange}
                />
                <div className='form-buttons-div'>
                    {!props.isEditing && <span></span>}
                    {props.isEditing && (
                        <button
                            type="button"
                            className="delete"
                            onClick={() =>
                                props.deleteItem({
                                    title,
                                    company,
                                    tasks,
                                    startDate,
                                    leaveDate,
                                    form,
                                    //isShown,
                                })
                            }
                        >Delete</button>
                    )}
                    <button className='save' type='submit' disabled={!formValid()}>Save</button>
                </div> 
            </form>
        </div>
    )
}

export default ExperienceForm