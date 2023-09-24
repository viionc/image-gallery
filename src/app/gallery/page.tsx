import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";

export type SearchResult = {
    public_id: "string";
    tags: string[];
};

export default async function GalleryPage() {
    const result = (await cloudinary.v2.search
        .expression("resource_type:image")
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(1)
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
                                imageData={result}
                            ></CloudinaryImage>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
