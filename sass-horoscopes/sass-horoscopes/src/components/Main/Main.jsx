import './Main.scss'
import Card from './Card'
import {data} from '../../helpers/data'

const Main = ({input, selectedSigns})=>{

    console.log(input)
    console.log(selectedSigns)

    const filteredData = data.filter((sign)=>{
        return sign.title.toLowerCase().includes(input.toLowerCase())
    })

    return(
        <div className="card-container">
            
            {/* Loop through array of signs */}
            {
                filteredData.map((sign)=> <Card key={sign.id} {...sign} />)
            }
        </div>
    )
}

export default Main