import Modal from 'react-modal'
import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform';
import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
interface NewModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

export function NewReceitasModal({isOpen, onRequestClose}:NewModalProps){
    const [nome,setNome]= useState('')
    const [id_categorias,setCategoria]= useState(0)

    const [categoriaItems,setCategoriaItems]= useState<ICategoria[]>([])

    const [ingredientes,setIngredientes]= useState('')
    const [tempo_preparo,setTempoDePreparo]= useState(0)
    const [modo_preparo,setModoDePreparo]= useState('')
    const [porcoes,setPorcoes]= useState(0)

    interface ICategoria{
        id:number;
        nome:string;
    
    }
    function handleSubmit(event:FormEvent) {
        event.preventDefault();
        
        const data ={
            nome,
            id_categorias,
            ingredientes,
            tempo_preparo,
            modo_preparo,
            porcoes
        }

        api.post('/receitas', data)
    }
    useEffect(() => {
        api.get<ICategoria[]>(`/categorias/`, {})
            .then(response => {return setCategoriaItems(response.data); })
    },[])
 

    return(
    
        <Modal ariaHideApp={false} isOpen={isOpen}  onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="Modal-content">
            
            <button type="button" onClick={onRequestClose} className="react-modal-close"> x</button>
            
            <Container onSubmit={handleSubmit}>
       
                <h2>cadastrar receita</h2>
                <input name="nome" value={nome} onChange={event=>setNome(event.target.value)} placeholder="nome"></input>
                <select name="categoria" onChange={event=>setCategoria(Number(event.target.value))}>
                    {categoriaItems.map(categoriaItem => (
                        <option
                        key={categoriaItem.id}
                        value={categoriaItem.id}
                        >
                        {categoriaItem.nome}
                        </option>
                    ))}
                </select>
            
                <textarea name="ingredientes" value={ingredientes} onChange={event=>setIngredientes(event.target.value)}placeholder="ingredientes"></textarea>
                <input name="tempo_de_preparo" value={tempo_preparo} onChange={event=>setTempoDePreparo(Number(event.target.value))} placeholder="tempo de preparo (minutos)"></input>
                <textarea name="modo_de_preparo" value ={modo_preparo} onChange={event=>setModoDePreparo(event.target.value)} placeholder="modo de preparo"></textarea>
                <input name="procoes" value ={porcoes} onChange={event=>setPorcoes(Number(event.target.value))} placeholder="porções"></input>
                
                <button type="submit">
                    cadastrar
                </button>

            </Container>
            
        </Modal>
    
    )
}