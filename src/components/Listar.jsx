import React from 'react';
import { Item } from './Item'; 

export const Listar = ({
	todos,
	handleEdit,
	handleHecho,
	handleACompletar,
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<Item
					key={todo.id}
					todo={todo}
					handleEdit={handleEdit}
					handleHecho={handleHecho}
					handleACompletar={handleACompletar}
				/>
			))}
		</ul>
	);
};