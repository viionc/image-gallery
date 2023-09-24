"use client";

import {CldImage} from "next-cloudinary";

export default function CloudinaryImage(props: any) {
    return (
        <CldImage
            key={props.publicId}
            width="400"
            height="300"
            src={props.publicId}
            sizes="100vw"
            alt="Description of my image"
        />
    );
}
