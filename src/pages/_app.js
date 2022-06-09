import '../static/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupContext from '../components/context/popupContext';
import AppProps from 'next/app';
import { useState } from 'react';
import Popup from '../components/shared/Popup';
const MyApp = ({ Component, pageProps }, AppProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    heading: "Sample Heading1",
    formData: [{ fieldHeading: 'Email', fieldType: 'email' }, { fieldHeading: 'Name', fieldType: 'text' }]
  })
  return (
    <PopupContext.Provider value={{ isPopupOpen, setIsPopupOpen, setPopupData }}>
      {isPopupOpen && <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} popupData={popupData} />}
      <Component {...pageProps} />
    </PopupContext.Provider>

  );
}

export default MyApp;