// import styles from './fb_plugin.module.css'
import Script from 'next/script'

export default function Fb_plugin() {
    return (
        <>
            {/* Inicio configuración FB */}
            <div id="fb-root" />
            <Script src="/assets/js/fb_config.js/"></Script>
            {/* Fin configuración FB */}
        </>
    )
}