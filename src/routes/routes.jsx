import { HomePage } from "../HomePage";
import { BlogPage } from "../BlogPage";
import { BlogPost } from "../BlogPost";
import { NotFound } from "../NotFound";
import { ProfilePage } from "../ProfilePage";
import { LoginPage } from "../LoginPage";
import { LogoutPage } from "../LogoutPage";
import { AuthRoute } from "../auth";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    text: "Home",
    private: false,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    text: "Blog",
    private: false,
    children: [
      {
        path: ":slug",
        element: <BlogPost />,
        text: "BlogPost",
        private: false,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <AuthRoute>
        <ProfilePage />
      </AuthRoute>
    ),
    text: "Profile",
    private: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
    text: "Login",
    private: false,
    publicOnly: true,
  },
  {
    path: "/logout",
    element: (
      <AuthRoute>
        <LogoutPage />
      </AuthRoute>
    ),
    text: "Logout",
    private: true,
  },
  {
    path: "*",
    element: <NotFound />,
    // text: "NotFound",
  },
];
