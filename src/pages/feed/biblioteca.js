import React from 'react'
import { useRouter } from "next/router";

export default function Library() {
    const router = useRouter();
    const q = router.query;    
    return (
        <>
        <h1>Biblioteca</h1>
        <p>{router.asPath}</p>
        </>
    );
}