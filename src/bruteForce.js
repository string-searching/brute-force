import match from './match.js';

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

	for (; si <= sj - m; ++si) {
		if (match(m, s, si, p, pi)) yield si;
	}
}
