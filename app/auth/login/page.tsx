'use client';

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import { UserIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/app/core/ui/icons";
import { set } from "zod";
import { useRouter } from "next/navigation";
import { loginUser, infoUser } from "@/app/core/api/users/service";
import { Toaster, toast } from "sonner";
import axios from 'axios';

export default function Page() {
  const router = useRouter();
  
  const addUser = useUserStore(state => state.addUser);
  const addToken = useUserStore(state => state.addToken);
  const removeUser = useUserStore(state => state.removeUser);
  const token: any = useUserStore(state => state.token);
  const id = useUserStore(state => state.idUser);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange1 = (e: any) => setInputValue1(e.target.value);
  const handleInputChange2 = (e: any) => setInputValue2(e.target.value);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onPressHandle = async () => {
    setIsLoading(true);

    var status = 0;
    const res: any = await loginUser(inputValue1, inputValue2);

    try {
      status = res.status;
    } catch (error){
      status = res.response.status;
    }

    if (status == 200){
      addToken(res.data.access)
      const aux = await infoUser(res.data.access);
      addUser(aux?.data.id, aux?.data.username, aux?.data.first_name, aux?.data.last_name, aux?.data.email);
      router.push('/');      
    }else if(res.response.status == 401){
      toast.error("No active account found with the given credentials")
    }else if(res.response.status == 400){
      toast.error('Invalid input')
    }else {
      toast.error('Something went wrong')
    } 
    setIsLoading(false);
  }

  return (
    <div className="p-4">
      <Link href="/" className="text-2xl uppercase font-bold tracking-wider"> ImageHub </Link>
      <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-3xl mx-auto">Sign in</p>
              <br></br>
              <p className="text-small text-default-500 mx-auto">Enter your credentials to log into the app</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Input value={inputValue1} onChange={handleInputChange1}
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="username"
              label="Username"
              errorMessage="Please enter a valid Username" />
            <Input value={inputValue2} onChange={handleInputChange2}
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
              <p className="text-gray-400 text-small">Not a member yet?<Link href="/auth/register" className="text-blue-500"> Sign up </Link></p>
              <br />
              <Link href="/password/reset" className="text-small text-blue-500"> Forgot Password? </Link>

            </div>
          </CardFooter>
        </Card>
      </div>
      <Toaster richColors  />
    </div>
  );
}
