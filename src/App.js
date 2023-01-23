import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GeneralPageLayout } from './Components/GeneralPageLayout/GeneralPageLayout';
import { Home } from './Components/Home/Home';


function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<GeneralPageLayout/>}>
                <Route index element={<h1>Home</h1>}/>
                <Route path='about-us' element={<h1>About us</h1>}/>
                <Route path='menu' element={<h1>Menu</h1>}/>
                <Route path='delivery' element={<h1>Delivery</h1>}/>
                <Route path='contacts' element={<h1>Contacts</h1>}/>   
            </Route>  
        </Routes>     
    </>
  );
}

export default App;
