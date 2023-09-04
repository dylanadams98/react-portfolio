import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({pages, onSetPage, children}) {
    return (
        <Container>
        <Header pages={pages} onSetPage={onSetPage} />
        <main>{children}</main>
        <Footer />
        </Container>
        );
    }

export default Layout;