"use server";
import cloudinary from "@/components/cloudinary-config";

export async function setAsFavoriteAction(publicId: string, isFavorited: boolean) {
    isFavorited
        ? await cloudinary.uploader.remove_tag("favorite", [publicId])
        : await cloudinary.uploader.add_tag("favorite", [publicId]);
    await new Promise(resolve => setTimeout(resolve, 1000));
}
