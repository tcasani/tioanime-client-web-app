import React from 'react'
import { useRouter } from "next/router";

export default function Mangas() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Mangas</h1>
        <p>{router.asPath}</p>
        </>
    );
}