

type MakeNull<T, U extends keyof T> = { [Key in keyof T]: Key extends U ? T[Key] | null : T[Key]; } // TODO move this to some file

export type UniqueIdString = string;
export type UniqueIdNumber = number;
export type Timestamp = number;

export type Rule =
{
	id: UniqueIdString;
	netRequestId: UniqueIdNumber;
	addTime: Timestamp;
	simplified?: string;
	regexp?: string;
}
export type RuleList = Array<Rule>;
export type RuleDesc = { simplified: string } | { regexp: string };
export type RuleDescId = {id: UniqueIdString , netRequestId?: UniqueIdNumber } | {id?: UniqueIdString , netRequestId: UniqueIdNumber } 
export type RuleDeleted = MakeNull<Rule, "id" | "netRequestId">

/**
 * IRuleService
 */
interface IRuleService
{
	getRules(): RuleList;
	addRule(ruleDesc: RuleDesc): Rule;
	updateRule(ruleDesc: RuleDesc): Rule;
	removeRule(ruleDescId: RuleDescId): RuleDeleted;
}

export class RulesService implements IRuleService
{
	public getRules(): RuleList 
	{
		return [] // TODO implement this.
	}

	public addRule(ruleDesc: RuleDesc): Rule 
	{
		return { } as Rule; // TODO implement this.
	}

	public updateRule(ruleDesc: RuleDesc): Rule 
	{
		return { } as Rule; // TODO implement this.
	}

	public removeRule(ruleDescId: RuleDescId): RuleDeleted 
	{
		return { } as Rule; // TODO implemet this.
	}

}