import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaGripLines,
  FaGooglePlusG,
} from "react-icons/fa";
import Navbarwhite from "./components/Navbarwhite";
import Twolargefoursmall from "./components/Twolargefoursmall";
import Smallboxes from "./components/Smallboxes";
import Smallcomponent from "./components/Smallcomponent";
import Rocket from "./components/Rocket";
import Smpic from "./components/Smpic";

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


      <div className = "bg-gray-200 py-2 mt-8">
          <p className = "font-bold mb-4 mt-4 container mx-auto">NEWEST VIDEOS</p>
          <div className = "">
            <div className = "design2 container mx-auto"></div>
          </div>
      </div>


      




      

      <div className="container mx-auto mb-12 ">
        <div className="">
          <div className="font-bold mt-8 ml-6">
            Deliver Smart Website Faster
          </div>
          <div className="text-gray-500 ml-6">
            728*90
            <button className="text-white bg-black px-2 py-2 float-right">
              BUY IT
            </button>
          </div>
        </div>
      </div>




      <div className="border-t-4 container mx-auto mb-6"></div>














    <div className = "container mx-auto">
      
      <p className = "font-bold  mb-4">POPULAR VIDEOS</p>
      <div className = "grid grid-cols-2">
     <div className = "">
    <div className = "design2"></div>
    <div className ="grid grid-cols-3">
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
    </div>
    <div className ="grid grid-cols-3">
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
      <div className = "col-span-1">
      <Smallcomponent />
      </div>
    </div>
    <button className = "border-2 text-center font-bold p-2 w-96 mt-6 ">Load More</button>
    </div>

    <div className = "">
      <div className = "border-2 p-3 h-auto w-auto">
        <p className = "font-bold">RECOMMENDED</p>
        <Smallcomponent  />
        <div className = "grid grid-cols-2">
          <div>
            <Smpic />
            <Smpic />
            <Smpic />
            <Smpic />
            <Smpic />
          </div>
          
        </div>
        
      </div>
     

    <div className = "flex justify-center mt-12">
      <div className = "cellphone"></div>
    </div>





    </div>
    </div>


    </div>



      
       






























      <div className="border-t-4 container mx-auto mt-12 mb-6"></div>
      <div className="container mx-auto">
        <p className="font-bold mt-6 mb-6">FEATURED VIDEOS</p>
        <div className="grid grid-cols-4 gap-2">
          <Rocket />
          <Rocket />
          <Rocket />
          <Rocket />
        </div>
      </div>

      <div className="bg-gray-200 py-2 mt-8">
        <div className="grid grid-cols-3 container mx-auto mt-8">
          <div className="mt-12">
            <p className="font-bold text-2xl">Deus</p>
            <p className="mt-4 text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque aut tempore illo aperiam explicabo iusto error accusamus.
            </p>
            <p className="mt-4 text-sm leading-6">Contact us: deothemes.com</p>
            <FaFacebookF className="inline mt-4" />
            <FaTwitter className="ml-5 inline mt-4" />
            <FaInstagram className="ml-5 inline mt-4" />
            <FaGooglePlusG className="ml-5 inline mt-4" />
          </div>

          <div className="mb-6 ml-8 text-sm">
            <p className = "mb-4">TWITTER</p>

            <p className="mt-4 inline text-sm">
              <FaTwitter className="inline -ml-5 text-blue-700" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque aut tempore illo aperiam explicabo iusto error accusamus
              doloribus dolores fugiat.
            </p>
            <p className="mt-4 text-xs">POSTED ON FEB 27, 2018</p>

            <p className="mt-4 text-sm">
              {" "}
              <FaTwitter className="inline text-blue-700" />
              <p className="mt-4 inline ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt neque aut tempore illo aperiam explicabo iusto error
                accusamus.
              </p>
              
             
            </p>
            <p className="mt-4 text-xs">POSTED ON FEB 27, 2018</p>
          </div>
          <div className="mb-6 ml-8">
            <p className = "text-sm mb-4">CATEGORIES</p>

            <p className = "text-sm leading-8">
              World <span className="float-right text-sm">5</span>{" "}
            </p>
            <p className = "text-sm leading-8">
              Lifestyle <span className="float-right text-sm">7</span>{" "}
            </p>
            <p className = "text-sm leading-8">
              Business <span className="float-right text-sm">5</span>{" "}
            </p>
            <p className = "text-sm leading-8">
              Fashion <span className="float-right text-sm">10</span>{" "}
            </p>
            <p className = "text-sm leading-8">
              Investment <span className="float-right text-sm">10</span>{" "}
            </p>
            <p className = "text-sm leading-8">
              Technology <span className="float-right text-sm">7</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className =" text-center mt-8 mb-4">
        <div className="container mx-auto">
          <ul>
            <li className="inline font-bold">
              <a href="#">NEWS</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">REVIEW</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">PS4</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">XBOX</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">PC/MAC</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">SWITCH</a>
            </li>
            <li className="inline font-bold ml-6">
              <a href="#">VIDEO</a>
            </li>
          </ul>
        </div>
      </div>

      <div className = "text-gray-500 text-center mb-4"> &copy; 2018 centre | made by deothemes.</div>
    </div>
  );
}

export default App;
