<!-- RelationshipChart.vue -->
<template>
  <div class="relative h-[600px] border-4 border-purple-500 rounded-lg overflow-hidden transition-colors duration-300" 
       :class="{ 'bg-gray-100': isIntentionalHover || isFullscreen, 'bg-transparent': !isIntentionalHover && !isFullscreen }"
       ref="chartContainer"
       @mouseenter="onMouseEnter" 
       @mouseleave="onMouseLeave">
    
    <!-- 控制按钮 - 鼠标悬停时才显示 -->
    <div v-show="showControls || isFullscreen" 
         class="absolute top-4 right-4 z-50 flex items-center space-x-2 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border-2 border-purple-300 transition-opacity duration-300"
         :class="{ 'opacity-0': !showControls && !isFullscreen, 'opacity-100': showControls || isFullscreen }">
      <button @click="zoomIn" class="tool-button" title="放大">
        <i class="i-carbon-zoom-in"></i>
      </button>
      <button @click="zoomOut" class="tool-button" title="缩小">
        <i class="i-carbon-zoom-out"></i>
      </button>
      <button @click="onFitView" class="tool-button" title="适应视图">
        <i class="i-carbon-maximize-screen"></i>
      </button>
      <button @click="resetView" class="tool-button" title="重置视图">
        <i class="i-carbon-reset"></i>
      </button>
      <button @click="toggleFullscreen" class="tool-button" :title="isFullscreen ? '退出全屏' : '全屏显示'">
        <i :class="isFullscreen ? 'i-carbon-close' : 'i-carbon-maximize'"></i>
      </button>
    </div>
    
    <VueFlow
      v-model="elements"
      :default-viewport="{ zoom: 0.7, x: 50, y: 150 }"
      :min-zoom="0.2"
      :max-zoom="4"
      :fit-view-on-init="true"
      class="h-full vue-flow-instance"
      :default-edge-options="{
        type: 'bezier',
        animated: false,
        style: { strokeWidth: 2 },
      }"
      @nodeClick="onNodeClick"
      @nodeDragStop="onNodeDragStop"
    >
      <template #node-custom="nodeProps">
        <div
          class="relative node-wrapper p-4 bg-white border-4 rounded-lg shadow-xl transition-all duration-200 group"
          :class="{ 'node-collapsed': collapsedNodes.includes(nodeProps.id) }"
          :style="{
            borderColor: nodeProps.data.color,
            minWidth: '260px',
            minHeight: '80px',
          }"
        >
          <!-- 使用 Vue Flow 的 Handle 组件作为左侧连接点 -->
          <Handle
            :id="'left'"
            type="target"
            :position="Position.Left"
            :style="{ 
              background: 'white', 
              border: `2px solid ${nodeProps.data.color}`,
              width: '12px',
              height: '12px'
            }"
          />
          
          <!-- 使用 Vue Flow 的 Handle 组件作为右侧连接点 -->
          <Handle
            :id="'right'"
            type="source"
            :position="Position.Right"
            :style="{ 
              background: 'white', 
              border: `2px solid ${nodeProps.data.color}`,
              width: '12px',
              height: '12px'
            }"
          />
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center" :style="{ backgroundColor: nodeProps.data.color }">
              <i :class="[nodeProps.data.icon, 'text-2xl text-white']"></i>
            </div>
            <div class="flex-1">
              <div class="font-bold text-gray-900 text-lg">{{ nodeProps.label }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ getCategoryName(nodeProps.data.category) }}</div>
            </div>
            <!-- 折叠/展开图标 (仅在有子节点时显示，且仅在悬停时出现) -->
            <div v-if="hasChildren(nodeProps.id)" 
                 class="expand-toggle w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                 @click.stop="toggleNode(nodeProps.id)">
              <i :class="collapsedNodes.includes(nodeProps.id) ? 'i-carbon-add' : 'i-carbon-subtract'" class="text-xl"></i>
            </div>
          </div>
        </div>
      </template>
    </VueFlow>

    <!-- 全屏弹窗 -->
    <div v-if="isFullscreen" class="fixed inset-0 z-50 bg-gray-100"
         @mouseenter="onMouseEnter" 
         @mouseleave="onMouseLeave">
      <!-- 全屏模式下控制按钮 - 鼠标悬停时才显示 -->
      <div v-show="showControls" 
           class="absolute top-4 right-4 z-50 flex items-center space-x-2 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border-2 border-purple-300 transition-opacity duration-300"
           :class="{ 'opacity-0': !showControls, 'opacity-100': showControls }">
        <button @click="zoomIn" class="tool-button" title="放大">
          <i class="i-carbon-zoom-in"></i>
        </button>
        <button @click="zoomOut" class="tool-button" title="缩小">
          <i class="i-carbon-zoom-out"></i>
        </button>
        <button @click="onFitView" class="tool-button" title="适应视图">
          <i class="i-carbon-maximize-screen"></i>
        </button>
        <button @click="resetView" class="tool-button" title="重置视图">
          <i class="i-carbon-reset"></i>
        </button>
        <button @click="toggleFullscreen" class="tool-button" title="退出全屏">
          <i class="i-carbon-close"></i>
        </button>
      </div>
      
      <VueFlow
        v-model="elements"
        :default-viewport="{ zoom: 0.7, x: 50, y: 150 }"
        :min-zoom="0.2"
        :max-zoom="4"
        :fit-view-on-init="true"
        class="h-full vue-flow-instance"
        :default-edge-options="{
          type: 'bezier',
          animated: false,
          style: { strokeWidth: 2 },
        }"
        @nodeClick="onNodeClick"
        @nodeDragStop="onNodeDragStop"
      >
        <template #node-custom="nodeProps">
          <div
            class="relative node-wrapper p-4 bg-white border-4 rounded-lg shadow-xl transition-all duration-200 group"
            :class="{ 'node-collapsed': collapsedNodes.includes(nodeProps.id) }"
            :style="{
              borderColor: nodeProps.data.color,
              minWidth: '260px',
              minHeight: '80px',
            }"
          >
            <!-- 使用 Vue Flow 的 Handle 组件作为左侧连接点 -->
            <Handle
              :id="'left'"
              type="target"
              :position="Position.Left"
              :style="{ 
                background: 'white', 
                border: `2px solid ${nodeProps.data.color}`,
                width: '12px',
                height: '12px'
              }"
            />
            
            <!-- 使用 Vue Flow 的 Handle 组件作为右侧连接点 -->
            <Handle
              :id="'right'"
              type="source"
              :position="Position.Right"
              :style="{ 
                background: 'white', 
                border: `2px solid ${nodeProps.data.color}`,
                width: '12px',
                height: '12px'
              }"
            />
            
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" :style="{ backgroundColor: nodeProps.data.color }">
                <i :class="[nodeProps.data.icon, 'text-2xl text-white']"></i>
              </div>
              <div class="flex-1">
                <div class="font-bold text-gray-900 text-lg">{{ nodeProps.label }}</div>
                <div class="text-sm text-gray-600 mt-1">{{ getCategoryName(nodeProps.data.category) }}</div>
              </div>
              <!-- 折叠/展开图标 (仅在有子节点时显示，且仅在悬停时出现) -->
              <div v-if="hasChildren(nodeProps.id)" 
                   class="expand-toggle w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                   @click.stop="toggleNode(nodeProps.id)">
                <i :class="collapsedNodes.includes(nodeProps.id) ? 'i-carbon-add' : 'i-carbon-subtract'" class="text-xl"></i>
              </div>
            </div>
          </div>
        </template>
      </VueFlow>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue'
