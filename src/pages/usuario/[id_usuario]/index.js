import React from 'react'
import { useRouter } from "next/router";
import Scripts from "../../../components/scripts";
import TioAnime from '../../../components/tioanime';
import data from "../../../js/data";
import functions from "../../../js/functions";
const { capitalize, no_undefined } = functions;
// import { route } from 'next/dist/server/router';

const UsuarioPage = () => {
    const router = useRouter();
    const q = router.query;
    const { user, page_config } = data(q);
    // console.log(router););

    return (
        <>
            <TioAnime>
                <div className="container">
                    <p>{router.asPath}</p>
                    <h1>Perfil</h1>
                    <h2 align="center">Info</h2>
                    <p>Usuario: {user.id}</p>
                    <p>Capitulos vistos: {user.animes.Episodes}</p>
                    <p>Animes vistos: {user.animes.Completed}</p>
                    <p>Animes por ver: {user.animes.Plan_to_Watch}</p>
                    <h2 align="center">Config</h2>
                    <p>Comentarios: {capitalize(page_config.comments)}</p>
                    <p>Tema: {page_config.theme}</p>
                </div>
            </TioAnime>
            <Scripts />
        </>
    )
}

export default UsuarioPage;

