
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import background from "/background.png"


function parallax() {
    return(
        <div className="h-full">
            <Parallax pages={3}>
                
                <ParallaxLayer 
                offset={0}
                speed={.75}
                factor={2}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    color: 'black'
                }}/>
            </Parallax>
        </div>
    )
}

export default parallax