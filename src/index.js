'use sctrict'

const n = 12
const wallThickness = 0.01

let outerDiameter = 0.5

let totalVolume = 0

for (let i = 1; i <= n; i++) {
	let outerRadius = outerDiameter / 2
	let innerRadius = outerRadius - wallThickness

	let volume = (4 / 3) * Math.PI * (innerRadius ** 3)
	totalVolume += volume

	outerDiameter = innerRadius * 2
}

console.log('Total internal volume of 12 balls equals:', totalVolume, 'm^3');