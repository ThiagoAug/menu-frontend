import { useState, useEffect } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { FaPlus } from "react-icons/fa";

import './modal.css'


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label className="label">{label}</label>
            <input className="input" value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            name,
            price,
            image
        };

        mutate(foodData);
    }

    useEffect(() => {
        if (!isSuccess) return;

        closeModal()
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <div className="modal-header">
                    <div className="title">
                        <h2>Cadastro de item:</h2>
                    </div>
                    <div className="btn-cancel">
                        <button onClick={closeModal} className="btn-close" >
                            <div className="icon-remove">
                                <FaPlus />
                            </div>
                        </button>
                    </div>
                </div>
                <form className="input-container">
                    <Input label="Nome:" value={name} updateValue={setName} />
                    <Input label="Preço:" value={price} updateValue={setPrice} />
                    <Input label="Imagem:" value={image} updateValue={setImage} />
                </form>
                <div className="btn-post">
                    <button onClick={submit} className="btn-secondary">
                        POSTAR
                    </button>
                </div>
            </div>
        </div>
    );
}