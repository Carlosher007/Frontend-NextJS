"use client"

import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Divider, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Toaster,toast } from "sonner";
import { useUserStore } from "@/app/core/store";

import { resetPassword } from "@/app/core/api/users/service";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const username = useUserStore(state => state.username);
  
  const [email, setEmail] = useState("");
  const handleInputEmail = (e: any) => setEmail(e.target.value);

  const handleOnClick = async () => {
    setIsLoading(true);

    if(email == ''){
      toast.error('Please fill the email field');
    } else if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email');
    } else {
      var status;
      const res = await resetPassword(email);

      try {
        status = res.status;
      } catch (error) {
        status = res.response.status;
      }

      if (status == 204) {
        toast.success('An email has been sent to reset your password');
      } else {
        toast.error('Error sending email, please check the email field and try again');
      }
    }
    
    // const res: any = await resetPassword(email);
    // if (res) {
    //   toast.success('An email has been sent to reset your password');
    // } else {
    //   toast.error('Error sending email');
    // }
    setIsLoading(false);
  }

  return(
      <div className="p-4">
      <Link href="/" className="text-2xl uppercase font-bold tracking-wider"> ImageHub </Link>
      <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-3xl mx-auto">Reset Password</p>
              <br></br>
              <p className="text-small text-default-500 mx-auto">Enter your email to change your password, an email will be send to continue the process </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Input
              className="my-3"
              isRequired
              size="sm"
              labelPlacement="inside"
              type="email"
              label="Email"
              onChange={handleInputEmail}
              errorMessage="Please enter a valid email" />
            <Button color="primary"
              size="md"
              variant="ghost"
              onPress={handleOnClick}
              isLoading={isLoading}
            >
              Send Email
            </Button>
          </CardBody>
          <Divider />
          <CardFooter >
            <div className="flex flex-col max-w-96 justify-center items-center mx-auto ">
              {!username && <p className="text-gray-400 text-small">Not a member yet?<Link href="/auth/register" className="text-blue-500"> Sign up </Link></p>}
              <br />
            </div>
          </CardFooter>
        </Card>
      </div>
      <Toaster richColors/>
    </div>
    )
}