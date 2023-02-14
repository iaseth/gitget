import React from 'react';

import TextInput from './TextInput';



export default function InputSection ({props, setProp, section}) {
	const [expanded, setExpanded] = React.useState(true);
	const toggle = () => setExpanded(x => !x);

	return (
		<section className="container px-4 py-3 bg-slate-50 border-l-4 border-blue-500 shadow rounded-r">
			<h4 className="py-4">
				<span className="bg-blue-500 text-white px-5 py-3 rounded select-none cursor-pointer" onClick={toggle}>{section.title}</span>
			</h4>

			<main className="grid lg:grid-cols-2 gap-x-4">
				{expanded && section.props.map(p => <TextInput key={p.fullname}
					title={p.title}
					x={props[p.fullname]}
					setX={x => setProp(p.fullname, x)} />)}
			</main>
		</section>
	);
}
