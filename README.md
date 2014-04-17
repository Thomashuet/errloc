# Errloc

Errloc is an error logger that tracks every line processing an error (not just the one producing the error).

# Usage

Start with

    var errloc = require('errloc')();

for the default format `filename:line`, or with

    var errloc = require('errloc')('File %s, line %s.');

to provide a custom format.

`errloc(callback)` expects a `callback(err, ...)` and modifies it to log the file name and line number in case `err` is not null.
