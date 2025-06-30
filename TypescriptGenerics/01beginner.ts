// 1
// TODO: Make this function generic so it returns the same type as its input
function identity<T>(arg: T): T {
	return arg
}

// 2
// TODO: Write a generic function that returns the first element of an array
function getFirst<U>(arr: U[]): U {
	return arr[0]
}

// 3
// TODO: Turn this interface into a generic
interface Box<V> {
	value: V
}
const numberBox: Box<number> = { value: 42 }
