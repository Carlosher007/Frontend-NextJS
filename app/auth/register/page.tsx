"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";

import { UserIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/app/core/ui/icons";
import { createUser } from "@/app/core/api/users/service";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConf, setIsVisibleConf] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleInputfirstname = (e: any) => setFirstname(e.target.value);
  const handleInputlastname = (e: any) => setLastname(e.target.value);
  const handleInputusername = (e: any) => setUsername(e.target.value);
  const handleInputemail = (e: any) => setEmail(e.target.value);
  const handleInputpassword = (e: any) => setPassword(e.target.value);
  const handleInputrepassword = (e: any) => setRepassword(e.target.value);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityConf = () => setIsVisibleConf(!isVisibleConf);

  const handleButtonPress = async () => {
    setIsLoading(true);

    if (username == '' || email == '' || password == '' || repassword == '') {
      toast.error('Please fill all the fields');
    } else if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email');
    } else if (password != repassword) {
      toast.error('Passwords do not match');
    }
    else {
      var status;

      const res: any = await createUser(email, firstname, lastname, username, password, repassword);

      try {
        status = res.status;
      } catch (error) {
        status = res.response.status;
      }

      if (status == 400) {
        if(res.data.password){
          const passAlerts = res.data.password;
          for (let i = 0; i < passAlerts.length; i++) {
            toast.error(passAlerts[i]);
          }
        } else if (res.data.username) {
          toast.error(res.data.username);
        } else if (res.data.email) {
          toast.error(res.data.email);
        }
      } else if (status == 201) {
        toast.success('User created successfully');
        toast.info('To active your account, you must verify your email')
      }
    }
    
    setIsLoading(false);
  }

  return (
    <div className="p-4">
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
                onChange={handleInputfirstname}
                errorMessage="Please enter a valid name" />
              <Input
                className="my-3"
                size="sm"
                labelPlacement="inside"
                type="lastname"
                label="Last Name"
                onChange={handleInputlastname}
                errorMessage="Please enter a valid name" />
            </div>
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="username"
              label="Username"
              onChange={handleInputusername}
              errorMessage="Please enter a valid Username" />
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="email"
              label="Email"
              onChange={handleInputemail}
              errorMessage="Please enter a valid Email" />
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              label="Password"
              onChange={handleInputpassword}
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
              onChange={handleInputrepassword}
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
              onPress={handleButtonPress}
              isLoading={isLoading}
            >
              Sign up
            </Button>
          </CardBody>
          <Divider />
          <CardFooter >
            <p className="mx-auto text-gray-400 text-small">Already have an account?<Link href="/auth/login" className="text-blue-500 mx-auto"> Sign in </Link></p>
          </CardFooter>
        </Card>
      </div>
      <Toaster richColors />
    </div>
  )
}
