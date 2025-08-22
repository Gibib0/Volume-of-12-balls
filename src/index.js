'use strict'

const N = 12
const WALL_THICKNESS = 0.01
const SMALLEST_OUTER_DIAMETER = 0.5

let totalVolume = 0

let outerDiameter = SMALLEST_OUTER_DIAMETER

for (let i = 1; i <= N; i++) {
	let innerRadius = outerDiameter / 2 - WALL_THICKNESS

	let volume = (4 / 3) * Math.PI * (innerRadius ** 3)
	totalVolume += volume

	outerDiameter += WALL_THICKNESS * 2
}

console.log('Total internal volume of 12 balls equals:', totalVolume, 'm^3');