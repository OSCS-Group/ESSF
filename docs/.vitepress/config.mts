import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import * as fs from 'fs'
import * as path from 'path'

// 威胁分类侧边栏配置
function sidebarESTTDetail(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '威胁分类',
      link: '/ESTT/',
      items: [
        // { text: '矩阵视图', link: '/ESTT/matrix-view' }, // 添加矩阵视图链接
        {
          text: '漏洞利用（T1）',
          collapsed: false,
          items: [
            {
              text: '利用自身漏洞(T1-1)',
              collapsed: true,
              items: [
                { text: '利用设计缺陷(T1-1-1)', link: '/ESTT/T1-1-1' },
                { text: '利用代码缺陷(T1-1-2)', link: '/ESTT/T1-1-2' },
                { text: '利用配置缺陷(T1-1-3)', link: '/ESTT/T1-1-3' }
              ]
            },
            {
              text: '利用依赖成分漏洞(T1-2)',
              collapsed: true,
              items: [
                { text: '利用依赖成分设计缺陷(T1-2-1)', link: '/ESTT/T1-2-1' },
                { text: '利用依赖成分代码缺陷(T1-2-2)', link: '/ESTT/T1-2-2' },
                { text: '利用依赖成分配置缺陷(T1-2-3)', link: '/ESTT/T1-2-3' }
              ]
            }
          ]
        },
        {
          text: '知识产权威胁(T2)',
          collapsed: true,
          items: [
            {
              text: '开源许可威胁(T2-1)',
              collapsed: true,
              items: [
                { text: '违反许可证使用条款(T2-1-1)', link: '/ESTT/T2-1-1' },
                { text: '开源许可证冲突(T2-1-2)', link: '/ESTT/T2-1-2' }
              ]
            },
            {
              text: '知识产权非法使用(T2-2)',
              collapsed: true,
              items: [
                { text: '使用盗版软件(T2-2-1)', link: '/ESTT/T2-2-1' },
                { text: '违反协议进行二次分发(T2-2-2)', link: '/ESTT/T2-2-2' }
              ]
            }
          ]
        },
        {
          text: '仿冒伪劣(T3)',
          collapsed: true,
          items: [
            {
              text: '仿冒恶意软件(T3-1)',
              collapsed: true,
              items: [
                { text: '发布名称容易混淆的恶意软件(T3-1-1)', link: '/ESTT/T3-1-1' }
              ]
            },
            {
              text: '劣质软件(T3-2)',
              collapsed: true,
              items: [
                { text: '未按承诺提供合格软件(T3-2-1)', link: '/ESTT/T3-2-1' }
              ]
            }
          ]
        },
        {
          text: '恶意篡改(T4)',
          collapsed: true,
          items: [
            {
              text: '开发阶段篡改(T4-1)',
              collapsed: true,
              items: [
                { text: '第三方提交恶意代码合并请求(T4-1-1)', link: '/ESTT/T4-1-1' },
                { text: '官方开发者提交恶意代码(T4-1-2)', link: '/ESTT/T4-1-2' }
              ]
            },
            {
              text: '构建阶段篡改(T4-2)',
              collapsed: true,
              items: [
                { text: '利用开源构建服务篡改代码(T4-2-1)', link: '/ESTT/T4-2-1' },
                { text: '攻击构建服务篡改代码(T4-2-2)', link: '/ESTT/T4-2-2' }
              ]
            },
            {
              text: '分发阶段篡改(T4-3)',
              collapsed: true,
              items: [
                { text: '通过接管托管仓库账号篡改(T4-3-1)', link: '/ESTT/T4-3-1' },
                { text: '服务劫持(T4-3-2)', link: '/ESTT/T4-3-2' },
                { text: '域名劫持(T4-3-3)', link: '/ESTT/T4-3-3' }
              ]
            }
          ]
        },
        {
          text: '供应关系威胁(T5)',
          collapsed: true,
          items: [
            {
              text: '供应中断或降级(T5-1)',
              collapsed: true,
              items: [
                { text: '软件停止维护(T5-1-1)', link: '/ESTT/T5-1-1' },
                { text: '供应商停止供应(T5-1-2)', link: '/ESTT/T5-1-2' },
                { text: '由于其他因素影响供应(T5-1-3)', link: '/ESTT/T5-1-3' }
              ]
            }
          ]
        },
        {
          text: '违规操作(T6)',
          collapsed: true,
          items: [
            {
              text: '违规获取(T6-1)',
              collapsed: true,
              items: [
                { text: '违规获取数据(T6-1-1)', link: '/ESTT/T6-1-1' },
                { text: '违规获取权限(T6-1-2)', link: '/ESTT/T6-1-2' }
              ]
            },
            {
              text: '违规使用(T6-2)',
              collapsed: true,
              items: [
                { text: '违规使用软件(T6-2-1)', link: '/ESTT/T6-2-1' },
                { text: '违规使用数据(T6-2-2)', link: '/ESTT/T6-2-2' }
              ]
            },
            {
              text: '违规传输(T6-3)',
              collapsed: true,
              items: [
                { text: '违规传输数据(T6-3-1)', link: '/ESTT/T6-3-1' }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// 软件供应链成分侧边栏配置
function sidebarESCTDetail(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '企业软件成分分类体系',
      link: '/ESCT/',
      items: [
        {
          text: '业务应用层',
          collapsed: true,
          link: '/ESCT/application/',
          items: [
            { text: '自研代码', link: '/ESCT/application/in_house_developed_code' },
            { text: '自研组件', link: '/ESCT/application/in_house_developed_components' },
            { text: '开源组件', link: '/ESCT/application/open_source_components' },
            { text: '闭源组件', link: '/ESCT/application/closed_source_components' },
            { text: 'SDK', link: '/ESCT/application/sdk' },
            { text: '开源应用软件', link: '/ESCT/application/open_source_applications' },
            { text: '闭源应用软件', link: '/ESCT/application/closed_source_applications' },
            { text: '模型', link: '/ESCT/application/machine_learning_models' }
          ]
        },
        {
          text: '外部依赖层',
          collapsed: true,
          link: '/ESCT/external_dependency/',
          items: [
            { text: '外部API', link: '/ESCT/external_dependency/external_apis' },
            { text: '外部数据源', link: '/ESCT/external_dependency/external_data_sources' },
            { text: 'SaaS服务', link: '/ESCT/external_dependency/saas_services' }
          ]
        },
        {
          text: '数据处理层',
          collapsed: true,
          link: '/ESCT/data_processing/',
          items: [
            { text: '数据库', link: '/ESCT/data_processing/databases' },
            { text: '对象存储', link: '/ESCT/data_processing/object_storage' },
            { text: '数据仓库', link: '/ESCT/data_processing/data_warehouses' },
            { text: '缓存', link: '/ESCT/data_processing/caches' },
            { text: '数据分发', link: '/ESCT/data_processing/data_distribution' },
            { text: '数据处理平台', link: '/ESCT/data_processing/data_processing_platform' }
          ]
        },
        {
          text: '运行环境层',
          collapsed: true,
          link: '/ESCT/runtime_environment/',
          items: [
            { text: '操作系统', link: '/ESCT/runtime_environment/operating_systems' },
            { text: '编程语言运行时', link: '/ESCT/runtime_environment/programming_language_runtimes' },
            { text: '应用服务器', link: '/ESCT/runtime_environment/application_servers' },
            { text: '容器运行时', link: '/ESCT/runtime_environment/container_runtimes' }
          ]
        },
        {
          text: '基础设施层',
          collapsed: true,
          link: '/ESCT/infrastructure/',
          items: [
            { text: '物理服务器', link: '/ESCT/infrastructure/physical_servers' },
            { text: '虚拟机', link: '/ESCT/infrastructure/virtual_machines' },
            { text: '网络设备', link: '/ESCT/infrastructure/network_devices' }
          ]
        },
        {
          text: '工程效率层',
          collapsed: true,
          link: '/ESCT/development_engineering/',
          items: [
            { text: '代码版本控制系统', link: '/ESCT/development_engineering/code_version_control_systems' },
            { text: '集成开发环境', link: '/ESCT/development_engineering/integrated_development_environments' },
            { text: '构建依赖管理工具', link: '/ESCT/development_engineering/build_dependency_management_tools' },
            { text: 'CI/CD自动化系统', link: '/ESCT/development_engineering/cicd_automation_systems' },
            { text: '制品仓库', link: '/ESCT/development_engineering/artifact_repository' }
          ]
        }
      ]
    }
  ]
}

export default defineConfig({
  title: "ESSF",
  description: "企业软件安全治理框架",
  appearance: false,
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '成分分类', link: '/esct-intro' },
      { text: '威胁分类', link: '/estt-intro' },
      {
        text: '文档', items: [
          { text: '成分分类文档', link: '/ESCT/' },
          { text: '威胁分类文档', link: '/ESTT/' },
        ]
      },
    ],

    sidebar: {
      '/ESTT/': sidebarESTTDetail(),
      '/ESCT/': sidebarESCTDetail()
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} OSCS Group`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OSCS-Group/ESSF' }
    ]
  },

  // 添加Vue相关配置
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  vite: {
    ssr: {
      // 将vue-flow相关包标记为外部依赖，避免SSR渲染它们
      noExternal: ['@iconify/json', 'unconfig'],
      external: ['@vue-flow/core', '@vue-flow/controls']
    },
    plugins: [
      Unocss({
        presets: [
          presetUno(),
          presetIcons({
            scale: 1.2,
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle'
            },
            // 自动加载图标
            autoInstall: true
          })
        ]
      })
    ]
  }
})