import {Button} from "@/components/ui/button";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {StarIcon} from "@/components/icons/StarIcon";
import {FolderIcon} from "lucide-react";
import GalleryIcon from "@/components/icons/GalleryIcon";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

function SideMenu() {
    return (
        <div className="pb-12 w-1/6">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage</h2>
                    <div className="space-y-1">
                        <Button variant="secondary" className="w-full justify-start flex gap-2">
                            <GalleryIcon className="w-6 h-6" />
                            Gallery
                        </Button>
                        <Button variant="ghost" className="w-full justify-start flex gap-2">
                            <FolderIcon className="w-6 h-6" />
                            Albums
                        </Button>
                        <Button variant="ghost" className="w-full justify-start flex gap-2">
                            <StarIcon className="w-6 h-6" />
                            Favorites
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
