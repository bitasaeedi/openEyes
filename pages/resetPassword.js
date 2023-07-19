import {
    Container,
    Input_box,
    Left_section,
    Right_section,
    Sign_button,
    Switch_Box
} from "@/styled-component/entry-style";
import Image from "next/image";
import {useState} from "react";

function ResetPassword(props) {
    let [sendLink, setSendLink] = useState(true);

    function set() {
        setSendLink(false);
    }

    return (
        <>
            <Container>

                <Left_section>
                    <Image width='' height='' src={require('@/public/sign1.svg')} alt=''/>
                    <div>By registering, you will be able to post your own reports and also comment on other reports.
                    </div>
                </Left_section>

                <Right_section>
                    {sendLink ? <SendLink sendLink={set}/> : <NewPass/>}

                </Right_section>

            </Container>
        </>
    );
}

export default ResetPassword;

function SendLink({sendLink}) {
    let [ShowPass, setShowPass] = useState(false);
    return <>
        <Switch_Box center>
            <div className={'chosen center'}>RESET PASSWORD</div>
        </Switch_Box>
        <p className="text">Please provide the email address that you used when you signed up
            for your account.</p>
        <Input_box>
            <Image width='' height='' src={require('@/public/sign2.svg')} alt=''/>
            <input placeholder={'E-mail'}/>
        </Input_box>
        <p className="text">We will send you an email that will allow you to reset
            your password..</p>
        <Sign_button onClick={sendLink}>SEND LINK</Sign_button>
    </>
}

function NewPass() {
    let [ShowPass, setShowPass] = useState(false);
    let [ShowPass2, setShowPass2] = useState(false);
    return <>
        <Switch_Box center>
            <div className={'chosen center'}>RESET PASSWORD</div>
        </Switch_Box>
        <Input_box>
            <Image width='' height='' src={require('@/public/sign3.svg')} alt=''/>
            <input placeholder={'Password (at least 8 character)'} type={ShowPass === true ? 'text' : 'password'}/>
            <div onClick={()=>{setShowPass(!ShowPass)}}><Image width='' height='' src={require('@/public/sign4.svg')} alt=''/></div>
        </Input_box>
        <Input_box>
            <Image width='' height='' src={require('@/public/sign3.svg')} alt=''/>
            <input placeholder={'Confirm new password'}  type={ShowPass2 === true ? 'text' : 'password'}/>
            <div onClick={()=>{setShowPass2(!ShowPass2)}}><Image width='' height='' src={require('@/public/sign4.svg')} alt=''/></div>
        </Input_box>

        <Sign_button>RESET</Sign_button>
    </>
}