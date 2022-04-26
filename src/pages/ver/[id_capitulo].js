import React from 'react'
import { useRouter } from "next/router";
const VerCapituloPage = ()=>{
    const router = useRouter();
    return (
        <div>Capítulo: { router.query.id_capitulo }</div>
    )
}

export default VerCapituloPage;