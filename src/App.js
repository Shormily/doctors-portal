import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routers/Routers';
import Footer from '../src/Pages/Home/Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { MdKeyboardArrowUp } from "react-icons/md";

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className=' mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
    </div>
   {/* <Footer> </Footer> */}
   <ScrollToTop 
   style={{
    boxShadow: "none",
    backgroundColor: "#38bdf8",
    borderRadius: "50%",
    right: 50,
    zIndex: 20,
  }}
  component={
    <MdKeyboardArrowUp
      style={{ fontSize: "20px", margin: "0 auto", color: "" }}
    />
  }
   smooth
   top={500} />
    </>
  );
}

export default App;
