import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Landing Page/Root";
import Home from "../Components/Landing Page/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";


export const  router= createBrowserRouter([
    {path:'/',element:<Root></Root>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/dashboard',element:<Dashboard></Dashboard>},
        {path:'/login',element:<Home></Home>},
        {path:'/register',element:<Home></Home>},
    ]
}
])
