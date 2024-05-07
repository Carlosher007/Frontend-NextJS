"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
export default function Page() {

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  );
}
