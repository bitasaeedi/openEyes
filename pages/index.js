import React from 'react';
import {
    Map,
    Posts_Container,
    Welcome_section,
    Welcome_section_mobile,
    Wrapper
} from "@/styled-component/HomePage-style";
import Image from "next/image";
import Post from "@/Components/Post";
import Link from "next/link";

export default function Home(props) {
    return (
        <>


            <Welcome_section>
                <div className={'text'}>
                    <h4>IAAI Challenge Mapping</h4>
                    <div>Where you can share your city problems with other to improve the quality of life
                        in your city.
                    </div>
                    <Link href={'/help'} className={'link'}>See how you can report a defect...</Link>
                    <div>Report your defect as much detail as possible here.</div>
                    <Link href='/submit' className='btn'>REPORT DEFECT</Link>
                </div>
                <div><Image width='' height='' src={require('@/public/home.png')} alt=''/></div>
            </Welcome_section>
            <Wrapper>
                <Welcome_section_mobile>
                    <div><Image width='' height='' src={require('@/public/homeimage.jpeg')} alt=''/></div>
                    <div className={'text'}>
                        <h4>IAAI Challenge Mapping</h4>
                        <div>Where you can share your city problems with other to improve the quality of life
                            in your city.
                        </div>
                        <Link href={'/help'} className={'link'}>See how you can report a defect...</Link>
                        <div>Report your defect as much detail as possible here.</div>
                        <Link href='/submit' className='btn'>REPORT DEFECT</Link>
                    </div>
                </Welcome_section_mobile>
                <Map>
                    <h4>OTHER PEOPLE’S REPORTS</h4>
                    <p>Here you can see what other peoples reported about your city briefly. Read them and vote of their importance if needed.</p>
                    <Image width='' height='' src={require('@/public/map.png')} alt='map'/>
                </Map>
                <Posts_Container>
                    <Post/>
                </Posts_Container>
            </Wrapper>
        </>
    );
}

