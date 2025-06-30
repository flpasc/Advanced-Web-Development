// 4
// TODO: Only allow types that have a 'length' property
function printLength<T extends { length: number }>(item: T) {
	return item.length
}

// 5
// TODO: Complete the function to return a key-value tuple
function createPair<U, V>(key: U, value: V): { key: U; value: V } {
	return { key, value }
}
