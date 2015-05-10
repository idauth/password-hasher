# password-hasher

[![Build Status](https://travis-ci.org/chris-rock/password-hasher.svg?branch=master)](https://travis-ci.org/chris-rock/password-hasher) [![NPM version](https://img.shields.io/npm/v/password-hasher.svg)](https://www.npmjs.com/package/password-hasher)

Simplify the generation of password hashes. In addition it supports [rfc2307](https://www.ietf.org/rfc/rfc2307.txt) for usage with LDAP.

## Getting Started

Install the module with: `npm install password-hasher`

```javascript
var password-hasher = require('password-hasher');

// get hash
var hash = passwordhasher.createHash('ssha512', 'alice', new Buffer('83d88386463f0625', 'hex'));
// returns '21ea8a8975921163474f74e4349eb6b3185b95ada619ae6d83c16dae836eb9c07c33331bf7db8f89d609a01f6278d6e5be7c516a1748cbe87b4cfc125e1e2c9e'

// get rfc 2307 hash
var rfcHash = passwordhasher.formatRFC2307(hash)
// returns '{ssha512}IeqKiXWSEWNHT3TkNJ62sxhbla2mGa5tg8FtroNuucB8MzMb99uPidYJoB9ieNblvnxRahdIy+h7TPwSXh4snoPYg4ZGPwYl'
```

## Documentation

The following hash schemes are supported. 

With salt:

* `ssha512` (recommended)
* `ssha384`
* `ssha256`
* `ssha`
* `smd5`

Without salt:

* `sha512`
* `sha384`
* `sha256`
* `sha`
* `md5`

## Contributing

PRs are welcome. Code style is checked via jshint.

## License
Copyright (c) 2014-2015 Christoph Hartmann. Licensed under the MIT license.
