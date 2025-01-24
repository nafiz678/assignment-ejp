import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';


const Profile = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession()

    if (!(await isAuthenticated())) {
        redirect('/api/auth/login')
    }

    const user = await getUser()

    if(!user){
        return (
            <h1 className='text-5xl'>Please login first</h1>
        )
    }


    return (
        <div className='flex items-center justify-center md:my-20 my-10 px-6'>
            <h1 className='lg:text-5xl md:text-4xl text-3xl'>Welcome to your profile {user.given_name + " " + user.family_name}</h1>
        </div>

    );
};
export default Profile;