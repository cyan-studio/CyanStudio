import { NavExpanded } from "./NavExpanded";
import { useState } from "react";
import { Link } from "react-router-dom";
//Added Link

export const NavBar = () => {
  let [Nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((Nav) => !Nav);
  };

  return (
    <div className=" h-auto ">
      <nav>
        <ul
          className=" mx-5 flex h-10 flex-row items-center
       gap-10 font-mSubrayada text-base md:mx-10  md:text-lg"
        >
          <li>
            <Link to="/" className="cursor-pointer hover:text-hcyan">
              Home
            </Link>
          </li>
          <li>
            <div
              className="cursor-pointer hover:text-hcyan"
              onClick={handleClick}
            >
              Services
            </div>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer hover:text-hcyan">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <NavExpanded expanded={Nav} />
    </div>
  );
};
