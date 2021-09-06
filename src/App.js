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
        <div className="container mx-auto">
          <p className="font-bold">NEWEST VIDESO</p>

          <div className="">
            <div className="design mt-3 cols-span-1 "></div>
          </div>
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

      <div></div>

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

      <div className="bg-gray-200 ">
        <div className="grid grid-cols-3 container mx-auto mt-8">
          <div className="mt-12">
            <p className="font-bold text-2xl">Deus</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque aut tempore illo aperiam explicabo iusto error accusamus
              doloribus dolores fugiat aspernatur repellendus nisi ratione,
              mollitia maxime quibusdam ad quasi.
            </p>
            <p className="mt-4">Contact us: deothemes.com</p>
            <FaFacebookF className="inline mt-4" />
            <FaTwitter className="ml-5 inline mt-4" />
            <FaInstagram className="ml-5 inline mt-4" />
            <FaGooglePlusG className="ml-5 inline mt-4" />
          </div>

          <div className="mb-6 ml-8">
            <p>TWITTER</p>

            <p className="mt-4 inline">
              <FaTwitter className="inline -ml-5 text-blue-700" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque aut tempore illo aperiam explicabo iusto error accusamus
              doloribus dolores fugiat aspernatur repellendus nisi ratione,
              mollitia maxime quibusdam ad quasi.
            </p>

            <p className="mt-4">
              {" "}
              <FaTwitter className="inline text-blue-700" />
              <p className="mt-4 inline ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt neque aut tempore illo aperiam explicabo iusto error
                accusamus doloribus dolores fugiat aspernatur repellendus nisi
                ratione, mollitia maxime quibusdam ad quasi.
              </p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              sit! Minima quasi modi perferendis optio pariatur beatae quibusdam
              quod necessitatibus amet vel, tempora dolor a quidem odio,
              recusandae ut impedit.
            </p>
            <p className="mt-4">POSTED ON FEB 27, 2018</p>
          </div>
          <div className="mb-6 ml-8">
            <p>CATEGORIES</p>

            <p>
              World <span className="float-right">5</span>{" "}
            </p>
            <p>
              Lifestyle <span className="float-right">7</span>{" "}
            </p>
            <p>
              Business <span className="float-right">5</span>{" "}
            </p>
            <p>
              Fashion <span className="float-right">10</span>{" "}
            </p>
            <p>
              Investment <span className="float-right">10</span>{" "}
            </p>
            <p>
              Technology <span className="float-right">7</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className =" text-center mt-8 mb-8">
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
    </div>
  );
}

export default App;
