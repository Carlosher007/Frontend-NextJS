"use client"

import Link from "next/link";

export default function Page({ params }: { params: { uid: string, token:string } }) {
    const { uid, token } = params;
    
    return (
        <div className="p-4 flex flex-col justify-center items-center min-h-screen">
            <p className="font-bold text-2xl"> ImageHub </p>
            <div className="pt-10 max-w-auto justify-center items-center mx-auto text-center">
                <p className="text-4xl font-bold">You are so close to be part of us!</p>
                <p>To finish the process, click in the following link</p>
                <br/>
                <br/>
                <Link href={`/`} className="text-blue-500">Activate your account</Link>
                <br/>
                <br/>
                <br/>
                <p>After you click the link, you'll be able to sign in the app</p>
                <p className="text-small text-gray-400">Welcome to ImageHub Family!</p>
            </div>
        </div>
    )
}