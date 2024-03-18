import Fristpage from "./pages/Fristpage"
import Twopage from "./pages/Twopage"
import RootLayout from "./Components/root/RootLayout";
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Fristpage/>}></Route>
    <Route path="/Twopage" element={<Twopage/>}></Route>

  </Route>
))




function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>

  

  )
}

export default App
