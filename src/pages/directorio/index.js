import React from 'react'
import { useRouter } from "next/router";

export default function Directorio() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Directorio de Animes</h1>
        <p>{router.asPath}</p>
        </>
    );
}