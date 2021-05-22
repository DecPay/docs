module.exports = {
    title: "DecPay Document",
    description: 'DecPay Document',
    port: 8082,
    smoothScroll: true,
    // 多语言
    locales: {
        '/': {
            lang: 'English',
            title: 'DecPay Document',
            description: 'DecPay Document'
        },
        '/zh-CN/': {
            lang: '简体中文',
            title: 'DecPay文档',
            description: 'DecPay开发文档'
        }
    },
    // 主题配置
    themeConfig: {
        logo: '/images/logo.png',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                nav: [
                    // {
                    //     text: 'Guide',
                    //     link: '/guide/'
                    // },
                ],
                sidebar: {

                }
            },
            '/zh-CN/': {
                label: '简体中文',
                selectText: '选择语言',
                nav: [
                    {
                        text: '官网',
                        link: 'https://decpay.finance',
                    },
                    {
                        text: 'DecPay App管理端',
                        link: 'https://app.decpay.finance',
                    },
                    {
                        text: '教程',
                        link: '/zh-CN/started/get-started.md'
                    },
                    {
                        text: 'API',
                        link: '/zh-CN/api/DecPay.md'
                    }
                ],
                sidebar: [
                    {
                        title: '接入',
                        collapsable: false,
                        children: [
                            '/zh-CN/started/get-started.md',
                            '/zh-CN/started/currency-converter.md',
                            '/zh-CN/started/polling-result.md'
                        ]
                    },
                    {
                        title: '网络',
                        collapsable: false,
                        children: [
                            '/zh-CN/networks/bsc-mainnet.md',
                            '/zh-CN/networks/heco-mainnet.md',
                            '/zh-CN/networks/ropsten-test.md',
                            '/zh-CN/networks/bsc-test.md',
                            '/zh-CN/networks/heco-test.md',
                        ]
                    }
                ]
            }
        }
    }
}