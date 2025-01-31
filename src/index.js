import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './views/detail/detail';
import Add from './views/add/add';
import Update from './views/Edit/Edit';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
  ,{
    path:"/detail/:Rollno",
    element:<Details/>
  }
  ,{
    path:"/edit/:Rollno",
    element:<Update/>
  },
  {
    path:"/add",
    element:<Add/>
  }
])
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