import { VueFlow, useVueFlow, Position, MarkerType, Handle } from '@vue-flow/core'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

// Props
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

// Refs
const chartContainer = ref(null)
const showControls = ref(false)
const isHovered = ref(false)
const isIntentionalHover = ref(false) // New ref to track intentional hover
const isFullscreen = ref(false)
const hoverTimer = ref(null) // Add a timer ref for delayed hover
const { fitView, zoomIn: flowZoomIn, zoomOut: flowZoomOut, setTransform, toObject, findNode, getNodes, getEdges, setNodes, setEdges } = useVueFlow()
const initialViewport = ref(null)
const fullscreenViewport = ref(null) // 新增：保存全屏模式下的视图状态
const initialElements = ref(null)
const originalNodePositions = ref({}) // 存储节点原始位置
const needsRefresh = ref(false)
const collapsedNodes = ref([]) // 存储折叠的节点ID
const nodeChildrenMap = ref({}) // 存储节点和其子节点的映射
const columnWidths = ref([450, 450, 450, 450, 450]) // 每列的宽度

// 获取列的X坐标位置
function getColumnXPosition(columnIndex) {
  // 获取列的中心位置
  let position = 50; // 起始左侧边距
  for (let i = 0; i < columnIndex; i++) {
    position += columnWidths.value[i];
  }
  position += columnWidths.value[columnIndex] / 2;
  return position;
}

