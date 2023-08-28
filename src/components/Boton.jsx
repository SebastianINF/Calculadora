import '../styles/Boton.css'
export default function Boton({children, onclick, name}) {

  
  return (
    <button 
      className={
        `${(children == 'DEL' || children == 'AC') ? 'delete' : 'boton'} ${name == 'operador'?'operador': 'boton'}`}
        onClick={onclick}>{children}</button>
)}