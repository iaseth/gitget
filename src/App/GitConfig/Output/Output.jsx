import {Button} from '../../Utils';



export default function Output ({props, sections}) {
	let output = "";
	sections.forEach(section => {
		output += `\n[${section.name}]\n`;
		section.props.forEach(prop => {
			output += `\t${prop.name} = ${props[prop.fullname]}\n`;
		});
	});
	output += "\n";

	return (
		<main className="bg-slate-100 px-4 py-12">
			<section className="container">
				
			</section>

			<section className="container my-2 rounded shadow overflow-hidden">
				<h4 className="bg-blue-500 text-white px-3 py-3 text-center">.gitconfig</h4>
				<div className="px-3 py-3 bg-white">
					<pre className="leading-9">{output}</pre>
				</div>
			</section>

			<section className="container py-4">
				<Button title="Download" />
			</section>
		</main>
	);
}
