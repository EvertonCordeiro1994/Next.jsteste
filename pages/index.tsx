import React, { useState } from 'react';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSwitcher = () => {
  const [icon, setIcon] = useState(faEye); 
  const [passwordType, setPasswordType] = useState("password"); 
  
  const switchIcon = () => {
    setIcon(prevIcon => (prevIcon === faEyeSlash ? faEye : faEyeSlash));
   setPasswordType(prevPassword => (prevPassword === "password" ? "text" : "password"));
  };

  return (
    <div className='w-full'>
      <h1 className="text-center text-2xl mt-5 mb-5">Ocultar e mostrar senha</h1>
      
      <div className="container flex justify-center">
        <div className="p-4 w-4/5 border flex justify-around border-black rounded">
          <input id="input" placeholder="Digite sua senha" className="text-xl w-3/5" type={passwordType
         } />
          <button onClick={switchIcon}>
            <FontAwesomeIcon className='text-2xl' icon={icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <IconSwitcher />
    </div>
  );
}