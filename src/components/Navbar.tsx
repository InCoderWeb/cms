"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LuMenu, LuSearch } from "react-icons/lu";
import { menuLinks } from "@/lib/Constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<section className="container flex justify-between relative items-center w-[98%] h-[4rem] my-2">
				<aside className="flex justify-center items-center">
					<img
						src="./images/logo.png"
						alt="Logo"
						className="size-10 mr-2"
					/>
					<h1 className="text-2xl font-sans font-medium text-primary">
						InCoder
					</h1>
				</aside>

				<div className={`links absolute md:static w-[90%] md:w-fit top-[5rem] ${isOpen ? "block" : "hidden md:block"}`}>
					<ul className="flex md:space-x-6 w-full md:w-fit space-y-4 md:space-y-0 top-[2rem] justify-center items-center flex-col md:flex-row">
						{menuLinks.map((l) => {
							return (
								<a
									href={l.url}
                  key={l.text}
									className="inLink text-white/70 hover:text-white transition-colors"
								>
									<li>{l.text}</li>
								</a>
							);
						})}
					</ul>
				</div>
				<aside className="">
					<Button className="w-min hover:text-primary !bg-transparent text-white">
						<LuSearch className="size-6" />
					</Button>
					<Button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-min hover:text-primary !bg-transparent text-white">
						<LuMenu className="size-6" />
					</Button>
				</aside>
			</section>
		</>
	);
};

export default Navbar;
