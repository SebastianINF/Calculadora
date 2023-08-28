import { useState } from 'react'
import Boton from './components/Boton.jsx'
import './styles/App.css'

export default function App(){
  const [contador, setContador] = useState('')
  const calcular = ()=> {
    const resultado = math.evaluate(contador)
    if(resultado === Infinity) return alert('🤢 Division por cero es ilegal ❌ ')
    if(resultado === undefined) return
    setContador(resultado)
  }
  
  const del = ()=> {
    let  str = contador;
    str = str.slice(0, -1);
    setContador(str)
  }

  const ac = ()=> {
    setContador('')
  }

  return (
    <main className='calculadora'>
      <header className='pantalla'>
        <input type="text" id='input' value={contador} readonly disabled/>
      </header>
      <div className='container-botons'>
        <Boton onclick={()=> setContador(contador + '(')}>{'('}</Boton>
        <Boton onclick={()=> setContador(contador + ')')}>{')'}</Boton>
        <Boton onclick={del}>DEL</Boton>
        <Boton onclick={ac}>AC</Boton>
      </div>
      <div className='container-botons'>
        <Boton onclick={()=> setContador(contador + '7')}>7</Boton>
        <Boton onclick={()=> setContador(contador + '8')}>8</Boton>
        <Boton onclick={()=> setContador(contador + '9')}>9</Boton>
        <Boton onclick={()=> setContador(contador + '+')} name='operador'>+</Boton>
      </div>
      <div className='container-botons'>
        <Boton onclick={()=> setContador(contador + '4')}>4</Boton>
        <Boton onclick={()=> setContador(contador + '5')}>5</Boton>
        <Boton onclick={()=> setContador(contador + '6')}>6</Boton>
        <Boton onclick={()=> setContador(contador + '-')} name='operador'>{'-'}</Boton>
      </div>
      <div className='container-botons'>
        <Boton onclick={()=> setContador(contador + '1')}>1</Boton>
        <Boton onclick={()=> setContador(contador + '2')}>2</Boton>
        <Boton onclick={()=> setContador(contador + '3')}>3</Boton>
        <Boton onclick={()=> setContador(contador + '*')} name='operador'>*</Boton>
      </div>
      <div className='container-botons'>
        <Boton onclick={calcular}>{'='}</Boton>
        <Boton onclick={()=> setContador(contador + '0')}>0</Boton>
        <Boton onclick={()=> setContador(contador + '.')}>.</Boton>
        <Boton onclick={()=> setContador(contador + '/')} name='operador'>/</Boton>
      </div>
      
    </main>
  )
}