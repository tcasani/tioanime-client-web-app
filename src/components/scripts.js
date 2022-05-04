// import styles from "./tioanime.module.css";
import Script from 'next/script'

export default function Scripts({ children }) {
    return (
        <>
            {/* <Script src="/assets/js/jquery-3.3.1.min.js"></Script> */}
            {/* <Script src="/assets/js/popper.min.js"></Script> */}
            {/* <Script src="/assets/js/bootstrap.min.js"></Script> */}
            {/* <Script src="/assets/js/typewatch.js"></Script> */}
            <script>
                var day_mode = 0;
            </script>
            {/* <Script src="/assets/js/tio.js"></Script> */}
            {/* <Script src="/assets/js/axios.min.js"></Script> */}
            {/* <Script src="/assets/js/auth.js"></Script> */}
            {/* <Script src="/assets/js/chs.js"></Script> */}
            {/* <Script src="/assets/js/ran.js"></Script> */}

            {/* <!-- Global site tag (gtag.js) - Google Analytics
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134817444-1"></Script>
                    --> */}
            {/* <Script src="/assets/js/js"></Script> */}
            {/* <Script src='/assets/js/gtag_init.js'></Script> */}
            { children }
        </>
    )
}