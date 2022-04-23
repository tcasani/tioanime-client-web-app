// import Link from 'next/link'
// import styles from './footer.module.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    {/* Footer nav */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <figure className="navbar-brand logo"><img src="/assets/img/logo-ft.png" alt="logo" /></figure>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftnav" aria-controls="ftnav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="ftnav">
                            <ul className="menu-ft navbar-nav mr-auto">
                                <li className="nav-item"><a className="nav-link" href="/peticiones">Peticiones</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                            </ul>
                            <ul className="social-ft navbar-nav">
                                <li className="nav-item"><a className="nav-link fa-twitter fab" href="https://twitter.com/TioAnime5" rel="nofollow" target="_blank" /></li>
                                <li className="nav-item"><a className="nav-link fa-facebook-f fab" href="https://www.facebook.com/tioanimeonline/" rel="nofollow" target="_blank" />
                                </li>
                                <li className="nav-item"><a className="nav-link fa-youtube fab" href="https://www.youtube.com/channel/UC71wO3noGfhEx8WBcy9emLw/" rel="nofollow" target="_blank" /></li>
                            </ul>
                        </div>
                    </nav>
                    {/* Copyright */}
                    <p>2019 tioanime.com</p>
                    {/* Cambiar tema */}
                    <button className="btn btn-primary changeview on">
                        <span className="fa-moon">Noche</span>
                        <span className="fa-sun">Dia</span>
                    </button>
                </div>
            </footer>
        </>
    )
}