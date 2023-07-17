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

function Entry(props) {
    let [signUp,setSignUp]=useState(true);
    return <>
        <Container>

            <Left_section>
                <Image width='' height='' src={require('@/public/sign1.svg')} alt=''/>
                <div>By registering, you will be able to post your own reports and also comment on other reports.</div>
            </Left_section>

            <Right_section>
                <Switch_Box>
                    <div className={signUp===false?'chosen':''} onClick={()=>{setSignUp(false)}}>SIGN IN</div>
                    <div  className={signUp===true?'chosen':''}  onClick={()=>{setSignUp(true)}}>SIGN UP</div>
                </Switch_Box>
                {signUp===true?<Sign_Up/>:<SIGN_IN/> }

            </Right_section>

        </Container>
    </>
}

export default Entry;

function SIGN_IN(){
    let[ShowPass,setShowPass]=useState(false);
    return(
        <>
            <Input_box>
                <Image width='' height='' src={require('@/public/sign2.svg')} alt=''/>
                <input placeholder={'E-mail'}/>
            </Input_box>

            <Input_box>
                <Image width='' height='' src={require('@/public/sign3.svg')} alt=''/>
                <input placeholder={'Password'} type={ShowPass===true?'text':'password'}/>
                <div onClick={()=>{setShowPass(!ShowPass)}}><Image width='' height='' src={require('@/public/sign4.svg')} alt=''/></div>
                <span>Forgot password?</span>
            </Input_box>
            <Sign_button>SIGN IN</Sign_button>
            <p>Don’t have an account?<span>Sign up here</span></p>
        </>
    )
}
function Sign_Up(){
    return (
        <>
            <Input_box>
                <Image width='' height='' src={require('@/public/sign in5.svg')} alt=''/>
                <input placeholder={'Full name'}/>
            </Input_box>

            <Input_box>
                <Image width='' height='' src={require('@/public/sign in5.svg')} alt=''/>
                <input placeholder={'Nickname'}/>
            </Input_box>

            <Input_box>
                <Image width='' height='' src={require('@/public/sign2.svg')} alt=''/>
                <input placeholder={'E-mail'}/>
            </Input_box>

            <Input_box>
                <Image width='' height='' src={require('@/public/sign3.svg')} alt=''/>
                <input placeholder={'Password (at least 8 character)'} type={'password'}/>
                <Image width='' height='' src={require('@/public/sign4.svg')} alt=''/>
            </Input_box>

            <Input_box>
                <Image width='' height='' src={require('@/public/sign3.svg')} alt=''/>
                <input placeholder={'Confirm password'} type={'password'}/>
                <Image width='' height='' src={require('@/public/sign4.svg')} alt=''/>
                <span><input type={'checkbox'}/>I accept the term of use & privacy policy </span>
            </Input_box>

            <Sign_button>SIGN UP</Sign_button>
            <p>Already have an account?<span>Sign in here</span></p>
        </>
    )
}