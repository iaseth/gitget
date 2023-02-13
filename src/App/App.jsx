import React from 'react';

import './App.css';

import Header from './Header/Header';
import Input from './Input/Input';
import Output from './Output/Output';
import Footer from './Footer/Footer';

import {sections} from './sections.json';

// add computed properties
sections.forEach(s => {
	s.props.forEach(p => {
		p.section = s.name;
		p.fullname = `${p.section}.${p.name}`;
		p.defaultValue = p.values[0] || "";
	});
});

// collects all props into a single array
const PROPS_ARRAY = sections.flatMap(s => s.props);

// collects all props into an object
const PROPS_OBJECT = {};
PROPS_ARRAY.forEach(p => PROPS_OBJECT[p.fullname] = p);

// default value for props state
const DEFAULT_PROPS_OBJECT = {};
PROPS_ARRAY.forEach(p => DEFAULT_PROPS_OBJECT[p.fullname] = p.defaultValue);


function App () {
	const [props, setProps] = React.useState(DEFAULT_PROPS_OBJECT);
	const setProp = (prop, val) => setProps({
		...props,
		[prop]: val
	});

	console.table(props);

	return (
		<div className="bg-red-300">
			<Header />

			<Input {...{props, setProp, sections}} />
			<Output {...{props, sections}} />

			<Footer />
		</div>
	);
}

export default App;
