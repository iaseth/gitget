import React from 'react';

import './App.css';

import Header from './Header/Header';
import Input from './Input/Input';
import Output from './Output/Output';
import Footer from './Footer/Footer';

function App () {
	const [props, setProps] = React.useState({});
	const setProp = (prop, val) => setProps({
		...props,
		[prop]: val
	});

	console.table(props);

	return (
		<div className="bg-red-300">
			<Header />

			<Input {...{props, setProp}} />
			<Output {...{props}} />

			<Footer />
		</div>
	);
}

export default App;
