import {Button }from '@/Components/ui/button'
import React from 'react'

export default function Notfound() {
  return (
    <div className='bg-text min-h-screen flex flex-col gap-9 justify-center items-center'>
        <h1 className='text-bg font-bold text-7xl'>404 Not Found</h1>
        <p className='bg-text'>Your visited page not found. You may go home page.</p>
        <Button  className='bg-Secondary2  text-text'>Back to Home Page</Button>
    </div>
  )
}
