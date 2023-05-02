import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage';
import FileDetailPage from './pages/FileDetailPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />
  },
  ,
  {
    path: '/:fileId',
    element: <FileDetailPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
