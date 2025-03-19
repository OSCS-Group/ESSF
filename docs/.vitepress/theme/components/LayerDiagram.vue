<template>
  <div class="layer-diagram relative w-full max-w-3xl mx-auto rounded-lg p-4">
    <div class="flex">
      <!-- 左侧五层 -->
      <div class="flex-1 flex flex-col space-y-3">
        <!-- 业务应用层 -->
        <a href="/ESCT/application/" class="layer-box bg-[#5B8CF7] hover:bg-[#4A7DE8] text-white">
          <div class="text-lg font-medium">业务应用层</div>
        </a>
        
        <!-- 外部依赖层 -->
        <a href="/ESCT/external_dependency/" class="layer-box bg-[#FFF3D6] hover:bg-[#FFE9B8] text-gray-700">
          <div class="text-lg font-medium">外部依赖层</div>
        </a>
        
        <!-- 数据处理层 -->
        <a href="/ESCT/data_processing/" class="layer-box bg-[#FFF3D6] hover:bg-[#FFE9B8] text-gray-700">
          <div class="text-lg font-medium">数据处理层</div>
        </a>
        
        <!-- 运行时环境层 -->
        <a href="/ESCT/runtime_environment/" class="layer-box bg-[#EFE6FA] hover:bg-[#E5D9F2] text-gray-700">
          <div class="text-lg font-medium">运行时环境层</div>
        </a>
        
        <!-- 基础设施层 -->
        <a href="/ESCT/infrastructure/" class="layer-box bg-[#FFECE8] hover:bg-[#FFE0DA] text-gray-700">
          <div class="text-lg font-medium">基础设施层</div>
        </a>
      </div>
      
      <!-- 右侧效率层 -->
      <div class="w-28 ml-6">
        <a href="/ESCT/development_engineering/" class="tools-layer bg-[#F9FAFB] hover:bg-[#F3F4F6] text-gray-700 group">
          <div class="text-lg font-medium group-hover:text-gray-900 writing-vertical">工程效率层</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 可以在这里添加交互逻辑
</script>

<style scoped>
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 1px;
}

.layer-diagram {
  min-height: 350px;
  background-color: #FFFFFF;
}

.layer-box {
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.layer-box:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.tools-layer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.tools-layer:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transform: translateX(2px);
}
</style> 