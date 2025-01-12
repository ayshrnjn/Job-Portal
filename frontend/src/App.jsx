import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";



const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/jobs",
    element: <Jobs />

  },
  {
    path: "/description/:id",
    element: <JobDescription/>

  },

  {
    path: "/browse",
    element: <Browse />

  },
  {
    path: "/profile",
    element: <Profile />

  },
 // admin ke liye

  {
    path:"/admin/companies",
    element:<Companies/>
  },


  {
    path:"/admin/companies/create",
    element:<CompanySetup/>
  },


  {
    path:"/admin/companies/:id",
    element:<CompanyCreate/>
  }






])



function App() {


  return (



    <div>
      <RouterProvider router={appRouter} />
    </div>


  )
}

export default App
