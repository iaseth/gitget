import InputSection from './InputSection';
import TextInput from './TextInput';



export default function Input ({props, setProp, sections}) {

	return (
		<main className="py-4 bg-slate-100 space-y-8">
			{sections.map(section => <InputSection key={section.name} {...{props, setProp, section}} />)}
		</main>
	);
}
