import OurStory from '@/Components/About/About-1'
import AboutSec from '@/Components/About/About-3'
import Team from '@/Components/About/About-4'
import Speciality from '@/Components/HomePage/Speciality'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='space-y-12 md:px-12'>
      <div className='p-7 '>
      <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>About</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
               </div>
        <OurStory/>
        <AboutSec/>
        <Team/>
        <Speciality />
    </div>
  )
}
