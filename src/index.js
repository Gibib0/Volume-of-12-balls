'use strict'

const N = 12
const WALL_THICKNESS = 0.01
const SMALLEST_OUTER_DIAMETER = 0.5

let totalVolume = 0

let innerRadius = SMALLEST_OUTER_DIAMETER / 2 - WALL_THICKNESS

for (let i = 1; i <= N; i++) {
	let volume = (4 / 3) * Math.PI * (innerRadius ** 3)
	totalVolume += volume

	innerRadius += WALL_THICKNESS
}

console.log('Total internal volume of 12 balls equals:', totalVolume, 'm^3');