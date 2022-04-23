// import styles from "./tioanime.module.css";

export default function Scripts({ children }) {
    return (
        <>
            <script src="/assets/js/jquery-3.3.1.min.js"></script>
            <script src="/assets/js/popper.min.js"></script>
            <script src="/assets/js/bootstrap.min.js"></script>
            <script src="/assets/js/typewatch.js"></script>
            <script>
                var day_mode = 0;
            </script>
            <script src="/assets/js/tio.js"></script>
            <script src="/assets/js/axios.min.js"></script>
            <script src="/assets/js/auth.js"></script>
            <script src="/assets/js/chs.js"></script>
            <script src="/assets/js/ran.js"></script>

            {/* <!-- Global site tag (gtag.js) - Google Analytics
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134817444-1"></script>
                    --> */}
            <script src="/assets/js/js"></script>
            <script src='/assets/js/gtag_init.js'></script>
            { children }
        </>
    )
}