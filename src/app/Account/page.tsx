import AccountPage from '@/Components/AccountPage/AccountPage'
import AccountSidebar from '@/Components/AccountSideBar/AccountSideBar'
import React from 'react'

export default function AccounPage() {
  return (
    <div className='flex gap-7 p-7'>
       <AccountSidebar/> 
      <AccountPage/>  
        
    </div>
  )
}
