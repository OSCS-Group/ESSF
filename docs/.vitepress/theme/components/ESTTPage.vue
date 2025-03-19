<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative h-[600px] flex items-center bg-gradient-to-r from-gray-50 to-transparent">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
        <div class="pt-20">
          <h1 class="text-5xl font-bold mb-8 leading-tight tracking-tight">企业软件成分威胁分类 <span
              class="text-violet-600">(ESTT)</span></h1>
          <p class="text-2xl text-gray-700 mb-8 font-light leading-relaxed">洞悉威胁全景，构建坚实防线</p>
          <p class="text-lg text-gray-600 mb-10 leading-relaxed">企业软件成分威胁分类 (ESTT) 是一套系统化的威胁知识库，通过对典型威胁场景的深度剖析和分类，结合真实攻击事件和业界最佳实践，为您提供企业软件安全建设的权威指导，助力企业有效应对日益复杂的安全挑战。</p>
          <a href="/ESTT/" class="inline-block">
            <button
              class="bg-violet-600 text-white px-12 py-4 text-lg cursor-pointer hover:bg-violet-700 transition-colors whitespace-nowrap rounded-lg">了解更多</button>
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
        <h2 class="text-3xl font-semibold text-center mb-6">威胁分类的核心价值</h2>
        <p class="text-gray-600 text-center mb-24 text-lg">系统化呈现威胁场景，提供精准安全防护指南</p>
        <div class="grid grid-cols-1 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="group bg-white rounded-xl p-8 border border-gray-50 hover:border-violet-50 hover:bg-gradient-to-br hover:from-white hover:to-violet-50/30 transition-all duration-500 relative overflow-hidden">
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative flex items-start gap-8">
              <div
                class="flex-shrink-0 w-20 h-20 bg-violet-50 group-hover:bg-violet-100 rounded-xl flex items-center justify-center transition-colors duration-500">
                <i :class="value.icon" class="text-violet-600 text-3xl"></i>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-4 group-hover:text-violet-600 transition-colors">{{ value.title }}</h3>
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
        <h2 class="text-3xl font-semibold text-center mb-24">威胁分类的应用场景</h2>
        <div class="flex justify-center mb-12">
          <div class="inline-flex border border-gray-200 bg-gray-50 rounded-full p-1">
            <button v-for="(scenario, index) in scenarios" :key="index" @click="activeScenario = index" :class="[
              'px-8 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer text-sm font-medium',
              activeScenario === index ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-600 hover:text-violet-600'
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
                class="group bg-white rounded-xl p-8 border border-gray-50 hover:border-violet-50 hover:bg-gradient-to-br hover:from-white hover:to-violet-50/30 transition-all duration-500 relative overflow-hidden">
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div class="relative flex items-start gap-6">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-gray-50 group-hover:bg-violet-50/50 rounded-lg flex items-center justify-center transition-colors duration-500">
                    <span class="text-violet-600 font-semibold">{{ index + 1 }}</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-medium mb-3 group-hover:text-violet-600 transition-colors">{{ point.title }}</h4>
                    <p class="text-gray-600 leading-relaxed text-sm">{{ point.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
        
    <!-- 威胁矩阵 -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-6">企业软件安全威胁矩阵(ESCTM)</h2>
        <p class="text-xl text-center text-gray-600 mb-6">Enterprise Software Composition Security Threat Matrix</p>

        <p class="text-lg text-center text-gray-600 mb-20">企业软件安全威胁矩阵是威胁分类的核心成果之一，旨在构建企业软件安全领域的威胁全景地图。它系统化地呈现了企业软件中各类资产可能面临的威胁类型和威胁程度，帮助用户直观了解威胁分布，快速定位高风险威胁，并指导安全防御策略的制定。威胁矩阵将持续更新和完善，力求成为企业软件安全领域权威的威胁知识库和风险评估工具。</p>
        
        <!-- 威胁矩阵 -->
        <div class="mb-12">
          <ThreatMatrix />
        </div>
        
        <div class="text-center">
          <a href="/ESTT/" class="inline-block">
            <button
              class="bg-violet-600 text-white px-12 py-4 text-lg cursor-pointer hover:bg-violet-700 transition-colors whitespace-nowrap rounded-lg">
              探索完整威胁分类
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ThreatMatrix from './ThreatMatrix.vue'

const heroImage = '';
const activeScenario = ref(0);

const coreValues = [
  {
    title: '清晰界定企业软件安全边界',
    content: '面对企业软件日益扩展和模糊的安全边界，通过系统化的威胁场景分类，清晰地界定了企业软件安全威胁的范围。从代码仓库到交付管道，从开源组件到云基础设施，帮助全面了解企业软件中可能存在的各类威胁，避免安全盲区，为有效防护提供明确的方向。',
    icon: 'i-carbon-border-full'
  },
  {
    title: '量化评估企业软件安全风险',
    content: '安全风险评估不再是纸上谈兵。依托企业软件安全威胁矩阵，将威胁程度、资产重要性、漏洞情况等因素相结合，提供量化评估企业软件安全风险的有效工具。通过威胁分类，可以清晰了解当前的安全水位，识别高风险领域，为安全资源投入和优先级排序提供数据支撑，实现更精准的安全治理。',
    icon: 'i-carbon-chart-evaluation'
  },
  {
    title: '提供可落地的安全治理思路',
    content: '威胁分类不仅停留在威胁分析层面，更致力于为企业提供可落地的安全治理思路。针对每一类威胁场景，都深入分析其攻击路径、影响范围，并提供相应的解决方案和最佳实践建议。从安全策略制定到技术措施落地，构建一套体系化、可执行的企业软件安全治理框架，有效应对各类威胁挑战，提升整体安全防御能力。',
    icon: 'i-carbon-roadmap'
  }
];
const scenarios = [
  {
    title: '企业安全建设',
    points: [
      {
        title: '企业软件安全项目立项参考依据',
        content: '为企业软件安全项目提供全面的威胁视角，帮助企业明确项目目标、范围和优先级，确保项目立项的科学性和有效性。'
      },
      {
        title: '安全运营中提升威胁识别能力、风险排查',
        content: '提升日常安全运营中的威胁识别广度和深度，快速定位和排查企业软件中的安全风险，提高安全运营效率和准确性。'
      },
      {
        title: '供应商安全能力评价',
        content: '在评估供应商安全能力时，可以作为统一的威胁评估标准，帮助企业客观、全面地评估供应商的安全风险，降低供应链安全风险。'
      },
      {
        title: '安全意识培训与提升',
        content: '可以作为安全培训的知识框架，帮助安全团队、开发团队等深入理解企业软件安全威胁，提升整体安全意识和技能水平。'
      }
    ]
  },
  {
    title: '安全产品设计',
    points: [
      {
        title: '指导安全产品功能设计',
        content: '基于威胁分类和分析，明确安全产品应具备的核心功能，例如供应链漏洞扫描、威胁情报分析、安全配置检测等，确保产品功能设计的有效性和针对性。'
      }
    ]
  },
  {
    title: '研究与标准化',
    points: [
      {
        title: '学术研究与威胁分析',
        content: '为学术研究提供系统化的威胁知识框架，促进对企业软件安全威胁的深入研究和分析。'
      },
      {
        title: '行业标准制定与完善',
        content: '为行业标准的制定提供威胁分类和参考依据，推动企业软件安全标准的完善和统一。'
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