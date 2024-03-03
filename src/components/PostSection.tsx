import React from "react";
import Post from "./Post";
import { postData } from "@/lib/Constants";
import Sidebar from "./Sidebar";
import Heading from "./Heading";

const PostSection = ({ title }: { title: string }) => {
	return (
		<>
			<section className="post-section md:py-[3rem] !pb-2 text-gray-900 grid container md:grid-cols-6 gap-4">
				<div className="PostCon mb-[4rem] col-span-7 md:col-span-4">
					<div className="flex flex-col">
						<Heading
							title={title}
							className="text-lg sm:text-2xl md:text-3xl text-gray-300"
						/>
						<div className="postWrapper py-6 grid md:grid-cols-2 gap-3">
							{postData.map((d, i) => {
								return (
									<Post
										key={i}
										desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta dignissimos, cumque earum nihil asperiores cupiditate magnam aut, voluptate dicta fuga quidem labore odit accusantium laborum. Corporis molestias accusantium harum?"
										title={d.title}
										author={d.author}
										date={d.date}
										postImg={d.thumb}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="sidebarWraper w-full col-span-7 md:col-span-2">
					<Sidebar />
				</div>
			</section>
		</>
	);
};

export default PostSection;
