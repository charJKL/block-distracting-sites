import React, { useRef } from "react";
import { FrontendComm as FrontendCommApi } from "browser-extension-std/frontend";
import css from "./AddNewRule.module.scss";

import { type REST } from "../../../protocol.ts";
const FrontendComm = new FrontendCommApi<REST>(); // TODO move this to separate file, for testing only.

export function AddNewRule()
{
	const refRegexp = useRef<HTMLInputElement>(null); // TODO for testing only

	const onSubmitForm = function(e: React.SubmitEvent)
	{
		e.preventDefault();
		const regexp = refRegexp.current?.value;
		if(regexp == null || regexp.length == 0) return;
		
		FrontendComm.sendToEndpoint("POST:/rules", {regexp: regexp});
	}

	return (
		<section className={css.AddNewRule}>
			<h2>Add new rule:</h2>
			<form onSubmit={onSubmitForm}>
				<input className={css.AddNewRuleRegexp} ref={refRegexp} type="text" required />
				<input className={css.addNewRuleSubmit} type="submit" value="Add Rule"/>
			</form>
		</section>
	)
}