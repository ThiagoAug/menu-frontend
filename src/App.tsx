import './App.css';
import '@fortawesome/fontawesome-free';
import { useState } from "react";
import { Card } from './components/Card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';


function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(foodData =>
          <Card
            price={foodData.price}
            image={foodData.image}
            name={foodData.name}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal} className='btn-new' >novo</button>
    </div>
  )
}

export default App
