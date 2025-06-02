
import './App.css'
import './index.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./routes/layout.jsx";
import Home from "./pages/Home.jsx";
import ViewBlogs from "./pages/ViewBlogs.jsx";
import AddBlog from "./pages/AddBlog.jsx";

function App() {


  return (
      <>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="AddBlog" element={<AddBlog/>}/>
                  <Route path="ViewBlogs" element={<ViewBlogs/>}/>
              </Route>
          </Routes>
      </>
  )
}

export default App
