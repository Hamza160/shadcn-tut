"use client"
import React from 'react';
import {SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {FormInput} from "lucide-react";
import {Input} from "@/components/ui/input";

const FormSchema = z.object({
    username: z.string().min(2, {message: "Username must be atleast 2 characters"}).max(50),
    email: z.string().email({message: "Invalid email address!"}),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["admin", "user"]),
})

type FormSchemaType = z.infer<typeof FormSchema>

const EditUser = () => {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "hamza.ashraf",
            email: "hamza@gmail.com",
            phone: "+923110767466",
            location: "New York, NY",
            role: "admin"
        }
    })
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription>
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Username"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
}

export default EditUser;
