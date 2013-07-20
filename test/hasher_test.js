'use strict';

var assert = require("assert");
var passwordhasher = require('../lib/hasher.js');

var rfc2307 = [{
  algorithm: "md5",
  password: "alice",
  salt: new Buffer(0),
  hash: "6384e2b2184bcbf58eccf10ca7a6563c",
  rfc: "{md5}Y4TishhLy/WOzPEMp6ZWPA=="
}, {
  algorithm: "smd5",
  password: "alice",
  salt: new Buffer("d92f088a252a2dc1", 'hex'),
  hash: "6a8a42538be08999f160134d66cc781c",
  rfc: "{smd5}aopCU4vgiZnxYBNNZsx4HNkvCIolKi3B"
}, {
  algorithm: "sha",
  password: "alice",
  salt: new Buffer(0),
  hash: "522b276a356bdf39013dfabea2cd43e141ecc9e8",
  rfc: "{sha}UisnajVr3zkBPfq+os1D4UHsyeg="
}, {
  algorithm: "sha256",
  password: "alice",
  salt: new Buffer(0),
  hash: "2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90",
  rfc: "{sha256}K9gGyX8OAK8aH8Myj6djqSaXI8jbj6xPk69x2xhtbpA="
}, {
  algorithm: "sha384",
  password: "alice",
  salt: new Buffer(0),
  hash: "96a5353e625adc003a01bdcd9b21b21189bdd9806851829f45b81d3dfc6721ee21f6e0e98c4dd63bc559f66c7a74233a",
  rfc: "{sha384}lqU1PmJa3AA6Ab3NmyGyEYm92YBoUYKfRbgdPfxnIe4h9uDpjE3WO8VZ9mx6dCM6"
}, {
  algorithm: "sha512",
  password: "alice",
  salt: new Buffer(0),
  hash: "408b27d3097eea5a46bf2ab6433a7234a33d5e49957b13ec7acc2ca08e1a13c75272c90c8d3385d47ede5420a7a9623aad817d9f8a70bd100a0acea7400daa59",
  rfc: "{sha512}QIsn0wl+6lpGvyq2QzpyNKM9XkmVexPseswsoI4aE8dScskMjTOF1H7eVCCnqWI6rYF9n4pwvRAKCs6nQA2qWQ=="
}, {
  algorithm: "ssha",
  password: "alice",
  salt: new Buffer("85ebf65c7169c4e7", 'hex'),
  hash: "f6fea5ddde1a6516ec11e1ea38aa5c2850815717",
  rfc: "{ssha}9v6l3d4aZRbsEeHqOKpcKFCBVxeF6/ZccWnE5w=="
}, {
  algorithm: "ssha256",
  password: "alice",
  salt: new Buffer("0a778518555f872b", 'hex'),
  hash: "5273a8a72c718577efdba965308213e20c2add6f9c4e8c31a224e819eb144a47",
  rfc: "{ssha256}UnOopyxxhXfv26llMIIT4gwq3W+cTowxoiToGesUSkcKd4UYVV+HKw=="
}, {
  algorithm: "ssha384",
  password: "alice",
  salt: new Buffer("db268d8a2503430b", 'hex'),
  hash: "0d578dec40b9e8e9f777d3ded6a52dce5101b4cf847bf65ae2bc9fd3fb42f5ef269d1340213734ea84b568adfc1660c6",
  rfc: "{ssha384}DVeN7EC56On3d9Pe1qUtzlEBtM+Ee/Za4ryf0/tC9e8mnRNAITc06oS1aK38FmDG2yaNiiUDQws="
}, {
  algorithm: "ssha512",
  password: "alice",
  salt: new Buffer("83d88386463f0625", 'hex'),
  hash: "21ea8a8975921163474f74e4349eb6b3185b95ada619ae6d83c16dae836eb9c07c33331bf7db8f89d609a01f6278d6e5be7c516a1748cbe87b4cfc125e1e2c9e",
  rfc: "{ssha512}IeqKiXWSEWNHT3TkNJ62sxhbla2mGa5tg8FtroNuucB8MzMb99uPidYJoB9ieNblvnxRahdIy+h7TPwSXh4snoPYg4ZGPwYl"
}];

describe('Verifiy hash generation', function() {
    describe('test algorithms', function() {
        it('hash should be as expected', function(done) {
            for (var i = 0, j = rfc2307.length; i < j; i++) {
              var rfcHash = passwordhasher.formatRFC2307(passwordhasher.createHash(rfc2307[i].algorithm, rfc2307[i].password, rfc2307[i].salt));
              var result =  rfc2307[i].rfc;
              console.log(rfcHash);
              console.log(result);
            assert.equal(rfcHash, result);
          }
          done();
        });
    });
});