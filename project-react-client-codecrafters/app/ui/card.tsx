import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BsCalendar2Date,
  BsBarChartFill,
  BsCalendarCheck,
  BsCurrencyDollar,
} from "react-icons/bs";

type CardProp = {
  title: string;
  value: number;
  image: React.ElementType;
};

const Card: React.FC = () => {
  const [stats, setStats] = useState<CardProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stat");
        const data = response.data;

        const cardData: CardProp[] = [
          {
            title: "Bookings",
            value: data.totalBookings,
            image: BsCalendar2Date,
          },
          {
            title: "Sales",
            value: data.totalSales,
            image: BsCurrencyDollar,
          },
          {
            title: "Check-Ins",
            value: data.checkIns,
            image: BsCalendarCheck,
          },
          {
            title: "Occupancy Rate(%)",
            value: data.occupancyRate,
            image: BsBarChartFill,
          },
        ];

        setStats(cardData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row items-center gap-5">
      {stats.map((data, index) => (
        <div
          className="w-72 p-5 bg-gray-900 mt-10 flex items-center gap-4 ring-1 ring-gray-800 rounded-md"
          key={index}
        >
          <div className="rounded-full bg-green-700 px-4 py-4">
            <data.image className="text-3xl text-gray-100" />
          </div>
          <div>
            <p className="font-medium text-neutral-300 text-sm tracking-tighter font-mono">
              {data.title}
            </p>
            <p className="font-semibold text-neutral-100 text-3xl font-mono">
              {data.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
