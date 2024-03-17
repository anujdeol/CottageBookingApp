'use client';
import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline, IoCalendarOutline } from "react-icons/io5";
import { MdOutlineCabin } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";


const navlinks = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: IoHomeOutline
    },
    {
        name: 'Bookings',
        href: '/dashboard/bookings',
        icon: IoCalendarOutline
    },
    {
        name: 'Cabins',
        href: '/dashboard/cabins',
        icon: MdOutlineCabin
    },
    {
        name: 'Users',
        href: '/dashboard/users',
        icon: RiUser6Line
    }
];

export default function SideNav(){
    return (
       <>
            <div className="h-screen text-base font-medium text-center bg-gray-900 w-42">
            <Image src="/logo.png" alt="logo" width="220" height="143"/>
                {navlinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                        <div className="flex flex-row gap-5 items-center p-5 mx-auto hover:bg-gray-700 text-white">
                            <span className="text-medium items-center"><link.icon /></span>
                            <p className="text-lg items-center font-medium font-mono cursor-pointer">{link.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            </>
    );
};

