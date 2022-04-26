import Head from 'next/head'
import { useRouter } from "next/router";
import TioAnime from "../components/tioanime";
import Scripts from "../components/scripts";
// import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const q = router.query;
  var page = {
    title: 'Anime Online en HD - TioAnime',
    description: 'El mejor portal para ver anime online sub español en calidad HD, descargar anime ligero en HD desde Mega, Mediafire y más! TioAnime tu mejor opción.',
    keywords: 'Anime online, ver anime, descargar anime, ver anime online, ver gratis, HD, TioAnime',
    og_description: 'ver online tus animes favoritos en calidad HD subtitulados al español en TioAnime - animes con sub español',
    url: 'https://tioanime.com'
  };
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
        <meta property="og:url" content={page.url} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.og_description} />
        <link href={page.url} rel="canonical" />
      </Head>
      <TioAnime>
        <div className="container">
          {/* Últimos Episodios */}
          <section>
            <div className="header">
              <h1 className="title fa-fire">Últimos Episodios</h1>
            </div>
            <ul className="episodes list-unstyled row">
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="/ver/one-piece-tv-1014">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/7.jpg" alt="One Piece 1014" />
                      </figure>
                    </div>
                    <h3 className="title">One Piece 1014</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/digimon-ghost-game-22">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3557.jpg" alt="Digimon Ghost Game 22" /></figure>
                    </div>
                    <h3 className="title">Digimon Ghost Game 22</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/rymans-club-12">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3620.jpg" alt="Ryman's Club 12" /></figure>
                    </div>
                    <h3 className="title">Ryman's Club 12</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/kingdom-4th-season-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3655.jpg" alt="Kingdom 4th Season 2" /></figure>
                    </div>
                    <h3 className="title">Kingdom 4th Season 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/kawaii-dake-ja-nai-shikimorisan-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3653.jpg" alt="Kawaii dake ja Nai Shikimori-san 2" /></figure>
                    </div>
                    <h3 className="title">Kawaii dake ja Nai Shikimori-san 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/build-divide-code-white-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3628.jpg" alt="Build Divide: Code White 3" /></figure>
                    </div>
                    <h3 className="title">Build Divide: Code White 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/kunoichi-tsubaki-no-mune-no-uchi-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3652.jpg" alt="Kunoichi Tsubaki no Mune no Uchi 2" /></figure>
                    </div>
                    <h3 className="title">Kunoichi Tsubaki no Mune no Uchi 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/gunjou-no-fanfare-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3627.jpg" alt="Gunjou no Fanfare 3" /></figure>
                    </div>
                    <h3 className="title">Gunjou no Fanfare 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/spy-x-family-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3654.jpg" alt="Spy x Family 2" />
                      </figure>
                    </div>
                    <h3 className="title">Spy x Family 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3626.jpg" alt="Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season 3" />
                      </figure>
                    </div>
                    <h3 className="title">Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/love-all-play-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3625.jpg" alt="Love All Play 3" /></figure>
                    </div>
                    <h3 className="title">Love All Play 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/ao-ashi-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3651.jpg" alt="Ao Ashi 2" />
                      </figure>
                    </div>
                    <h3 className="title">Ao Ashi 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/yatogamechan-kansatsu-nikki-4th-season-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3650.jpg" alt="Yatogame-chan Kansatsu Nikki 4th Season 2" /></figure>
                    </div>
                    <h3 className="title">Yatogame-chan Kansatsu Nikki 4th Season 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/shadowverse-flame-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3624.jpg" alt="Shadowverse Flame 3" /></figure>
                    </div>
                    <h3 className="title">Shadowverse Flame 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/dragon-quest-dai-no-daibouken-2020-73">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3381.jpg" alt="Dragon Quest: Dai no Daibouken (2020) 73" /></figure>
                    </div>
                    <h3 className="title">Dragon Quest: Dai no Daibouken (2020) 73</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/shokei-shoujo-no-virgin-road-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3623.jpg" alt="Shokei Shoujo no Virgin Road 3" /></figure>
                    </div>
                    <h3 className="title">Shokei Shoujo no Virgin Road 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/dance-dance-danseur-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3647.jpg" alt="Dance Dance Danseur 2" /></figure>
                    </div>
                    <h3 className="title">Dance Dance Danseur 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/cue-14">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3601.jpg" alt="Cue! 14" />
                      </figure>
                    </div>
                    <h3 className="title">Cue! 14</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/aharensan-wa-hakarenai-3">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3622.jpg" alt="Aharen-san wa Hakarenai 3" /></figure>
                    </div>
                    <h3 className="title">Aharen-san wa Hakarenai 3</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3">
                <article className="episode">
                  <a href="https://tioanime.com/ver/jantama-pong-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/thumbs/3648.jpg" alt="Jantama Pong☆ 2" /></figure>
                    </div>
                    <h3 className="title">Jantama Pong☆ 2</h3>
                  </a>
                </article>
              </li>
            </ul>
          </section>
          {/* Otras secciones */}
          <div className="row latest flex-nowrap">
            {/* Últimas Peliculas */}
            <section className="col-4 movies">
              <div className="header">
                <h1 className="title fa-fire">Últimas Peliculas</h1>
              </div>
              <ul className="list-unstyled">
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="https://tioanime.com/anime/violet-evergarden-the-movie">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3587.jpg" alt="Violet Evergarden the Movie" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Pelicula</span>
                    </div>
                    <div className="media-body">
                      <a href="https://tioanime.com/anime/violet-evergarden-the-movie">
                        <h3 className="title">Violet Evergarden the Movie</h3>
                      </a>
                      <p className="description">
                        Violet Evergarden, una joven conocida anteriormente como “el arma”, ha
                        abandonado el campo de batalla para comenzar una...
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=drama" className="btn btn-sm btn-light rounded-pill">Drama</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=fantasia" className="btn btn-sm btn-light rounded-pill">Fantasía</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=recuentos-de-la-vida" className="btn btn-sm btn-light rounded-pill">Recuentos de la vida</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="https://tioanime.com/anime/nanatsu-no-taizai-movie-2-hikari-ni-norowareshi-monotachi">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3549.jpg" alt="Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Pelicula</span>
                    </div>
                    <div className="media-body">
                      <a href="https://tioanime.com/anime/nanatsu-no-taizai-movie-2-hikari-ni-norowareshi-monotachi">
                        <h3 className="title">Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi
                        </h3>
                      </a>
                      <p className="description">
                        Nuestro equipo esta ocupado, no tenemos un resumen de este elemento aun.
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=accion" className="btn btn-sm btn-light rounded-pill">Acción</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=aventura" className="btn btn-sm btn-light rounded-pill">Aventuras</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=fantasia" className="btn btn-sm btn-light rounded-pill">Fantasía</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
              <a href="https://tioanime.com/directorio?type%5B%5D=1" className="btn btn-block btn-light rounded">Más
                Películas</a>
            </section>
            {/* Últimos Ovas */}
            <section className="col-4 ovas">
              <div className="header">
                <h1 className="title fa-fire">Últimos Ovas</h1>
              </div>
              <ul className="list-unstyled">
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="https://tioanime.com/anime/mahoutsukai-no-yome-nishi-no-shounen-to-seiran-no-kishi">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3590.jpg" alt="Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Ova</span>
                    </div>
                    <div className="media-body">
                      <a href="https://tioanime.com/anime/mahoutsukai-no-yome-nishi-no-shounen-to-seiran-no-kishi">
                        <h3 className="title">Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi</h3>
                      </a>
                      <p className="description">
                        La historia original de tres partes sigue a Gabriel, un chico común que se acaba
                        de mudar de Londres y estaba aburrido de su...
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=fantasia" className="btn btn-sm btn-light rounded-pill">Fantasía</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=recuentos-de-la-vida" className="btn btn-sm btn-light rounded-pill">Recuentos de la vida</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=shounen" className="btn btn-sm btn-light rounded-pill">Shounen</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="https://tioanime.com/anime/hanma-baki-son-of-ogre">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3553.jpg" alt="Hanma Baki: Son of Ogre" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Ova</span>
                    </div>
                    <div className="media-body">
                      <a href="https://tioanime.com/anime/hanma-baki-son-of-ogre">
                        <h3 className="title">Hanma Baki: Son of Ogre</h3>
                      </a>
                      <p className="description">
                        Tercera parte de la serie....
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=artes-marciales" className="btn btn-sm btn-light rounded-pill">Artes Marciales</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
              <a href="https://tioanime.com/directorio?type%5B%5D=2" className="btn btn-block btn-light rounded">Más
                Ovas</a>
            </section>
            {/* Últimos Especiales */}
            <section className="col-4 onas">
              <div className="header">
                <h1 className="title fa-fire">Últimos Especiales</h1>
              </div>
              <ul className="list-unstyled">
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="https://tioanime.com/anime/mahouka-koukou-no-rettousei-tsuiokuhen">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3591.jpg" alt="Mahouka Koukou no Rettousei: Tsuioku-hen" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Especial</span>
                    </div>
                    <div className="media-body">
                      <a href="https://tioanime.com/anime/mahouka-koukou-no-rettousei-tsuiokuhen">
                        <h3 className="title">Mahouka Koukou no Rettousei: Tsuioku-hen</h3>
                      </a>
                      <p className="description">
                        Mirando a Miyuki y Tatsuya ahora, podría ser difícil imaginarlos como algo más
                        que hermanos cariñosos. Pero no siempre...
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=ciencia-ficcion" className="btn btn-sm btn-light rounded-pill">Ciencia Ficción</a>
                        </span>
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=sobrenatural" className="btn btn-sm btn-light rounded-pill">Sobrenatural</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="anime media align-items-center">
                    <div className="thumb align-self-start">
                      <a href="/anime/kobayashisan-chi-no-maid-dragon-s-mini-dragon.html">
                        <figure className="fa-play-circle">
                          <img src="/uploads/portadas/3502.jpg" alt="Kobayashi-san Chi no Maid Dragon S Mini Dragon" />
                        </figure>
                      </a>
                      <span className="anime-type-peli">Especial</span>
                    </div>
                    <div className="media-body">
                      <a href="/anime/kobayashisan-chi-no-maid-dragon-s-mini-dragon.html">
                        <h3 className="title">Kobayashi-san Chi no Maid Dragon S Mini Dragon</h3>
                      </a>
                      <p className="description">
                        Cortos de Kobayashi-san Chi no Maid Dragon S...
                      </p>
                      <p className="genres">
                        <span className="btn btn-sm btn-primary rounded-pill">
                          <a href="https://tioanime.com/directorio?genero=comedia" className="btn btn-sm btn-light rounded-pill">Comedia</a>
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
              <a href="https://tioanime.com/directorio?type%5B%5D=3" className="btn btn-block btn-light rounded">Más
                Especial</a>
            </section>
          </div>
          {/* Últimos Animes */}
          <section>
            <div className="header">
              <h2 className="title fa-fire">Últimos Animes</h2>
              <a href="https://tioanime.com/directorio" className="btn btn-primary btn-sm rounded-pill">ver más</a>
            </div>
            <ul className="list-unstyled row">
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kaginado-season-2">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3658.jpg" alt="Kaginado Season 2" /></figure>
                    </div>
                    <h3 className="title">Kaginado Season 2</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen-3rd-season">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3657.jpg" alt="Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season" />
                      </figure>
                    </div>
                    <h3 className="title">Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo
                      Erandeiraremasen 3rd Season</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kono-healer-mendokusai">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3656.jpg" alt="Kono Healer, Mendokusai" /></figure>
                    </div>
                    <h3 className="title">Kono Healer, Mendokusai</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kingdom-4th-season">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3655.jpg" alt="Kingdom 4th Season" /></figure>
                    </div>
                    <h3 className="title">Kingdom 4th Season</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/spy-x-family">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3654.jpg" alt="Spy x Family" /></figure>
                    </div>
                    <h3 className="title">Spy x Family</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kawaii-dake-ja-nai-shikimorisan">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3653.jpg" alt="Kawaii dake ja Nai Shikimori-san" /></figure>
                    </div>
                    <h3 className="title">Kawaii dake ja Nai Shikimori-san</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kunoichi-tsubaki-no-mune-no-uchi">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3652.jpg" alt="Kunoichi Tsubaki no Mune no Uchi" /></figure>
                    </div>
                    <h3 className="title">Kunoichi Tsubaki no Mune no Uchi</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/ao-ashi">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3651.jpg" alt="Ao Ashi" />
                      </figure>
                    </div>
                    <h3 className="title">Ao Ashi</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/yatogamechan-kansatsu-nikki-4th-season">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3650.jpg" alt="Yatogame-chan Kansatsu Nikki 4th Season" /></figure>
                    </div>
                    <h3 className="title">Yatogame-chan Kansatsu Nikki 4th Season</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/kaguyasama-wa-kokurasetai-ultra-romantic">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3649.jpg" alt="Kaguya-sama wa Kokurasetai: Ultra Romantic" /></figure>
                    </div>
                    <h3 className="title">Kaguya-sama wa Kokurasetai: Ultra Romantic</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/jantama-pong">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3648.jpg" alt="Jantama Pong☆" /></figure>
                    </div>
                    <h3 className="title">Jantama Pong☆</h3>
                  </a>
                </article>
              </li>
              <li className="col-6 col-sm-4 col-md-3 col-xl-2">
                <article className="anime">
                  <a href="https://tioanime.com/anime/dance-dance-danseur">
                    <div className="thumb">
                      <figure className="fa-play-circle"><img src="/uploads/portadas/3647.jpg" alt="Dance Dance Danseur" /></figure>
                    </div>
                    <h3 className="title">Dance Dance Danseur</h3>
                  </a>
                </article>
              </li>
            </ul>
          </section>
        </div>
      </TioAnime>
      <Scripts />
    </>
  )
}
