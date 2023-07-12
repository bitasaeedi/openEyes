import {Header_Container, Items_text, Sign_button, Toggle} from "@/styled-component/Header-style";
import Image from "next/image";
import Link from "next/link";

function Header(props) {
    return (
        <Header_Container>
            <Items_text>Help</Items_text>
            <div className={'right_section'}>
                <Toggle> <Image width='' height='' src={require('@/public/toggle.svg')} alt='toggle'/></Toggle>
                <Items_text><Link href={''}>SIGN IN</Link></Items_text>

                <Sign_button><Link href={''}>
                    <Image width='' height='' src={require('@/public/signup.svg')} alt='user'/>
                    SIGN UP</Link></Sign_button>
            </div>
        </Header_Container>
    );
}

export default Header;