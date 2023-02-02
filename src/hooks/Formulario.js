import { useState } from "react" 
export const Formulario = (initialForm = {}) => {   

    const [formState, setformState ] = useState(initialForm)

    const onInputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setformState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = () => {
        setformState(initialForm)
    }
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
};