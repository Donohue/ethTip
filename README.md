# ethTip

![icon](eth.png "ethereum icon")

An opensource drop-in for Ethereum tipping on your website.

## Integration

You can integrate ethTip with a few lines of HTML on your site.

1. Add `meta` tags in your `head` tag to determine the ethereum address and tip amount

```
<meta name="ethAddress" content="0x....">
<meta name="ethTip" content=".005"/> <!-- About $20 at the time of writing -->
```

2. Include the ethtip.js and ethtip.css files in your `head` tag

```
<link rel="stylesheet" href="https://bthdonohue.com/ethTip/ethtip.css">
<script src="https://bthdonohue.com/ethTip/ethtip.js"></script>
```

3. Add the ethtip button at the bottom of your `body` tag

```
<button id="ethTip"></button>
```

## How it Works

`eth.js` integrates with the [Ethereum Provider API](https://docs.metamask.io/guide/ethereum-provider.html) to interact with a browser-based Ethereum wallet like [Metamask](https://metamask.io). `eth.js` pulls the address and tip amount directly from the meta tags in your webpage.

`eth.css` styles the ethTip button and handles darkmode. If you'd prefer, you can leave out the CSS sheet and style the `ethTip` button on your own.

The button uses the `ethTip` id for references in `eth.js` or `eth.css`. This element can work with any tag as long as it keeps the `id="ethTip"` attribute.

## Copyright

Copyright &copy; Brian Donohue

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
