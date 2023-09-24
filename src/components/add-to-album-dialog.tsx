import {SearchResult} from "@/app/gallery/page";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {FolderPlus} from "lucide-react";
import {useState} from "react";
import {addImageToAlbum} from "./actions";

export function AddToAlbumDialog({image, onClose}: {image: SearchResult; onClose: () => void}) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <Dialog
            open={open}
            onOpenChange={newOpenState => {
                setOpen(newOpenState);
                if (!newOpenState) onClose();
            }}
        >
            <DialogTrigger asChild>
                <div className="flex flex-row gap-4 cursor-pointer">
                    <FolderPlus />
                    Add To Album
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type an album you want to move this image into.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            id="album-name"
                            value={albumName}
                            className="col-span-3"
                            onChange={e => setAlbumName(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={async () => {
                            onClose();
                            setOpen(false);
                            await addImageToAlbum(albumName, image);
                        }}
                    >
                        Add to Album
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
