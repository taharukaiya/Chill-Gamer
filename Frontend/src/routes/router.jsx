import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AddReview from "../components/AddReview/AddReview";
import AllReviews from "../components/AllReviews/AllReviews";
import MyReviews from "../components/MyReviews/MyReviews";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import MyWatchlist from "../components/MyWatchlist/MyWatchlist";
import NotFound from "../components/NotFound/NotFound";
import AuthLayout from "../layout/AuthLayout";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "reviews",
        element: <AllReviews />,
      },
      {
        path: "review/:id",
        element: <ReviewDetails />,
      },
      {
        path: "addReview",
        element: (
          // <PrivateRoute>
          <AddReview />
          // </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          // <PrivateRoute>
          <MyReviews />
          // </PrivateRoute>
        ),
      },
      {
        path: "updateReview/:id",
        element: (
          // <PrivateRoute>
          <UpdateReview />
          // </PrivateRoute>
        ),
      },
      {
        path: "myWatchlist",
        element: (
          // <PrivateRoute>
          <MyWatchlist />
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
