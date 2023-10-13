import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const EducationForm = (props) => {
    const [school, setSchool] = useState("");
    const [course, setCourse] = useState("");
    const [endDate, setEndDate] = useState("");
    const [grade, setGrade] = useState("");

    const form = "educationForm";

    if (props.isEditing) {
        useEffect(() => {
            setSchool(props.infoToEdit.school);
            setCourse(props.infoToEdit.course);
            setEndDate(props.infoToEdit.endDate);
            setGrade(props.infoToEdit.grade);
            //setIsShown(true);
        }, []);
    }

    const formValid = () => {
        return school.length && course.length && endDate.length;
    }

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case 'school':
                setSchool(value);
                break;
            case 'course':
                setCourse(value);
                break;
            case 'endDate':
                setEndDate(value);
                break;
            case 'grade':
                setGrade(value);
                break;
        }
        e.preventDefault();
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const formInfo = {
            school: school,
            endDate: format(new Date(endDate.replaceAll('-', '/')), "MMM',' yyyy"),
            course: course,
            grade: grade,
            form: form,
        };
        props.saveInputData(formInfo);
        setSchool('');
        setCourse('');
        setEndDate('');
        setGrade('');
    };
    
    return (
      <div className="education-div">
            <p className="input-heading">Education</p>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="school">School/Uni:</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                    value={school}
                    placeholder="School/University Address"
                    onChange={handleChange}
                />
                <label htmlFor="course">Course Title:</label>
                <input
                    type="text"
                    id="course"
                    name="course"
                    value={course}
                    placeholder="Course Title"
                    onChange={handleChange}
                />
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={endDate}
                    onChange={handleChange}
                />
                <label htmlFor="grade">Grade:</label>
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={grade}
                    placeholder="Grade"
                    onChange={handleChange}
                />
                <div></div>
                <div className='form-buttons-div'>
                    {!props.isEditing && <span></span>}
                    {props.isEditing && (
                        <button
                            type="button"
                            className="delete"
                            onClick={() =>
                                props.deleteItem({
                                    school,
                                    course,
                                    endDate,
                                    grade,
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

export default EducationForm