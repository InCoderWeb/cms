"use client"
import Heading from '@/components/Heading';
import PostSection from '@/components/PostSection';
import React from 'react'

const Page = ({ params }: { params: { searchParam: string } }) => {  
  return (
    <>
        <main className='container text-gray-300'>
          <PostSection title={`Search Results for "${params.searchParam.toUpperCase()}"`} />
        </main>
    </>
  )
}

export default Page