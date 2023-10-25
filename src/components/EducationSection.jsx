import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const EducationSection = (props) => {
    const propsList = [...props.infoArray];
    const section = propsList.map((prop) => {
        return (
            <div key={uniqid()} className="edu-cv-section">
                <Subsection key={uniqid()} props={prop} />
                <button
                    key={uniqid()}
                    onClick={() => props.editForm(propsList.indexOf(prop))}
                    id={propsList.indexOf(prop)}
                    className="edit"
                >Edit</button>
            </div>
        )
    })
    return <>{section}</>
}

EducationSection.propTypes = {
    infoArray: PropTypes.array,
    editForm: PropTypes.func,
}

const Subsection = ({ props }) => {
    return (
        <div className='edu-subsection'>
            {Object.entries(props).map(([key, value]) => {
                if (
                    value != props.form
                ) {
                    return (
                        <p key={key} className={key}>
                            {props[key]}
                        </p>
                    );
                }
            })}
            <div></div>

        </div>
    )
}

Subsection.propTypes = {
    key: PropTypes.number,
    props: PropTypes.object,
    form: PropTypes.object
}

export default EducationSection;