import TextInput from './TextInput';



export default function Input ({props, setProp}) {

	return (
		<main className="container px-4 py-4">
			<h4>Enter your details</h4>
			<TextInput title="Name" x={props.email} setX={x => setProp('name', x)} />
			<TextInput title="Email" x={props.email} setX={x => setProp('email', x)} />
		</main>
	);
}
