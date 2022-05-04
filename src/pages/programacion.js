import React from 'react'
import { useRouter } from "next/router";

export default function Programacion() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Programación</h1>
        <p>{router.asPath}</p>
        </>
    );
}