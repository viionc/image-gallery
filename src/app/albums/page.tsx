import cloudinary from "cloudinary";
import {AlbumCard} from "./album-card";
import {useEffect, useState} from "react";
import ForceRefresh from "@/components/force-refresh";

export type Folder = {name: string; path: string};

export default async function AlbumsPage() {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[];
    };

    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Albums</h1>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {folders.map(album => (
                        <AlbumCard key={album.path} folder={album} />
                    ))}
                </div>
            </div>
        </section>
    );
}
