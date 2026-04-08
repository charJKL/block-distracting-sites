
export type REST = 
{
	"GET:/rules": () => number[],
	"POST:/rules": (rule: {id: string}) => {id: string}
}