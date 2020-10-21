import React, { useState } from 'react'

function getId() {
    return (5999 - Math.round(Math.random() * 392))
} 

function validateContact(data) {
    if (data.name === '') {
        alert('Preencha o campo "Nome".')
        return false
    }

    if (data.company === '') {
        alert('Preencha o campo "Empresa".')
        return false
    }

    if (data.email != '') {
        let er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/
        let verify = er.test(data.email)

        if (!verify) {
            alert('O campo "E-mail" é invalido.')
            return false
        }
    }

    return true
}


export default function ContactForm(props) {
    const [data, setData] = useState({ name: '', email: '', company: '', responsibility: '' })
    const [verifica, setStatus] = useState({status: true})

    if(typeof props.show.id !== 'undefined' && verifica.status == true){
        setStatus({status: false})
        setData({  
            name: (typeof props.show.name === 'undefined' ? '' : props.show.name), 
            email: (typeof props.show.email === 'undefined' ? '' : props.show.email), 
            company: (typeof props.show.company === 'undefined' ? '' : props.show.company), 
            responsibility: (typeof props.show.responsibility === 'undefined' ? '' : props.show.responsibility)
        })
    }

    function atualizarItem(evt, id){
        evt.preventDefault()
        if (validateContact(data)) {
            props.updItem({ ...data, id: id })
            setData({ name: '', email: '', company: '', responsibility: '' })
            setStatus({status: true})
        }
    }
    
    const changeField = (field) => {
        const change = (evt) => setData({ ...data, [field]: evt.target.value })
        return change
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (validateContact(data)) {
            props.save({ ...data, id: getId() })
            setData({ name: '', email: '', company: '', responsibility: '' })
        }
    }

    const buttons = (typeof props.show.id === 'undefined' ? 
    (
        <div className="mb-2 flex p-4 w-full">
            <button className="flex-1 text-lg text-gray-800 bg-green-500 bg-opacity-75 p-3 rounded-lg" type="submit">Adicionar</button>
        </div>
    ) : (
        <div className="mb-2 flex p-4 w-full">
            <button onClick={(evt) => atualizarItem(evt, props.show.id)} className="flex-1 text-lg text-gray-800 bg-blue-500 bg-opacity-75 p-3 mr-2 rounded-lg">Atualizar</button>
        </div>
    ))

    return (
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg">Nome</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg"
                    maxLength={35} onChange={changeField('name')} 
                    // value={(typeof props.show.name === 'undefined' ? data.name : props.show.name)}
                    value={data.name}

                    />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">E-mail</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg" 
                    maxLength={50} onChange={changeField('email')} 
                    // value={(typeof props.show.email === 'undefined' ? data.email : props.show.email)}
                    value={data.email}
                    />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Empresa</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg" 
                    maxLength={50} onChange={changeField('company')} 
                    // value={(typeof props.show.company === 'undefined' ? data.company : props.show.company)}
                    value={data.company}
                    />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Cargo</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg" 
                    maxLength={50} onChange={changeField('responsibility')} 
                    // value={(typeof props.show.responsibility === 'undefined' ? data.responsibility : props.show.responsibility)}
                    value={ data.responsibility }
                    />
            </div>

            {buttons}
        </form>
    )
}
