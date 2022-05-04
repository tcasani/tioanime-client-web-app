import React from 'react'
import { useRouter } from "next/router";

export default function History() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Historial</h1>
        <p>{router.asPath}</p>
        </>
    );
}