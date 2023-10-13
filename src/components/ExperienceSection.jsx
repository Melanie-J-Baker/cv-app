/* eslint-disable react/prop-types */
import uniqid from 'uniqid';

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

export default ExperienceSection;