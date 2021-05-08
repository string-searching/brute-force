import assert from 'assert';

/**
 * Checks that two strings match exactly for m positions at given offsets.
 * Undefined behavior if one of the string is not long enough.
 *
 * @param {number} m
 * @param {string} s
 * @param {number} si
 * @param {string} p
 * @param {number} pi
 *
 * @return {boolean}
 */
const match = (m, s, si, p, pi) => {
	assert(typeof s === 'string');
	assert(typeof p === 'string');
	assert(si >= 0 && si + m <= s.length);
	assert(pi >= 0 && pi + m <= p.length);
	for (let j = 0; j < m; ++j) {
		if (s[si + j] !== p[pi + j]) return false;
	}

	return true;
};

export default match;
