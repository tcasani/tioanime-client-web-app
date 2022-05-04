import Link from 'next/link'
import Image from 'next/image'

export default function AnimeTemplate(id_anime, userdata) {
    var datos = {
        id_anime: id_anime,
    };
    var componente = (
        <>
            {/* Anime Información y portada */}
            <article className="anime-single">
                <div className="container">
                    <div className="row">
                        <aside className="col col-sm-4 col-lg-3 col-xl-2">
                            <div className="thumb">
                                <figure><Image src="/uploads/portadas/3502.jpg" alt="img" layout='fill' /></figure>
                                <a href="#" className="btn btn-danger btn-block status"><i className="fa-play-circle" />Finalizado</a>
                            </div>
                        </aside>
                        <aside className="col col-sm-8 col-lg-9 col-xl-10">
                            <h1 className="title">Kobayashi-san Chi no Maid Dragon S Mini Dragon</h1>
                            <div className="meta">
                                <span className="anime-type-peli">Especial</span>
                                <span className="year">2021</span>
                                <span className="season">
                                    <span className="season"> Temporada
                                        <span className="fa-snowflake far winter">Invierno
                                            2021 </span>
                                    </span>
                                </span>
                            </div>
                            <p className="genres">
                                <span className="btn btn-sm btn-primary rounded-pill">
                                    <Link href="/directorio?genero=comedia" className="btn btn-sm btn-light rounded-pill"><a>Comedia</a></Link>
                                </span>
                            </p>
                            <p className="sinopsis">
                                Cortos de Kobayashi-san Chi no Maid Dragon S </p>
                            <div className="d-lg-flex justify-content-between">
                                <div className="epi-stats d-flex align-content-center">
                                    <div className="follow flex-grow-1">
                                        <span>Siguenos</span>
                                        <ul>
                                            <li><a href="#" className="fa-twitter fab" /></li>
                                            <li><a href="#" className="fa-facebook-f fab" /></li>
                                            <li><a href="#" className="fa-youtube fab" /></li>
                                        </ul>
                                    </div>
                                    <div className="votes flex-grow-1">
                                        <span className="num fa-star" id="score">N/A</span>
                                        <span className="mal">RATING
                                            <span>MAL</span>
                                        </span>
                                        <span className="total">
                                            <span id="scored_by">N/A</span> votos
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <figure className="backdrop"><Image src="/uploads/fondos/3502.jpg" alt="Kobayashi-san Chi no Maid Dragon S Mini Dragon" layout='fill' /></figure>
            </article>
            {id_anime}
        </>
    );
    return componente
}