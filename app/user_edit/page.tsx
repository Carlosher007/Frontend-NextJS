"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import { UserIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/app/core/ui/icons";
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
    addUser(1, "johndoe");
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
    addUser(customUser.id, "johndoe");
  }

  const handleRemoveUser = () => {
    removeUser();
  }

  return (
    <div className="p-4">
      <Link href="/" className="text-2xl uppercase font-bold tracking-wider"> ImageHub </Link>
      <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3 mx-auto">
            <div className="flex flex-col">
              <p className="text-3xl mx-auto">Edit User</p>
              <br></br>
              <p className="text-small text-default-500 mx-auto">Fill the form to change your personal information in ImageHub</p>
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
              type="email"
              label="Email"
              errorMessage="Please enter a valid Email" />
            <Button color="primary"
              size="md"
              variant="ghost"
              endContent={<UserIcon />}
              onPress={onPressHandle}
              isLoading={isLoading}
            >
              Sign in
            </Button>
          </CardBody>
          <Divider />
          <CardFooter >
            <div className="flex flex-col max-w-96 justify-center items-center mx-auto ">
              <Link href="/password/reset" className="text-small text-blue-500"> Change Password </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}