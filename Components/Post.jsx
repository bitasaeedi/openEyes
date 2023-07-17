import {Post_container} from "@/styled-component/HomePage-style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '@/styles/swiper.module.css'
import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';

function Post(props) {
    let posts=[
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        },
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        },
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        },
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        },
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        },
        {
            comments:"12",
            type:"in progress, covertihannel",
            location:"Mozartstrasse 40",
            Description:"From Mozartstr. 32 to Mozartstr. 40 the sidewalk is completely flooded. About 1 hour after the rain," +
                " the water depth is still 15 cm, the sidewalk is not usable.Please clean the sewers or...."
        }
    ]
    return (
       <>
           <Swiper
               slidesPerView={3.1}
               spaceBetween={25}
               modules={[Pagination]}

               className={style.MySwiper}
               breakpoints={{
                   300:{
                       slidesPerView: 1,
                   },
                   600: {
                       slidesPerView: 1,
                   },

                   1000: {
                       slidesPerView: 3.1,
                   },
               }}
           >
               {posts.map((post,index)=>{
                   return <SwiperSlide>
                       <Post_container key={index}>
                           <Link href={'/report'}>
                               <div className="top">
                                   <Image width='' height='' src={require('@/public/post.png')} alt='bridge'/>
                                   <div>
                                       <Image width='' height='' src={require('@/public/star.svg')} alt='star'/>
                                       <div className={'like'}><Image width='' height='' src={require('@/public/like.svg')} alt='star'/>{post.comments}</div>
                                   </div>
                               </div>

                               <div className="bottom">
                                   <div><Image width='' height='' src={require('@/public/tick.svg')} alt='star'/>{post.type}</div>
                                   <div><Image width='' height='' src={require('@/public/location.svg')} alt='star'/>{post.location}</div>
                                   <p>{post.Description}</p>
                               </div>
                           </Link>
                       </Post_container>
                   </SwiperSlide>
               })}
           </Swiper>
       </>
    );
}

export default Post;