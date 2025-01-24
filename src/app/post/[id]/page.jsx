import Link from 'next/link';
import React from 'react';


const BlogDetails = async ({ params }) => {

    const id = (await params).id

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const specificBlog = await res.json();

    console.log(specificBlog)
    return (
        <div className="my-20 flex flex-col items-center justify-center p-6">
            <div className="w-full text-start max-w-3xl rounded-xl bg-[#111] shadow-lg shadow-[#2c2c2c] p-6">
                <Link href={"/"}>
                    <button
                        className="text-blue-500 hover:text-blue-700 font-medium mb-4"
                    >
                        &larr; Go Back
                    </button>
                </Link>
                <h1 className="text-3xl font-bold  mb-4 capitalize ">{specificBlog.title}</h1>
                <p className="text-gray-400 leading-relaxed">Description: {specificBlog.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;