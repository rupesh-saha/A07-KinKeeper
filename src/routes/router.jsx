import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Timeline from "../Pages/Timeline/Timeline";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
    ],
    errorElement: <ErrorPage/>

  }
])