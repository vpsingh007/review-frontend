import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupContext from '../components/context/popupContext';
// import {AppProps} from 'next/app';
import { useState } from 'react';
import { store } from "../redux/store";
import { Provider } from "react-redux";
// import Popup from '../components/shared/Popup';
import ModalPopup from '../components/shared/ModalPopup';

const MyApp = ({ Component, pageProps }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  return (
    <Provider store={store}>
      <PopupContext.Provider value={{ isPopupOpen, setIsPopupOpen, setPopupData }}>
        {isPopupOpen && <ModalPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} popupData={popupData} />}
        <Component {...pageProps} />
      </PopupContext.Provider>
    </Provider>

  );
}

export default MyApp;