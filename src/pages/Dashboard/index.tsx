
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { NewReceitasModal } from '../../components/NewReceitasModal';
import { ReceitasTable } from '../../components/ReceitasTable';
import { ShowReceitasModal } from '../../components/ShowReceitasModal';
import { useAuth } from '../../hooks/auth';
import { GlobalStyle } from '../../styles/globals';

interface IReceitaid{
  id:number;
}

const Dashboard: React.FC = () => {
 

  const [isnewReceitaModalOpen, setIsnewReceitaModalOpen]=useState(false);

  const [isshowReceitaModalOpen, setIsshowReceitaModalOpen]=useState(false);
  const [editar, setEditar]=useState(false);
  const [receitaId, setReceitaId]=useState(0);
  function handleOpenModal(){
      setIsnewReceitaModalOpen(true)

  }

  function handleCloseModal(){
      setIsnewReceitaModalOpen(false)

  }

  function handleShowOpenModal(){
      setIsshowReceitaModalOpen(true)
  
  }

  function handleShowCloseModal(){
      setIsshowReceitaModalOpen(false)
    


  }


  function setId(id:number){

    setReceitaId(id)
  }
 
  
  return (
    <>
      <Header onOpenModal={handleOpenModal}/>

     
      <NewReceitasModal isOpen={isnewReceitaModalOpen} onRequestClose={handleCloseModal}/>
   
      <ReceitasTable Hid={setId} onOpenModal={handleShowOpenModal } ></ReceitasTable>
      
      
      <ShowReceitasModal  id_receita ={receitaId} isOpen={isshowReceitaModalOpen} onRequestClose={handleShowCloseModal}/>
            

    </>
  );
};

export default Dashboard;
