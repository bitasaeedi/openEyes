import React from 'react';
import {Description,Color_span, Container, Description_Box, Rating_box, Slider, Vote_btn} from "@/styled-component/report-style";
import Image from "next/image";

function Report(props) {
    return (
        <>
            <Description>
                <h6>VIEW & REPLY A DEFECT</h6>
                <p>
                    Here you can see others reports and also add comment on it. You can rate the registered report in
                    terms of importance in 4 levels.
                </p>
            </Description>
            <Container>
                <Slider>
                    <Image width='' height='' src={require('@/public/view1.svg')} alt=''/>
                   <div> <Image width='' height='' src={require('@/public/view-img.png')} alt=''/>
                       <Image width='' height='' src={require('@/public/view3.svg')} alt=''/> </div>
                    <Image width='' height='' src={require('@/public/view2.png')} alt=''/>
                </Slider>
                <div className={'infos'}>
                    <div> <Image width='' height='' src={require('@/public/view4.svg')} alt=''/>
                    <h6>Abt-Moser-Gasse 10</h6></div>

                    <div> <Image width='' height='' src={require('@/public/view5.svg')} alt=''/>
                        <h6>from Abdolhamid on 18 may 2023 16:49</h6></div>

                    <div> <Image width='' height='' src={require('@/public/view6.svg')} alt=''/>
                        <h6>cover/channel</h6></div>
                </div>
                <Description_Box>
                    <span>DESCRIPTION</span>
                    <p>
                        For about 10 days, the Hofer company has been storing the residual waste in front of the
                        unoccupied house at Rizzistrasse 25, apparently with the intention of preventing other cars
                        from parking, although there is no parking or stopping ban at this point.
                    </p>
                </Description_Box>
                <h6>By participating in the voting , help us prioritize the urgent issues. Rate from scale 1 star to
                    4 stars depend on the issue importance.</h6>
                <Rating_box>
                    <div className="header">
                        <div><span>Started at </span> 18 may 2023 </div>
                        <div><span>Expires on </span> 30 may 2023 </div>
                        <div>29 <span> votes</span></div>
                    </div>
                    <div className="main">
                        <div className={'right_section'}>
                            <div>
                                <div>Critical<Color_span color={'#FF0000'}></Color_span></div>
                                <p>The issue requires immediate attention due to serve impact.</p>
                            </div>
                            <div>
                                <div>Hight<Color_span color={'#FF8A00'}></Color_span></div>
                                <p>The issue has a significant impact and should be addressed promptly.</p>
                            </div>
                            <div>
                                <div>Medium<Color_span color={'#FFF500'}></Color_span></div>
                                <p>The issue has a moderate impact and should be resolved in a reasonable timeframe.</p>
                            </div>
                            <div>
                                <div>Low<Color_span color={'#00F0FF'}></Color_span></div>
                                <p>The issue has minimal impact and can be addressed later.</p>
                            </div>
                        </div>

                        <div className={'left_section'}>
                            <span>10</span>
                            <span>15</span>
                            <span>4</span>
                            <span>0</span>
                        </div>
                    </div>
                </Rating_box>
                <Image width='' height='' src={require('@/public/view7.svg')} alt=''/>
                <Vote_btn>VOTE</Vote_btn>
            </Container>
        </>
    );
}

export default Report;