import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Timeline from "../Pages/Timeline/Timeline";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FriendDetail from "../Pages/FriendDetail/FriendDetail";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/timeline",
        element: <Timeline/>
      },
      {
        path: "/friendDetail/:id",
        element: <FriendDetail/>,
        loader: () => fetch('/friendsdata.json')
      }
    ],
    errorElement: <ErrorPage/>

  }
])