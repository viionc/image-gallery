import React, {useState} from "react";
import MenuIcon from "./icons/MenuIcon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {AddToAlbumDialog} from "./add-to-album-dialog";
import {SearchResult} from "@/app/gallery/page";
import {Button} from "./ui/button";
import Link from "next/link";
import {Pencil} from "lucide-react";

function ImageMenu({image}: {image: SearchResult}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-10 h-10 p-0">
                        <MenuIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuItem asChild>
                        <AddToAlbumDialog
                            image={image}
                            onClose={() => setOpen(false)}
                        ></AddToAlbumDialog>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Button
                            variant="ghost"
                            asChild
                            className="cursor-pointer flex justify-start p-2"
                        >
                            <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                                <Pencil className="mr-2 w-4 h-4"></Pencil>
                                Edit
                            </Link>
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default ImageMenu;
