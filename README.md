:muscle: [@string-searching/brute-force](https://string-searching.github.io/brute-force)
==

Brute-force string searching for JavaScript.
See [docs](https://string-searching.github.io/brute-force/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {findAll} from '@string-searching/brute-force';

const string = 'aaabaaa';
const pattern = 'aa';

for (const i of findAll(string, 0, string.length, pattern, 0, pattern.length)) {
	// yields 0 1 4 5
}

import {startsWith} from '@string-searching/brute-force';

startsWith(pattern, 0, 2, string, 3); // false
startsWith(pattern, 0, 2, string, 4); // true
```

[![License](https://img.shields.io/github/license/string-searching/brute-force.svg)](https://raw.githubusercontent.com/string-searching/brute-force/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-searching/brute-force.svg)](https://www.npmjs.org/package/@string-searching/brute-force)
[![Tests](https://img.shields.io/github/actions/workflow/status/string-searching/brute-force/ci.yml?branch=main&event=push&label=tests)](https://github.com/string-searching/brute-force/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/string-searching/brute-force.svg)](https://github.com/string-searching/brute-force/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/string-searching/brute-force.svg)](https://github.com/string-searching/brute-force/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-searching/brute-force.svg)](https://www.npmjs.org/package/@string-searching/brute-force)

[![Code issues](https://img.shields.io/codeclimate/issues/string-searching/brute-force.svg)](https://codeclimate.com/github/string-searching/brute-force/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-searching/brute-force.svg)](https://codeclimate.com/github/string-searching/brute-force/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-searching/brute-force/main.svg)](https://codecov.io/gh/string-searching/brute-force)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-searching/brute-force.svg)](https://codeclimate.com/github/string-searching/brute-force/trends/technical_debt)
[![Documentation](https://string-searching.github.io/brute-force/badge.svg)](https://string-searching.github.io/brute-force/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-searching/brute-force)](https://bundlephobia.com/result?p=@string-searching/brute-force)
