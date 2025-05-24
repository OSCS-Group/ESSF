<template>
  <div class="max-w-7xl mx-auto px-4 py-16 relative">
    <h2 class="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] relative group"
      style="font-family: 'Inter', sans-serif;">
      软件安全量化管理指标体系
      <a href="#security-indicators" class="anchor-link opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" aria-hidden="true">
        <i class="i-carbon-link text-[#6838F0] text-xl"></i>
      </a>
    </h2>
    
    <!-- 核心指标卡片 - 以CRI为中心 -->
    <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8">
      <!-- CRI作为核心，使用更紧凑的水平布局 -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div class="w-36 h-36 flex-shrink-0 rounded-full bg-gradient-to-br from-[#F5F0FF] to-[#EBE3FF] flex items-center justify-center relative shadow-lg">
          <div class="absolute inset-2 rounded-full border-4 border-[#6838F0] border-opacity-20"></div>
          <span class="text-4xl font-bold text-[#6838F0]">{{ cri.toFixed(2) }}</span>
        </div>
        <div class="text-center md:text-left max-w-md">
          <div class="flex items-center justify-center md:justify-start mb-2">
            <span class="text-sm font-medium text-[#6838F0]/80 mr-2">综合风险指数</span>
            <h3 class="text-3xl font-bold text-gray-800">CRI</h3>
          </div>
          <p class="text-sm text-gray-500 mb-2">Comprehensive Risk Index</p>
          <p class="text-gray-600">
            综合风险指数反映企业软件安全的总体风险水平，数值越高表示风险越大，需要优先关注和治理
          </p>
          <div class="mt-3 flex flex-wrap gap-3">
            <button @click="toggleCriDetails" class="text-sm text-[#6838F0] hover:text-[#5A31D6] transition-colors flex items-center">
              <span class="mr-1">{{ showCriDetails ? '收起计算详情' : '查看计算详情' }}</span>
              <i :class="showCriDetails ? 'i-carbon-chevron-up' : 'i-carbon-chevron-down'" class="text-base"></i>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 计算公式可视化 -->
      <div v-if="showCriDetails" class="mb-8 animate-fadeIn px-4 md:px-10">
        <div class="bg-[#F8F7FF] rounded-xl p-6 relative">
          <h4 class="text-lg font-semibold mb-6 text-gray-700 text-center">CRI 计算公式详解</h4>
          
          <!-- 水平分数形式的公式 -->
          <div class="flex flex-col items-center max-w-3xl mx-auto">
            <!-- SII -->
            <div class="w-full bg-white rounded-lg p-4 shadow-sm mb-2 flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-4">
                  <span class="text-xl font-bold text-[#6838F0]">SII</span>
                </div>
                <div>
                  <h5 class="font-semibold text-gray-800">安全问题指数</h5>
                  <p class="text-xs text-gray-500">量化安全问题的严重程度与数量</p>
                </div>
              </div>
              <span class="text-xl font-bold text-[#6838F0]">{{ sii.toFixed(2) }}</span>
            </div>
            
            <!-- 乘号 -->
            <div class="flex justify-center items-center my-2">
              <i class="i-carbon-close text-[#6838F0] text-2xl"></i>
            </div>
            
            <!-- SAI -->
            <div class="w-full bg-white rounded-lg p-4 shadow-sm mt-2 mb-4 flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-4">
                  <span class="text-xl font-bold text-[#6838F0]">SAI</span>
                </div>
                <div>
                  <h5 class="font-semibold text-gray-800">安全能力差距指数</h5>
                  <p class="text-xs text-gray-500">量化企业安全防护能力的不足与差距</p>
                </div>
              </div>
              <span class="text-xl font-bold text-[#6838F0]">{{ sai.toFixed(2) }}</span>
            </div>
            
            <!-- 等号和结果 -->
            <div class="flex items-center mt-4">
              <i class="i-carbon-equals text-[#6838F0] text-2xl mr-4"></i>
              <div class="flex items-center bg-white rounded-lg px-6 py-3 shadow-sm">
                <div class="w-10 h-10 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-3">
                  <span class="text-lg font-bold text-[#6838F0]">CRI</span>
                </div>
                <span class="text-xl font-bold text-[#6838F0]">{{ cri.toFixed(2) }}</span>
              </div>
            </div>
          </div>
          
          <div class="mt-6 text-center text-sm text-gray-600 max-w-2xl mx-auto">
            <p>CRI = SII × SAI：综合风险指数是安全问题指数乘以安全能力差距指数得出的结果。SII 越高或 SAI 越高，风险指数就越高。</p>
            <p class="mt-2">这种计算方式直观地反映了企业安全状况：<strong>问题越多，能力差距越大，风险越大</strong></p>
          </div>
        </div>
      </div>
      
      <!-- 公式图示 -->
      <div class="flex justify-center items-center mb-8">
        <div class="flex items-center text-gray-500 text-sm">
          <span class="font-semibold">CRI 计算公式：</span>
          <div class="ml-2 flex items-center">
            <span class="font-semibold text-[#6838F0]">SII</span>
            <span class="mx-2">×</span>
            <span class="font-semibold text-[#6838F0]">SAI</span>
            <span class="mx-2">=</span>
            <span class="font-semibold text-[#6838F0]">CRI</span>
          </div>
        </div>
      </div>
      
      <!-- SII和SAI两个组成指标 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- SII 卡片 - 整个卡片可点击 -->
        <div 
          class="bg-[#F8F7FF] rounded-xl p-6 relative transition-all hover:shadow-md cursor-pointer" 
          :class="{ 'ring-2 ring-[#6838F0]': showSiiDetails }"
          @click="toggleSiiDetails"
        >
          <div class="flex items-start">
            <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-3">
              <span class="text-xl font-bold text-[#6838F0]">SII</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">安全问题指数</h4>
              <p class="text-xs text-gray-500 mb-1">Security Issue Index</p>
              <p class="text-lg font-semibold text-[#6838F0]">{{ sii.toFixed(2) }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-3">反映企业软件系统中存在的安全问题的严重程度、数量和分布范围</p>
        </div>
        
        <!-- SAI 卡片 - 整个卡片可点击 -->
        <div 
          class="bg-[#F8F7FF] rounded-xl p-6 relative transition-all hover:shadow-md cursor-pointer" 
          :class="{ 'ring-2 ring-[#6838F0]': showSaiDetails }"
          @click="toggleSaiDetails"
        >
          <div class="flex items-start">
            <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-3">
              <span class="text-xl font-bold text-[#6838F0]">SAI</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">安全能力差距指数</h4>
              <p class="text-xs text-gray-500 mb-1">Security Ability Gap Index</p>
              <p class="text-lg font-semibold text-[#6838F0]">{{ sai.toFixed(2) }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-3">反映企业安全能力与理想状态的差距程度，数值越低表示差距越小</p>
        </div>
      </div>
      
      <!-- SII 详情区域 - 放在外部 -->
      <div v-if="showSiiDetails" class="mt-8 bg-white/90 rounded-xl p-8 shadow-sm border-l-4 border-[#6838F0] border-t border-r border-b border-purple-100 animate-slideIn">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-4">
            <span class="text-xl font-bold text-[#6838F0]">SII</span>
          </div>
          <div>
            <h4 class="text-xl font-semibold text-gray-800">安全问题指数 (SII) 的构成因素</h4>
            <p class="text-sm text-gray-600">了解影响安全问题指数的关键因素和维度</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#F8F7FF] rounded-xl p-6 h-64 flex flex-col">
            <div class="flex items-center mb-4">
              <i class="i-carbon-warning-alt text-[#6838F0] text-2xl mr-3"></i>
              <h5 class="text-lg font-semibold">问题等级权重</h5>
            </div>
            <p class="text-gray-600 text-sm mb-4">严重、高危问题占比越高，SII 越高</p>
            <div class="mt-auto flex justify-between items-end w-full gap-4 h-24">
              <div class="flex flex-col items-center">
                <div class="h-20 w-10 rounded-t-md bg-red-500"></div>
                <span class="text-xs text-gray-600 mt-2">严重</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="h-16 w-10 rounded-t-md bg-orange-400"></div>
                <span class="text-xs text-gray-600 mt-2">高危</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="h-10 w-10 rounded-t-md bg-yellow-400"></div>
                <span class="text-xs text-gray-600 mt-2">中危</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="h-6 w-10 rounded-t-md bg-blue-400"></div>
                <span class="text-xs text-gray-600 mt-2">低危</span>
              </div>
            </div>
          </div>

          <div class="bg-[#F8F7FF] rounded-xl p-6 h-64 flex flex-col">
            <div class="flex items-center mb-4">
              <i class="i-carbon-chart-column text-[#6838F0] text-2xl mr-3"></i>
              <h5 class="text-lg font-semibold">问题数量</h5>
            </div>
            <p class="text-gray-600 text-sm mb-4">发现的安全问题总数越多，SII 越高</p>
            <div class="mt-auto relative h-24">
              <div class="absolute bottom-0 left-0 w-full h-full flex items-end">
                <div class="relative w-full bg-[#EBE3FF] h-20 rounded">
                  <div class="absolute bottom-0 left-0 bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] w-3/4 h-full rounded">
                    <span class="absolute top-1 right-1 text-xs font-semibold text-white">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#F8F7FF] rounded-xl p-6 h-64 flex flex-col">
            <div class="flex items-center mb-4">
              <i class="i-carbon-application text-[#6838F0] text-2xl mr-3"></i>
              <h5 class="text-lg font-semibold">应用数量</h5>
            </div>
            <p class="text-gray-600 text-sm mb-4">问题数量一致的情况下，应用数量越少，SII 越高</p>
            <div class="mt-auto h-24 flex flex-col justify-end">
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
                  <span class="text-sm text-gray-700">较少应用</span>
                </div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-blue-400 rounded-sm mr-2"></div>
                  <span class="text-sm text-gray-700">较多应用</span>
                </div>
              </div>
              <div class="flex gap-2 h-20">
                <div class="flex-1 bg-red-500/20 rounded flex items-center justify-center relative">
                  <div class="absolute inset-x-0 bottom-0 bg-red-500 h-5/6 rounded"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-semibold z-10">3个</span>
                  </div>
                </div>
                <div class="flex-1 bg-blue-400/20 rounded flex items-center justify-center relative">
                  <div class="absolute inset-x-0 bottom-0 bg-blue-400 h-2/6 rounded"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-semibold z-10">12个</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- SAI 详情区域 - 放在外部 -->
      <div v-if="showSaiDetails" class="mt-8 bg-white/90 rounded-xl p-8 shadow-sm border-l-4 border-[#6838F0] border-t border-r border-b border-purple-100 animate-slideIn">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 rounded-full bg-[#6838F0]/10 flex items-center justify-center mr-4">
            <span class="text-xl font-bold text-[#6838F0]">SAI</span>
          </div>
          <div>
            <h4 class="text-xl font-semibold text-gray-800">安全能力差距指数 (SAI) 的构成因素</h4>
            <p class="text-sm text-gray-600">了解影响安全能力差距指数的关键因素和维度</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-[#F8F7FF] rounded-xl p-6 h-64 flex flex-col">
            <div class="flex items-center mb-4">
              <i class="i-carbon-security text-[#6838F0] text-2xl mr-3"></i>
              <h5 class="text-lg font-semibold">安全能力权重</h5>
            </div>
            <p class="text-gray-600 text-sm mb-4">重要安全能力的差距对 SAI 影响更大</p>
            <div class="mt-auto space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-sm min-w-16">SAST</span>
                <div class="w-full bg-[#EBE3FF] h-3 rounded-full">
                  <div class="bg-[#6838F0] h-3 rounded-full" style="width: 10%"></div>
                </div>
                <span class="text-xs min-w-8 text-right">5</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm min-w-16">SCA</span>
                <div class="w-full bg-[#EBE3FF] h-3 rounded-full">
                  <div class="bg-[#6838F0] h-3 rounded-full" style="width: 15%"></div>
                </div>
                <span class="text-xs min-w-8 text-right">5</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm min-w-16">DAST</span>
                <div class="w-full bg-[#EBE3FF] h-3 rounded-full">
                  <div class="bg-[#6838F0] h-3 rounded-full" style="width: 30%"></div>
                </div>
                <span class="text-xs min-w-8 text-right">8</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm min-w-16">IAST</span>
                <div class="w-full bg-[#EBE3FF] h-3 rounded-full">
                  <div class="bg-[#6838F0] h-3 rounded-full" style="width: 40%"></div>
                </div>
                <span class="text-xs min-w-8 text-right">8</span>
              </div>
            </div>
          </div>

          <div class="bg-[#F8F7FF] rounded-xl p-6 h-64 flex flex-col">
            <div class="flex items-center mb-4">
              <i class="i-carbon-application-web text-[#6838F0] text-2xl mr-3"></i>
              <h5 class="text-lg font-semibold">能力覆盖率</h5>
            </div>
            <p class="text-gray-600 text-sm mb-4">安全能力覆盖的应用数量越多，SAI 越低</p>
            <div class="flex-1 flex flex-col items-center justify-center">
              <div class="relative mb-2">
                <div class="w-28 h-28 rounded-full border-8 border-[#EBE3FF] flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 pie-chart">
                    <div class="w-full h-full rounded-full bg-[#6838F0]"></div>
                  </div>
                </div>
                <div class="absolute -bottom-1 -right-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-[#6838F0] font-semibold shadow-sm border border-purple-100">
                  75%
                </div>
              </div>
              <p class="text-center text-xs text-gray-600 mt-2">应用覆盖率</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Initial indicator values
const sii = ref(132.3)  // Security Issue Index
const sai = ref(0.83)  // Security Ability Gap Index
const cri = computed(() => sii.value * sai.value)  // Comprehensive Risk Index - 修改为乘法计算

// Toggle states for expandable sections
const showCriDetails = ref(false)
const showSiiDetails = ref(false)
const showSaiDetails = ref(false)

// Toggle functions - 实现互斥展开
const toggleCriDetails = () => {
  showCriDetails.value = !showCriDetails.value
}

const toggleSiiDetails = () => {
  // 如果已经展开了SAI详情，则收起SAI详情
  if (showSaiDetails.value) {
    showSaiDetails.value = false
  }
  // 切换SII详情状态
  showSiiDetails.value = !showSiiDetails.value
}

const toggleSaiDetails = () => {
  // 如果已经展开了SII详情，则收起SII详情
  if (showSiiDetails.value) {
    showSiiDetails.value = false
  }
  // 切换SAI详情状态
  showSaiDetails.value = !showSaiDetails.value
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-slideIn {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.pie-chart {
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0);
}

.min-w-16 {
  min-width: 4rem;
}

.min-w-8 {
  min-width: 2rem;
}

/* 锚点链接样式 - 如果已存在则不需要重复添加 */
.anchor-link {
  position: absolute;
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
}

h2 .anchor-link {
  top: 50%;
  transform: translateY(-50%);
}
</style> 