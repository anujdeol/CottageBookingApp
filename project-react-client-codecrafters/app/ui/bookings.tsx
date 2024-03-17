import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";

type BookingProp = {
  id: number;
  cabin: string;
  guest: string;
  startDate: string;
  endDate: string;
  status: string;
  amount: number;
};

const Bookings = () => {
  const sampleBookings: BookingProp[] = [
    {
      id: 1,
      cabin: "Cabin A",
      guest: "John Doe",
      startDate: "2024-03-07",
      endDate: "2024-03-10",
      status: "Checked In",
      amount: 1000,
    },
    {
      id: 2,
      cabin: "Cabin B",
      guest: "Jane Smith",
      startDate: "2024-03-08",
      endDate: "2024-03-12",
      status: "Checked Out",
      amount: 15000,
    },
  ];

  return (
    <>
      <p className="text-white font-extrabold tracking-tight font-mono text-2xl mb-8">
        Bookings
      </p>
      <form>
        <div
          className="bg-gray-900 w-96 my-4 ml-auto grid grid-cols-4 divide-x divide-gray-800 p-1 border-2 
        border-gray-800 rounded-lg"
        >
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-2 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer tracking-tighter"
          >
            All
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-2 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer tracking-tighter"
          >
            Checked In
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-2 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer tracking-tighter"
          >
            Checked Out
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white font-mono font-light text-xs px-2 py-2
          rounded-sm text-center hover:bg-gray-700 cursor-pointer tracking-tighter"
          >
            Unconfirmed
          </button>
        </div>
      </form>
      <table className="min-w-full rounded-md text-gray-900 md:table table-auto border-collapse border-2 border-gray-900">
        <thead className="rounded-md bg-gray-900 text-left text-sm font-normal">
          <tr className="text-white font-mono text-base text-center">
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Cabin
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Guest
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Dates
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-4 py-5 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleBookings.map((booking) => (
            <tr className="border-2 border-gray-900 text-center" key={booking.id}>
              <td className="border-2 border-gray-900 text-white p-2">{booking.cabin}</td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {booking.guest}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {`${booking.startDate} - ${booking.endDate}`}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {booking.status}
              </td>
              <td className="border-2 border-gray-900 text-white font-mono text-xs p-2">
                {booking.amount}
              </td>
              <td className="border-2 border-gray-900 p-2">
                <form className="flex flex-col gap-1 items-center">
                  <button type="button" className="w-12 h-12 py-1 text-center">
                    <RiEdit2Fill className="mx-auto text-2xl fill-white hover:fill-blue-700" />
                  </button>
                  <button type="submit" className="w-12 h-12 py-1 text-center">
                    <MdDeleteForever className="mx-auto text-2xl fill-white hover:fill-red-500" />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Bookings;
