import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaGripLines,
} from "react-icons/fa";
import Navbarwhite from "./components/Navbarwhite";
import Twolargefoursmall from "./components/Twolargefoursmall";
import Smallboxes from "./components/Smallboxes";
import Smallcomponent from "./components/Smallcomponent";
import Rocket from "./components/Rocket";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Navbarwhite />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-1 mt-4">
          <div className="col-span-1">
            <Twolargefoursmall />
          </div>
          <div className="col-span-1">
            <Twolargefoursmall />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-1">
          <div className="col-span-1">
            <Smallboxes />
          </div>
          <div className="col-span-1">
            <Smallboxes />
          </div>
          <div className="col-span-1">
            <Smallboxes />
          </div>
          <div className="col-span-1">
            <Smallboxes />
          </div>
        </div>
  
        
      </div>
      <div className="bg-gray-200 h-auto mt-6">
        <div className = "container mx-auto">
        <p className = "font-bold">NEWEST VIDESO</p>


        <div className = "">
        <div className = "design mt-3 cols-span-1 "></div>
        </div>
        </div>
      </div>


      <div className = "container mx-auto mb-12 ">

        <div className = "">

       <div className = "font-bold mt-8 ml-6">Deliver Smart Website Faster</div>
       <div className = "text-gray-500 ml-6">728*90
       <button className = "text-white bg-black px-2 py-2 float-right">BUY IT</button></div>
       </div>
       
       
      </div>



    <div className = "border-t-4 container mx-auto mb-6"></div>

      

     <div>
       



       
     </div>








    <div>

    </div>




    <div className = "border-t-4 container mx-auto mb-6"></div>
    <div className = "container mx-auto">
      <p className = "font-bold mt-6 mb-6">FEATURED VIDEOS</p>
      <div className = "grid grid-cols-4 gap-2">
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
      </div>
    </div>




      
    </div>
  );
}

export default App;
