import React from 'react'
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <div className="h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed flex flex-col justify-between p-[5rem] place-items-center ">
      <span className="text-white text-[10rem] font-bold">Book Store</span>
      <Link to="/books">
        <div className="h-[3rem] w-[10rem] bg-slate-200 rounded-3xl text-center py-1 text-2xl font-bold hover:scale-125 hover:bg-slate-300">
          Enter
        </div>
      </Link>
    </div>
  );
}

export default Start
