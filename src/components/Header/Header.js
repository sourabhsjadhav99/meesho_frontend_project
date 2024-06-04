import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { useAuth } from '../signup/AuthContext';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  // const [  isuseLoginsucess, setisuseLoginsucess] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {loginnumber} = useAuth(); 




  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const location = useLocation();
  console.log(location.pathname === "/signup");
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto ">
        <div className="relative flex items-center gap-5 h-16">
          <div className="flex items-center justify-between">
            <img
              className="h-8 w-auto"
              src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
              alt="Messo Logo"
            />
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="w-full px-4 py-2 border-neutral-950	 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="demo"
              className="text-gray-500 hover:text-gray-900 border-r-2 border-r-gray-400 pr-3 flex"
            >
              <svg
                viewBox="0 0 16 24"
                xmlns="http://www.w3.org/2000/svg"
                // mr="8"
                class="sc-pyfCe leNxcK hover"
                iconSize="20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z"
                  fill="#333"
                ></path>
              </svg>{" "}
              <span> Download App</span>
            </a>
            <a
              href="demo"
              className="text-gray-500 hover:text-gray-900 border-r-2 border-r-gray-400 pr-3"
            >
              Become a Supplier
            </a>
            <a
              href="demo"
              className="text-gray-500 hover:text-gray-900 border-r-2 border-r-gray-400 pr-3"
            >
              Newsroom
            </a>
            {location.pathname === "/" && <><div
              className="text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-pyfCe leNxcK hover"
                mr="8"
                iconSize="20"
              >
                <g clip-path="url(#user_svg__a)">
                  <path
                    d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0 0 12 2.4a5.835 5.835 0 0 0-5.832 5.832 5.79 5.79 0 0 0 2.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354ZM7.853 8.232a4.148 4.148 0 0 1 8.294 0 4.148 4.148 0 0 1-8.294 0Zm13.122 14.083H3.025a.245.245 0 0 1-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 0 1-.14.032Z"
                    fill="#333"
                  ></path>
                </g>
                <defs>
                  <clipPath id="user_svg__a">
                    <path
                      fill="#fff"
                      transform="translate(1.2 2.4)"
                      d="M0 0h21.6v21.6H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <div onMouseLeave={handleMouseLeave} className="relative">
                <span onMouseEnter={() => handleMouseEnter("Profile")}>
                  {" "}
                  Profile
                </span>
                {hoveredItem === "Profile" && (
                  <div className="absolute  w-[250px] right-[-120px] bg-white shadow-lg rounded-lg py-2">
                    <div className="px-4 py-2 text-gray-800 border-b">
                      <p className=" font-semibold text-xl">Hello User</p>
                      {isLoggedIn?<p>{loginnumber}</p>:<p className="text-[12px]">
                        To access your Meesho account
                      </p>}
                    </div>
                   
                    
                  { isLoggedIn ?<Link to="/" className="text-lg rounded-md	 block px-4 mx-4 py-2 text-white font-bold bg-purple-700 text-center"  onClick={handleLogout}>Logout</Link>
                  :<Link to="/signup"
                      href="demo"
                      className="text-lg rounded-md	 block px-4 mx-4 py-2 text-white font-bold bg-purple-700 text-center"
                    >
                  Sign Up</Link>}    
                    
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Orders
                    </a>
                  </div>
                )}
              </div>
            </div>
            <a
              href="demo"
              className="text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                mr="8"
                class="sc-pyfCe hSGtBS hover"
                stroke="greyBase"
                iconSize="20"
              >
                <path
                  d="m4.987 5.469 1.848 7.2a1 1 0 0 0 .968.752h8.675a1 1 0 0 0 .962-.726l1.697-5.952a1 1 0 0 0-.962-1.274H4.987Zm0 0-.943-3.248a1 1 0 0 0-.96-.721H1"
                  stroke="#666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <ellipse
                  cx="9.421"
                  cy="16.744"
                  rx="1.243"
                  ry="1.256"
                  stroke="#666"
                  stroke-width="1.5"
                ></ellipse>
                <ellipse
                  cx="15.221"
                  cy="16.744"
                  rx="1.243"
                  ry="1.256"
                  stroke="#666"
                  stroke-width="1.5"
                ></ellipse>
              </svg>
              <span> Cart</span>
            </a> </>}
          </div>
        </div>
      </div>
      {location.pathname === "/" && <div className="border h-[52px] my-auto">
        <div className=" max-w-7xl mx-auto">
          <div className="flex py-2  items-center justify-between">
            <a
              href="demo"
              className="text-gray-700 hover:text-gray-900"

              //   onMouseLeave={handleMouseLeave}
            >
              <span onMouseEnter={() => handleMouseEnter("Women Ethnic")}>
                {" "}
                Women Ethnic
              </span>

              {hoveredItem === "Women Ethnic" && (
                <div
                  className="absolute mt-2 w-[83%] bg-white shadow-lg rounded-lg flex"
                  //      onMouseEnter={() => handleMouseEnter("Women Ethnic")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown items for Women Ethnic */}
                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">
                      All Women Ethnic
                    </p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      View All
                    </a>
                  </div>

                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">Sarees</p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Silk Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Silk Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Georgette Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Chiffon Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Satin Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Embroidered Sarees
                    </a>
                  </div>

                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">Kurtis</p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Anarkali Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Rayon Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Embroidered Kurtis
                    </a>
                  </div>
                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold	">
                      {" "}
                      Kurta Sets
                    </p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Kurta Sets
                    </a>
                  </div>

                  {/* Add more items as needed */}
                </div>
              )}
              {hoveredItem === "Women Western" && (
                <div
                  className="absolute mt-2 w-[83%] bg-white shadow-lg rounded-lg flex"
                  //      onMouseEnter={() => handleMouseEnter("Women Ethnic")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown items for Women Ethnic */}
                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">Topwear</p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Tops
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Dresses
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sweaters
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Jumpsuits
                    </a>
                  </div>

                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">Sarees</p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Silk Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Silk Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Georgette Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Chiffon Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Satin Sarees
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Embroidered Sarees
                    </a>
                  </div>

                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold">Kurtis</p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Anarkali Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Rayon Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Cotton Kurtis
                    </a>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Embroidered Kurtis
                    </a>
                  </div>
                  <div>
                    <p className="text-fuchsia-800 px-3 font-bold	">
                      {" "}
                      Kurta Sets
                    </p>
                    <a
                      href="demo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      All Kurta Sets
                    </a>
                  </div>

                  {/* Add more items as needed */}
                </div>
              )}
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              <span onMouseEnter={() => handleMouseEnter("Women Western")}>
                {" "}
                Women Western
              </span>
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Men
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Kids
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Home & Kitchen
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Beauty & Health
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Jewellery & Accessories
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Bags & Footwear
            </a>
            <a href="demo" className="text-gray-700 hover:text-gray-900">
              Electronics
            </a>
          </div>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;
