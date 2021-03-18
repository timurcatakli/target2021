/********************************************************************
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

 You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

 Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 Example 1:
 Input: prices = [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

 Example 2:
 Input: prices = [7,6,4,3,1]
 Output: 0
 Explanation: In this case, no transactions are done and the max profit = 0.
 *******************************************************************/

const bestStockProfit = prices => {
  let lowPrice = prices[0];
  let highPrice = prices[0];
  let globalMaxProfit = 0;
  // O(n) time, O(1) space;
  prices.forEach(price => {
    // must find highPrice first
    if (price >= highPrice) {
      highPrice = price;
    }
    if (price <= lowPrice) {
      lowPrice = price;
      // this will make sure we always start from new high price, this will also cover max profit = 0 case
      highPrice = price;
    }
    const localMaxProfit = highPrice - lowPrice;
    if (localMaxProfit > globalMaxProfit) {
      globalMaxProfit = localMaxProfit;
    }
  });
  return globalMaxProfit;
};

console.log(bestStockProfit([7,6,4,3,1]));
