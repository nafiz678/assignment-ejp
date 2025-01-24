import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { IoMenuOutline } from "react-icons/io5";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = async () => {

    const { getUser } = getKindeServerSession()

    const user = await getUser()


    return (
        <div className='md:px-20 px-4 py-10'>
            <div className='flex items-center justify-between gap-2'>
                <div>
                    <h1 className='md:text-3xl text-2xl '><Link href="/">RynesBlog</Link></h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center justify-center gap-6'>
                        <li>
                            <Link href={"/"}><Button className="rounded-xl underline-offset-4 hover:underline">Home</Button></Link>
                        </li>
                        <li>
                            <Link href={"/profile"}><Button className="rounded-xl underline-offset-4 hover:underline">Profile</Button></Link>
                        </li>
                        {user
                            ?
                            <li>
                                <Link href="/api/auth/logout"><Button variant="outline" size="lg" className="rounded-xl underline-offset-4 hover:underline">Logout</Button></Link>
                            </li>
                            :

                            <li>
                                <Link href="/api/auth/login"><Button variant="outline" size="lg" className="rounded-xl underline-offset-4 hover:underline">Login</Button></Link>
                            </li>
                        }
                    </ul>
                </div>
                <div className='md:hidden'>
                    <DropdownMenu  >
                        <DropdownMenuTrigger className="px-3 py-2 rounded-xl text-3xl">
                            <IoMenuOutline></IoMenuOutline>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link className='w-full' href={"/"}>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/profile"}>Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                {user
                                    ?
                                    <Link href="/api/auth/logout">Logout</Link>
                                    :
                                    <Link href="/api/auth/login">Login</Link>
                                }
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;