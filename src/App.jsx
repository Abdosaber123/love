import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './component/Home.jsx'
import Memories from './component/Memories.jsx'
import Video from './component/Video.jsx'


function App() {
 const router = createBrowserRouter([
  {path:"/" , element: <Layout /> , children: [
    {index:true , element:<Home />},
    {path:"/memories" , element:<Memories />},
    {path:"/love" , element:<Video />},
  ]}
 ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
