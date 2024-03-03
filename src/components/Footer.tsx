import React from "react";

const Footer = () => {
	return (
		<footer className="border-t-2 h-[4rem] ">
			<div className="container flex items-center justify-center md:justify-between flex-wrap">
				<div className="py-4 px-5 flex">
					<p className="text-gray-300 text-sm text-center sm:text-left">
						©2024 InCoder —
						<a
							href="https://instagram.com/incoderweb"
							rel="noopener noreferrer"
							className="text-gray-500 ml-1"
							target="_blank"
						>
							@incoderweb
						</a>
					</p>
				</div>
				<div className="flex flex-wrap justify-center mb-4 md:mb-0 mr-3 items-center text-sm space-x-3 transition-all">
					<a href="#" className="text-gray-400 hover:text-gray-100">
						Terms and conditions
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-100">
						Privacy Policy
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-100">
						Contact Us
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-100">
						disclaimer
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
