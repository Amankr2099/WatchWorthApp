import { MoviePage } from "./pages/MoviePage"
import {Layout} from "./pages/Layout"

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Home } from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"
import { SearchPage } from "./pages/SearchPage"


export const App = ()=> {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>} />
        <Route path="/search/:movieName" element={<SearchPage/>} />
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    )
  ) 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
