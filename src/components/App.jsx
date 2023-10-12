import { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import GeneralInfoForm from './GeneralInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralSection from './GeneralSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';


const App = () => {
  const [generalInfoForm, setGeneralInfoForm] = useState("");
  const [generalInfoEdit, setGeneralInfoEdit] = useState(false);
  const [educationForm, setEducationForm] = useState([]);
  const [educationEdit, setEducationEdit] = useState(false);
  const [educationEntry, setEducationEntry] = useState(null);
  const [experienceForm, setExperienceForm] = useState([]);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [experienceEntry, setExperienceEntry] = useState(null);


  const editForm = () => {
    setGeneralInfoEdit(!generalInfoEdit);
  }

  const editEducationForm = (id) => {
    setEducationEdit(!educationEdit);
    setEducationEntry(id);
  }

  const editExperienceForm = (id) => {
    setExperienceEdit(!experienceEdit);
    setExperienceEntry(id);
  }

  const saveInputData = (obj) => {
    switch (obj.form) {
      case 'generalInfoForm':
        setGeneralInfoForm(obj);
        setGeneralInfoEdit(false);
        break;
      case 'educationForm':
        if (educationEdit) {
          setEducationForm(
            educationForm.map((item, index) => {
              if (index == educationEntry) {
                return obj;
              }
              return item;
            })
          )
          setEducationEdit(false);
          setEducationEntry(null);
        } else {
          setEducationForm(educationForm.concat(obj));
          setEducationEdit(false);
          setEducationEntry(null);
        }
        break;
      case 'experienceForm':
        if (experienceEdit) {
          setExperienceForm(
            experienceForm.map((item, index) => {
              if (index == experienceEntry) {
                return obj;
              }
              return item;
            })
          );
          setExperienceEdit(false);
          setExperienceEntry(null);
        } else {
          setExperienceForm(experienceForm.concat(obj));
          setExperienceEdit(false);
          //setExperienceEntry(null);
        }
        break;
    }
  }

  const deleteItem = (obj) => {
  switch (obj.form) {
      case 'educationForm':
        if (educationEdit) {
          setEducationForm(
            educationForm.filter((item, index) => {
              if (index != educationEntry) {
                return item;
              }
            })
          );
          setEducationEdit(false);
          setEducationEntry(null);
        }
        break;
      case 'experienceForm':
        if (experienceEdit) {
          setExperienceForm(
            experienceForm.filter((item, index) => {
              if (index != experienceEntry) {
                return item;
              }
            })
          );
          setExperienceEdit(false);
          setExperienceEntry(null);
        }
        break;
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="content">
        <div className='inputs'>
          {!generalInfoEdit && (
            <GeneralInfoForm
              saveInputData={saveInputData}
              isEditing={generalInfoEdit}
              infoToEdit={generalInfoForm}
            />
          )}
          {generalInfoEdit && (
            <GeneralInfoForm
              saveInputData={saveInputData}
              isEditing={generalInfoEdit}
              infoToEdit={generalInfoForm}
            />
          )}
          {!educationEdit && (
            <EducationForm
              saveInputData={saveInputData}
              isEditing={educationEdit}
              infoToEdit={educationForm[educationEntry]}
              deleteItem={deleteItem}
            />
          )}
          {educationEdit && (
            <EducationForm
              saveInputData={saveInputData}
              isEditing={educationEdit}
              infoToEdit={educationForm[educationEntry]}
              deleteItem={deleteItem}
            />
          )}
          {!experienceEdit && (
            <ExperienceForm
              saveInputData={saveInputData}
              isEditing={experienceEdit}
              infoToEdit={experienceForm[experienceEntry]}
              deleteItem={deleteItem}
            />
          )}
          {experienceEdit && (
            <ExperienceForm
              saveInputData={saveInputData}
              isEditing={experienceEdit}
              infoToEdit={experienceForm[experienceEntry]}
              deleteItem={deleteItem}
            />
          )}
        </div>
        <div className='cv'>
          <div className="generalcv-div">
            <GeneralSection
              props={generalInfoForm}
            />
            {generalInfoForm && (
              <button
                onClick={editForm}
                className='edit'
              >Edit</button>
            )}
          </div>
          <h2>Education</h2>
          <EducationSection
            infoArray={educationForm}
            editForm={editEducationForm}
          />
          <h2>Experience</h2>
          <ExperienceSection
            infoArray={experienceForm}
            editForm={editExperienceForm}
          />
        </div>
      </div>
    </div>
  )
}
export default App
