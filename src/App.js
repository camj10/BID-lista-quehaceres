import './App.css';
import { Agregar } from './components/Agregar';
import { Listar } from './components/Listar'; 
import { Quehaceres } from './hooks/Quehaceres';

function App() { 
	const {
		todos,
		contador,
		pendientescontador,
		handleNuevo,
		handleHecho,
		handleACompletar,
		handleEdit,
	} = Quehaceres();

	return (
		<>
			<div className='container'>
				<h1>To do list</h1>
				<div className='contadores'>
					<h3>
						Tasks: <span>{contador}</span>
					</h3>
					<h3>
						Pending: <span>{pendientescontador}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Add</h3>
					<Agregar handleNuevo={handleNuevo} />
				</div>

				<Listar
					todos={todos}
					handleEdit={handleEdit}
					handleHecho={handleHecho}
					handleACompletar={handleACompletar}
				/>
			</div>
		</>
	);
}

export default App;
