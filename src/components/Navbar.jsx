import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {

    const { getUser } = getKindeServerSession()

    const user = await getUser()

    console.log(user);
    return (
        <div className='px-20 py-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl'>RynesBlog</h1>
                </div>
                <div>
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
            </div>
        </div>
    );
};

export default Navbar;