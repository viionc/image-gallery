"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {CldImage} from "next-cloudinary";
import {useAmp} from "next/amp";
import React, {useState} from "react";

function EditPage({
    searchParams: {publicId},
}: {
    searchParams: {
        publicId: string;
    };
}) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "greyscale" | "pixelate"
    >();
    const [prompt, setPrompt] = useState("");
    const [pendingPrompt, setPendingPrompt] = useState("");
    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Edit {publicId}</h1>
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                        Clear All
                    </Button>
                    <div className="flex flex-col gap-4">
                        <Button
                            onClick={() => {
                                setTransformation("generative-fill");
                                setPrompt(pendingPrompt);
                            }}
                        >
                            Apply Generative Fill
                        </Button>
                        <Label>Add Prompt for Fill</Label>
                        <Input
                            value={pendingPrompt}
                            onChange={e => setPendingPrompt(e.target.value)}
                        ></Input>
                    </div>
                    <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
                    <Button onClick={() => setTransformation("greyscale")}>
                        Convert to Greyscale
                    </Button>
                    <Button onClick={() => setTransformation("pixelate")}>Pixelate</Button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <CldImage src={publicId} alt="image" width="300" height="200"></CldImage>
                    {transformation === "generative-fill" && (
                        <CldImage
                            src={publicId}
                            alt="image"
                            width="1000"
                            height="1000"
                            crop="pad"
                            //@ts-ignore
                            fillBackground={{
                                prompt,
                            }}
                        ></CldImage>
                    )}
                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            alt="image"
                            width="1000"
                            height="1000"
                            //@ts-ignore
                            blur="800"
                        ></CldImage>
                    )}
                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            alt="image"
                            width="1000"
                            height="1000"
                            //@ts-ignore
                            grayscale
                        ></CldImage>
                    )}
                    {transformation === "pixelate" && (
                        <CldImage
                            src={publicId}
                            alt="image"
                            width="1000"
                            height="1000"
                            //@ts-ignore
                            pixelate
                        ></CldImage>
                    )}
                </div>
            </div>
        </section>
    );
}

export default EditPage;
