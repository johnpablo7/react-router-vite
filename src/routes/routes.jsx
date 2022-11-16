import { HomePage } from "../HomePage";
import { BlogPage } from "../BlogPage";
import { BlogPost } from "../BlogPost";
import { NotFound } from "../NotFound";
import { ProfilePage } from "../ProfilePage";
import { LoginPage } from "../LoginPage";
import { LogoutPage } from "../LogoutPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    text: "Home",
  },
  {
    path: "/blog",
    element: <BlogPage />,
    text: "Blog",
    children: [
      {
        path: ":slug",
        element: <BlogPost />,
        text: "BlogPost",
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    text: "Profile",
  },
  {
    path: "/login",
    element: <LoginPage />,
    text: "Login",
  },
  {
    path: "/logout",
    element: <LogoutPage />,
    text: "Logout",
  },
  {
    path: "*",
    element: <NotFound />,
    // text: "NotFound",
  },
];
