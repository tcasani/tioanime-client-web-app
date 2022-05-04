import Page from '../components/page'
import { Html, Head, Main, NextScript } from 'next/document'
import Fb_plugin from "../components/fb_plugin";

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <meta content="es" name="language" />
                {/* <title>Anime Online en HD - TioAnime</title> */}

                {/* <link rel="stylesheet" href="/assets/css/bootstrap.min.css?v=1.0.1" media="all" /> */}
                {/* <link rel="stylesheet" href="/assets/css/main.css?v=2.2.6" media="all" /> */}
                {/* <link href="/assets/css/css" rel="stylesheet" /> */}

                {/* Font Awesome auto generated */}
                {/* <link rel="stylesheet" href="/assets/css/fa-v4-font-face.css" id="fa-v4-font-face" /> */}
                {/* <link rel="stylesheet" href="/assets/css/fa-v4-shims.css" id="fa-v4-shims" /> */}
                {/* <link rel="stylesheet" href="/assets/css/fa-main.css" id="fa-main" /> */}

                {/* Info página */}
                <link rel="icon" href="/assets/img/icon-32x32.png" sizes={32} />
                <meta name="theme-color" content="#263DFF" />
                <meta property="fb:app_id" content={251631505774377} />
                <meta name="robots" content="all, index, follow" />
                <meta name="description" content="El mejor portal para ver anime online sub español en calidad HD, descargar anime ligero en HD desde Mega, Mediafire y más! TioAnime tu mejor opción." />
                <meta name="keywords" content="Anime online, ver anime, descargar anime, ver anime online, ver gratis, HD, TioAnime" />
                <meta property="og:site_name" content="TioAnime" />
                <meta property="og:url" content="https://tioanime.com" />
                <meta property="og:type" content="video.episode" />
                <meta property="og:image" content="/assets/img/tio_fb.jpg" />
                <meta property="og:title" content="Anime Online en HD - TioAnime" />
                <meta property="og:description" content="ver online tus animes favoritos en calidad HD subtitulados al español en TioAnime - animes con sub español" />
                <link href="https://tioanime.com" rel="canonical" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body className="dark">
                <Fb_plugin />
                <Page>
                    <Main />
                </Page>
                <NextScript />
            </body>
        </Html>
    )
}