import React from "react";
import { cn } from "@/lib/utils";

type headingProps = {
	title: string,
	className?: string,
};

const Heading = ({ title, className }: headingProps) => {
	return (
		<>
			<h1 className={cn("my-2 text-xl capitalize", className)}>{title}</h1>
		</>
	);
};

export default Heading;
