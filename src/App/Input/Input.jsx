import InputSection from './InputSection';
import TextInput from './TextInput';



export default function Input ({props, setProp}) {

	return (
		<main className="py-4 bg-slate-100 space-y-8">
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
