import React,{useContext, useState} from "react";
import { userContext } from './../contexts/user-context';
function Login() {
  const [username,setUsername] = useState('');
  const {setCurrentUser} = useContext(userContext);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.length < 4){
      return alert('username can not be less than 4 characters');
    }
    setCurrentUser(username);
  }
  return (
    <div className="bg-sky-500/100 shadow-2xl w-1/2 mx-auto my-5 py-10">
        <h1 className="font-bold text-3xl text-center">LOGIN FORM</h1>
      <form className="px-20" >
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            onChange={(e) =>setUsername(e.target.value)}
            name="username"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your username"
          />
        </label>
        <button 
        onClick={handleSubmit}
        className="bg-black text-white rounded-full font-bold px-10 py-3 my-4 ">LOGIN <i className="fa fa-user"></i></button>
      </form>
    </div>
  );
}

export default Login;
