import React from 'react'
import SidebarHeader from './SidebarHeader'
import SearchInput from './SearchInput'
import SidebarTags from './SidebarTags'

function Sidebar() {
  return (
    <div className='w-[250px] max-md:w-[100px] bg-[#ffffff] dark:bg-[#00044a] flex flex-col items-center justify-start gap-5'>
        <SidebarHeader />
        <SearchInput />
        <SidebarTags />
    </div>
  )
}

export default Sidebar