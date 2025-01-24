import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


const Profile = async () => {
    const { getUser } = getKindeServerSession()

    const user = await getUser()
    console.log(user)

    return (
        <div className='flex items-center justify-center md:my-20 my-10 px-6'>
            <h1 className='lg:text-5xl md:text-4xl text-3xl'>Welcome to profile {user?.given_name + " " + user?.family_name}</h1>
        </div>
    );
};
export default Profile;