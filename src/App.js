import React from 'react'
import './App.css'
import Titulo from './Titulo'
import AgendaList from './agenda/AgendaList'


export default function App() {
    return (
      <div className="App">
        <header className="App-header">
            <Titulo />
            <AgendaList />
        </header>
      </div>
    )
}
