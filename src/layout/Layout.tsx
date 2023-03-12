
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = (props:any) => {

  const [showSidebar, setShowSideBar] = useState(true)

  return (
    <div className="in-wrap d-lg-flex">
      <Sidebar showSidebar={showSidebar} closeSideBar={() => setShowSideBar(true)} />
      <div className='in-content'>
        <div className='in-content__inwrap p-3'>
          <header className='in-header d-lg-flex justify-content-space-between align-items-center mb-3'>
            <div className='in-header__inwrap d-flex justify-content-space-between align-items-center mb-3 mb-lg-0'>
              <div className='d-flex align-items-center'><div className='in-header__title in-title__heading mr-1 flex-shrink-0'>Hello Moe</div> <span className='in-batch in-batch--premium'>premium</span></div>
              <span className='d-lg-none flex-shrink-0' onClick={() => setShowSideBar(false)}>
                <img src='./icons/menu.svg' />
              </span>
            </div>
            <div className='in-input__wrap position-relative in-header__right'>
              <span className='position-absolute h-100 d-flex align-items-center in-input__search-icon'><img src='./icons/search.svg' /></span>
              <input className='in-input in-input__search' placeholder='Search' type="search" />
            </div>
          </header>
          <main className='in-main'>
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout;