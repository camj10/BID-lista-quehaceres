import { useEffect, useReducer } from "react"
import {todoReducer} from '../todoreducer' 
export const Quehaceres = () =>{ 
    const initialState = []; 
    const init = () =>{ 
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    
    const [todos, dispatch] = useReducer(todoReducer,initialState,init) 

    const contador = todos.length
    const pendientescontador = todos.filter(todo => !todo.done).length

    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleNuevo = todo =>{
        const action = {
            type: "Add Todo",
            payload: todo,
        };
        dispatch(action);
    };
    const handleHecho = id =>{
        const action = {
            type:"Delete Todo",
            payload: id
        };
        dispatch(action);
    };
    const handleACompletar = id =>{
        const action={
            type:"Complete Todo",
            payload: id,
        };
        dispatch(action);
    };
    const handleEdit = (id,description) =>{
        const action={
            type:"Update Todo",
            payload: {
                id,
                description,
            },
        };
        dispatch(action);
    };
    return{
        todos,
        contador,
        pendientescontador,
        handleNuevo,
        handleHecho,
        handleACompletar,
        handleEdit
    }
};