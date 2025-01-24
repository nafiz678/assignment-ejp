import Link from "next/link";

async function BlogList() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await res.json();


  return (
    <div className="min-h-screen  flex flex-col items-center py-8">
      <h1 className="md:text-4xl text-3xl font-bold mb-6">Blogs to List</h1>
      <ol className="w-3/4 list-decimal shadow-md rounded-lg p-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border-b hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-lg shadow-white last:border-b-0 py-3 lg:hover:translate-x-10">
            <Link href={`/post/${blog.id}`} className="capitalize">
              {blog.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default BlogList