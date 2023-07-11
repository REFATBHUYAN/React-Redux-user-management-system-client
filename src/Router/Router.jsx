import React from 'react';
import MainLayout from '../Layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../Pages/AllUsers';
import CreateUser from '../Pages/CreateUser';
import ViewDetails from '../Pages/ViewDetails';
import EditUser from '../Pages/EditUser';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <AllUsers></AllUsers>
        },
        {
          path: "/create-user",
          element: <CreateUser></CreateUser>
        },
        {
          path: "/view-user/:id",
          element: <ViewDetails></ViewDetails>
        },
        {
          path: "/update-user/:id",
          element: <EditUser></EditUser>
        }
      ]
    },
  ]);

export default router;