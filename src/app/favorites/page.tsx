import cloudinary from "cloudinary";
import ForceRefresh from "@/components/force-refresh";
import FavortiesList from "./favorites-list";
import {SearchResult} from "../gallery/page";

export default async function FavortiesPage() {
    const result = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(28)
        .execute()) as {resources: SearchResult[]};

    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>
                <FavortiesList initialResources={result.resources} />
            </div>
        </section>
    );
}
