# 软件安全目标能力集合 <Badge type="info" text="v0.1" />

**软件安全目标能力集合（TSCS）**，用于量化企业软件安全能力覆盖差距的核心基准。它为计算 <a href="/#security-indicators" target="_blank">软件安全量化管理指标体系</a> 中的 SAI 指标提供了一个通用参考，确保使用该量化管理指标体系的跨团队、跨企业在对安全能力覆盖情况评估时具有一致性。

::: tip 说明
1. 能力集合的持续更新：随着新技术的出现、新型攻击手段的演变以及安全理念的深化，未来可能会增加新的关键能力，调整现有能力的定义，或者移除已过时或被更有效能力取代的条目
:::

---

<style>
.security-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

.security-table th,
.security-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
    vertical-align: top;
}

.security-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

.security-table tr:hover {
    background-color: #f9f9f9;
}
</style>

<table class="security-table">
    <thead>
        <tr>
            <th style="width: 25%">安全能力名称</th>
            <th style="width: 15%">简写</th>
            <th style="width: 25%">英文</th>
            <th style="width: 40%">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>静态应用安全测试</td>
            <td>SAST</td>
            <td>Static Application Security Testing</td>
            <td>作为白盒测试，在编码阶段早期发现问题。 通过分析源代码或字节码，识别潜在的安全编码缺陷、漏洞模式（如 SQL 注入、XSS 模式）和不符合安全规范的代码。</td>
        </tr>
        <tr>
            <td>软件成分分析</td>
            <td>SCA</td>
            <td>Software Composition Analysis</td>
            <td>管理软件供应链风险。 识别应用中使用的所有第三方和开源组件，检测这些组件中已知的安全漏洞 (CVEs)，并可用于管理许可证合规性。</td>
        </tr>
        <tr>
            <td>敏感信息检测</td>
            <td>SD</td>
            <td>Secrets Detection</td>
            <td>防止敏感凭证意外泄露。 通过工具扫描代码库、配置文件及构建产物，查找硬编码或意外提交的密码、API 密钥、证书私钥等敏感信息。</td>
        </tr>
        <tr>
            <td>基础设施即代码扫描</td>
            <td>IaC</td>
            <td>Infrastructure as Code Scan</td>
            <td>保障云环境和自动化部署的安全。 分析用于定义基础设施的配置文件（Terraform, CloudFormation 等），发现可能导致安全风险的配置错误（如暴露端口、弱权限设置）。</td>
        </tr>
        <tr>
            <td>容器镜像安全扫描</td>
            <td>CISS</td>
            <td>Container Image Security Scan</td>
            <td>确保容器化应用的基础安全。 扫描容器镜像，检测操作系统包、系统库和嵌入的应用依赖中已知的安全漏洞 (CVEs)，以及不安全的配置。</td>
        </tr>
        <tr>
            <td>动态应用安全测试</td>
            <td>DAST</td>
            <td>Dynamic Application Security Testing</td>
            <td>模拟外部攻击，发现运行时漏洞。 作为黑盒测试，在应用运行时从外部发送探测请求，尝试利用常见的 Web 漏洞（如 XSS, SQLi, 目录遍历），验证实际暴露的风险。</td>
        </tr>
        <tr>
            <td>交互式应用安全测试</td>
            <td>IAST</td>
            <td>Interactive Application Security Testing</td>
            <td>结合内外视角，提高检测精度。 在应用运行时（通常集成在 QA 测试流程中），通过代理或插桩技术监控应用内部数据流和执行路径，结合外部请求触发，更精确地识别漏洞并提供上下文信息。</td>
        </tr>
        <tr>
            <td>API 安全测试</td>
            <td>API Sec</td>
            <td>API Security Testing</td>
            <td>专注于保护应用的核心接口。 针对应用的 API 端点进行专门的安全测试，覆盖认证授权、注入、数据过度暴露、资源滥用、速率限制等 OWASP API Security Top 10 风险。</td>
        </tr>
        <tr>
            <td>外部攻击面管理</td>
            <td>EASM</td>
            <td>External Attack Surface Management</td>
            <td>持续发现和监控对外的暴露风险。 从攻击者视角出发，自动化、持续地发现组织所有面向互联网的数字资产（包括未知的或"影子 IT"），识别开放端口、暴露服务、已知漏洞、证书问题等潜在攻击入口。</td>
        </tr>
        <tr>
            <td>Web 应用防火墙</td>
            <td>WAF</td>
            <td>Web Application Firewall</td>
            <td>提供边界防护，抵御常见 Web 攻击。 在 Web 应用前端部署，检测并阻止如 SQL 注入、XSS、恶意爬虫等常见攻击流量，也可提供虚拟补丁和基本的访问控制。</td>
        </tr>
        <tr>
            <td>运行时应用自我保护</td>
            <td>RASP</td>
            <td>Runtime Application Self-Protection</td>
            <td>在应用内部实现精准、实时的防护。 集成到应用或其运行时环境，利用对应用上下文的理解，实时监控并阻止恶意行为或漏洞利用尝试，理论上能提供更精准的防护和更低的误报。</td>
        </tr>
        <tr>
            <td>漏洞情报</td>
            <td>VI</td>
            <td>Vulnerability Intelligence</td>
            <td>提升风险识别和响应的精准性与时效性。 利用高质量的漏洞情报来增强对软件资产的风险评估。</td>
        </tr>
    </tbody>
</table>


