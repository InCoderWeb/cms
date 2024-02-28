import React from "react";
import { GoDotFill } from "react-icons/go";

const Post = ({
	title = "",
	author = "",
	date = "",
	desc = "",
	postImg = "",
}) => {
	return (
		<>
			<div className="post border-[2px] text-white border-primary/40 transition-all scale-[.97] hover:scale-[1] hover:border-primary/80 w-full rounded-3xl p-3 overflow-hidden">
				<a href="#">
					<img
						src={postImg}
						alt={title}
						className="h-[18rem] object-cover w-full mb-4 rounded-3xl"
					/>
				</a>
				<div className="postData mx-2">
					<a href="#" className="title text-xl">
						{title}
					</a>
					<p className="text-sm text-gray-400 truncateDesc mt-2">
						{desc}
					</p>
					<div className="postDetails flex items-center mt-2 text-sm text-gray-400">
						<h3 className="author">
							by{" "}
							<a href="#" className="hover:text-white">
								{author}
							</a>
						</h3>
						<GoDotFill />
						<h3 className="date">
							<a href="#" className="hover:text-white">
								{date}
							</a>
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
