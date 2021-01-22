import React, {useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'
import {Title} from '../components/title'
import {VideoWrapper,HeroSubtext,HeroWrapper,HeroDiv2,HeroVideoText,HeroDiv1,HeroText,HeroImg,NewsButton} from '../css/home'
import '../css/spring.css'
import { RiArrowRightSLine } from "react-icons/ri"
import axios from 'axios'
import VideoThumbs from '../components/video-thumbs'

const Home = () => {
    const [flipped, set] = useState(false);
    const [tonight, showTonight] = useState(false);
    const [videos, setVideos] = useState([]);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 400, friction: 80 }
    })
    const bingUrl = `https://api.bing.microsoft.com/v7.0/videos/search?q=boxing&count=30`;
	let bingConfig = {
		headers: {
			'Ocp-Apim-Subscription-Key':'6a73128b44654f1fa4495445ffb5b927',
			'data':'jsonp'
			// 'Access-Control-Allow-Origin':'*'
		}
	};
    useEffect(() => {
        const getVideos = async () => {
			await axios(bingUrl, bingConfig)
                .then(res => setVideos(res.data.value))
				// .then(() => console.log('val: ',res))
				// .then(() => setLoading(false))
				.catch(err => console.log(err));
		}
		getVideos()
    },[]);
    
    console.log('videos: ',videos)
    return (
        <>
            <Title/>
            <HeroWrapper>
                <HeroDiv1>
                    <HeroText>Latest Boxing News</HeroText>
                    <HeroSubtext>Updated in Real Time</HeroSubtext>
                    <NewsButton to="/news">News<span style={{marginLeft: '1rem',marginTop: '8px'}}><RiArrowRightSLine /></span></NewsButton>
                </HeroDiv1>
                <HeroDiv2>
                    <HeroImg src="/boxer_in_ring.jpg"></HeroImg>
                </HeroDiv2>
            </HeroWrapper>
            <VideoWrapper>
            <HeroVideoText style={{display: 'block',width: '100%',padding:'2rem',marginLeft: '2rem',paddingBottom:'0'}}>Latest Boxing Videos</HeroVideoText>
                <VideoThumbs videos={videos}/>
            </VideoWrapper>
        </>
    )
}
export default Home