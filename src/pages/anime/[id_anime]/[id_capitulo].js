import React from 'react'
import { useRouter } from "next/router";

const CapPage = () => {
    const router = useRouter();
    const q = router.query;
    console.log(router.query);
    return (
        <div>
            <p>Anime: {capitalize(q.id_anime)}</p>
            <p>Capitulo: {q.id_capitulo}</p>
            <p>Visto: {capitalize(no_undefined(q.visto))}</p>
            <p>Comentarios: {capitalize(no_undefined(q.comments, 'Activados'))}</p>
            <p>Tema: {no_undefined(q.tema, 'Oscuro')}</p>
            <p>Descargar: {no_undefined(q.descargar)}</p>
        </div>
    )
}

export default CapPage;


function capitalize(sentence) {
    // Convierte en mayúscula la primer letra de un string
    return sentence && sentence[0].toUpperCase() + sentence.slice(1);
}

function no_undefined(params, defaultvalor = 'no',params2='') {
    // Convierte un undefined y un string vacío en un "no" o en lo que se quiera
    var condicion = params===undefined?undefined:params2;
    return params === condicion ? defaultvalor : params;
}