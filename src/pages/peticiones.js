import React from 'react'
import { useRouter } from "next/router";

export default function Peticiones() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Peticiones</h1>
        <p>{router.asPath}</p>
        </>
    );
}