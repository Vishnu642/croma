import { DemoCarousel } from '../components/Slider'
import { NewAtCroma } from '../components/NewAtCroma'
import { Highlights } from '../components/Highlights'

export const Homepage = ()=>{
    return(
        <div>
            <DemoCarousel/>
            <Highlights/>
            <NewAtCroma/>
        </div>
    )
}