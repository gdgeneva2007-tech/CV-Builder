import { useState } from 'react';
import logo from './assets/logo.png';
import githublogo from './assets/github.png';
import { GeneralInfo } from './components/generalInfo';
import { EducationInfo } from './components/educationInfo';
import { ProfessionalInfo } from './components/professionalInfo';
import { CVviewer } from './components/CVviewer';
function App() {
  const [generalInfo, setgeneralInfo] = useState('');
  const [educationInfo, seteducationInfo] = useState('');
  const [professionalInfo, setprofessionalInfo] = useState('');
  return (
    <div className="grid h-screen w-full grid-cols-[1fr_2fr_3fr] gap-16 bg-gray-200 p-8">
      <div className="flex h-3/4 flex-col items-center justify-between bg-white p-4">
        <div className="flex flex-col items-center gap-5">
          <img className="h-auto w-24" src={logo}></img>
          <p className="text-center text-3xl">CV GENERATOR</p>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <p className="text-2xl">Geneva ©</p>
          <a href="https://github.com/gdgeneva2007-tech/CV-Builder">
            <img src={githublogo} className="h-auto w-6"></img>
          </a>
        </div>
      </div>
      <div className="flex max-h-screen flex-col gap-6 overflow-y-auto">
        <GeneralInfo
          updateInfo={setgeneralInfo}
          info={generalInfo}
        ></GeneralInfo>
        <EducationInfo
          updateInfo={seteducationInfo}
          info={educationInfo}
        ></EducationInfo>
        <ProfessionalInfo
          updateInfo={setprofessionalInfo}
          info={professionalInfo}
        ></ProfessionalInfo>
      </div>
      <div className="h-full bg-white">
        <CVviewer
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          professionalInfo={professionalInfo}
        ></CVviewer>
      </div>
    </div>
  );
}

export default App;
