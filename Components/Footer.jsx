import {Footer_container} from "@/styled-component/Footer-style";
import Image from "next/image";
import Link from "next/link";

function Footer(props) {
    return (
      <>
          <Footer_container>

              <div className={'left_section'}>
                  <hr/><hr/>

                  <div><Link href={'/help'}>Help</Link></div>
                  <div><Link href={'/dataProtection'}>Data protection</Link></div>
                 <div><Link href={''}>Terms of use</Link></div>
                  <div><Link href={'/rules'}>Rules</Link></div>
                  <div><Link href={'/aboutUs'}>About us</Link></div>

              </div>

              <div className={'right_section'}>
                  <Image width='' height='' src={require('@/public/linkdin.png')} alt='whatsapp'/>
                  <Image width='' height='' src={require('@/public/insta.svg')} alt='instagram'/>
              </div>
          </Footer_container>
      </>
    );
}

export default Footer;