<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative h-[600px] flex items-center bg-gradient-to-r from-gray-50 to-transparent">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
        <div class="pt-20">
          <h1 class="text-5xl font-bold mb-8 leading-tight tracking-tight">企业软件成分分类体系 <span
              class="text-blue-600">(ESCT)</span></h1>
          <p class="text-2xl text-gray-700 mb-8 font-light leading-relaxed">构筑成分认知基石，洞悉企业软件构成全貌</p>
          <p class="text-lg text-gray-600 mb-10 leading-relaxed">企业软件成分分类体系 (ESCT)
            是一套标准化的分类框架，旨在帮助企业清晰地识别、定义和组织构成企业软件的各种成分，有效管理安全风险。</p>
          <a href="/ESCT/" class="inline-block">
            <button
              class="bg-blue-600 text-white px-12 py-4 text-lg cursor-pointer hover:bg-blue-700 transition-colors whitespace-nowrap rounded-lg">了解更多</button>
          </a>
        </div>
        <div class="relative h-full overflow-hidden">
          <img v-if="heroImage" :src="heroImage" class="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            alt="Hero image">
          <div class="absolute inset-0 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
      </div>
    </div>
    <!-- 核心价值 -->
    <div class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-6">ESCT 的核心价值</h2>
        <p class="text-gray-600 text-center mb-24 text-lg">全方位保障企业软件安全，构建可信赖的数字化基础</p>
        <div class="grid grid-cols-1 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="group bg-white rounded-xl p-8 border border-gray-50 hover:border-blue-50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transition-all duration-500 relative overflow-hidden">
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative flex items-start gap-8">
              <div
                class="flex-shrink-0 w-20 h-20 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-500">
                <i :class="value.icon" class="text-blue-600 text-3xl"></i>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">{{ value.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ value.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 应用场景 -->
    <div class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-24">软件成分分类的核心应用场景</h2>
        <div class="flex justify-center mb-12">
          <div class="inline-flex border border-gray-200 bg-gray-50 rounded-full p-1">
            <button v-for="(scenario, index) in scenarios" :key="index" @click="activeScenario = index" :class="[
              'px-8 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer text-sm font-medium',
              activeScenario === index ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:text-blue-600'
            ]">
              {{ scenario.title }}
            </button>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div :key="activeScenario" class="max-w-5xl mx-auto">
            <h3 class="text-2xl font-semibold mb-12 text-center">{{ scenarios[activeScenario].title }}</h3>
            <div class="grid grid-cols-1 gap-12">
              <div v-for="(point, index) in scenarios[activeScenario].points" :key="index"
                class="group bg-white rounded-xl p-8 border border-gray-50 hover:border-blue-50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transition-all duration-500 relative overflow-hidden">
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div class="relative flex items-start gap-6">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-gray-50 group-hover:bg-blue-50/50 rounded-lg flex items-center justify-center transition-colors duration-500">
                    <span class="text-blue-600 font-semibold">{{ index + 1 }}</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-medium mb-3 group-hover:text-blue-600 transition-colors">{{ point.title }}</h4>
                    <p class="text-gray-600 leading-relaxed text-sm">{{ point.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- 分类体系 -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-6">企业软件成分分类体系</h2>
        <p class="text-xl text-center text-gray-600 mb-20">探索企业软件成分分类体系，构建企业软件认知基石</p>
        <div class="bg-white p-10 rounded-lg border border-gray-50 mb-12">
          <LayerDiagram />
        </div>
        <div class="text-center">
          <a href="/ESCT/" class="inline-block">
            <button
              class="bg-blue-600 text-white px-12 py-4 text-lg cursor-pointer hover:bg-blue-700 transition-colors whitespace-nowrap rounded-lg">
              探索完整分类体系
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LayerDiagram from './LayerDiagram.vue';

const heroImage = '';
const activeScenario = ref(0);

const coreValues = [
  {
    title: '清晰企业软件安全边界',
    content: '帮助企业系统化地识别和定义企业软件中的各类成分，从自研代码、开源组件到数据库等等，清晰界定企业软件的安全边界，为企业构建全面的安全防护体系提供明确的方向',
    icon: 'i-carbon-security'
  },
  {
    title: '有效评估企业软件安全水平',
    content: '帮助企业全面盘点和分类软件成分，有针对性地评估不同类型成分的安全风险，量化企业软件的整体安全水平，为持续改进提供数据支撑。',
    icon: 'i-carbon-chart-line'
  },
  {
    title: '有效实施企业软件安全治理',
    content: '帮助企业制定针对不同类型成分的安全策略和控制措施，将安全治理措施有效落实到企业软件的各个环节，构建起一套可落地、可执行的治理框架，保障企业软件安全。',
    icon: 'i-carbon-settings'
  }
];
const scenarios = [
  {
    title: '软件资产清单管理',
    points: [
      {
        title: '构建更全面精准的软件物料清单',
        content: '为构建软件物料清单提供标准化的成分分类框架，确保结构化、规范化和高可用性，实现对软件资产的有效管理。'
      },
      {
        title: '软件成分清单可视化与分析',
        content: '对软件成分清单进行多维度可视化展示和分析，帮助企业直观了解软件资产的构成、分布和关键属性，为资产管理决策提供数据支撑。'
      },
      {
        title: '软件成分资产生命周期管理',
        content: '跟踪和管理软件成分资产的整个生命周期，从引入、使用到废弃，实现对软件资产的全生命周期精细化管控，提升资产管理效率和安全性。'
      }
    ]
  },
  {
    title: '安全漏洞与事件应急响应',
    points: [
      {
        title: '漏洞影响成分快速精准定位',
        content: '在漏洞扫描或威胁情报告警时，快速、精准地定位受漏洞影响的软件供应链成分，缩短漏洞响应时间，降低安全风险蔓延。'
      },
      {
        title: '安全事件影响范围快速评估与界定',
        content: '在安全事件发生时，基于软件成分分类，快速评估和界定事件影响的资产范围，避免遗漏或误判，为高效的应急处置提供决策依据。'
      },
      {
        title: '应急响应资源高效调度与分配',
        content: '根据受影响成分的类型、重要性和风险等级，高效调度和分配应急响应资源，优先保障核心业务和关键资产的安全，提升整体应急响应效率。'
      }
    ]
  }
];
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>