import { Outlet , Link ,useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; 
import Footer from "./Footer/Footer";
import CourseAlert from "./CourseAlert";



const MasterLayout= ()=>{
return (
   <>
    <Navbar/>
    <main>
         <CourseAlert />  
        <Outlet/>
         
    </main>
    <Footer/>
    
   </>
)
}

export default MasterLayout;