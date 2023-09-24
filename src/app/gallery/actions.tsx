"use server";
import {v2 as cloudinary} from "cloudinary";
import {revalidatePath} from "next/cache";

export async function setAsFavoriteAction(publicId: string, isFavorited: boolean) {
    isFavorited
        ? await cloudinary.uploader.remove_tag("favorite", [publicId])
        : await cloudinary.uploader.add_tag("favorite", [publicId]);
    await new Promise(resolve => setTimeout(resolve, 1000));
}
