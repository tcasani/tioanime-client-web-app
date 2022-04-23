import Header from './header'
import Footer from './footer'
import Modals from "./modals";
// import styles from "./tioanime.module.css";

export default function TioAnime({ children }) {
    return (
        <>
            <div id="tioanime">
                <Header />
                {children}
                <Footer />
            </div>
            <Modals />
        </>
    )
}