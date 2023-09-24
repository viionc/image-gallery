import {SearchResult} from "@/app/gallery/page";
import React, {ReactNode} from "react";

function ImageGrid({
    images,
    getImage,
}: {
    images: SearchResult[];
    getImage: (imageData: SearchResult) => ReactNode;
}) {
    const MAX_COLUMNS = 4;
    function getColumns(colIndex: number) {
        return images.filter((image, i) => i % MAX_COLUMNS === colIndex);
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, i) => {
                return (
                    <div key={i} className="flex flex-col gap-4">
                        {column.map(getImage)}
                    </div>
                );
            })}
        </div>
    );
}

export default ImageGrid;
