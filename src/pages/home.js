import React, {useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'
import {Title} from '../components/title'
import {HeroDiv,FrontImage} from '../css/home'
import '../css/spring.css'

const Home = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 400, friction: 80 }
    })
    useEffect(() => {
        setTimeout(() => set(state => !state),3000);
    },[]);
    return (
        <>
            <Title/>
            <div onClick={() => set(state => !state)}>
                <a.div className="c front" style={{width: '100%', backgroundImage: 'url(/boxer_in_ring.jpg)',opacity: opacity.interpolate(o => 1 - o), transform }} />
                <a.div className="c back" style={{ backgroundImage: 'url(/garcia-vs-campbell.png)',opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
            </div>
        </>
    )
}
export default Home