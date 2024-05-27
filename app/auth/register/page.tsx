"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";

import { EyeFilledIcon } from "../ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/icons/EyeSlashFilledIcon";
import { UserIcon } from "../ui/icons/UserIcon";


export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConf, setIsVisibleConf] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityConf = () => setIsVisibleConf(!isVisibleConf);

  return (
    <div className="m-4">
      <Link href="/" className="text-2xl uppercase font-bold tracking-wider"> ImageHub </Link>
      <div className="flex flex-col gap-2 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-3xl mx-auto">Register</p>
              <br></br>
              <p className="text-small text-default-500 mx-auto">Fill the fields to create an account in the best images app</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="w-full flex flex col gap-4">
              <Input
                className="my-3"
                size="sm"
                labelPlacement="inside"
                type="firstname"
                label="First Name"
                errorMessage="Please enter a valid name" />
              <Input
                className="my-3"
                size="sm"
                labelPlacement="inside"
                type="lastname"
                label="Last Name"
                errorMessage="Please enter a valid name" />
            </div>
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="username"
              label="Username"
              errorMessage="Please enter a valid Username" />
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="email"
              label="Email"
              errorMessage="Please enter a valid Email" />
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              label="Password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              errorMessage="Please enter a valid Password"
            />
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              label="Confirm Password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibilityConf}>
                  {isVisibleConf ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisibleConf ? "text" : "password"}
              errorMessage="Please enter a valid Password"
            />
            <Button color="primary"
              size="md"
              variant="ghost"
              endContent={<UserIcon />}
              onPress={() => 1}
              isLoading={isLoading}
            >
              Sign up
            </Button>
          </CardBody>
          <Divider />
          <CardFooter >
            <p className="mx-auto text-gray-400 text-small">Already have an account?<Link href="/auth/login" className="text-blue-500 mx-auto"> Login here </Link></p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}