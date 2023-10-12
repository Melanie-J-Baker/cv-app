const GeneralSection = ({ props }) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <div className="general-section">
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