"use client";

import {StarIcon} from "@/components/icons/StarIcon";
import {CldImage} from "next-cloudinary";
import {setAsFavoriteAction} from "./actions";
import {SearchResult} from "./page";
import {useTransition} from "react";
import {FullStarIcon} from "@/components/icons/FullStarIcon";

export default function CloudinaryImage(props: any & {imageData: SearchResult}) {
    const {imageData} = props;
    const [transition, startTransition] = useTransition();
    const isFavorited = imageData.tags.includes("favorite");
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
                    className="w-8 h-8 absolute top-2 right-2 hover:text-white cursor-pointer"
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, isFavorited);
                        });
                    }}
                />
            ) : (
                <StarIcon
                    className="w-8 h-8 absolute top-2 right-2 hover:text-yellow-500 cursor-pointer"
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, isFavorited);
                        });
                    }}
                />
            )}
        </div>
    );
}
