// import Link from 'next/link'
// import styles from './header.module.css'

export default function Header() {
    return (
        <>
            <header>
                <nav className="menu navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        {/* Logo */}
                        <a className="navbar-brand" href="/">
                            <figure className="logo"><img src="/assets/img/logo-dark.png" alt="logo" /></figure>
                        </a>
                        {/* Botón menú (Solo vista móvil) */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Navbar */}
                        <div className="collapse navbar-collapse" id="menu">
                            {/* Botones de login y registro */}
                            <div className="user-box order-3 ml-lg-4 mt-3 mb-3">
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-primary btn-login btn-block" type="button" data-toggle="modal" data-target="#modal-login"><i className="fa-user mr-0" />
                                            <span className="d-lg-none ml-2">Entrar</span></button>
                                    </div>
                                    <div className="col d-lg-none">
                                        <button className="btn btn-primary btn-signup btn-block" type="button" data-toggle="modal" data-target="#modal-signup">
                                            <i className="fa-user-lock mr-0" />
                                            <span className="d-lg-none ml-2">Registro</span></button>
                                    </div>
                                </div>
                            </div>
                            {/* Enlaces a páginas */}
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                                <li className="nav-item"><a className="nav-link" href="/directorio">Animes</a></li>
                                <li className="nav-item fa-star"><a className="nav-link" href="/programacion">Programación
                                    Semanal</a></li>
                            </ul>
                            {/* Widget de búsqueda */}
                            <div className="search dropdown">
                                <form action="/directorio" method="get" id="results" autoComplete="off" data-toggle="dropdown">
                                    <label className="form-icon fa-search">
                                        <input className="form-control" name="q" id="search-anime" type="search" placeholder="Buscar..." aria-label="Buscar..." />
                                    </label>
                                </form>
                                <div className="results dropdown-menu" id="search-results" aria-labelledby="results">
                                    <div className="text-center">Escribe al menos 2 caracteres</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}