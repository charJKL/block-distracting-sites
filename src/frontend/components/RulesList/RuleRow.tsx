import css from "./RuleRow.module.scss";


interface RuleRowProps
{
	rule: { id: number, url: string }
}

export function RuleRow({rule} : RuleRowProps)
{

	const onClickDelete = () => 
	{
		alert("Delete rule");
	}

	return 	(
		<div className={css.RuleRow}>
			<div className={css.RuleRowId} >{rule.id}</div>
			<div className={css.RuleRowUrl} >{rule.url}</div>
			<div className={css.RuleRowActions}>
				<button onClick={onClickDelete}>Delete</button>
			</div>
		</div>
	)
}