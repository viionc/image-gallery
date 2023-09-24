import cloudinary from "cloudinary";
import CloudinaryImage from "../gallery/cloudinary-image";
import ForceRefresh from "@/components/force-refresh";

export type SearchResult = {
    public_id: "string";
    tags: string[];
};

export default async function FavortiesPage() {
    const result = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(25)
        .execute()) as {resources: SearchResult[]};

    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {result.resources.map(result => {
                        return (
                            <CloudinaryImage
                                path="/favorites"
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
