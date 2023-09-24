"use client";

import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

function ForceRefresh() {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    }, [router]);
    return <></>;
}

export default ForceRefresh;
