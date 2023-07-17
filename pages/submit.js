import {
    Category_input,
    Container,
    Description,
    Location_Input,
    Submit_btn,
    Upload_box, Voice_container
} from "@/styled-component/submit-style";
import Image from "next/image";

function Submit(props) {
    return (
       <>
           <Description>
               <h6>SUBMIT A NEW DEFECT</h6>
               <p>
                   With just a few clicks you can tell us your concerns. Select an address, upload up to three
                   multimedia, pick an category, tell us about the issue and you’re done.
               </p>
           </Description>
           <Container>
               <h6>Location</h6>
               <Location_Input>
                   <div>
                       <Image width='' height='' src={require('@/public/loc-input.svg')} alt=''/>
                       <input placeholder={'Enter your location...'}/>
                   </div>
                   <span><Image width='' height='' src={require('@/public/My location.svg')} alt=''/></span>
               </Location_Input>
               <Image width='' height='' src={require('@/public/image 2.png')} alt=''/>
               <h6>Category</h6>
               <Category_input>
                   <div>
                       <Image width='' height='' src={require('@/public/category.svg')} alt=''/>
                       <input placeholder={'Pick an category'}/>
                   </div>
                   <span><Image width='' height='' src={require('@/public/Arrow drop down.svg')} alt=''/></span>
               </Category_input>

               <h6>Description</h6>
               <textarea placeholder={'Anything about the issue...'}/>

               <h6>Pictures and videos</h6>

               <Upload_box>
                   <Image width='' height='' src={require('@/public/Image.svg')} alt=''/>
                   <div><span>Drag & drop files or</span> browse media on your device</div>
               </Upload_box>

               <h6>Audio</h6>
               <Voice_container>
                   <div className={'audio'}>
                       <Image width='' height='' src={require('@/public/audio1.svg')} alt=''/>
                       <span>0:00 / 0:00</span>
                       <div></div>
                       <Image width='' height='' src={require('@/public/audio2.svg')} alt=''/>
                       <Image width='' height='' src={require('@/public/audio3.svg')} alt=''/>
                   </div>
                   <div className={'img'}><Image width='' height='' src={require('@/public/audio4.svg')} alt=''/></div>
                   <div className={'img'}><Image width='' height='' src={require('@/public/audio5.svg')} alt=''/></div>
               </Voice_container>
               <div className={'terms'}>
                   <input type={'checkbox'}/>
                   <div>I agree to the <span>terms and conditions </span> and to the processing of my data as described
                       in the<span> data protection declaration</span></div>
               </div>
               <Submit_btn>SUBMIT</Submit_btn>


           </Container>
       </>
    );
}

export default Submit;