import React from 'react';



export default function TextInput ({title, x, setX}) {
	const inputId = React.useId();

	function handleChange (e) {
		setX(e.target.value);
	}

	return (
		<div className="py-2">
			<label htmlFor={inputId} className="block py-2">{title}</label>
			<input id={inputId} defaultValue={x} onChange={handleChange} className="block w-full max-w-sm px-2 py-2 border rounded" />
		</div>
	);
}
