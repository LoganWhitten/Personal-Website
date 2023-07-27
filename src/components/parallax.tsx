
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export default function parallax() {
    return(
        <div className="bg-black">
            <Parallax pages ={2}>
                <ParallaxLayer>
                    <h1>sup</h1>
                </ParallaxLayer>
                <ParallaxLayer>
                    <h1>gamers</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

