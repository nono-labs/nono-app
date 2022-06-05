import Web3 from  'web3';

/**
 * @description wei-unit
 * @param num{number|string}
 * @param dir{boolean}
 * @param unit{['noether','wei','kwei','ether']|*}
 * @param isBN{boolean}
 * @returns {any|number}
 */
 export const toDecimal = (num = 0, dir = false, unit = 'ether', isBN = false) => {
	if (!num) {
		return 0
	}
	let n = dir ? Web3.utils.toWei(num, unit) : Web3.utils.fromWei(num.toString(), unit)
	return isBN ? Web3.utils.toBN(n) : n
}