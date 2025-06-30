class MathHelper {
	static pi: number = 3.14

	static circleArea(radius: number): number {
		return this.pi * radius ** 2
	}
}

// Test
console.log(MathHelper.circleArea(5)) // Should log: 78.5
