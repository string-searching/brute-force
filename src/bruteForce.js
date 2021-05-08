import startsWith from './startsWith.js';

/**
 * Find.
 *
 * @param {string} s
 * @param {number} si
 * @param {number} sj
 * @param {string} p
 * @param {number} pi
 * @param {number} pj
 * @return {IterableIterator<number>}
 */
export default function* bruteForce(s, si, sj, p, pi, pj) {
	const m = pj - pi;
	const sk = sj - m;

	for (; si <= sk; ++si) {
		if (startsWith(p, pi, pj, s, si)) yield si;
	}
}
