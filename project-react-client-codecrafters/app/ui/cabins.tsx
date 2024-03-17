"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";

type CabinProp = {
  id: number;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
};

const Cabins = () => {
  const [cabins, setCabins] = useState<CabinProp[]>([]);

  useEffect(() => {
    const dummyCabins: CabinProp[] = [
      {
        id: 1,
        maxCapacity: 4,
        regularPrice: 200,
        discount: 10,
        image: "/cabin1.jpg",
        description: "Cozy Cabin 1",
      },
      {
        id: 2,
        maxCapacity: 6,
        regularPrice: 300,
        discount: 20,
        image: "/cabin2.jpg",
        description: "Rustic Cabin 2",
      },
      {
        id: 3,
        maxCapacity: 6,
        regularPrice: 300,
        discount: 20,
        image: "/cabin2.jpg",
        description: "Rustic Cabin 3",
      },
      {
        id: 4,
        maxCapacity: 6,
        regularPrice: 300,
        discount: 20,
        image: "/cabin2.jpg",
        description: "Rustic Cabin 4",
      },
    ];

    setCabins(dummyCabins);
  }, []);

  return (
    <>
      <p className="text-white font-extrabold tracking-tight font-mono text-2xl mb-8">
        Cabins
      </p>
      <form>
        <div
          className="bg-gray-900 w-96 my-4 ml-auto grid grid-cols-3 divide-x divide-gray-800 p-1 border-2 
        border-gray-800 rounded-lg"
        >
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-1 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer"
          >
            All
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-1 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer"
          >
            No discount
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-1 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer"
          >
            With discount
          </button>
        </div>
      </form>
      <table className="hidden min-w-full rounded-md text-gray-900 md:table table-auto border-collapse border-2 border-gray-900">
        <thead className="rounded-md bg-gray-900 text-left text-sm font-normal">
          <tr className="text-white font-mono text-base text-center">
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Cabin
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Description
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Capacity
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Price
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Discount
            </th>
            <th scope="col" className="px-4 py-5 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cabins.map((cabin) => (
            <tr className="border-2 border-gray-900 text-center" key={cabin.id}>
              <td className="border-2 border-gray-900 p-2">
                <Image
                  src={cabin.image}
                  alt={`${cabin.description}'s image`}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {cabin.description}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {cabin.maxCapacity}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {cabin.regularPrice}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {cabin.discount}
              </td>
              <td className="border-2 border-gray-900 p-2">
                <form className="flex flex-col gap-1 items-center">
                  <Link href={`/dashboard/cabins/${cabin.id}/edit`}>
                    <button
                      type="button"
                      className="w-12 h-12 py-1 text-center"
                    >
                      <RiEdit2Fill className="mx-auto text-2xl fill-white hover:fill-blue-700" />
                    </button>
                  </Link>
                  <button type="submit" className="w-12 h-12 py-1 text-center">
                    <MdDeleteForever className="mx-auto text-2xl fill-white hover:fill-red-500" />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="flex flex-col gap-4 items-center">
        <Link href={`/dashboard/cabins/add`} className="mt-10 mr-auto">
          <button
            type="submit"
            className="bg-blue-800 text-white font-mono text-sm font-semibold 
                  w-40 px-2 py-2 rounded text-center hover:bg-blue-700"
          >
            ADD NEW CABIN
          </button>
        </Link>
      </form>
    </>
  );
};

export default Cabins;
