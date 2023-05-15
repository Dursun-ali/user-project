import './App.css';
import { Routes, Route,Link,NavLink, useParams,BrowserRouter } from "react-router-dom";
import AboutUs from './pages/AddUser';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import { UserProvider } from './context/AddUserContext';


function App() {



  return (
  <>
  <UserProvider>
    
  <Routes>
    <Route path="/" element ={<UserList />} ></Route>
    <Route path="/AddUser" element ={<AboutUs/>} ></Route>
    <Route path="UserDetails/:id" element ={<UserDetails/>} ></Route>
    <Route path="/EditUser" element ={<AboutUs/>} ></Route>
    

  </Routes>
  </UserProvider>

 </>
  )
}



export default App;
