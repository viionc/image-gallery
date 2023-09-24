"use server";
import {SearchResult} from "@/app/gallery/page";
import cloudinary from "./cloudinary-config";

export async function addImageToAlbum(album: string, image: SearchResult) {
    await cloudinary.api.create_folder(album);

    await cloudinary.uploader.rename(image.public_id, `${album}/${image.public_id}`);
}
