import { BiMenu, BiSearchAlt } from "react-icons/bi";
import {Link} from 'react-router-dom'


export function NavBar() {
  const openMenu = () => {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <div>
      <nav className="bg-gray-100 py-0 relative mb-2">
        <div className="container mx-auto flex px-8 xl:px-0 ">
          <div className="flex flex-grow items-center">
            <Link to='/'>
              <img
                className="h-14"
                src="https://th.bing.com/th/id/OIP.hN-jexmyOZkZ2mr0nuwAHgAAAA?pid=ImgDet&rs=1"
                alt=""
              />
            </Link>
          </div>
          <button onClick={openMenu}>
            <BiMenu className="flex lg:hidden items-center" />
          </button>

          <div
            id="menu"
            className="lg:flex lg:relative lg:top-0 hidden flex-grow justify-between absolute top-20 left-0 bg-gray-100 w-full items-center py-14 lg-py-0 px-8 rounded-2xl"
          >
            <div className="flex flex-col lg:flex-row mb-8 lg:mb-0 items-center">
              <a href="" className="lg:mr-7 mb-8 lg:mb-0">
                PRODUCTOS
              </a>
              <a href="" className="lg:mr-7 mb-8 lg:mb-0">
                LOCALES
              </a>
              <a href="" className="lg:mr-7 mb-8 lg:mb-0">
                PROMOS Y CUOTAS
              </a>
              <a href="" className="">
                CONTACTO
              </a>
            </div>
            <div className="flex flex-col lg:flex-row text-center ">
              <a
                href=""
                className="text-black border border-black py-2.5 px-5 rounded-md hover:bg-gray-300 hover:text-black hover:border-black transition duration-500 ease-in-out lg:mr-4 mb-4 lg:mb-0"
              >
                <BiSearchAlt />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
