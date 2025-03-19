<!-- HomePage.vue -->
<template>
    <div class="min-h-screen">
        <!-- Hero区域 -->
        <div class="relative overflow-hidden bg-gradient-to-b from-white via-[#F8F7FF] to-white">
            <div class="max-w-7xl mx-auto px-4 py-32 text-center relative z-10">
                <div class="relative">
                    <!-- 装饰线条和动态元素 -->
                    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div
                            class="absolute top-1/4 left-0 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-5 rounded-full blur-3xl animate-slow-pulse">
                        </div>
                        <div
                            class="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-l from-indigo-400 to-blue-500 opacity-5 rounded-full blur-3xl animate-slow-pulse">
                        </div>
                        <div
                            class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-5 rounded-full blur-2xl animate-slow-pulse">
                        </div>
                        <div
                            class="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-tl from-purple-400 to-indigo-500 opacity-5 rounded-full blur-2xl animate-slow-pulse">
                        </div>
                        <!-- 科技网格背景 -->
                        <div
                            class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDIwIEwgODAgMjAgTSAyMCAwIEwgMjAgODBNIDAgNDAgTCA4MCA0MCBNIDQwIDAgTCA0MCA4MCBNIDAgNjAgTCA4MCA2MCBNIDYwIDAgTCA2MCA4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwNCw1NiwyNDAsMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-25">
                        </div>
                    </div>
                    <!-- 主要内容 -->
                    <div class="relative z-10">
                        <h1 class="text-8xl font-black leading-tight mb-8 max-w-5xl mx-auto tracking-tight select-text gradient-text"
                            style="font-family: 'Inter', sans-serif;">以供应链视角重新定义企业软件安全</h1>
                        <p class="text-2xl font-semibold mb-8 select-text relative inline-flex items-center">
                            <span class="w-8 h-[2px] bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] mr-3"></span>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7]">ESSF 企业软件安全治理框架</span>
                            <span class="w-8 h-[2px] bg-gradient-to-r from-[#9B7BF7] to-[#6838F0] ml-3"></span>
                        </p>
                        <p class="text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto text-lg select-text">帮助企业清晰界定软件安全边界、量化评估安全水位，基于量化管理构建可持续的软件安全治理体系，应对日益复杂的软件安全挑战。要定义清楚企业的软件安全，必须说清楚构建所有软件的成分分类及成分对应的威胁场景分类。</p>
                        
                        <!-- 入口按钮 -->
                        <div class="flex items-center justify-center gap-4">
                            <a href="/esct-intro">
                                <button class="btn-gradient relative px-7 py-2.5 rounded-lg text-base font-medium cursor-pointer whitespace-nowrap overflow-hidden group">
                                    <span class="relative z-10 text-[#6838F0] group-hover:text-white transition-colors duration-300">企业软件成分分类(ESCT)</span>
                                    <span class="absolute inset-0 bg-gradient-to-r from-[#F5F0FF] to-[#EBE3FF] group-hover:opacity-0 transition-opacity duration-300"></span>
                                    <span class="absolute inset-0 bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </button>
                            </a>
                            <a href="/estt-intro">
                                <button class="btn-gradient relative px-7 py-2.5 rounded-lg text-base font-medium cursor-pointer whitespace-nowrap overflow-hidden group">
                                    <span class="relative z-10 text-[#6838F0] group-hover:text-white transition-colors duration-300">企业软件成分威胁分类(ESTT)</span>
                                    <span class="absolute inset-0 bg-gradient-to-r from-[#F5F0FF] to-[#EBE3FF] group-hover:opacity-0 transition-opacity duration-300"></span>
                                    <span class="absolute inset-0 bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 三大核心问题 -->
        <div class="py-16 bg-gradient-to-b from-white via-[#F8F7FF] to-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7]"
                    style="font-family: 'Inter', sans-serif;">企业软件安全面临的三大核心问题</h2>
                <div class="space-y-16 relative">
                    <!-- 背景装饰 -->
                    <div
                        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwNCw1NiwyNDAsMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnP')]">
                    </div>
                    <div v-for="(problem, index) in problems" :key="index"
                        class="relative flex items-start gap-16 p-12 group"
                        :class="{ 'opacity-0 translate-y-10': !problemVisible }" @mouseenter="activeIndex = index" :style="{
                            transitionDelay: `${index * 200}ms`,
                            opacity: problemVisible ? 1 : 0,
                            transform: problemVisible ? 'translateY(0)' : 'translateY(2rem)'
                        }">
                        <div
                            class="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div
                            class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#6838F0]/10 to-[#9B7BF7]/10 rounded-2xl flex items-center justify-center relative z-10">
                            <i :class="problem.icon" class="text-[#6838F0] text-3xl"></i>
                        </div>
                        <div class="flex-1 relative z-10">
                            <span class="text-sm font-medium text-[#6838F0] mb-4 block">问题 0{{ index + 1 }}</span>
                            <h3 class="text-3xl font-semibold mb-6 text-gray-800"
                                style="font-family: 'Inter', sans-serif;" v-html="problem.title"></h3>
                            <p class="text-gray-600 leading-relaxed text-lg max-w-3xl">{{ problem.description }}</p>
                        </div>
                        <div
                            class="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 解决方案示意 -->
        <div class="py-16 bg-gradient-to-b from-white via-[#F8F7FF] to-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7]" style="font-family: 'Inter', sans-serif;">如何解决这些问题</h2>
                <div class="h-[600px] relative">
                    <RelationshipChart v-if="isBrowser" :chartData="chartData" />
                </div>
                <p class="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mt-8">
                    从企业的业务系统出发，深入到具体的应用，再到构成应用的<strong>软件成分</strong>，最终识别和应对各种<strong>威胁类型</strong>。通过这种层层递进的分析方法，帮助企业从全局视角理解软件安全，并找到有效的治理路径。
                </p>
            </div>
        </div>
        <!-- 两大标准 -->
        <div class="py-16 bg-gradient-to-b from-white via-[#F8F7FF] to-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7]"
                    style="font-family: 'Inter', sans-serif;">两大核心框架，支撑企业软件安全治理落地</h2>
                <!-- 背景装饰 -->
                <div
                    class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwNCw1NiwyNDAsMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnP')]">
                </div>
                <div class="grid grid-cols-2 gap-24">
                    <div v-for="(standard, index) in standards" :key="index"
                        class="relative group p-12 rounded-3xl transition-all duration-500 hover:bg-white/50 hover:backdrop-blur-sm cursor-pointer">
                        <a :href="standard.link" class="absolute inset-0 z-10" aria-hidden="true"></a>
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-[#6838F0]/5 to-[#9B7BF7]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="relative z-[5]">
                            <div
                                class="w-20 h-20 bg-gradient-to-br from-[#6838F0]/10 to-[#9B7BF7]/10 rounded-2xl flex items-center justify-center mb-8">
                                <i :class="standard.icon" class="text-[#6838F0] text-3xl"></i>
                            </div>
                            <h3 class="text-2xl font-semibold mb-6" style="font-family: 'Inter', sans-serif;">{{
                                standard.title }}</h3>
                            <p class="text-gray-600 leading-relaxed text-lg" v-html="standard.description"></p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 贡献者 -->
    <div class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">核心贡献者</h2>
            <div class="grid grid-cols-4 gap-8 mb-16">
                <div v-for="contributor in contributors" :key="contributor.id"
                    class="text-center p-6 rounded-lg hover:bg-[#F8F7FF] transition-colors">
                    <p class="text-lg font-semibold text-gray-900 mb-2">{{ contributor.name }}</p>
                    <p class="text-sm text-gray-500 mt-2">{{ contributor.organization }}</p>
                </div>
            </div>
            
            <!-- 参与企业 -->
            <!-- <h2 class="text-3xl font-bold text-center mb-16">参与企业</h2>
            <div class="grid grid-cols-3 gap-8 mb-16">
                <div v-for="company in companies" :key="company.id"
                    class="text-center p-6 rounded-lg hover:bg-[#F8F7FF] transition-colors">
                    <div class="company-logo-container">
                        <img :src="company.logo" :alt="company.name" class="company-logo" />
                    </div>
                </div>
            </div> -->
            
            <div class="bg-[#F8F7FF] rounded-2xl p-12 text-center mb-8">
                <h3 class="text-2xl font-bold mb-6">加入我们，一起构建企业软件安全未来</h3>
                <div class="grid grid-cols-3 gap-8 mb-8">
                    <div class="p-6 bg-white rounded-lg">
                        <i class="i-carbon-idea text-[#6838F0] text-2xl mb-4"></i>
                        <h4 class="font-semibold mb-2">理念共创 </h4>
                        <p class="text-sm text-gray-600">参与研讨，共同打磨框架核心思想</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg">
                        <i class="i-carbon-group text-[#6838F0] text-2xl mb-4"></i>
                        <h4 class="font-semibold mb-2">实践分享</h4>
                        <p class="text-sm text-gray-600">分享行业实践案例与经验</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg">
                        <i class=" i-carbon-document text-[#6838F0] text-2xl mb-4"></i>
                        <h4 class="font-semibold mb-2">文档优化</h4>
                        <p class="text-sm text-gray-600">参与改进框架官方文档</p>
                    </div>
                </div>
                <a href="https://github.com/OSCS-Group/ESSF" target="_blank">
                  <button
                    class="bg-[#6838F0] text-white px-8 py-3 rounded-lg text-lg cursor-pointer whitespace-nowrap hover:bg-[#5A31D6] transition-colors">加入社区讨论</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { chartData } from '../data/chartData'
import RelationshipChart from './RelationshipChart.vue'

const problemVisible = ref(false)
const activeIndex = ref(-1)
const isBrowser = ref(false)

onMounted(() => {
    setTimeout(() => {
        problemVisible.value = true
    }, 100)
    
    // 设置isBrowser为true，表示现在是客户端环境
    isBrowser.value = true
})

const problems = [
    {
        icon: 'i-carbon-border-full',
        title: '面对日益复杂的软件构成，我们如何清晰界定<span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] font-bold">企业软件安全边界</span>？',
        description: '现代软件不再是孤立的代码，而是由各种各样的软件供应链成分组装而成，开源组件、容器镜像、基础设施代码等等。这些成分来源各异，关系复杂，传统安全边界的概念已难以适用。我们需要一种新的视角，能够穿透迷雾，清晰地识别和管理构成软件的各种供应链成分，才能真正划定企业各个业务所依赖的软件安全的新边界。企业的每一个业务就像一辆车，我们首先必须搞清楚这辆车依赖了多少个零件（软件供应链成分），每一个零件有什么样的潜在安全威胁（软件成分对应的威胁场景），然后安全治理的目标就是要保障这辆车依赖的每一个零件的安全。'
    },
    {
        icon: 'i-carbon-security',
        title: '面对层出不穷的安全威胁，我们如何<span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] font-bold">量化评估企业业务软件安全水位</span>？',
        description: '漏洞扫描、渗透测试，这些传统的安全评估手段仍然重要，但在软件供应链纵深复杂的今天，安全威胁类型也变得更加多样化和隐蔽。 供应链投毒、依赖混淆... 我们需要一套更全面的评估体系，首先要梳理清楚企业业务生成及办公涉及的所有软件资产，然后要清晰的评估每一类软件资产对应的所有安全威胁场景， 基于软件资产全集及对应威胁全集才能真正衡量企业业务软件的安全风险全集及量化评估当前建设水平，基于量化的风险和安全能力水平管理才能说服企业管理者获取合理资源推进安全水平的提升和风险的收敛。'
    },
    {
        icon: 'i-carbon-settings',
        title: '面对不断演进的安全挑战，如何构建一套真正有效、<span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6838F0] to-[#9B7BF7] font-bold">可持续</span>的软件安全治理体系？',
        description: '明确了边界，且能够量化评估当前企业软件安全风险及能力现状，最终的目标是构建一套行之有效的可持续企业软件安全治理体系。 软件安全治理必须从全局出发，我们需要完整的方法论和实践框架，指导企业如何将软件安全理念落地，构建起适应未来挑战的安全治理体系。'
    }
]


const standards = [
    {
        icon: 'i-carbon-flow',
        title: '企业软件成分分类(ESCT)',
        description: '解决 "软件由什么构成" 的问题，为划定安全边界、开展安全评估提供基础的 "成分视角"。',
        link: '/esct-intro'
    },
    {
        icon: 'i-carbon-security',
        title: '企业软件成分威胁分类(ESTT)',
        description: '解决 "软件可能面临哪些威胁" 的问题，为评估安全水位、构建治理体系提供全面的 "威胁视角"。',
        link: '/estt-intro'
    }
]

const contributors = [
    { id: 1, name: '章华鹏', organization: '墨菲安全' },
    { id: 2, name: '欧阳强斌', organization: '墨菲安全' },
    { id: 3, name: '车志远', organization: '墨菲安全' },
    { id: 4, name: '吕硕', organization: '墨菲安全' },
    { id: 5, name: '刁程扬', organization: '墨菲安全' },
    { id: 6, name: '斯诺', organization: '京东' },
    { id: 7, name: '何为舟', organization: '美团' },
    { id: 8, name: '程岩', organization: '蚂蚁集团' },
]

const companies = [
    { id: 1, name: 'xx', logo: '/img/companies/baidu.svg' },
]
</script>

<style>
.rounded-button {
    border-radius: 0.5rem;
}

.company-logo-container {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.company-logo {
    max-width: 120px;
    max-height: 50px;
    object-fit: contain;
}

@keyframes slow-pulse {
    0%, 100% {
        opacity: 0.05;
        transform: scale(1);
    }
    50% {
        opacity: 0.3;
        transform: scale(1.25);
    }
}

.animate-slow-pulse {
    animation: slow-pulse 4s ease-in-out infinite;
}

.gradient-text {
    background: linear-gradient(to right, #6838F0, #8B5CF6, #9B7BF7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #6838F0;
}

.gradient-text-secondary {
    background: linear-gradient(to right, #2563EB, #4F46E5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #2563EB;
}

/* 按钮动效样式 */
.btn-gradient {
    transition: all 0.3s ease;
    border: 2px solid transparent;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-image: 
        linear-gradient(to right, #F5F0FF, #EBE3FF),
        linear-gradient(to right, #6838F0, #9B7BF7);
    box-shadow: 0 4px 10px rgba(104, 56, 240, 0.1);
}

.btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(104, 56, 240, 0.15);
}

.btn-gradient::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg, #6838F0, #9B7BF7, #6838F0);
    border-radius: 0.5rem;
    z-index: -1;
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.btn-gradient:hover::before {
    opacity: 1;
    animation: gradient-animation 2s linear infinite;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>