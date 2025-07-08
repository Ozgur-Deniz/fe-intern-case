import React from 'react'
import MainContent from '../pages/MainContent';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header'

function DashboardLayout() {
  return (
    <div className='flex h-'>
        <Sidebar></Sidebar>
        <div className='flex flex-2 flex-col items-start justify-center gap-10'>
            <Header></Header>
            <MainContent></MainContent>
        </div>
    </div>
  )
}

export default DashboardLayout