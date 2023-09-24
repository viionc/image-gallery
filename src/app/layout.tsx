import {Button} from "@/components/ui/button";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {StarIcon} from "@/components/icons/StarIcon";
import {FolderIcon} from "lucide-react";
import GalleryIcon from "@/components/icons/GalleryIcon";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Image Gallery",
    description: "Image Gallery",
};

function SideMenu() {
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
