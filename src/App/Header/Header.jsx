


export default function Header ({tabIndex, setTabIndex, TABS}) {
	const tabItems = TABS.map((tab, k) => {
		const current = tabIndex === k;
		let className = "px-4 py-4 rounded-t basis-0 grow";
		className += current ? " bg-slate-100 text-blue-500" : " cursor-pointer";

		return (
			<div key={k} className={className} onClick={() => current ? null : setTabIndex(k)}>
				<h5 className="pt-1">{tab}</h5>
			</div>
		);
	});

	return (
		<header className="bg-blue-600 text-white px-2 text-center">
			<section className="container py-5">
				<h4>GitGet</h4>
			</section>

			<section className="container flex">
				{tabItems}
			</section>
		</header>
	);
}
