import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils";

function Nav() {
  return (
    <nav className="z-10 bg-white shadow-md w-56 fixed flex flex-col justify-between top-0 left-0 bottom-0">
      <Link
        to={"/private/declarations"}
        className="bg-blue-700 text-white uppercase text-center py-5 font-extrabold text-xl"
      >
        les nouvelles vies
      </Link>
      <ul>
        {NAV_LINKS.map(({ to, label }, index) => (
          <li
            key={`navlink-${index}`}
            className={`border-b border-gray-300 ${
              index === 0 ? "border-t" : null
            }`}
          >
            <Link to={to} className="py-2 pl-2 hover:bg-gray-100 block">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => null}
        className="bg-red-700 text-white hover:text-red-700 py-2 font-normal hover:border hover:border-red-700 hover:bg-white"
      >
        Déconnexion
      </button>
    </nav>
  );
}

export default Nav;
