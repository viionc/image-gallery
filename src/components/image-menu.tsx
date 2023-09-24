import React from "react";
import MenuIcon from "./icons/MenuIcon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {FolderPlus} from "lucide-react";

function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuItem>
                        <div className="flex flex-row gap-4">
                            <FolderPlus />
                            Add To Album
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default ImageMenu;
