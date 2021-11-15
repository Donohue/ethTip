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
