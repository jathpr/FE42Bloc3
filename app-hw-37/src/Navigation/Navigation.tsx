import { Routes, Route } from 'react-router-dom';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { Main } from '../Main/Main';
import { Registration } from '../Registration/Registration';

export const Navigation = () => {
	return <>
		<Routes>
			<Route index element={<Auth></Auth>}></Route>
			<Route path='success' element={<Reg />}></Route>
			<Route path='fail' element={<Reg />}></Route>
			<Route path='registration' element={<Registration></Registration>}></Route>
			<Route path='posts/*' element={<Main />}></Route>
		</Routes>
	</>
}