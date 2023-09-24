import UploadButton from "./upload-button";
import cloudinary from "@/components/cloudinary-config";
import CloudinaryImage from "../../components/cloudinary-image";
import ImageGrid from "@/components/image-grid";
import SearchForm from "./search-form";

export type SearchResult = {
    public_id: "string";
    tags: string[];
};

export default async function GalleryPage({
    searchParams: {search},
}: {
    searchParams: {
        search: string;
    };
}) {
    const results = (await cloudinary.search
        .expression(`resource_type:image ${search ? `AND tags=${search}` : ""}`)
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
                <SearchForm initialSearch={search}></SearchForm>
                <ImageGrid
                    images={results.resources}
                    getImage={(image: SearchResult) => {
                        return <CloudinaryImage imageData={image}></CloudinaryImage>;
                    }}
                ></ImageGrid>
            </div>
        </section>
    );
}
