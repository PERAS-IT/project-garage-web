import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Router from "./routes"
import Modal from './components/Modal';


function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition:Bounce
      />
    </>
  )
}

export default App
