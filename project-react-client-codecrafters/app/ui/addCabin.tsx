import React from 'react'
import Link from 'next/link';

const AddCabinForm = () => {
  return (
    <>
    <p className="text-white font-extrabold tracking-tight font-mono text-2xl">Add a new cabin</p>
    <div className="bg-gray-900 w-4/5 p-16 mt-20 mx-auto rounded-md">
      <form className="flex flex-col">
        <div className="flex flex-row items-center mb-8 mt-4">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Cabin image</label>
          <input type='file' name="image" className='text-white ml-12'></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Description</label>
          <input type="text" name="description" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Capacity</label>
          <input type="text" name="capacity" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Price</label>
          <input type="text" name="price" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex flex-row items-center mb-8">
          <label className="text-white text-bold font-mono text-base flex-none w-1/5">Discount</label>
          <input type="text" name="discount" className="ml-12 flex-grow bg-gray-700 rounded-sm ring-1 ring-gray-600 h-8 text-white p-2"></input>
        </div>
        <div className="flex justify-center gap-4 w-auto ml-auto">
        <button type="submit" className="bg-blue-800 text-white font-mono text-sm font-semibold w-32 p-2 rounded-sm 
        text-center hover:bg-blue-700 cursor-pointer"><Link href="/dashboard/cabins">CANCEL</Link>
        </button>
        <button type="submit" className="bg-blue-800 text-white font-mono text-sm font-semibold w-32 p-2 rounded-sm 
        text-center hover:bg-blue-700 cursor-pointer">
        ADD
        </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default AddCabinForm;