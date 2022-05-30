import isIPFS from 'is-ipfs'
import Images from '@/constant';
export const shortenAddress = (address, chars = 6) => {
	// const parsed = isAddress(address)
	// if (!parsed) {
	// 	console.error(`Invalid 'address' parameter '${address}'.`)
	// }
	return `${address?.substring(0, chars + 1)}...${address?.substring(42 - chars)}`
}
export const getImgLink = (url) => {
	//	Case noImg
	if (!url || url.indexOf('undefined') > -1 || url.indexOf('null') > -1) {
		return Images.noImg
	}

	// Case outer url : http:// | https:// | data:image:
	if (/^http:\/\/|https:\/\/|data:image/.test(url)) {
		return url
	}

	// Case ipfs
	const checkIpfsUrl = convertToDesiredGateway(url)

	return checkIpfsUrl || Images.noImg
}
const previewBaseUrl = 'https://app.dnft.world/ipfsGet'
const desiredGatewayPrefix = 'https://dnft.mypinata.cloud'
const convertToDesiredGateway = (sourceUrl) => {
	try {
		// Case inner url : ipfsGet/cid | /ipfsGet/cid
		if (/ipfsGet\//.test(sourceUrl)) {
			return previewBaseUrl + sourceUrl.replace('/ipfsGet', '')
		}

		const results = containsCID(sourceUrl)
		if (results.containsCid !== true) {
			throw new Error('url does not contain CID')
		}

		const splitUrl = sourceUrl.split(results.cid)
		const append = `${results.cid}${splitUrl[1]}${splitUrl?.[2] || ''}`
		// case 1 - the ipfs://cid path
		if (sourceUrl.includes(`ipfs://${results.cid}`)) {
			return desiredGatewayPrefix
				? `${desiredGatewayPrefix}/ipfs/${append}`
				: `${previewBaseUrl}/${append}`
		}

		// case 2 - the /ipfs/cid path (this should cover ipfs://ipfs/cid as well
		if (sourceUrl.includes(`/ipfs/${results.cid}`)) {
			return desiredGatewayPrefix
				? `${desiredGatewayPrefix}/ipfs/${append}`
				: `${previewBaseUrl}/${append}`
		}

		// case 3 - the /ipns/cid path
		if (sourceUrl.includes(`/ipns/${results.cid}`)) {
			return desiredGatewayPrefix
				? `${desiredGatewayPrefix}/ipns/${append}`
				: `${previewBaseUrl}/${append}`
		}
	} catch {
		return false
	}
}
const containsCID = (url) => {
	if (typeof url !== 'string') {
		throw new Error('url is not string')
	}
	const splitUrl = url.split('/')
	for (const split of splitUrl) {
		if (isIPFS.cid(split)) {
			return {
				containsCid: true,
				cid: split,
			}
		}
	}
	return {
		containsCid: false,
		cid: null,
	}
}
