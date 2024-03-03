"use client"
import React from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/schemas/index";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

	return (
		<>
			<div className="formWrapper border p-3 rounded-xl min-w-full text-center px-6 md:min-w-[25rem]">
				<div className="brandDetails w-full flex justify-center items-center mt-4">
					<img
						src="/images/logo.png"
						alt="Logo"
						className="size-[3rem]"
					/>
					<h1 className="text-gray-300 font-bold text-3xl ml-2">
						InCoder
					</h1>
				</div>
				<h2 className="text-xl text-gray-400 my-2">Welcome Back!</h2>
				<Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
            <div className="space-y-4 !text-left">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" id="email" {...field} placeholder="jhon@example.com" className="h-[2.8rem]" />
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type="password" id="password" {...field} placeholder="********" className="h-[2.8rem]" />
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full h-[2.8rem]">Login</Button>
          </form>
        </Form>
        <hr className="mt-4" />
				<div className="my-3">
          <div className="flex flex-col space-y-2 my-2">
            <Button className="socialAuthBtn !bg-[#ea4335]/60"><FaGoogle/>&nbsp;Continue With Google</Button>
            <Button className="socialAuthBtn !bg-[#1877f2]/60"><FaFacebook/>&nbsp;Continue With Facebook</Button>
          </div>
					<p className="text-gray-400">
						Don’t have an account?
						<a
							href="#"
							className="font-semibold hover:underline hover:text-gray-300 cursor-pointer ml-1"
						>
							Sign Up
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
