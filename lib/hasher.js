/*
 * password-hasher
 * https://github.com/chris-rock/password-hasher
 *
 * Copyright (c) 2013 Christoph Hartmann
 * Licensed under the MIT license.
 */

'use strict';

// load modules
var crypto = require('crypto');

// set default values
var DEFAULT_SALT_LENGTH = 120;

/**
 * [generateSalt description]
 * @param  {Integer} len length of the salt
 * @return {Buffer}     A generated salt as buffer
 */
function generateSalt(len) {
	return crypto.randomBytes(len);
}

/**
 * generates the hash
 * @param  {String} algorithm hash algorithm, needs to be known by openssl
 * @param  {String} password  password
 * @param  {Buffer} salt      salt as buffer
 * @return {Buffer}           generated digest
 */
function hashGen(algorithm, password, salt) {
	var hash = crypto.createHash(algorithm);
	hash.update(password);
	hash.update(salt);
	return hash.digest();	
}

/** 
 * Creates a hash
 * @param  {String} algorithm 'md5', 'smd5', 'sha', 'ssha', 'sha256', 'ssha256' etc
 * @param  {String} password  password as string
 * @param  {Buffer} salt      salt 
 * @return {Object}           an object that contains algorithm, hash and salt
 */
function createHash(algorithm, password, salt) {
	
	var hash = "";

	switch (algorithm) {
		case 'md5': 
			salt = new Buffer(0); // md5 does not use salts
			hash = hashGen('md5', password,salt);
			break;
		case 'smd5' : 
			hash = hashGen('md5', password,salt);
			break;
		case 'sha' : 
			salt = new Buffer(0); // sha does not use salts
			hash = hashGen('sha1', password,salt);
			break;
		case 'sha256' : 
			salt = new Buffer(0); // sha does not use salts
			hash = hashGen('sha256', password,salt);
			break;
		case 'sha384' : 
			salt = new Buffer(0); // sha does not use salts
			hash = hashGen('sha384', password,salt);
			break;
		case 'sha512' : 
			salt = new Buffer(0); // sha does not use salts
			hash = hashGen('sha512', password,salt);
			break;
		case 'ssha' : 
			hash = hashGen('sha1', password,salt);
			break;
		case 'ssha256' : 
			hash = hashGen('sha256', password,salt);
			break;
		case 'ssha384' : 
			hash = hashGen('sha384', password,salt);
			break;
		case 'ssha512' : 
			hash = hashGen('sha512', password,salt);
			break;
		default:
			throw new Error("unknown algorithm");
			break;
	}
	return {
		algorithm: algorithm, // string
		salt: salt, // buffer
		hash: hash  // buffer
	}
}

/**
 * Creates a hash
 * @param  {String} algorithm  'md5', 'smd5', 'sha', 'ssha', 'sha256', 'ssha256' etc
 * @param  {String} password   password as string
 * @param  {Integer} saltLength length of salt, will be generated
 * @return {Object}            an object that contains algorithm, hash and salt
 */
function createHashAndSalt(algorithm, password, saltLength) {
	var salt = generateSalt(SaltLength);
	// todo check that salt is buffer
	return createHash(algorithm, password, salt);

}

/** 
 * Formats a hash object to RFC 2307 style
 */
function formatRFC2307(hash) {
	//console.log(hash.algorithm);
	//console.log(hash.hash.toString('hex'));
	//console.log(hash.salt.toString('hex'));
	var value = Buffer.concat([hash.hash, hash.salt]).toString('base64')
	return  '{' + hash.algorithm + '}' + value;
}

// module export
exports.createHash = createHash;
exports.createHashAndSalt = createHashAndSalt;
exports.formatRFC2307 = formatRFC2307;


