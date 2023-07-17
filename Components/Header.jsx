import {Header_Container, Items_text, Sign_button, Icon} from "@/styled-component/Header-style";
import Image from "next/image";
import Link from "next/link";
function Header(props) {
    return (
        <>
            <Header_Container>
                <Icon>
                    <Link href={'/'}>
                    <Image width='' height='' src={require('@/public/header.svg')} alt=''/>
                        <div>Open Eyes</div>
                    </Link>
                </Icon>
                <div className={'right_section'}>
                    <Items_text><Link href={'/entry'} >SIGN IN</Link>
                       </Items_text>

                    <Sign_button><Link href={'entry'} className={'desc'}>
                        <Image width='' height='' src={require('@/public/signup.svg')} alt='user'/>
                        SIGN UP</Link>
                        <Link href={'entry'}  className={'mobile'}>
                            <Image width='' height='' src={require('@/public/signup.svg')} alt='user'/>
                           REGISTER</Link></Sign_button>
                </div>
            </Header_Container>

        </>
    );
}

export default Header;