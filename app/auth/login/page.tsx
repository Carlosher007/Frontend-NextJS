"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { UserIcon } from "./UserIcon";
import { set } from "zod";

export default function Page() {
  const addUser = useUserStore(state => state.addUser);
  const removeUser = useUserStore(state => state.removeUser);
  const id = useUserStore(state => state.idUser);
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onPressHandle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const customUser = {
    id: 1,
    username: 'johndoe',
    email: 'john22@gmail.com'
  };

  const handleAddUser = () => {
    addUser(customUser.id);
  }

  const handleRemoveUser = () => {
    removeUser();
  }

  return (
    <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-3xl mx-auto">Login</p>
            <br></br>
            <p className="text-small text-default-500 mx-auto">Enter your credentials to log into the app</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
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
          <Button color="primary"
            size="md"
            variant="ghost"
            endContent={<UserIcon/>}
            onPress={onPressHandle}
            isLoading={isLoading}
            >
            Login
          </Button>
        </CardBody>
        <Divider />
        <CardFooter >
          <p className="mx-auto text-gray-400 text-small">Not a member yet?<Link href="/auth/register" className="text-blue-500 mx-auto"> Sign up </Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}