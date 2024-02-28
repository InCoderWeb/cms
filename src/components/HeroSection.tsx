"use client"
import { postData } from '@/lib/Constants'
import React from 'react'
import { GoDotFill } from "react-icons/go";

const HeroSection = () => {
  return (
    <>
        <section className="latestPosts container my-6">
            <div className="w-full grid md:h-[40rem] gap-4 md:grid-cols-4 grid-rows-4">
                {
                    postData.map((d, i) => {
                        return <>
                            <div className={`latestPost ${i == 0 ? "md:col-span-2 md:row-span-4" : i == 1 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-2" }`}>
                                <img src={d.thumb} alt={d.title} className='h-full w-full' />
                                <div className={`postData z-[99999] absolute bottom-[1rem] text- px-6`}>
                                    <a href='#' className="hover:text-primary title text-2xl font-semibold md:text-3xl">{d.title}</a>
                                    <div className="postDetails flex items-center mt-2 text-gray-400">
                                        <h3 className="author">by <a href='#' className='hover:text-white'>{d.author}</a></h3>
                                        <GoDotFill />
                                        <h3 className="date"><a href='#' className='hover:text-white'>{d.date}</a></h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default HeroSection