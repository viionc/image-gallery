import cloudinary from "cloudinary";
import ImageGrid from "@/components/image-grid";
import CloudinaryImage from "@/components/cloudinary-image";

export type SearchResult = {
    public_id: "string";
    tags: string[];
};

export default async function GalleryPage({params: {albumName}}: {params: {albumName: string}}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(28)
        .execute()) as {resources: SearchResult[]};

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Album {albumName}</h1>
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
