import React from 'react';

import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import GitIgnore from './GitIgnore/GitIgnore';
import GitConfig from './GitConfig/GitConfig';

const TABS = ["GitConfig", "GitIgnore"];

function App () {
	const [tabIndex, setTabIndex] = React.useState(0);
	const tab = TABS[tabIndex];

	function getCurrentTab () {
		switch (tab) {
			case "GitConfig":
				return <GitConfig />
			case "GitIgnore":
				return <GitIgnore />
			default:
				return null;
		}
	}

	return (
		<div className="bg-red-300">
			<Header {...{tabIndex, setTabIndex, TABS}} />

			{getCurrentTab()}

			<Footer />
		</div>
	);
}

export default App;