// 列类型
const columnTypes = computed(() => {
  // 返回类别列表，按顺序排列
  return ['enterprise', 'businessSystem', 'application', 'component', 'threatType'];
});

// 获取类型名称
function getTypeName(type) {
  const names = {
    enterprise: '企业层',
    businessSystem: '业务系统层',
    application: '应用层',
    component: '组件层',
    threatType: '威胁类型层'
  };
  return names[type] || type;
}

// 获取类型节点数量
function getTypeCount(type) {
  if (!elements.value) return 0;
  
  // 过滤出该类型的节点
  const nodesOfType = elements.value.filter(el => 
    !el.source && el.data && el.data.category === type && 
    !isNodeHidden(el.id)
  );
  
  return nodesOfType.length;
}

// 检查节点是否应该被隐藏
function isNodeHidden(nodeId, visited = new Set()) {
  // 防止循环递归
  if (visited.has(nodeId)) {
    return false;
  }
  
  // 添加当前节点到已访问集合
  visited.add(nodeId);
  
  // 直接检查所有父节点
  for (const [parentId, children] of Object.entries(nodeChildrenMap.value)) {
    // 如果找到任一折叠的父节点包含此节点，则隐藏
    if (collapsedNodes.value.includes(parentId) && children.includes(nodeId)) {
      return true;
    }
    
    // 检查父节点是否被隐藏，如果是，则子节点也应该被隐藏
    // 但避免使用递归，改用直接检查
    if (children.includes(nodeId) && collapsedNodes.value.includes(parentId)) {
      return true;
    }
  }
  
  return false;
}

// 检查节点是否有子节点
function hasChildren(nodeId) {
  return nodeChildrenMap.value[nodeId] && nodeChildrenMap.value[nodeId].length > 0;
}

// 更新可见的元素（节点和边）
function updateVisibleElements() {
  console.log('Updating visible elements with collapsed nodes:', collapsedNodes.value);

  // 如果没有初始元素，则使用当前状态
  if (!initialElements.value) {
    initialElements.value = {
      nodes: JSON.parse(JSON.stringify(getNodes())),
      edges: JSON.parse(JSON.stringify(getEdges()))
    };
    console.log('Saved initial elements because they were not available');
  }

  // 获取原始节点和边（从初始状态复制）
  const allNodes = JSON.parse(JSON.stringify(initialElements.value.nodes));
  const allEdges = JSON.parse(JSON.stringify(initialElements.value.edges));
  
  console.log('Processing all nodes:', allNodes.length, 'and all edges:', allEdges.length);
  
  // 确定哪些节点应该被隐藏
  const nodesToHide = new Set();
  
  // 首先标记直接折叠的节点的子节点
  collapsedNodes.value.forEach(collapsedId => {
    findAllChildren(collapsedId, nodesToHide);
  });
  
  console.log('Nodes to hide:', Array.from(nodesToHide));
  
  // 过滤出应该显示的节点
  const visibleNodes = allNodes.filter(node => !nodesToHide.has(node.id));
  
  // 过滤出应该显示的边 - 只保留两端都是可见节点的边
  const visibleEdges = allEdges.filter(edge => {
    return !nodesToHide.has(edge.source) && !nodesToHide.has(edge.target);
  });

  console.log('Visible nodes:', visibleNodes.length, 'Visible edges:', visibleEdges.length);
  
  // 设置可见的节点和边
  setNodes(visibleNodes);
  setEdges(visibleEdges);
  
  // 不进行任何视图调整，保持当前视图状态
}

