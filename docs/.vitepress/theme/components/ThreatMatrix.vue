<template>
  <div class="w-full threat-matrix-container relative" @mouseenter="startShowButton" @mouseleave="hideButton">
    <!-- 固定位置的全屏按钮 -->
    <div class="fixed-fullscreen-button" :class="{'opacity-100': showButton, 'opacity-0': !showButton}">
      <button @click="toggleFullScreen" class="p-2 rounded-full bg-violet-50 hover:bg-violet-100 transition-colors group" title="全屏查看">
        <i class="i-carbon-maximize text-violet-600 text-lg" v-if="!isFullScreen"></i>
        <i class="i-carbon-minimize text-violet-600 text-lg" v-else></i>
        <span class="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {{ isFullScreen ? '退出全屏' : '全屏查看' }}
        </span>
      </button>
    </div>
    
    <!-- 滚动指示器 -->
    <div class="scroll-hint" :class="{'opacity-100': showScrollHint && hasHorizontalScroll && !isScrolledToEnd, 'opacity-0': !showScrollHint || !hasHorizontalScroll || isScrolledToEnd}">
      <div class="flex items-center gap-1 text-violet-600 text-xs">
        <span>向右滑动查看更多</span>
        <i class="i-carbon-arrow-right text-sm animate-pulse"></i>
      </div>
    </div>
    
    <div class="w-full overflow-x-auto bg-transparent matrix-scroll-container" ref="scrollContainer" @scroll="handleScroll">
      <!-- 矩阵内容 -->
      <div :class="{'fixed inset-0 z-50 bg-white p-8 overflow-auto': isFullScreen}">
        <!-- 全屏模式下的关闭按钮 (固定位置) -->
        <button v-if="isFullScreen" @click="toggleFullScreen" 
                class="fixed-close-btn">
          <i class="i-carbon-close text-lg"></i>
        </button>
        
        <table class="w-full border-collapse text-sm matrix-table" :class="{'max-h-[calc(100vh-120px)]': isFullScreen}">
          <!-- 图例和威胁类型行 -->
          <thead>
            <tr>
              <th colspan="2" rowspan="3" class="relative p-4 bg-gray-100 rounded-tl-lg border-2 border-gray-200">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 bg-gray-100 border border-gray-300 rounded"></div>
                    <span class="text-gray-600">无威胁</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 bg-yellow-50 border border-yellow-200 rounded"></div>
                    <span class="text-yellow-600">潜在威胁</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 bg-red-50 border border-red-200 rounded"></div>
                    <span class="text-red-600">已知威胁</span>
                  </div>
                </div>
              </th>
              <template v-for="(threatObj, mainThreat, mainIndex) in threats" :key="mainThreat">
                <th 
                  :colspan="getColSpan(threatObj)"
                  class="p-4 bg-gray-100 border-2 border-gray-200 font-semibold text-gray-700 matrix-header"
                  :class="{'border-l-4': mainIndex > 0}">
                  {{ mainThreat }}
                </th>
              </template>
            </tr>

            <!-- 子威胁类型行 -->
            <tr>
              <template v-for="(threatObj, mainThreat, mainIndex) in threats" :key="mainThreat">
                <template v-for="(threatList, subThreat, subIndex) in threatObj" :key="subThreat">
                  <th 
                    :colspan="threatList.length"
                    class="p-3 bg-gray-50 border-2 border-gray-200 font-medium text-gray-600 matrix-subheader"
                    :class="{
                      'border-l-4': subIndex === 0 && mainIndex > 0
                    }">
                    {{ subThreat }}
                  </th>
                </template>
              </template>
            </tr>

            <!-- 具体威胁行 -->
            <tr>
              <template v-for="(threatObj, mainThreat, mainIndex) in threats" :key="mainThreat">
                <template v-for="(threatList, subThreat, subIndex) in threatObj" :key="subThreat">
                  <template v-for="(threat, threatIndex) in threatList" :key="threat">
                    <th 
                      class="p-2 bg-gray-50 border-2 border-gray-200 text-left threat-header"
                      :class="{
                        'border-l-4': threatIndex === 0 && subIndex === 0 && mainIndex > 0
                      }">
                      <a :href="`/ESTT/${threat.split(' ')[0]}`" 
                        class="text-gray-600 hover:text-violet-600 hover:underline transition-colors whitespace-nowrap text-sm">
                        {{ threat }}
                      </a>
                    </th>
                  </template>
                </template>
              </template>
            </tr>
          </thead>

          <!-- 资产行和威胁等级单元格 -->
          <tbody>
            <template v-for="(assetList, category, categoryIndex) in assets" :key="category">
              <tr v-for="(subCategory, index) in assetList" :key="subCategory" 
                :class="{'border-t-4 border-gray-200': index === 0 && categoryIndex > 0}">
                <td v-if="index === 0" 
                    class="border-2 border-gray-200 bg-gray-100 font-semibold text-gray-700 category-cell"
                    :rowspan="assetList.length"
                    :class="{'border-t-4 border-gray-200': categoryIndex > 0}">
                  <div class="writing-vertical-rl text-center py-4 px-2">{{ category }}</div>
                </td>
                <td class="p-3 border-2 border-gray-200 bg-gray-50 min-w-[150px] font-medium text-gray-600 subcategory-cell">
                  {{ subCategory }}
                </td>
                
                <template v-for="(threatObj, mainThreat, mainIndex) in threats" :key="mainThreat">
                  <template v-for="(threatList, subThreat, subIndex) in threatObj" :key="subThreat">
                    <template v-for="(threat, threatIndex) in threatList" :key="threat">
                      <td 
                        class="relative p-3 border-2 cursor-pointer hover:bg-opacity-80 threat-cell"
                        :class="[
                          getThreatLevelClass(category, subCategory, threat.split(' ')[0]),
                          {
                            'border-l-4 border-gray-200': threatIndex === 0 && subIndex === 0 && mainIndex > 0
                          }
                        ]"
                      >
                        <span class="text-sm font-medium">{{ getThreatLevelText(category, subCategory, threat.split(' ')[0]) }}</span>
                        
                        <!-- Tooltip -->
                        <div class="tooltip-content opacity-0 invisible absolute z-[100] w-[400px] p-4 bg-white rounded-lg shadow-lg border-2 border-gray-200 transition-all duration-200 pointer-events-none"
                            :class="{'bottom-full mb-2': index > assetList.length - 3, 'top-full mt-2': index <= assetList.length - 3}"
                            :style="getTooltipStyle(index, assetList.length)">
                          <div class="text-violet-600 font-semibold border-b border-gray-100 pb-2 mb-3">威胁详情</div>
                          <div class="space-y-2">
                            <div class="flex gap-2">
                              <span class="text-gray-500 min-w-[80px]">成分类型:</span>
                              <span class="text-gray-700">{{ category }} / {{ subCategory }}</span>
                            </div>
                            <div class="flex gap-2">
                              <span class="text-gray-500 min-w-[80px]">威胁:</span>
                              <span class="text-gray-700">{{ threat }}</span>
                            </div>
                            <div class="flex gap-2">
                              <span class="text-gray-500 min-w-[80px]">威胁程度:</span>
                              <span :class="getThreatLevelDetailClass(category, subCategory, threat.split(' ')[0])">
                                {{ getThreatLevelDetailText(category, subCategory, threat.split(' ')[0]) }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </template>
                  </template>
                </template>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { assets, threats, threatLevels } from '../data/threatData.ts'

const isFullScreen = ref(false)
const showButton = ref(false)
const buttonTimer = ref(null)
const hasHorizontalScroll = ref(false)
const isScrolledToEnd = ref(false)
const scrollContainer = ref(null)
const showScrollHint = ref(false)
const scrollHintTimer = ref(null)
const tooltipTimer = ref(null)
const activeTooltip = ref(null)

// 全屏切换
function toggleFullScreen() {
  isFullScreen.value = !isFullScreen.value
  
  if (isFullScreen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// 悬停后延迟显示按钮
function startShowButton() {
  buttonTimer.value = setTimeout(() => {
    showButton.value = true
    // 同时显示滚动提示，但仅短暂显示
    if (hasHorizontalScroll.value && !isScrolledToEnd.value) {
      showScrollHint.value = true
      if (scrollHintTimer.value) clearTimeout(scrollHintTimer.value)
      scrollHintTimer.value = setTimeout(() => {
        showScrollHint.value = false
      }, 3000) // 3秒后消失
    }
  }, 300) // 300ms延迟
}

// 隐藏按钮
function hideButton() {
  clearTimeout(buttonTimer.value)
  showButton.value = false
  // 也隐藏滚动提示
  showScrollHint.value = false
}

// 处理滚动事件
function handleScroll() {
  if (!scrollContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  hasHorizontalScroll.value = scrollWidth > clientWidth
  isScrolledToEnd.value = scrollLeft + clientWidth >= scrollWidth - 20 // 20px的容差
  
  // 如果手动滚动了，则隐藏滚动提示
  if (scrollLeft > 10 && showScrollHint.value) {
    showScrollHint.value = false
  }
}

// 检查是否有横向滚动
function checkHorizontalScroll() {
  if (!scrollContainer.value) return
  
  const { scrollWidth, clientWidth } = scrollContainer.value
  hasHorizontalScroll.value = scrollWidth > clientWidth
}

// 获取提示框样式
function getTooltipStyle(index, totalItems) {
  if (index > totalItems - 3) {
    return { left: '50%', transform: 'translateX(-50%)' }
  } else {
    return { left: '50%', transform: 'translateX(-50%)' }
  }
}

// 获取威胁类型的列跨度
function getColSpan(threatObj) {
  let total = 0
  for (const subThreat in threatObj) {
    total += threatObj[subThreat].length
  }
  return total
}

// 获取威胁总数
function getTotalThreats() {
  let total = 0
  for (const mainThreat in threats) {
    for (const subThreat in threats[mainThreat]) {
      total += threats[mainThreat][subThreat].length
    }
  }
  return total
}

// 根据索引获取威胁名称
function getThreatByIndex(index) {
  let count = 0
  for (const mainThreat in threats) {
    for (const subThreat in threats[mainThreat]) {
      for (const threat of threats[mainThreat][subThreat]) {
        if (count === index) {
          return threat
        }
        count++
      }
    }
  }
  return ''
}

// 获取威胁等级
function getThreatLevel(category, asset, threatId) {
  return threatLevels[category]?.[asset]?.[threatId] || 0
}

// 获取威胁等级的样式类
function getThreatLevelClass(category, asset, threatId) {
  const level = getThreatLevel(category, asset, threatId)
  return {
    'bg-gray-50 text-gray-500 border-gray-200': level === 0,
    'bg-yellow-50 text-yellow-600 border-yellow-200': level === 1,
    'bg-red-50 text-red-600 border-red-200': level === 2
  }
}

// 获取威胁等级的文本
function getThreatLevelText(category, asset, threatId) {
  const level = getThreatLevel(category, asset, threatId)
  return level === 0 ? '无威胁' : level === 1 ? '潜在威胁' : '已知威胁'
}

// 获取威胁等级详情的样式类
function getThreatLevelDetailClass(category, asset, threatId) {
  const level = getThreatLevel(category, asset, threatId)
  return {
    'text-gray-500': level === 0,
    'text-yellow-600 font-medium': level === 1,
    'text-red-600 font-medium': level === 2
  }
}

// 获取威胁等级详情的文本
function getThreatLevelDetailText(category, asset, threatId) {
  const level = getThreatLevel(category, asset, threatId)
  switch (level) {
    case 0:
      return '无威胁'
    case 1:
      return '潜在威胁 - 理论上存在风险但尚无实际案例'
    case 2:
      return '已知威胁 - 已有实际案例发生'
    default:
      return '未知'
  }
}

// 处理键盘事件
function handleKeyDown(event) {
  if (event.key === 'Escape' && isFullScreen.value) {
    toggleFullScreen()
  }
}

onMounted(() => {
  // 添加鼠标悬停事件处理器
  const threatCells = document.querySelectorAll('.threat-cell')
  threatCells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      // 清除之前的定时器
      if (tooltipTimer.value) {
        clearTimeout(tooltipTimer.value)
      }
      
      // 清除之前显示的tooltip
      if (activeTooltip.value && activeTooltip.value !== cell.querySelector('.tooltip-content')) {
        activeTooltip.value.classList.add('opacity-0', 'invisible')
        activeTooltip.value.classList.remove('opacity-100', 'visible')
      }
      
      // 设置延迟显示tooltip的定时器
      tooltipTimer.value = setTimeout(() => {
        const tooltip = cell.querySelector('.tooltip-content')
        if (tooltip) {
          tooltip.classList.remove('opacity-0', 'invisible')
          tooltip.classList.add('opacity-100', 'visible')
          activeTooltip.value = tooltip
        }
      }, 500) // 500ms延迟
    })
    
    cell.addEventListener('mouseleave', () => {
      // 清除定时器
      if (tooltipTimer.value) {
        clearTimeout(tooltipTimer.value)
        tooltipTimer.value = null
      }
      
      // 立即隐藏tooltip
      const tooltip = cell.querySelector('.tooltip-content')
      if (tooltip) {
        tooltip.classList.add('opacity-0', 'invisible')
        tooltip.classList.remove('opacity-100', 'visible')
        if (activeTooltip.value === tooltip) {
          activeTooltip.value = null
        }
      }
    })
  })
  
  // 检查横向滚动
  checkHorizontalScroll()
  window.addEventListener('resize', checkHorizontalScroll)
  
  // 添加ESC键监听
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  clearTimeout(buttonTimer.value)
  clearTimeout(scrollHintTimer.value)
  clearTimeout(tooltipTimer.value)
  window.removeEventListener('resize', checkHorizontalScroll)
  
  // 移除ESC键监听
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.writing-vertical-rl {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* 确保tooltip始终在上层 */
.tooltip-content {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* 添加边框分隔样式 */
.border-l-4 {
  border-left-color: #e5e7eb;
}

.border-t-4 {
  border-top-color: #e5e7eb;
}

/* 全屏按钮固定位置样式 */
.threat-matrix-container {
  position: relative;
}

.fixed-fullscreen-button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  transition: opacity 0.3s;
}

/* 全屏模式下的关闭按钮样式 */
.fixed-close-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  background-color: #f3f4f6;
  padding: 8px;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.fixed-close-btn:hover {
  background-color: #e5e7eb;
}

/* 滚动提示样式 */
.scroll-hint {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  transition: opacity 0.5s;
}

/* 滚动容器样式 */
.matrix-scroll-container {
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.matrix-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.matrix-scroll-container::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 4px;
}

.matrix-scroll-container::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 4px;
}

.matrix-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #9ca3af;
}

/* 增强矩阵表格样式 */
.matrix-table {
  border-spacing: 0;
  border-collapse: separate;
}

.matrix-header {
  border-bottom-width: 3px;
}

.matrix-subheader {
  border-bottom-width: 3px;
}

.threat-header {
  border-bottom-width: 3px;
}

.category-cell {
  border-right-width: 3px;
}

.subcategory-cell {
  border-right-width: 3px;
}

.threat-cell {
  border: 1px solid #e5e7eb;
  position: relative;
}

.threat-cell:hover {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
}
</style> 