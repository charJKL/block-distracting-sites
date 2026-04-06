import css from "./App.module.scss";

import { RulesList } from "./components/RulesList";

export function App()
{
	return (
		<>
			<header className={css.header}>
				<nav className={css.nav} >
					<a>Rules</a>
					<a>Exports</a>
					<a className={css.alignToLeft}>Settings</a>
				</nav>
			</header>
			<main className={css.main} >
				<RulesList />
			</main>
		</>
	)
}