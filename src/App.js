import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import Profile from './Components/Profile';
import Signin from './Components/Signin';
import {Route,Routes,Navigate} from "react-router-dom";
import Signup from './Components/Signup';
import Blank from './Components/Blank';
import Buttons from './Components/Buttons';
import Forms from './Components/Forms';
import Cards from './Components/Cards';
import Typo from './Components/Typo';
import Icons from './Components/Icons';
import Charts from './Components/Charts';
import Maps from './Components/Maps';
import Upgrade from './Components/Upgrade';



function App() {
  return (
    <>
    <div className='wrapper'>
      <Sidebar></Sidebar>
      
      <div className="main">
<Navbar></Navbar>
<main className="content">
<Routes>
<Route path='/' element={<Dashboard></Dashboard>} />
<Route path='/Profile' element={<Profile></Profile>} />
<Route path='/Profile' element={<Profile></Profile>} />
<Route path='/Signin' element={<Signin></Signin>} />
<Route path='/Signup' element={<Signup></Signup>} />
<Route path='/Blank' element={<Blank></Blank>} />
<Route path='/Buttons' element={<Buttons></Buttons>} />
<Route path='/Forms' element={<Forms></Forms>} />
<Route path='/Cards' element={<Cards></Cards>} />
<Route path='/Typo' element={<Typo></Typo>} />
<Route path='/Icons' element={<Icons></Icons>} />
<Route path='/Charts' element={<Charts></Charts>} />
<Route path='/Maps' element={<Maps></Maps>} />
<Route path='/Upgrade' element={<Upgrade></Upgrade>} />



</Routes>


      </main>
 
      
      
      <footer className="footer">
        <Footer></Footer>
      </footer>
      </div>
      </div>
    </>
    
  );
}

export default App;
