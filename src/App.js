
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Courses/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ/FAQ';
import Blog from './Pages/Blog/Blog/Blog';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Course from './Shared/Course/Course';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/courses'),
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses'),

        },
        {
          path: '/courses/:id',
          element: <Courses></Courses>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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

      ]

    }
  ]);


  return (
    <div className=' bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 bg-fixed ' >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
