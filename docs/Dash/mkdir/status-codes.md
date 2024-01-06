## `mkdir`
### Status codes
You can see status code of mkdir command in browser log, it should look like this:

`debug: mkdir status code is 0`

Last number can have these values:
 - `0`: success
 - `1`: destination directory not found
 - `2`: given destination is not a directory
 - `3`: destination folder write permission denied
 - `4`: new directory name contains `/` character
 - `5`: directory already exists
