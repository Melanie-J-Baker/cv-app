import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const ExperienceSection = (props) => {
  const propsList = [...props.infoArray];
  const section = propsList.map((prop) => {
    return (
      <div key={uniqid()} className="exp-cv-section">
        <Subsection key={uniqid()} props={prop} />
        <button
          key={uniqid()}
          onClick={() => props.editForm(propsList.indexOf(prop))}
          id={propsList.indexOf(prop)}
          className="edit"
        >Edit</button>
      </div>
    );
  });
  return <>{section}</>;
};

ExperienceSection.propTypes = {
    infoArray: PropTypes.array,
    editForm: PropTypes.func,
}

const Subsection = ({ props }) => {
  return (
    <div className="exp-subsection">
      {Object.entries(props).map(([key, value]) => {
        if (
          value !== props.form &&
          key != 'startDate' &&
          key != 'leaveDate'
        ) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
      <div></div>
      <div className="dates">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form && key != 'tasks') {
            if (key == 'startDate' || key == 'leaveDate') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
    </div>
  );
};


Subsection.propTypes = {
    key: PropTypes.number,
    props: PropTypes.object,
    form: PropTypes.object
}

export default ExperienceSection;