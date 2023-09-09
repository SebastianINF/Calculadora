import { useState } from 'react'
import Boton from './Boton'
import '../../public/styles/Calculadora.css'

export default function Calculadora() {
  const [contador, setContador] = useState('')

  const calcular = () => {
    try {
      const resultado = math.evaluate(contador)
      if (resultado === undefined) return
      setContador(resultado)
      
    } catch (error) {
      console.warn(error)
      setContador('Syntax Error')
    }
  }

  const del = () => {
    let str = contador.toString()
    str = str.slice(0, -1)
    setContador(str)
  }

  const ac = () => {
    setContador('')
  }
  
  const modifierCount = (e) =>{
    const value = e.target.textContent
    if(contador === Infinity || contador === 'Syntax Error'){
      setContador(value)
    }else{
      setContador(contador + value)
    }
  }

  return (
    <main className="calculadora">
      <header className="pantalla">
        <input type="text" id="input" value={contador} readOnly disabled />
      </header>
      <div className="container-botons">
        <Boton id='1' onclick={modifierCount}>{'('}</Boton>
        <Boton id="2" onclick={modifierCount}>{')'}</Boton>
        <Boton id='3' onclick={del}>DEL</Boton>
        <Boton id='4' onclick={ac}>AC</Boton>
      </div>

      <div className="container-botons">
        <Boton id='5' onclick={modifierCount}>7</Boton>
        <Boton id='6' onclick={modifierCount}>8</Boton>
        <Boton id='7' onclick={modifierCount}>9</Boton>
        <Boton id='8' onclick={modifierCount} name="operador">
          +
        </Boton>
      </div>

      <div className="container-botons">
        <Boton id="9"onclick={modifierCount}>4</Boton>
        <Boton id="10"onclick={modifierCount}>5</Boton>
        <Boton id="11"onclick={modifierCount}>6</Boton>
        <Boton id="12"onclick={modifierCount} name="operador">
          {'-'}
        </Boton>
      </div>

      <div className="container-botons">
        <Boton id="13"onclick={modifierCount}>1</Boton>
        <Boton id="14"onclick={modifierCount}>2</Boton>
        <Boton id="15"onclick={modifierCount}>3</Boton>
        <Boton id="16"onclick={modifierCount} name="operador">
          *
        </Boton>
      </div>

      <div className="container-botons">
        <Boton id="17"onclick={calcular}>{'='}</Boton>
        <Boton id="18"onclick={modifierCount}>0</Boton>
        <Boton id="19"onclick={modifierCount}>.</Boton>
        <Boton id="20"onclick={modifierCount} name="operador">
          /
        </Boton>
      </div>
    </main>
  )
}