// 递归查找所有子节点
function findAllChildren(nodeId, result = new Set()) {
  const children = nodeChildrenMap.value[nodeId] || [];
  
  // 将所有子节点添加到结果集
  children.forEach(childId => {
    result.add(childId);
    // 继续递归查找子节点的子节点
    findAllChildren(childId, result);
  });
  
  return result;
}

// 折叠/展开节点
function toggleNode(nodeId) {
  console.log('Toggle node:', nodeId, 'Current collapsed nodes:', [...collapsedNodes.value]);
  
  // 如果节点已折叠，则展开，否则折叠
  const index = collapsedNodes.value.indexOf(nodeId);
  if (index >= 0) {
    // 展开节点
    collapsedNodes.value.splice(index, 1);
    console.log(`Node ${nodeId} expanded. Collapsed nodes:`, [...collapsedNodes.value]);
  } else {
    // 折叠节点
    collapsedNodes.value.push(nodeId);
    console.log(`Node ${nodeId} collapsed. Collapsed nodes:`, [...collapsedNodes.value]);
  }
  
  // 手动调用更新
  updateVisibleElements();
}

// 重置视图函数，修复复原功能
function resetView() {
  console.log('Reset view to initial state, isFullscreen:', isFullscreen.value);
  
  // 展开所有折叠的节点
  collapsedNodes.value = [];
  
  // 如果有保存的初始状态，则恢复
  if (initialElements.value) {
    // 复制初始节点和边以避免引用问题
    const initialNodes = JSON.parse(JSON.stringify(initialElements.value.nodes));
    const initialEdges = JSON.parse(JSON.stringify(initialElements.value.edges));
    
    // 设置节点和边
    setNodes(initialNodes);
    setEdges(initialEdges);
    
    console.log('Restored initial elements');
  }
  
  // 根据当前模式选择适当的视口状态进行恢复
  if (isFullscreen.value && fullscreenViewport.value) {
    // 如果是全屏模式且有保存的全屏视口状态，则使用全屏视口状态
    setTransform({ 
      x: fullscreenViewport.value.x, 
      y: fullscreenViewport.value.y, 
      zoom: fullscreenViewport.value.zoom 
    });
    console.log('Restored fullscreen viewport');
  } else if (!isFullscreen.value && initialViewport.value) {
    // 如果是非全屏模式且有保存的初始视口状态，则使用初始视口状态
    setTransform({ 
      x: initialViewport.value.x, 
      y: initialViewport.value.y, 
      zoom: initialViewport.value.zoom 
    });
    console.log('Restored initial viewport');
  } else {
    // 如果没有适当的状态，则使用默认值
    setTransform({ x: 50, y: 150, zoom: 0.7 });
    
    // 然后适应视图
    setTimeout(() => {
      onFitView();
    }, 100);
  }
}

// Debug watch
watch(() => props.chartData, (newVal) => {
  console.log('Chart data changed:', newVal);
}, { immediate: true, deep: true });

// 监听折叠节点变化
watch(() => collapsedNodes.value, (newVal, oldVal) => {
  console.log('Collapsed nodes changed:', newVal, 'Old value:', oldVal);
  if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
    updateVisibleElements();
  }
}, { deep: true });

