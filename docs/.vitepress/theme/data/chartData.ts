export const chartData = {
  rootNode: {
    id: 'enterprise',
    name: '企业',
    category: 'enterprise',
  },
  businessSystems: [
    {
      id: 'ecommerce',
      name: '电子商务系统',
      category: 'businessSystem',
      applications: [
        {
          id: 'web-app',
          name: '网上商城',
          category: 'application',
          components: [
            {
              id: 'database',
              name: '数据库',
              category: 'component',
              threatTypes: [
                {
                  id: 'T1-1-3',
                  name: '利用配置缺陷',
                  category: 'threatType'
                },
                {
                  id: 'T6-1-1',
                  name: '违规获取数据',
                  category: 'threatType'
                }
              ]
            },
            {
              id: 'open-source',
              name: '开源组件',
              category: 'component',
              threatTypes: [
                {
                  id: 'T2-1-1',
                  name: '违反许可证使用条款',
                  category: 'threatType'
                },
                {
                  id: 'T6-3-1',
                  name: '违规传输数据',
                  category: 'threatType'
                }
              ]
            }
          ]
        },
        {
          id: 'mobile-app',
          name: '移动商城',
          category: 'application',
          components: [
            {
              id: 'sdk',
              name: 'SDK',
              category: 'component',
              threatTypes: [
                {
                  id: 'T1-1-2',
                  name: '利用代码缺陷',
                  category: 'threatType'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'payment',
      name: '支付系统',
      category: 'businessSystem',
      applications: [
        {
          id: 'payment-gateway',
          name: '支付网关',
          category: 'application',
          components: [
            {
              id: 'self-code',
              name: '自研代码',
              category: 'component',
              threatTypes: [
                {
                  id: 'T4-2-2',
                  name: '攻击构建服务篡改代码',
                  category: 'threatType'
                }
              ]
            },
            {
              id: 'external-api',
              name: '外部API',
              category: 'component',
              threatTypes: [
                {
                  id: 'T4-3-2',
                  name: '服务劫持',
                  category: 'threatType'
                },
                {
                  id: 'T5-1-3',
                  name: '由于其他因素影响供应',
                  category: 'threatType'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} 