import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

export const BlogPage = () => {
  return (
    <>
      <h1>Blog Page</h1>

      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};
