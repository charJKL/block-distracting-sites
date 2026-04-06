import css from "./RulesList.module.scss";

import { RuleRow } from "./RulesList/RuleRow";

export function RulesList()
{
	const rules =
	[
		{id: 1, url: "www.onet.pl" },
		{id: 2, url: "www.interia.pl" },
		{id: 3, url: "www.wp.pl" }
	]

	const rulesList = rules.map(rule => <RuleRow key={rule.id} rule={rule} />);
	return (
		<section className={css.RulesList}>
			{ rulesList }
		</section>
	)
}