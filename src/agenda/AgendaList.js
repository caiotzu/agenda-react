import React, { useState } from 'react'
import AgendaForm from './AgendaForm'
import AgendaCard from './AgendaCard'

export default function AgendaList() {
    let [list, setList] = useState([])
    let [itemList, setItemList] = useState([])


    const addItem = (item) => {
        setList([...list, item])
    }
    
    const deleteItem = (id) => {
        let [...listAux] = list

        for(let i in listAux){
            if(listAux[i].id == id){
                listAux.splice(i,1)
            }
        }
        setList([...listAux])
    }

    const showItem = (id) => {
        setItemList([])
        for(let i in list){
            if(list[i].id == id){
                let item = list[i]
                setItemList(item)
            }
        }
    }

    const updateItem = (item) => {
        setItemList([])
        let [...listAux] = list
        for(let i in listAux){
            if(listAux[i].id == item.id){
                listAux[i] = item
            }
        }
        setList([...listAux])
    
    }

    let cards = list.map(contact => (
        <AgendaCard key={contact.id} data={contact} delete={deleteItem} show={showItem}/>
    ))
    
    return (
    <div className="w-3/12 mt-4">
        <AgendaForm save={addItem} show={itemList} updItem={updateItem}/>
        {cards}
    </div>
    )
}
