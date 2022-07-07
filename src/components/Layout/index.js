import "./index.scss"
import React from 'react'
import Sidebar from "../sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
       <Sidebar />
       <div className="page">
         <span className="tags top-tags">&lt;body&gt;</span>
          <Outlet />
         <span className="tags bottom-tags">&lt;/body&gt;</span>
       </div>
    </div>
  )
}
