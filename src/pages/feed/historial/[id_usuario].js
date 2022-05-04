import React from 'react'
import { useRouter } from "next/router";

export default function Historial() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Historial</h1>
        <p>{router.asPath}</p>
        <p>{q.id_usuario}</p>
        </>
    );
}