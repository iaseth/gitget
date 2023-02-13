import React from 'react';



export default function InputSection ({title, children}) {
	const [expanded, setExpanded] = React.useState(true);
	const toggle = () => setExpanded(x => !x);

	return (
		<section className="container px-4 py-3 border-l-4 border-blue-500">
			<h4 className="px-2 py-4">
				<span className="bg-blue-500 text-white px-5 py-3 rounded select-none cursor-pointer" onClick={toggle}>{title}</span>
			</h4>
			{expanded && children}
		</section>
	);
}
