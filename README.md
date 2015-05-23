# site-compiler
yet another static site compiler

# Example

```js
var staticWebsiteBuilder = require('site-compiler');

var config = {
  domain: 'www.your-domain-name',
  public_folder: 'public/', // the file path where the files should be written to

  // anything else you'd like to add to the config

  files: [
    {
      url: '/index.html', // the filename in the public_folder
      render: function(config, callback){
        // do what ever you need to do
        // read files, make db queries, get stuff out of the config etc...
        // when you are done callback(err, data);
        // data is a string or binary data that should be written to the file
      }

      // anything else you'd like to use to describe the file

    },
    ...
  ]
};
```

# API

## staticWebsiteBuilder(config, callback)

Builds the website based on your config. Calls the callback when it's done. It has a single argument `error` that is set if any part of it fails.

## staticWebsiteBuilder.justRun(config)

Convenience function to that just builds the site and writes to stdout and stderr. Useful if you are making a CLI script.

# License

The MIT License (MIT)

Copyright (c) 2015 Small Helm LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
