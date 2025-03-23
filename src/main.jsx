import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostsDetails from "./components/PostsDetails/PostsDetails.jsx"; // Ensure PostsDetails is imported

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      {
        path: "user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts />,
      },
      {
        path: "posts/:postId", // Ensure the path matches the Link in Post component
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostsDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
