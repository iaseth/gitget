import React from 'react';

import TextInput from './TextInput';



export default function InputSection ({props, setProp, section}) {
	const [expanded, setExpanded] = React.useState(true);
	const toggle = () => setExpanded(x => !x);

	return (
		<section className="container px-4 py-3 bg-slate-50 border-l-4 border-blue-500 shadow rounded-r">
			<h4 className="py-4 text-right">
				<span className="bg-blue-500 text-white px-5 py-3 rounded select-none cursor-pointer" onClick={toggle}>{section.name}</span>
			</h4>

			{expanded && section.props.map(p => <TextInput key={p.fullname}
				title={p.name}
				x={props[p.fullname]}
				setX={x => setProp(p.fullname, x)} />)}
		</section>
	);
}
