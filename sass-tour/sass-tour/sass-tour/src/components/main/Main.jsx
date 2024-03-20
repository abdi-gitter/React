import {data} from '../../data'
import Card from './Card'
import './Main.scss'

const Main = ()=>{
    console.log(data)

    // Think of this as being our card component:
    function log({title, desc, image}){
        console.log(title)
        console.log(desc)
        console.log(image)
    }

    // Think of this as being the map function used below:
    data.map((place)=>log({...place}))

    return(
        <div className="card-container">
            {/* rendering an array: */}
            {
                data.map((place)=><Card {...place} key={place.id}/>)
                // data.map((place)=><Card title="some title" desc="desc" image="srcVal" key={place.id}/>)
            }
        </div>
    )
}

export default Main