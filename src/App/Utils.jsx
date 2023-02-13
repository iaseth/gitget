


export function Button ({title="Button", onClick=null}) {
	return (
		<button onClick={onClick} className="px-4 py-3 bg-blue-500 text-white font-bold text-sm border-y-2 border-blue-600 rounded overflow-hidden">{title}</button>
	);
}
