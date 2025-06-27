interface StringMap {
	[key: string]: string
}

const printvalues = (map: StringMap): void => {
	Object.entries(map).map((val) => console.log(val))
}

const map = {
	name: 'peter',
	bla: 'pups',
	tutut: 'lol',
	elephatn: 'tiger',
}

printvalues(map)
