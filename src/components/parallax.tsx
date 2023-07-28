
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import background from "/background.jpg"
import art1 from "/art1.jpg"
import art2 from "/art2.jpg"
import { color } from "framer-motion"

function parallax() {
    return(
        <div className="h-full">
            <Parallax pages={4}>
                
                <ParallaxLayer 
                offset={0}
                speed={1}
                factor={1}
                style={{
                    backgroundImage: `url(${art1})`,
                }}/>
                <ParallaxLayer 
                offset={.5}
                speed={.25}
                factor={1}
                style={{
                    color: "white"

                }}>
                    <h1 className="text-9xl text-center">hey 👋, my name is</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={.80}
                    speed={1}
                    factor={1}
                    sticky={{start: .8, end: .8}}
                    style={{
                        color: "blue"
                    }}>
                    <h1 className="text-9xl text-center">logan!</h1>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={.5}
                    factor={1}
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}>
                    <h1 className="text-9xl">i'm a lighting designer with a passion for web development!</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default parallax