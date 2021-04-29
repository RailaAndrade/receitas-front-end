import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { Container } from './styles'
interface ShowModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
    id_receita:number;

}
interface IReceita{
    id:number;
    nome:string;
    ingredientes:string;
    modo_preparo:string;
    tempo_preparo_minutos:number;
    id_categorias:number;
    porcoes:number;
}

export function ShowReceitasModal({isOpen, onRequestClose, id_receita}:ShowModalProps){
    
    const [receita, setReceita] = useState<IReceita>();
    const [nome,setNome]= useState('')
    const [id_categorias,setCategoria]= useState(0)

   const [editar, setEditar]= useState(false);

    const [ingredientes,setIngredientes]= useState('')
    const [tempo_preparo,setTempoDePreparo]= useState<number>()
    const [modo_preparo,setModoDePreparo]= useState('')
    const [porcoes,setPorcoes]= useState(0)
    const [categoriaItems,setCategoriaItems]= useState<ICategoria[]>([])
    const [categoria,setCategoriaNome]= useState('')
    

    interface ICategoria{
        id:number;
        nome:string;
    
    }
   


    useEffect(() => {
        setEditar(false)
        api.get<IReceita>(`/receitas/${id_receita}`, {})
          .then(response => setReceita(response.data));
        if(isOpen){
            api.get<ICategoria>(`/categorias/${receita?.id_categorias}`, {})
            .then(response => {setCategoriaNome(response.data.nome)})
      
            
        }

      }, [isOpen,receita,setReceita]);



       

   



      useEffect(() => {
        api.get<ICategoria[]>(`/categorias/`, {})
            .then(response => {return setCategoriaItems(response.data); })

        
        
        
    },[])
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
        

        api.patch('/receitas', data)
        
    }

 
    function handleEdit(event:FormEvent) {
        event.preventDefault();
        setEditar(true);
    }

    function handleDelete(event:FormEvent) {
        event.preventDefault();
        api.delete(`/receitas/${id_receita}`)
        onRequestClose()
        
    }
    return(

        

    
        <Modal  ariaHideApp={false} isOpen={isOpen}  onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="Modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close"> x</button>
            
            {editar===false? 
            <Container onSubmit={handleEdit}>
                <h3>{receita?.nome}</h3>
                <br/>
                <h5>categoria: {categoria}</h5>
                <br/>
                <h5>ingredientes: {receita?.ingredientes}</h5>
                <br/>
                <h5>modo de preparo: {receita?.modo_preparo}</h5>
                <br/>
                <h5>tempo de preparo {receita?.tempo_preparo_minutos}</h5>
                <br/>
                <h5>porcoes {receita?.tempo_preparo_minutos}</h5>


                <button type="submit">
                    editar
                </button>
                <button className="deletar" onClick={handleDelete}>
                    deletar
                </button>
                
                


            </Container>:  
            <Container onSubmit={handleSubmit}>
                
                    <input type="text" name="nome" value={receita?.nome} onChange={event=>setNome(event.target.value)} placeholder="nome"></input>
                    <select value={receita?.id_categorias} name="categoria" onChange={event=>setCategoria(Number(event.target.value))}>
                        {categoriaItems.map(categoriaItem => (
                            <option
                            key={categoriaItem.id}
                            value={categoriaItem.id}
                            >
                            {categoriaItem.nome}
                            </option>
                        ))}
                    </select>
                
                    <textarea name="ingredientes" value={receita?.ingredientes} onChange={event=>setIngredientes(event.target.value)}placeholder="ingredientes"></textarea>
                    <input type="text" name="tempo_de_preparo" value={receita?.tempo_preparo_minutos} onChange={event=>setTempoDePreparo(Number(event.target.value))} placeholder="tempo de preparo (minutos)"></input>
                    <textarea name="modo_de_preparo" value ={receita?.modo_preparo} ></textarea>
                    <input name="procoes" value ={receita?.porcoes} onChange={event=>setPorcoes(Number(event.target.value))} placeholder="porções"></input>
                    
                <button type="submit">
                    editar
                </button>
                
                
                
            </Container>
        }      
        </Modal>
                            
    )
}