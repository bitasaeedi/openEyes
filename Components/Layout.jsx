import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Wrapper} from "@/styled-component/Header-style";

function Layout({children}) {
    return (

        <>
            <Wrapper>
            <Header/>
                {children}
            <Footer/>
        </Wrapper>
        </>
    );
}

export default Layout;