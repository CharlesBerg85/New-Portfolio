import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          using System;
          <br/>
          using System.Collections.Generic;
          <br/>
          using System.Linq;
          <br/>
          using System.UnityEngine;
          </span>

        <Outlet />
        <span className="tags bottom-tags">
          void OnDestroy() &#123; 
          <br />
          <span className="bottom-tag-html">&#125;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
