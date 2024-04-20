"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function Page() {

  return (
    <div className="flex flex-col">
      {Array.from({ length: 100 }, (_, index) => (
        <h1 key={index}>Hola</h1>
      ))}
    </div>
  );
}
