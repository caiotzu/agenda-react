import React from 'react'

export default function ContactCard(props) {
    let { id, name, email, company, responsibility } = {...props.data} 

    function deleteItem(evt, id){
        evt.preventDefault()
        props.delete(id)
    }

    function editItem(evt, id){
        evt.preventDefault()
        props.show(id)
    }

    return (
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
            <span className="block text-2xl font-semibold">Nome: {name}</span>
            <span className="block text-base text-gray-500">Email: {email}</span>
            <span className="block text-base text-gray-500">Empresa: {company}</span>
            <span className="block text-base text-gray-500">Cargo: {responsibility}</span>

            <div className="mb-2 flex p-4 bg-white rounded-lg w-full">
                <button onClick={(evt) => editItem(evt, id)} className="flex-1 text-lg text-gray-800 bg-blue-500 bg-opacity-75 p-3 mr-2 rounded-lg" type="submit">Editar</button>
                <button onClick={(evt) => deleteItem(evt, id)} className="flex-1 text-lg text-gray-800 bg-red-500 bg-opacity-75 p-3 rounded-lg" type="submit">Excluir</button>
            </div>
        </div>
    )
}
