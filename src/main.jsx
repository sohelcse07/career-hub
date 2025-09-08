import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';
import Root from './component/Root';
import Home from './component/home/Home';
import AppliedJobs from './component/appliedJobs/AppliedJobs';
import Jobs from './component/jobs/Jobs';
import Statistics from './component/statistics/Statistics';
import Blogs from './component/blogs/Blogs';
import ErrorPage from './component/errorPage/ErrorPage';
import JobDetails from './component/jobDetails/JobDetails';
const router = createBrowserRouter([
  { path: '/',
     element: <Root></Root>, 
     errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/jobs',
        element:<Jobs></Jobs>
      },
      {
        path: '/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
