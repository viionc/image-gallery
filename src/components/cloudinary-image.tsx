"use client";

import {StarIcon} from "@/components/icons/StarIcon";
import {CldImage} from "next-cloudinary";
import {setAsFavoriteAction} from "../app/gallery/actions";
import {SearchResult} from "../app/gallery/page";
import {useState, useTransition} from "react";
import {FullStarIcon} from "@/components/icons/FullStarIcon";
import ImageMenu from "./image-menu";

export default function CloudinaryImage(
    props: any & {
        imageData: SearchResult;
        onUnfavorite?: (unfavoritedResources: SearchResult) => void;
    }
) {
    const {imageData, onUnfavorite} = props;
    const [transition, startTransition] = useTransition();
    const [isFavorited, setIsFavorite] = useState(imageData.tags.includes("favorite"));
    return (
        <div className="relative">
            <CldImage
                key={imageData.public_id}
                width="400"
                height="300"
                src={imageData.public_id}
                sizes="100vw"
                alt="Description of my image"
            />
            {isFavorited ? (
                <FullStarIcon
                    className="w-8 h-8 absolute top-2 left-2 hover:text-white cursor-pointer"
                    onClick={() => {
                        onUnfavorite?.(imageData);
                        setIsFavorite(false);
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true);
                        });
                    }}
                />
            ) : (
                <StarIcon
                    className="w-8 h-8 absolute top-2 left-2 hover:text-yellow-500 cursor-pointer"
                    onClick={() => {
                        setIsFavorite(true);
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false);
                        });
                    }}
                />
            )}
            <ImageMenu image={imageData}></ImageMenu>
        </div>
    );
}
