import {Footer_container} from "@/styled-component/Footer-style";
import Image from "next/image";

function Footer(props) {
    return (
      <>
          <Footer_container>
              <div className={'left_section'}>
                  <div>Help</div>
                  <div>Contact</div>
                  <div>Rules</div>
              </div>
              <div className={'right_section'}>
                  <Image width='' height='' src={require('@/public/whatsapp.svg')} alt='whatsapp'/>
                  <Image width='' height='' src={require('@/public/insta.svg')} alt='instagram'/>
              </div>
          </Footer_container>
      </>
    );
}

export default Footer;