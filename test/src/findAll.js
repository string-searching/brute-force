import test from 'ava';

import {single, data} from '@string-searching/specification';

import {findAll} from '../../src/index.js';

single({
	test,
	algorithms: [findAll],
	data,
});
