import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "./Search";

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
            <Link to="/">
              <img
                className="h-14"
                src="https://i.pinimg.com/originals/f9/43/d6/f943d68aee696ba6f67df9c77709c6c9.jpg"
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
              <Link to="/products" className="lg:mr-7 mb-8 lg:mb-0">
                PRODUCTOS
              </Link>
              <Link to="" className="lg:mr-7 mb-8 lg:mb-0">
                LOCALES
              </Link>
              <Link to="" className="lg:mr-7 mb-8 lg:mb-0">
                PROMOS Y CUOTAS
              </Link>
              <Link to="">
                CONTACTO
              </Link>
            </div>
            <div className="flex  flex-row text-center  justify-center">
              <div>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
