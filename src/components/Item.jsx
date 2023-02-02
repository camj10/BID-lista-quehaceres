import React from 'react';
import { Edit } from './Edit';  

export const Item = ({ 
	todo,
	handleEdit,
	handleHecho,
	handleACompletar,
}) => {
	return (
		<li>
			<span onClick={() => handleACompletar(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<Edit todo={todo} handleEdit={handleEdit} />
			<button
				className='btn-delete'
				onClick={() => handleHecho(todo.id)}
			>
                Done
			</button>
		</li>
	);
};
