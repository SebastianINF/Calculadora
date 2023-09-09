import '../../public/styles/Boton.css'
export default function Boton({ children, onclick, name, id}) {
  return (
    <button
      id={id}
      className={`${
        children == 'DEL' || children == 'AC' ? 'delete' : 'boton'
      } ${name == 'operador' ? 'operador' : 'boton'}`}
      onClick={onclick}
    >
      {children}
    </button>
  )
}
