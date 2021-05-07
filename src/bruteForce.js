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

	sequence: for (; si <= sj - m; ++si) {
		for (let j = 0; j < m; ++j) {
			if (s[si + j] !== p[pi + j]) {
				continue sequence;
			}
		}

		yield si;
	}
}
