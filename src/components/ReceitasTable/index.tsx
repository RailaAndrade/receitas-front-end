import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
interface IReceitas{
    id:number;
    nome:string;
    ingredientes:string;
    id_categorias:number;
    criado_em:string;
}
interface ICategoria{

    nome:string;

}
interface TableProps{
    onOpenModal:()=> void;
    Hid:(id:number)=> any;

}


export function ReceitasTable({onOpenModal,Hid}:TableProps){
    const [receitas, setReceitas] = useState<IReceitas[]>([]);
    const [selectValue, setSelectValue] = useState(1);  
    const [categoria, setCategoria] = useState('');  

    
    useEffect(() => {
        api.get<IReceitas[]>(`/receitas`, {})
          .then(response => setReceitas(response.data));
      }, [onOpenModal]);
    
   
    
    function handleClick(id:number):any{

        onOpenModal();
        Hid(id)
    }

    return (
        <>
        <input type="text"  placeholder="Buscar por nome"></input>
        <Container>
            
            <table>
                <thead>
                    <tr>
                        <th>título</th>
                        <th>categoria</th>
                        <th>data</th>

                    </tr>
              
                </thead>
                <tbody>
                
                {receitas.map(receita => (
                   
                      
                        <tr onClick={() => handleClick(receita.id)} key={receita.id} >
                            
                            
                            <td>{receita.nome}</td>
                           
                            <td></td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(receita.criado_em))}</td>

                           

                        </tr>
                      
                    ))
                    
                    
                }
           




                </tbody>
            </table>

        </Container>
        </>
    )
}