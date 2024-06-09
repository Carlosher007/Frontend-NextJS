"use client"

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { resetPasswordConfirm } from "@/app/core/api/users/service";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/core/ui/icons";

export default function Page({ params }: { params: { uid: string, token: string } }) {
    const { uid, token } = params;

    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleConf, setIsVisibleConf] = useState(false);
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibilityConf = () => setIsVisibleConf(!isVisibleConf);

    const handleInputpassword = (e: any) => setPassword(e.target.value);
    const handleInputrepassword = (e: any) => setRepassword(e.target.value);

    const handleOnClick = async () => {
        setIsLoading(true);

        if (password == '' || repassword == '') {
            toast.error('Please fill all the fields');
        } else if (password != repassword) {
            toast.error('Passwords do not match');
        } else {
            var status;
            const res: any = await resetPasswordConfirm(password, repassword, uid, token);

            try {
                status = res.status;
            } catch (error) {
                status = res.response.status;
            }

            if (status == 204) {
                toast.success('Password reset successfully, you can login with your new password');
            } else if (status == 400) {
                if (res.data.new_password) {
                    const passAlerts = res.data.new_password;
                    for (let i = 0; i < passAlerts.length; i++) {
                        toast.error(passAlerts[i]);
                    }
                }
                if (res.data.token){
                    toast.error("The token is no longer valid, please request a new one");
                }
            }
            else {
                toast.error('Something went wrong');
            }
        }
        setIsLoading(false);
    }

    return (
        <div className="p-4">
            <div className="flex flex-col gap-10 max-w-96 justify-center items-center mx-auto h-screen overflow-auto">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-2xl mx-auto">Confirm Reset Password</p>
                            <br></br>
                            <p className="text-small text-default-500 mx-auto">Enter your new password to confirm the changes and sign in with a new password</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
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
                            onPress={handleOnClick}
                            isLoading={isLoading}
                        >
                            Confirm
                        </Button>
                    </CardBody>
                    <Divider />
                    <CardFooter >
                        <div className="flex flex-col max-w-96 justify-center items-center mx-auto ">
                            <p className="text-gray-400 text-small">Check the information before you change yor password</p>
                            <br />
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Toaster richColors />
        </div>
    )
}