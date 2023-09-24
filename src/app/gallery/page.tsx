import UploadButton from "./upload-button";
import {v2 as cloudinary} from "cloudinary";
import CloudinaryImage from "./cloudinary-image";

type SearchResult = {
    public_id: "string";
};

export default async function GalleryPage() {
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    });

    const result = (await cloudinary.search
        .expression("resource_type:image")
        .sort_by("created_at", "desc")
        .max_results(5)
        .execute()) as {resources: SearchResult[]};

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {result.resources.map(result => {
                        return (
                            <CloudinaryImage
                                key={result.public_id}
                                publicId={result.public_id}
                            ></CloudinaryImage>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
