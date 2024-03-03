import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In | InCoderWeb",
	description: "Generated by create next app",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>
        <div className="container grid place-items-center mx-auto h-screen w-screen">
			{children}
        </div>
    </>;
}