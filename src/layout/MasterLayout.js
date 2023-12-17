import React from 'react'
import Header from './succomponents/Header'
import Content from './succomponents/Content'
import Footer from './succomponents/Footer'

function MasterLayout() 
{
  return (
    <div className='app-admin-wrap'>
      {/* main-header */}
      <Header />

      {/* side-content */}
      <Content />

      {/* main-content */}
      <Footer />
    </div>
  )
}

export default MasterLayout