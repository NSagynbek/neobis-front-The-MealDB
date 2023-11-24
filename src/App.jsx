
import{
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider

} from "react-router-dom";

//Layouts
import RootLayout from "./layouts/RootLayout";

//Pages
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}> 

         <Route path="/" element={<Home/>}/>
         <Route path=":id" element={<MealDetails/>}/>
         


    </Route>

  )

)

function App() {

return(
  <RouterProvider router={router}/>
)

}

export default App
