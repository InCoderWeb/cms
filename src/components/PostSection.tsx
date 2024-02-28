import React from 'react'
import Post from './Post'
import { postData } from '@/lib/Constants'

const PostSection = () => {
  return (
    <>
        <section className="post-section py-[4rem] text-gray-900 h-screen grid container md:grid-cols-6 gap-4">
            <div className="PostCon sm:col-span-4 col-span-6">
                <div className="postWrapper py-6 grid md:grid-cols-2 gap-3">
                    {
                        postData.map((d, i) => {
                            return (
                                <Post key={i} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta dignissimos, cumque earum nihil asperiores cupiditate magnam aut, voluptate dicta fuga quidem labore odit accusantium laborum. Corporis molestias accusantium harum?" title={d.title} author={d.author} date={d.date} postImg={d.thumb} />
                            )
                        })
                    }
                </div>
            </div>
            <aside className="sidebar sm:col-span-2 col-span-6">sidebar</aside>
        </section>
    </>
  )
}

export default PostSection