import assert from 'assert';

/**
 * Checks that the second input string matches the first input string at the
 * given offsets. Undefined behavior if one of the strings is not long enough.
 *
 * @param {string} p
 * @param {number} pi
 * @param {number} pj
 * @param {string} s
 * @param {number} si
 *
 * @return {boolean}
 */
const startsWith = (p, pi, pj, s, si) => {
	assert(typeof p === 'string');
	assert(pi >= 0 && pj <= p.length);
	assert(typeof s === 'string');
	assert(si >= 0 && si + (pj - pi) <= s.length);
	for (; pi < pj; ++pi, ++si) {
		if (p[pi] !== s[si]) return false;
	}

	return true;
};

export default startsWith;
