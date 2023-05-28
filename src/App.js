import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routers/Routers';
import Footer from '../src/Pages/Home/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className=' mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
    </div>
   <Footer></Footer>
    </>
  );
}

export default App;
