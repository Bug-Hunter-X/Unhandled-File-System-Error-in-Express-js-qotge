# Unhandled File System Error in Express.js

This repository demonstrates an uncommon error in Node.js Express.js applications where an attempt to send a file using `res.sendFile` results in a server crash if the specified file does not exist.  The solution provides a robust way to handle this situation gracefully.

## Bug

The `bug.js` file contains an Express.js application that attempts to serve `index.html`. If `index.html` is not present in the same directory, the server will crash with an error.

## Solution

The `bugSolution.js` file demonstrates the proper way to handle the file system error. It includes error handling to prevent the server from crashing and provides a user-friendly response in case of a missing file.