// 将数据转换为 Vue Flow 格式
const elements = computed(() => {
  console.log('Computing elements with chartData:', props.chartData);
  
  if (!props.chartData || !props.chartData.rootNode) {
    console.warn('No chart data or root node available');
    return [];
  }

  // 重置节点子节点映射
  nodeChildrenMap.value = {};

  const nodes = [];
  const edges = [];
  
  // 每种类型的节点列表
  const typeNodes = {
    enterprise: [],
    businessSystem: [],
    application: [],
    component: [],
    threatType: []
  };
  
  // 第一遍遍历收集各类型节点
  function collectNodesByType(node) {
    if (!node || !node.id || !node.category) {
      console.warn('Invalid node:', node);
      return;
    }
    
    // 将节点添加到对应类型的列表中
    if (typeNodes[node.category]) {
      typeNodes[node.category].push(node);
    }
    
    // 收集子节点
    const children = getChildrenByCategory(node);
    if (children.length > 0) {
      // 记录该节点的子节点
      nodeChildrenMap.value[node.id] = children.map(child => child.id.toString());
      
      // 递归收集子节点
      children.forEach(child => collectNodesByType(child));
    } else {
      // 没有子节点，初始化为空数组
      nodeChildrenMap.value[node.id] = [];
    }
  }
  
  // 收集所有节点
  collectNodesByType(props.chartData.rootNode);
  
  // 计算每列需要的节点垂直分布
  const totalColumns = columnTypes.value.length;
  
  // 第二遍遍历生成节点和边
  columnTypes.value.forEach((category, colIndex) => {
    const categoryNodes = typeNodes[category] || [];
    const nodeSpacing = 150; // 节点垂直间距
    const columnWidth = columnWidths.value[colIndex]; // 列宽
    
    // 计算当前列所有节点总高度
    const totalHeight = categoryNodes.length * nodeSpacing;
    // 计算起始Y坐标，使节点垂直居中
    const startY = Math.max(100, 300 - (totalHeight / 2));
    
    // 计算列的水平位置，使用更宽松的间距
    let columnX = 150; // 增加起始左侧边距
    for (let i = 0; i < colIndex; i++) {
      columnX += columnWidths.value[i];
    }
    
    // 自然水平分布节点，不要第一行对齐
    categoryNodes.forEach((node, index) => {
      if (!node || !node.id) {
        console.warn('Invalid node:', node);
        return;
      }
      
      const nodeId = node.id.toString();
      const color = getCategoryColor(node.category);
      
      // 修改节点位置计算，确保自然垂直分布
      const x = columnX;
      // 使用更自然的垂直分布
      const y = startY + (index * nodeSpacing);
      
      console.log(`Processing node: ${node.name}, category: ${node.category}, position: (${x}, ${y})`);
      
      const nodeData = {
        id: nodeId,
        type: 'custom',
        label: node.name,
        position: { x, y },
        data: {
          color,
          category: node.category,
          icon: getCategoryIcon(node.category),
        },
        draggable: false, // 禁止拖动
        connectable: true,
      };
      
      // 存储节点原始位置
      originalNodePositions.value[nodeId] = { x, y };
      
      nodes.push(nodeData);
      
      // 查找父节点并创建边
      // 对于除enterprise外的每个节点，寻找其父节点
      if (node.category !== 'enterprise') {
        // 查找可能的父节点类型
        let parentCategory;
        switch (node.category) {
          case 'businessSystem':
            parentCategory = 'enterprise';
            break;
          case 'application':
            parentCategory = 'businessSystem';
            break;
          case 'component':
            parentCategory = 'application';
            break;
          case 'threatType':
            parentCategory = 'component';
            break;
        }
        
        // 如果存在父节点类型，查找所有可能的父节点
        if (parentCategory) {
          typeNodes[parentCategory].forEach(parentNode => {
            const children = getChildrenByCategory(parentNode);
            
            // 如果当前节点是该父节点的子节点，创建边
            if (children.some(child => child.id === node.id)) {
              const edgeData = {
                id: `e${parentNode.id}-${nodeId}`,
                source: parentNode.id.toString(),
                target: nodeId,
                type: 'bezier',
                style: {
                  stroke: color,
                  strokeWidth: 2,
                },
                animated: false,
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                  width: 12,
                  height: 12,
                  color,
                },
                sourceHandle: 'right',
                targetHandle: 'left',
                zIndex: 0,
              };
              
              edges.push(edgeData);
            }
          });
        }
      }
    });
  });
  
  console.log('Generated nodes:', nodes);
  console.log('Generated edges:', edges);
  console.log('Node children map:', nodeChildrenMap.value);
  
  // 存储初始元素状态
  if (!initialElements.value) {
    initialElements.value = {
      nodes: JSON.parse(JSON.stringify(nodes)),
      edges: JSON.parse(JSON.stringify(edges))
    };
  }
  
  return [...nodes, ...edges];
});

