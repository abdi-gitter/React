const Button = ({method, handleClick, setCount})=>{
    return <button onClick={(e)=>handleClick(e,method)}>{method}</button>
}

export default Button;