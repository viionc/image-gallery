import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/cloudinary-image";
import ImageGrid from "@/components/image-grid";

export type SearchResult = {
    public_id: "string";
    tags: string[];
};

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image")
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(28)
        .execute()) as {resources: SearchResult[]};

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>
                <ImageGrid
                    images={results.resources}
                    getImage={(image: SearchResult) => {
                        return (
                            <CloudinaryImage
                                key={image.public_id}
                                imageData={image}
                            ></CloudinaryImage>
                        );
                    }}
                ></ImageGrid>
            </div>
        </section>
    );
}
