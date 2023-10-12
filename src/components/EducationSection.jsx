import uniqid from 'uniqid';

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

const Subsection = ({ props }) => {
    return (
        <div className='edu-subsection'>
            {Object.entries(props).map(([key, value]) => {
                if (
                    value != props.form &&
                    key != 'endDate'
                ) {
                    return (
                        <p key={key} className={key}>
                            {props[key]}
                        </p>
                    );
                }
            })}
            <div></div>
            {Object.entries(props).map(([key, value]) => {
                if (value !== props.form) {
                    if (key == 'endDate') {
                        return (
                            <p key={key} className={key}>
                                {props[key]}
                            </p>
                        );
                    }
                }
            })}
        </div>
    )
}

export default EducationSection;