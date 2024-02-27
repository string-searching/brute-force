import test from 'ava';

import {single, data} from '@string-searching/specification';

import {findAll} from '#module';

single({
	test,
	algorithms: [findAll],
	data,
});
