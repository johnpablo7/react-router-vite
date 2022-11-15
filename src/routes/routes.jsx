import { BlogPage } from "../BlogPage";
import { HomePage } from "../HomePage";
import { ProfilePage } from "../ProfilePage";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
    text: "Home",
  },
  {
    id: 2,
    path: "/blog",
    element: <BlogPage />,
    text: "Blog",
  },
  {
    id: 3,
    path: "/profile",
    element: <ProfilePage />,
    text: "Profile",
  },
];
