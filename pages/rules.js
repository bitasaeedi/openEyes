import {Container, Item} from "@/styled-component/pages-style";
import Image from "next/image";

function Rules(props) {
    return (
        <>
            <Container>
                <Item>
                    <Image width='' height='' src={require('@/public/rules.svg')} alt=''/>
                    <div>
                        <h4>RULES</h4>
                        <div><span>The city administration looks forward to your reports and the opportunity to work together
                            to make</span> our city even more liveable.</div>
                        <ul>
                            <li>Formulate your report factually and respectfully, even if you should get angry.</li>
                            <li>Be careful not to photograph, post, or post faces, license plates, or other subjects
                                that may violate privacy.</li>
                            <li>Please do not post any content, whether text or images, that could offend or embarrass others' dignity.</li>
                            <li>Do not place any documents, e-mails, texts, images, videos, etc. of third parties online
                                without their express written consent.</li>
                            <li>Of course, any kind of advertising is not allowed.</li>
                        </ul>
                        <h6>If you break these rules, especially if you use insults, we will unfortunately have to
                            remove your post.</h6>
                        <ul>
                            <li>Try to be brief, without forgetting the essential information, so that the city
                                administration can act on your report.</li>
                            <li>Please do not write longer texts in capital letters.</li>
                            <li className={'bold'}> Please also read and accept our terms and conditions and terms of use.</li>
                        </ul>
                    </div>
                </Item>
            </Container>
        </>
    );
}

export default Rules;