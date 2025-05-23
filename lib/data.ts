import { CallStatusEnum } from "@prisma/client";
import { HomeIcon, Settings2Icon, SparkleIcon, User2Icon, WebcamIcon } from "lucide-react";

export const sidebarData = [
    {
        id: 1,
        title: "Home",
        icon: HomeIcon,
        link: "/home",
    },
    {
        id: 2,
        title: "Webinars",
        icon: WebcamIcon,
        link: "/webinars",
    },
    {
        id: 3,
        title: "Leads",
        icon: User2Icon,
        link: "/lead",
    },
    {
        id: 4,
        title: "Ai Agents",
        icon: SparkleIcon,
        link: "/ai-agents",
    },
    {
        id: 5,
        title: "Settings",
        icon: Settings2Icon,
        link: "/settings",
    }
]

export const onBoardingSteps = [
    { id: 1, title: "Create a Webinar", complete: false, link: "/webinars/create" },
    { id: 2, title: "Get Leads", complete: false, link: "/lead/create" },
    { id: 3, title: "Conversion status", complete: false, link: "/ai-agents/create" },
]

export const potentialCustomer = [
    {
        id: "1",
        name: "John Doe",
        email: "johndoe@gmail.com",
        clerkId: "clerk_1234567890",
        profileImage: "/vercel.svg",
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: ["New", "Hot Lead"],
        callStatus: CallStatusEnum.COMPLETED
    },
    {
        id: "2",
        name: "John Doe",
        email: "johndoe@gmail.com",
        clerkId: "clerk_1233423412127890",
        profileImage: "/vercel.svg",
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: ["New", "Hot Lead"],
        callStatus: CallStatusEnum.COMPLETED
    },
    {
        id: "3",
        name: "John Doe",
        email: "johndoe@gmail.com",
        clerkId: "clerk_12323423237890",
        profileImage: "/vercel.svg",
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: ["New", "Hot Lead"],
        callStatus: CallStatusEnum.COMPLETED
    }
]