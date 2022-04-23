// import Link from 'next/link'
// import styles from './modals.module.css'

export default function Modals() {
    return (
        <>
            {/* Modal para inicio de sesión */}
            <div className="modal fade modal-user" id="modal-login" tabIndex={-1} role="dialog" aria-labelledby="modal-loginTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h5 className="modal-title p-3" id="modal-loginTitle">
                                <i className="fa-user text-success mr-3" />
                                Iniciar Sesion
                            </h5>
                            <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
                                <i aria-hidden="true" className="fa-times" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="messages_in" />
                            <form action="https://tioanime.com/#" className="p-3">
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input type="text" id="email" className="form-control form-control-lg" />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Contraseña</label>
                                    <input type="password" id="password" className="form-control form-control-lg" />
                                </div>
                                <p className="text-right mb-4">
                                    <button type="button" className="btn btn-primary btn-recovery text-success" data-toggle="modal" data-target="#modal-recovery" data-dismiss="modal">
                                        Olvide mi contraseñá
                                    </button>
                                </p>
                                <div className="mb-4">
                                    <button type="button" onClick='auth.in();' className="btn btn-primary btn-block btn-lg">Iniciar
                                        Sesion</button>
                                </div>
                                <div className="login-text">
                                    ¿No tienes una cuenta?
                                    <button type="button" className="btn btn-primary text-success" data-toggle="modal" data-target="#modal-signup" data-dismiss="modal">Registrate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal para recuperar contraseña */}
            <div className="modal fade modal-user" id="modal-recovery" tabIndex={-1} role="dialog" aria-labelledby="modal-recoveryTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h5 className="modal-title p-3" id="modal-recoveryTitle">
                                <i className="fa-lock text-success mr-3" />
                                Recuperar Contraseña
                            </h5>
                            <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
                                <i aria-hidden="true" className="fa-times" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="messages_ar" />
                            <form action="https://tioanime.com/#" className="p-3">
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input type="text" id="ar_email" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <button type="button" onClick="auth.ar();" className="btn btn-primary btn-block btn-lg">Enviar
                                        mensaje</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal para registro de cuenta */}
            <div className="modal fade modal-user" id="modal-signup" tabIndex={-1} role="dialog" aria-labelledby="modal-signupTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h5 className="modal-title p-3" id="modal-signupTitle">
                                <i className="fa-user-lock text-success mr-3" />
                                Registrate
                            </h5>
                            <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
                                <i aria-hidden="true" className="fa-times" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="messages_ts">
                            </div>
                            <form action="https://tioanime.com/#" className="p-3">
                                <div className="form-group">
                                    <label>Usuario</label>
                                    <input type="text" id="ts_user" className="form-control form-control-lg" />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Email</label>
                                    <input type="email" id="ts_email" className="form-control form-control-lg" />
                                </div>
                                <div className="form-group mb-4 position-relative">
                                    <label>Contraseña</label>
                                    <input type="password" id="ts_password" className="form-control form-control-lg" />
                                    <button type="button" className="btn btn-primary btn-showpass"><i className="fa-eye mr-0" /></button>
                                </div>
                                <div className="mb-4">
                                    <button type="button" onClick="auth.up();" className="btn btn-primary btn-block btn-lg">Registrate</button>
                                </div>
                                <div className="login-text">
                                    ¿Ya tienes una cuenta?
                                    <button type="submit" className="btn btn-primary text-success" data-toggle="modal" data-target="#modal-login" data-dismiss="modal">Iniciar Sesion</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}