function getCategoryColor(category) {
  const colors = {
    enterprise: '#6838F0',
    businessSystem: '#3B82F6',
    application: '#10B981',
    component: '#F59E0B',
    threatType: '#EF4444'
  }
  return colors[category] || '#6B7280'
}

function getCategoryIcon(category) {
  const icons = {
    enterprise: 'i-carbon-enterprise',
    businessSystem: 'i-carbon-network-3',
    application: 'i-carbon-application',
    component: 'i-carbon-cube',
    threatType: 'i-carbon-security-services'
  }
  return icons[category] || 'i-carbon-document'
}

function getCategoryName(category) {
  const categoryMap = {
    'enterprise': '企业',
    'businessSystem': '业务系统',
    'application': '应用',
    'component': '软件成分',
    'threatType': '威胁分类'
  };
  return categoryMap[category] || category;
}

function getChildrenByCategory(node) {
  if (!node) return []
  
  switch (node.category) {
    case 'enterprise':
      return props.chartData.businessSystems || []
    case 'businessSystem':
      return node.applications || []
    case 'application':
      return node.components || []
    case 'component':
      return node.threatTypes || []
    default:
      return []
  }
}

// 添加节点拖动停止事件处理函数
function onNodeDragStop(event, node) {
  console.log('Node drag stop:', node.id, node.position);
  
  // 获取当前节点类别对应的列索引
  const category = node.data.category;
  const colIndex = columnTypes.value.findIndex(type => type === category);
  
  if (colIndex !== -1) {
    // 计算该列的X坐标，与上面的布局保持一致
    let columnX = 150; // 增加起始左侧边距
    for (let i = 0; i < colIndex; i++) {
      columnX += columnWidths.value[i];
    }
    
    // 强制X坐标保持不变，只允许Y坐标变化
    const updatedNode = {
      ...node,
      position: {
        x: columnX,
        y: node.position.y
      }
    };
    
    // 更新节点位置
    const currentNodes = getNodes();
    const updatedNodes = currentNodes.map(n => {
      if (n.id === node.id) {
        return updatedNode;
      }
      return n;
    });
    
    // 应用更新
    setNodes(updatedNodes);
  }
  
  // 触发视图刷新
  needsRefresh.value = true;
  nextTick(() => {
    needsRefresh.value = false;
  });
}

function onFitView() {
  fitView({ padding: 0.2 });
}

function zoomIn() {
  flowZoomIn(0.2);
}

function zoomOut() {
  flowZoomOut(0.2);
}

function onNodeClick(event, node) {
  console.log('Clicked node:', node);
  // 避免展开/折叠图标的点击事件冒泡
  if (event.target.closest('.expand-toggle')) {
    console.log('Clicked on expand toggle, stopping propagation');
    return;
  }
  
  // 如果节点有子节点，则切换折叠状态
  if (hasChildren(node.id)) {
    console.log('Node has children, toggling fold state');
    toggleNode(node.id);
  } else {
    console.log('Node has no children, no action taken');
  }
}

