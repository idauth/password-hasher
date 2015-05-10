# password-hasher

[![Build Status](https://travis-ci.org/chris-rock/password-hasher.svg?branch=master)](https://travis-ci.org/chris-rock/password-hasher) [![NPM version](https://badge.fury.io/js/chris-rock%2Fpassword-hasher.svg)](https://badge.fury.io/js/chris-rock%2Fpassword-hasher.svg)

Simplify the generation of password hashes. In addition it supports [rfc2307](https://www.ietf.org/rfc/rfc2307.txt) for usage with LDAP.

## Getting Started

Install the module with: `npm install password-hasher`

```javascript
var password-hasher = require('password-hasher');

// get hash
var hash = passwordhasher.createHash('ssha512', 'yourpassword', new Buffer('85ebf65c7169c4e7', 'hex'));

// get rfc 2307 hash
var rfcHash = passwordhasher.formatRFC2307(hash)
```

## Documentation

The following hash schemes are supported. 

With salt:

* `ssha512` (recommended)
* `ssha384
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
