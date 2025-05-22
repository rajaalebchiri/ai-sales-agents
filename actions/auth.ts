"use server"

import { prismaClient } from "@/lib/prismaClient";
import { currentUser } from "@clerk/nextjs/server"

export async function onAuthenticateUser() {
    try {
        const user = await currentUser();
        if (!user) {
            return {
                status: 403,
            }
        }

        const userExists = await prismaClient.user.findUnique({
            where: {
                clerkId: user.id,
            }
        })

        if (userExists) {
            return {
                status: 200,
                user: userExists,
            }
        }

        const newUser = await prismaClient.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: user.firstName || "John Doe",
                profilImage: user.imageUrl,
            }
        })

        if (!newUser) {
            return {
                status: 500,
                message: "Failed to create user",
            }
        }
        
        return {
            status: 200,
            user: newUser,
        }
    } catch (error) {
        console.log("Error", error);
        return {
            status: 500,
            error: "Internal server error",
        }
    }
}