function toggleFullscreen() {
  // 在切换全屏状态前，保存当前视图状态
  const currentViewport = toObject().viewport;
  
  if (isFullscreen.value) {
    // 退出全屏前，保存全屏模式下的视图状态
    fullscreenViewport.value = currentViewport;
    console.log('Saved fullscreen viewport before exiting:', fullscreenViewport.value);
  }
  
  // 切换全屏状态
  isFullscreen.value = !isFullscreen.value;
  
  // 切换后需要适应视图
  setTimeout(() => {
    onFitView();
    
    // 在首次进入全屏模式时，保存全屏模式下的初始视图状态
    if (isFullscreen.value && !fullscreenViewport.value) {
      setTimeout(() => {
        fullscreenViewport.value = toObject().viewport;
        console.log('Saved initial fullscreen viewport:', fullscreenViewport.value);
      }, 200);
    }
  }, 100);
}

// 鼠标进入事件处理函数
function onMouseEnter() {
  // Clear any existing timer first
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value);
  }
  
  // Set a new timer - only activate hover after 800ms
  hoverTimer.value = setTimeout(() => {
    showControls.value = true;
    isHovered.value = true;
    isIntentionalHover.value = true; // Only set to true after delay
    hoverTimer.value = null;
  }, 800); // Increased to 800ms for better scrolling experience
}

// 鼠标离开事件处理函数
function onMouseLeave() {
  // Clear any pending hover timer
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value);
    hoverTimer.value = null;
  }
  
  // Reset hover states immediately
  showControls.value = false;
  isHovered.value = false;
  isIntentionalHover.value = false; // Reset intentional hover state
}

// 添加键盘监听函数
function handleKeyDown(event) {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }
}

onMounted(() => {
  console.log('Component mounted, initial elements:', elements.value);
  // 延迟执行以确保DOM已更新
  nextTick(() => {
    setTimeout(() => {
      onFitView();
      // 保存初始视图状态
      initialViewport.value = toObject().viewport;
      console.log('Initial viewport saved:', initialViewport.value);
    }, 500);
  });
  
  // 添加ESC键监听
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  // 移除ESC键监听
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style>
.vue-flow-instance {
  @apply bg-gray-100;
}

/* 移除默认控件，因为我们有自定义控件 */
.vue-flow__controls {
  display: none !important;
}

.tool-button {
  @apply p-2 rounded-lg bg-white hover:bg-purple-50 transition-colors;
  @apply text-gray-700 hover:text-purple-700;
  @apply shadow-sm hover:shadow-md border border-purple-300 hover:border-purple-400;
}

.tool-button i {
  @apply text-xl;
}

.vue-flow__edge {
  @apply !pointer-events-none;
}

.vue-flow__edge path {
  @apply !stroke-[2px];
}

.vue-flow__node {
  @apply !shadow-none;
}

.vue-flow__node-custom {
  @apply !p-0 !bg-transparent !border-none !overflow-visible;
}

.vue-flow__node:hover {
  @apply !scale-105;
  transition: transform 0.2s ease;
}

.vue-flow__edge.selected {
  @apply !stroke-[#6838F0];
}

.vue-flow__viewport {
  @apply !transform-gpu;
}

.node-wrapper {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* 节点折叠状态样式 */
.node-collapsed {
  @apply bg-purple-50;
}

/* 修复箭头样式 */
.vue-flow__edge-path {
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

/* 优化贝塞尔曲线 */
.vue-flow__edge-bezier path {
  @apply !stroke-[2px];
}

/* 减小箭头大小 */
.vue-flow__edge .vue-flow__arrowclosed {
  stroke-width: 1px;
}

/* 全部元素可拖动的样式 */
.node-drag-handle {
  cursor: move;
}
</style> 