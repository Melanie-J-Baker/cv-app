/* eslint-disable react/prop-types */
const GeneralSection = ({ props }) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <div key={key} className="general-section">
              <p key={key} className={key}>
                {props[key]}
              </p>
            </div>
          );
        }
      })}
    </>
  );
};

export default GeneralSection;