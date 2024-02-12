import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Landing Page/Root";
import Home from "../Components/Landing Page/Home/Home";


export const  router= createBrowserRouter([
    {path:'/',element:<Root></Root>,
    children:[
        {path:'/',element:<Home></Home>}
    ]
}
])
