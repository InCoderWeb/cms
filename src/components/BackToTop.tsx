"use client";
import React from "react";
import { useWindowScroll } from "@mantine/hooks";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

const BackToTop = () => {
	const [scroll, scrollTo] = useWindowScroll();

	if (scroll.y >= 500) {
		return (
			<Button
				className="fixed bottom-8 right-8 size-12 text-xl bg-primary/50 text-white"
				onClick={() => scrollTo({ y: 0 })}
				title="Back to top"
			>
				<FaArrowUp />
			</Button>
		);
	}
};

export default BackToTop;
