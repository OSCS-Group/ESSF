---
title: 容器运行时
sidebar_position: 1
---


# 容器运行时

> 容器运行时是运行时环境层中的重要资产类型之一，它为容器化应用提供了标准化的运行环境。

## <b>定义</b>

容器运行时是负责创建和运行容器的底层软件，它实现了容器的生命周期管理、资源隔离和运行环境标准化。容器运行时通过操作系统级虚拟化技术，在同一操作系统内核上创建多个相互隔离的用户空间实例（容器），每个容器都拥有自己的文件系统、进程空间、网络接口和资源限制。

## <b>示例</b>

<table header_row="1">
<colgroup>
<col width="211"/>
<col width="606"/>
</colgroup>
<thead>
<tr><th><b>资产示例</b></th><th><b>说明</b></th></tr>
</thead>
<tbody>
<tr><td><b>Docker Engine</b></td><td>最广泛使用的容器平台，提供了容器的构建、运行和管理功能。</td></tr>
<tr><td><b>containerd</b></td><td>一个行业标准的容器运行时，专注于简单性、健壮性和可移植性。</td></tr>
<tr><td><b>CRI-O</b></td><td>为Kubernetes优化的轻量级容器运行时，完全支持OCI（Open Container Initiative）规范。</td></tr>
<tr><td><b>Podman</b></td><td>无守护进程的容器引擎，可以替代Docker，支持以非root用户身份运行容器。</td></tr>
</tbody>
</table>

