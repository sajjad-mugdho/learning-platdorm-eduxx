
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Courses/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ/FAQ';
import Blog from './Pages/Blog/Blog/Blog';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import PrivateRoute from './Routes/Routes/PrivateRoute';
import CheckOutRoute from './Routes/Routes/CheckOutRoute';
import Page404 from './Page404/Page404';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://eduxx-server.vercel.app/courses'),
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('https://eduxx-server.vercel.app/courses'),

        },
        {
          path: '/courses/:id',
          element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://eduxx-server.vercel.app/courses/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoute><CheckOutRoute></CheckOutRoute></PrivateRoute>,
          loader: ({ params }) => fetch(`https://eduxx-server.vercel.app/checkout/${params.id}`)
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },

      ],

    },
    {
      path: "*",
      element: <Page404></Page404>
    }
  ]);


  return (
    <div className='   bg-gradient-to-r from-green-100 via-blue-200 to-purple-300'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
