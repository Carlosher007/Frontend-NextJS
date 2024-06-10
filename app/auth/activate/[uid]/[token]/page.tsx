"use client"

import { Button } from "@nextui-org/button";
import { Toaster,toast } from "sonner";
import { useState } from "react";
import { activateUser } from "@/app/core/api/users/service";

export default function Page({ params }: { params: { uid: string, token:string } }) {
    const { uid, token } = params;

    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = async () => {
        setIsLoading(true);
        
        var status;
        const res: any = await activateUser(uid, token);
        
        try{
            status = res.status;
        } catch (error) {
            status = res.response.status;
        }
        
        if (status == 204) {
            toast.success('Account activated successfully, you can sign in now');
        } if(status == 403){
            toast.info('Account already activated')
        }
        else {
            toast.error('Error activating your account');
        }

        setIsLoading(false);
    }
    
    return (
        <div className="p-4 flex flex-col justify-center items-center min-h-screen">
            <p className="font-bold text-2xl"> ImageHub </p>
            <div className="pt-10 max-w-auto justify-center items-center mx-auto text-center">
                <p className="text-4xl font-bold">You are so close to be part of us!</p>
                <p>To finish the process, click in the following link</p>
                <br/>
                <br/>
                <Button
                    variant="ghost"
                    onPress={handleOnClick}
                    isLoading={isLoading}
                >
                    Activate your account
                </Button>
                <br/>
                <br/>
                <br/>
                <p>After you click the link, you'll be able to sign in the app</p>
                <p className="text-small text-gray-400">Welcome to ImageHub Family!</p>
            </div>
            <Toaster richColors/>
        </div>
    )
}