import Link from "next/link";
import { Blogs } from "./api/route";

async function BlogList () {

  const blogs = await Blogs()
 
  return (
    <div className="min-h-screen  flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Viewer</h1>
      <ol className="w-3/4 list-decimal shadow-md rounded-lg p-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border-b  py-2 last:border-b-0">
            <Link href={`/post/${blog.id}`}>
             {blog.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default BlogList