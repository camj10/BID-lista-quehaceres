import React from 'react';
import { Formulario } from '../hooks/Formulario'; 

export const Agregar = ({ handleNuevo }) => { 
	const { description, onInputChange, onResetForm } = Formulario({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNuevo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='tasks to add'
			/>

			<button className='btn-add' type='submit'>
				Add
			</button>
		</form>
	);
};