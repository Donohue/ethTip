function sendEth(fromAddress, toAddress, etherValue) {
	var weiValue = etherValue * Math.pow(10, 18);
    var weiValueHex = weiValue.toString(16);
    
	if (window.ethereum == undefined) {
        console.log('[ethTip] sendEth called without window.ethereum object');
        return;
    }

    params = [{
        to: toAddress,
        from: fromAddress,
        value: weiValueHex
    }];
    
	window.ethereum.request({
        method: 'eth_sendTransaction',
        params: params
    }) 
    .then((result) => {
        console.log('[ethTip] User completed Tx: https://etherscan.io/tx/' + result);
		alert('Thanks for the eth! https://etherscan.io/tx/' + result);
	})
    .catch((error) => {
        console.log('[ethTip] ' + error['message']);
    });
}

function connectAndSendEth(toAddress, etherValue) {
    if (window.ethereum == undefined) {
        console.log('[ethTip] connectAndSendEth called without window.ethereum object');
        return;
    }

    window.ethereum.request(
        { method: 'eth_requestAccounts' }
    )
    .then((accounts) => {
        if (accounts.length > 0) {
            sendEth(accounts[0], toAddress, etherValue);
        }
    })
    .catch((error) => {
        console.log('[ethTip] Error: ' + JSON.stringify(error));
    });
}

function getElementByTagAttributeAndValue(tag, attribute, value) {
	var elements = document.getElementsByTagName(tag);
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var attributeValue = element.getAttribute(attribute);
		if (attributeValue == value) {
			return element;
		}
	}
	return null;
}

document.addEventListener('DOMContentLoaded', (event) => {
	var ethAddressElement = getElementByTagAttributeAndValue('meta', 'name', 'ethAddress');
    var ethTipElement = getElementByTagAttributeAndValue('meta', 'name', 'ethTip');

	var toAddress = ethAddressElement? ethAddressElement.getAttribute('content'): null;
	var etherTip = ethTipElement? ethTipElement.getAttribute('content'): null;

    if (window.ethereum != undefined && toAddress != undefined && etherTip != undefined) {
		var etherTipButton = document.getElementById('ethTip');
		etherTipButton.classList.add('active');
		etherTipButton.addEventListener('click', (event) => {
        	connectAndSendEth(toAddress, etherTip);
    	});
	}
});
