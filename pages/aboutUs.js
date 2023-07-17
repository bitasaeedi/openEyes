import {Container, Item} from "@/styled-component/pages-style";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function AboutUs(props) {
    return (
        <>
            <Container>
                <Item>
                    <Image width='' height='' src={require('@/public/us.svg')} alt=''/>
                    <div>
                        <div>
                            <span>Open eyes is an international project that is a subdivision of an larger foundation
                                called</span>
                            “International Association for the Advancement of Innovative Approaches to Global Challenges IAAI”.
                            <span>. IAAI main objective is to explore and promote systemic innovation regarding resource mobilization of global civil society for effective global governance in support of the work of United Nation System.
                                See more information in </span>
                            <span><Link href={'www.glocha.info.'}>www.glocha.info.</Link></span>
                            <br/>
                            <span>This project has been developed with the help of austria university and university
                                of kurdistan.</span>
                        </div>
                    </div>
                </Item>
                <Image width='' height='' src={require('@/public/about.png')} alt=''/>
            </Container>
        </>
    );
}

export default AboutUs;