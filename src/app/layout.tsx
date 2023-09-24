import {Button} from "@/components/ui/button";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {StarIcon} from "@/components/icons/StarIcon";
import {FolderIcon} from "lucide-react";
import GalleryIcon from "@/components/icons/GalleryIcon";
import Link from "next/link";
import cloudinary from "@/components/cloudinary-config";
import {Folder} from "./albums/page";
import Image from "next/image";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Image Gallery",
    description: "Image Gallery",
};

async function SideMenu() {
    const {folders} = (await cloudinary.api.root_folders()) as {
        folders: Folder[];
    };

    return (
        <div className="pb-12 w-1/6">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage</h2>
                    <div className="space-y-1">
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href="/gallery">
                                <GalleryIcon className="w-6 h-6" />
                                Gallery
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href="/albums">
                                <FolderIcon className="w-6 h-6" />
                                Albums
                            </Link>
                        </Button>
                        {folders.map(folder => (
                            <Button
                                asChild
                                key={folder.name}
                                className="w-full justify-start flex gap-2"
                                variant="ghost"
                            >
                                <Link className="pl-8" href={`/albums/${folder.path}`}>
                                    {folder.name}
                                </Link>
                            </Button>
                        ))}
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href="/favorites">
                                <StarIcon className="w-6 h-6" />
                                Favorites
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <div className="border-b">
                    <div className="flex h-16 items-center px-4 container mx-auto">
                        <Image src="/logo.png" alt="logo" width={60} height={60}></Image>
                        IMAGE GALLERY
                        {/* <div className="ml-auto flex items-center space-x-4"></div> */}
                    </div>
                </div>
                <div className="flex">
                    <SideMenu />
                    <div className="w-full px-4 pt-12">{children}</div>
                </div>
            </body>
        </html>
    );
}
