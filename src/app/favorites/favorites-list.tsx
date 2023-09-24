"use client";
import CloudinaryImage from "../../components/cloudinary-image";
import {useEffect, useState} from "react";
import ImageGrid from "@/components/image-grid";
import {SearchResult} from "../gallery/page";

export default function FavortiesList({initialResources}: {initialResources: SearchResult[]}) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(image: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={image.public_id}
                        imageData={image}
                        onUnfavorite={(unfavoritedResources: SearchResult) => {
                            setResources(current => {
                                return current.filter(
                                    resource =>
                                        resource.public_id !== unfavoritedResources.public_id
                                );
                            });
                        }}
                    ></CloudinaryImage>
                );
            }}
        ></ImageGrid>
    );
}
