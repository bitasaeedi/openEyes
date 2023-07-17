import {Help_Container, Help_Items} from "@/styled-component/help-style";
import Image from "next/image";
import React from "react";

function Help(props) {
    return (
        <>
            <Help_Container>

                <Help_Items>
                    <Image width='' height='' src={require('@/public/help1.svg')} alt='help-icon'/>
                    <div>
                        <h4>CREATE A REPORT - MENU ITEM "REPORT DEFECT"</h4>
                        <p>Send your request to the city in 30 seconds!</p>
                    </div>
                </Help_Items>

                <Help_Items>
                    <Image width='' height='' src={require('@/public/help2.svg')} alt='help-icon'/>
                    <div>
                        <h4>There are 2 variants:</h4>
                        <h6>- With pictures (recommended)</h6>
                        <p className={'margin'}>Take a photo (up to 3 photos are possible) SelectcategorySelect location manuallySubmit - DONE!
                            NOTE:Where it contributes to a better understanding, add a description in the optional text field.</p>
                        <h6>- Without pictures</h6>
                        <p>Select categoryInsert descriptionSelect location manuallySubmit  - DONE.</p>
                    </div>
                </Help_Items>

                <Help_Items>
                    <Image width='' height='' src={require('@/public/help3.svg')} alt='help-icon'/>
                    <div>
                        <h4>Message overviews:</h4>
                        <h6>- Map view</h6>
                        <p className={'margin'}>This shows you the position of the reports on the Klagenfurt map.
                            If you click on a pin, basic information is displayed.</p>

                        <h6>- List view</h6>
                        <p className={'margin'}>This gives you an overview of all messages with photos and status. If you click on Details,
                            detailed information is displayed.</p>

                        <h6>- Single view - Click on the message</h6>
                        <p>This is the detailed view of a message.
                            Here you can see the messages in detail and support them. As a registered user, you can also
                            follow a message and, as with your own messages, you will be informed of the status of the message by e-mail.
                            In the case of your own reports, you can also use the comment field to communicate with the city.</p>
                    </div>
                </Help_Items>

                <Help_Items>
                    <Image width='' height='' src={require('@/public/help4.svg')} alt='help-icon'/>
                    <div>
                        <h4>News</h4>
                        <p>As a registered user, you will be kept up to date on your reports and those you follow by e-mail.
                            The reports you have submitted are listed under the menu item "My reports" so that you
                            can view them again at any time. If you click on a message, you will automatically be taken
                            to the message in question.</p>
                    </div>
                </Help_Items>

                <Help_Items>
                    <Image width='' height='' src={require('@/public/help5.svg')} alt='help-icon'/>
                    <div>
                        <h4>Profile</h4>
                        <p>You will automatically receive a guest profile, which you can replace with your desired
                            profile. Not only do you give your reports a personal touch, but you can also upload a
                            profile picture or “Open your eyes! Klagenfurt" on multiple mobile devices with the same
                            profile.</p>
                    </div>
                </Help_Items>

            </Help_Container>
        </>
    );
}

export default Help;