import { useState, useEffect } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/foodData";
import { FaPlus } from "react-icons/fa";

import './modal.css'


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any ): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal } : ModalProps) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            name,
            price,
            image
        };

        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return;

        closeModal()
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button onClick={closeModal} className="btn-close">
                    <div className="icon-remove">
                        <FaPlus/>
                    </div>
                </button>
                <h2>Cadastro Novo Item:</h2>
                <form className="input-container">
                    <Input label="name" value={name} updateValue={setName}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
        </div>
    );
}