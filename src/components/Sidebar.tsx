import React from "react";
import {
    FaAngleLeft,
	FaAngleRight,
	FaDev,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import Post from "./Post";
import { postData } from "@/lib/Constants";

const Sidebar = () => {
	return (
		<>
			<aside className="sidebar w-full sticky top-8 md:px-6 space-y-8 mb-8">
				<div className="socialLinksWrapper sidebarWidget">
					<div className="WidgetHeader mb-3 text-xl">
						<div className="title flex items-center">Follow Me <FaAngleRight className="size-5"/></div>
					</div>
					<div className="links grid w-full md:grid-cols-2 gap-4">
						<div className="socialLink yt">
							<FaYoutube /> Youtube
						</div>
						<div className="socialLink fb">
							<FaFacebook /> FaceBook
						</div>
						<div className="socialLink insta">
							<FaInstagram /> Instagram
						</div>
						<div className="socialLink dev">
							<FaDev /> Dev.to
						</div>
						<div className="socialLink github">
							<FaGithub /> Github
						</div>
						<div className="socialLink wa">
							<FaWhatsapp /> Whatsapp
						</div>
					</div>
				</div>

                <div className="latestPostWidget sidebarWidget">
					<div className="WidgetHeader mb-3 text-xl">
						<div className="title flex items-center">Popular Post <FaAngleRight className="size-5"/></div>
					</div>
					<div className="space-y-6 flex flex-col pr-1">
                        {
                            postData.slice(0, 4).map((d, i) => {
                                return (
                                    <Post type="inline" postImg={d.thumb} title={d.title} date={d.date} key={i} />
                                )
                            })
                        }
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
