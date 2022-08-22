import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/user-context";
function Header() {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const user = currentUser.substring(0,1).toUpperCase();
  // console.log(user);
  return (
    <div>
      <nav className="container relative mx-auto p-6 text-white bg-yellow-900">
        <div className="flex items-center justify-around">
          <div className="text-2xl font-bold">
            <h1>TODO APP</h1>
          </div>
          <div className="hidden md:flex space-x-7 text-white font-bold text-xl">
            <Link to="/" className="hover ">
              HOME
            </Link>
            <Link to="/todo/:id" className="hover">
              TODO
            </Link>
          </div>
          <div>
                <span className="px-3 mr-2 py-1 text-2xl font-bold rounded-full bg-black">
                  {user}
                </span>
                <button
                onClick={() =>setCurrentUser('')}
                 className="rounded-full font-bold text-xl">LOGOUT</button>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
