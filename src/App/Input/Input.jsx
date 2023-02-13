import TextInput from './TextInput';



function InputSection ({title, children}) {
	return (
		<section className="pb-10">
			<h4 className="px-2 py-2">
				<span className="bg-blue-500 text-white px-3 py-2 rounded">{title}</span>
			</h4>
			{children}
		</section>
	);
}

export default function Input ({props, setProp}) {

	return (
		<main className="container px-4 py-4 bg-slate-100">
			<InputSection title="user">
				<TextInput title="Name" x={props.name} setX={x => setProp('name', x)} />
				<TextInput title="Email" x={props.email} setX={x => setProp('email', x)} />
			</InputSection>

			<InputSection title="color">
				<TextInput title="Name" x={props.name} setX={x => setProp('name', x)} />
				<TextInput title="Email" x={props.email} setX={x => setProp('email', x)} />
			</InputSection>

			<InputSection title="init">
				<TextInput title="Default Branch" x={props.defaultBranch} setX={x => setProp('defaultBranch', x)} />
			</InputSection>
		</main>
	);
}
