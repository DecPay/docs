

# 汇率换算

### 方式一，使用第三方API汇率接口

[Coingecko API服务](https://www.coingecko.com/en/api)  
[Coinmarketcap API服务](https://coinmarketcap.com/api/)  

> 基本上第三方的API服务都是收费的，如果您不考虑API成本费用可以使用这些API，较为稳定

### 方式二，使用 Chainlink 的喂价数据(推荐)

+ 可以免费使用喂价数据
+ 价格更加去中心化
  
直接读取 chainlink 的喂价合约获取汇算比率。
  
[Chainlink文档](https://docs.chain.link/docs/ethereum-addresses/)