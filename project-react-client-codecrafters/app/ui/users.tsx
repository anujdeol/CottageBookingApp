import React from 'react'

const Users = () => {
  return (
    <>
    <p className="text-white font-extrabold tracking-tight font-mono text-2xl">Create a user</p>
    <div className="bg-gray-900 w-4/5 p-16 mt-20 mx-auto rounded-md">
      <form className="flex flex-col">
        <div className="flex flex-row items-center mb-8 mt-4">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Name</label>
          <input type="text" name="name" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Email Address</label>
          <input type="email" name="email" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Password</label>
          <input type="password" name="password" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Repeat Password</label>
          <input type="password" name="rpassword" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex justify-center gap-4 w-auto ml-auto">
        <button type="submit" className="bg-blue-800 text-white font-mono text-sm font-semibold w-32 p-2 rounded-sm 
        text-center hover:bg-blue-700">
            CLEAR
          </button>
          <button type="submit" className="bg-blue-800 text-white font-mono text-sm font-semibold w-32 p-2 rounded-sm 
          text-center hover:bg-blue-700">
            CREATE
          </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default Users;