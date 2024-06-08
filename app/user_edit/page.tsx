"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import { UserIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/app/core/ui/icons";
import { set } from "zod";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateUser } from "../core/api/users/service";

export default function Page() {
  const addUser = useUserStore(state => state.addUser);
  const removeUser = useUserStore(state => state.removeUser);
  const id: any = useUserStore(state => state.idUser);
  const username: any = useUserStore(state => state.username);
  const first_name: any = useUserStore(state => state.first_name);
  const last_name: any = useUserStore(state => state.last_name);
  const email: any = useUserStore(state => state.email);
  const token: any = useUserStore(state => state.token);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [inputValue1, setInputValue1] = useState(first_name);
  const [inputValue2, setInputValue2] = useState(last_name);
  const [inputValue3, setInputValue3] = useState(email);

  const handleInputChange1 = (e: any) => setInputValue1(e.target.value);
  const handleInputChange2 = (e: any) => setInputValue2(e.target.value);
  const handleInputChange3 = (e: any) => setInputValue3(e.target.value);


  const toggleVisibility = () => setIsVisible(!isVisible);
  const route = useRouter();

  useEffect(() => {
      if(!id){
        route.push('/')
      }
  }, []);

  const handlePress = async () => {
    setIsLoading(true);
    var status;
    const res: any = await updateUser({first_name: inputValue1, last_name: inputValue2, email: inputValue3}, token);
    
    try {
      status = res.status;
    } catch (error){
      status = res.response.status;
    }

    if(status == 401){
      removeUser();
      route.push('/auth/login');
    } else if(status == 200){
      addUser(id, username, inputValue1, inputValue2, inputValue3);
      toast.success('User updated successfully');
    } else {
      toast.error('Something went wrong, try again later');
    }

    setIsLoading(false);
  }

  return (
    <div className="p-4">
      {id && <Link href="/" className="text-2xl uppercase font-bold tracking-wider"> ImageHub </Link>}
      {id && <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
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
                value={inputValue1}
                onChange={handleInputChange1}
                errorMessage="Please enter a valid name" />
              <Input
                className="my-3"
                size="sm"
                labelPlacement="inside"
                type="lastname"
                label="Last Name"
                value={inputValue2}
                onChange={handleInputChange2}
                errorMessage="Please enter a valid name" />
            </div>
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="email"
              label="Email"
              value={inputValue3}
              onChange={handleInputChange3}
              description="If you change your email, youl'll need to verify it again. If you don't want to change your email don't modify this field"
              errorMessage="Please enter a valid Email" />
            <Button color="primary"
              size="md"
              variant="ghost"
              endContent={<UserIcon />}
              onPress={handlePress}
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
      </div>}
      <Toaster richColors />
    </div>
  )
}