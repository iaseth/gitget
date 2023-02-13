import React from 'react';



export default function TextInput ({title, x, setX}) {
	const inputId = React.useId();

	function handleChange (e) {
		setX(e.target.value);
	}

	return (
		<div className="py-2">
			<div className="px-3">
				<label htmlFor={inputId} className="relative bg-white rounded font-bold text-sm px-2 py-1 text-xs">{title}</label>
			</div>

			<div className="-mt-2">
				<input id={inputId} defaultValue={x} onChange={handleChange} className="block w-full max-w-sm px-2 py-3 border-2 border-blue-200 outline-0 rounded hover:border-blue-400 focus:border-blue-600 focus:shadow" />
			</div>
		</div>
	);
}
