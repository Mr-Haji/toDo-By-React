import "./Button.css"


const CustomButton = ({onClick,label, variant}) => {
   
  return (
    <>
 
         <button onClick={onClick} className="button" variant={variant} >{label}</button>
  
    </>
  )
}

export default CustomButton