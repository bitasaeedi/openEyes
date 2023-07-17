import {Container, Item} from "@/styled-component/pages-style";
import Image from "next/image";
import React from "react";

function DataProtection(props) {
    return (
        <>
            <Container>
                <Item>
                    <Image width='' height='' src={require('@/public/data.svg')} alt=''/>

                    <div>

                        <h4>DATA PROTECTION</h4>
                        <h4>Approval</h4>
                        <div>By using the website, users expressly agree to these data protection provisions.</div>
                        <br/><br/>
                        <h4>Information requirements</h4>
                        <div>The privacy and protection of the data of the users are of great concern to the operator.
                            Personal data will only be processed by the City of Klagenfurt to the extent that there is
                            legal responsibility for this. In addition, for the various services offered on the website
                            that you can use, the data you provide to us in this context will be processed so that we
                            can provide the service you require. However, this data is only used for the respective service provision.</div>
                        <br/>
                        <div>The purpose of the website is to report and publish messages and comments for the city
                            administration, but - in the sense of a transparent service - also for the other users
                            (community). The operator expressly points out that all data that users transmit as part of
                            reports, comments and the like can be viewed immediately and in full by the public.
                            Users are required to handle their own and third-party data responsibly!</div>

                    <br/>
                    <div>All from the city of personal data processed will only be passed on to third parties or used
                        for a purpose other than the original purpose in which we</div>
                    <ul>
                        <li>are legally obliged to do so (e.g. in the case of judicial investigations in the course of investigating a criminal offence) or</li>
                        <li>the service requested by you cannot be provided otherwise according to your wishes or</li>
                        <li>have your consent to do so.</li>
                    </ul>
                    <div>Such consent can be revoked at any time in writing. This is also possible by e-mail to the address given in the imprint.</div>
                    <br/>
                    <div>By using the website, users consent to the following data being collected, stored and publicly displayed:</div>
                    <ul>
                        <li>When registering, the user collects profile information (profile name, etc.).
                            Interactions such as creating reports or comments are visible to all other users.</li>
                    </ul>
                    <br/>
                    <div>Recommendation: The profile name to be selected by the user should not allow any conclusions
                        to be drawn about the first and last name, unless the public display of the real name is desired.</div>
                    <br/>
                    <div>The following data is collected and stored, but not publicly displayed:</div>
                    <ul>
                        <li>E-mail address for registered users (use on several end devices, etc.);</li>
                    </ul>
                    <br/>
                    <h4>Retention Policy</h4>
                    <div>Personal data is stored in accordance with the applicable archiving and mapping regulations
                        of the city of Klagenfurt and subsequently deleted (status 2016: 5 years). Data in non-personal
                        form can be used, for example, for statistical purposes, to improve services, in the context of
                        public relations, for research purposes, etc.</div>
                    </div>
                </Item>

            </Container>
        </>
    );
}

export default DataProtection;