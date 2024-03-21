const Button = ({method, handleClick})=>{
    return <button onClick={(e)=>handleClick(e,method)}>{method}</button>
}

export default Button;