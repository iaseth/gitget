import {Button} from '../Utils';



export default function Output ({props}) {
	let output = "";
	output += "[user]\n";
	output += `\tname = ${props.name}\n`;

	return (
		<main className="bg-slate-100 px-4 py-12">
			<section className="container">
				<h4 className="">.gitconfig</h4>
			</section>

			<section className="container my-2 px-3 py-3 bg-white shadow">
				<pre>{output}</pre>
			</section>

			<section className="container py-4">
				<Button title="Download" />
			</section>
		</main>
	);
}
