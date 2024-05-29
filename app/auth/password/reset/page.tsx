"use client"

import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Divider, Input, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  


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
              type="username"
              label="Username"
              errorMessage="Please enter a valid Username" />
            <Button color="primary"
              size="md"
              variant="ghost"
              onPress={() => 'hola'}
              isLoading={isLoading}
            >
              Send Email
            </Button>
          </CardBody>
          <Divider />
          <CardFooter >
            <div className="flex flex-col max-w-96 justify-center items-center mx-auto ">
              <p className="text-gray-400 text-small">Not a member yet?<Link href="/auth/register" className="text-blue-500"> Sign up </Link></p>
              <br />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
    )
}