# AutoResearch: 让 AI Agent 自主进行深度学习研究

*Published: February 15, 2026*

> "有一天，前沿 AI 研究曾经由在吃饭、睡觉、娱乐以及偶尔使用声波互联进行'组会'仪式之间的'肉电脑'完成。那个时代早已过去。研究现在完全是在天空中的计算集群巨型结构上运行的自主 AI Agent 群体的领域。" —— Andrej Karpathy, 2026年3月

最近 Andrej Karpathy 发布了一个极具实验性质的项目 [autoresearch](https://github.com/karpathy/autoresearch)，它探索了一个令人兴奋的问题：**如果我们让 AI Agent 在夜间自主运行深度学习实验，会发生什么？**

## 项目的核心思想

传统的研究流程是研究人员手动编写代码、运行实验、分析结果、调整参数，然后重复这个过程。而 autoresearch 把这个循环自动化了：

1. **人类编写 `program.md`** —— 定义研究目标和方法论
2. **AI Agent 编辑 `train.py`** —— 自主修改训练代码
3. **固定时间预算运行** —— 每次训练严格运行 5 分钟
4. **自动评估** —— 使用 `val_bpb`（验证集 bits per byte）作为指标
5. **迭代优化** —— 保留改进，丢弃退步，循环往复

想象一下，你睡觉前启动这个系统，第二天早上醒来就能看到几十个实验的完整日志和优化后的模型。

## 项目架构

整个项目刻意保持精简，只有三个核心文件：

```
prepare.py    # 固定常量、数据准备和运行时工具（不修改）
train.py      # 模型、优化器、训练循环（Agent 修改此文件）
program.md    # Agent 指令（人类修改此文件）
```

### 关键设计选择

**1. 单文件修改策略**

Agent 只修改 `train.py`，这限制了范围，使代码差异可审查。

**2. 固定时间预算**

无论 Agent 如何修改（模型大小、batch size、架构等），训练始终运行 5 分钟。这带来了两个好处：
- 实验可以直接比较，不受计算平台影响
- 系统会自动找到在 5 分钟预算下最优的模型

**3. 统一的评估指标**

使用 `val_bpb`（validation bits per byte）而不是困惑度（perplexity），因为：
- 与词汇表大小无关
- 架构修改后可以公平比较

## 快速开始

```bash
# 1. 安装 uv（如果还没有）
curl -LsSf https://astral.sh/uv/install.sh | sh

# 2. 安装依赖
uv sync

# 3. 准备数据（一次性，约 2 分钟）
uv run prepare.py

# 4. 手动运行一次实验
uv run train.py
```

验证环境正常后，就可以进入自主研究模式了。

## 运行 AI Agent

启动你的 AI Agent（Claude、Codex 或其他），然后给它这样的提示：

> "Hi have a look at program.md and let's kick off a new experiment! let's do the setup first."

`program.md` 本质上是一个轻量级的 "技能" 文件，定义了 Agent 的上下文和任务。

## 实验节奏

- **每小时约 12 个实验**
- ** overnight 约 100 个实验**
- 第二天早上检查实验日志和模型改进

## 在较小计算平台上运行

虽然项目最初设计用于 H100 GPU，但社区已经创建了多个 fork 支持其他平台：

- **miolini/autoresearch-macos** —— MacOS 支持
- **trevin-creator/autoresearch-mlx** —— MLX 后端
- **jsegov/autoresearch-win-rtx** —— Windows RTX 显卡
- **andyluo7/autoresearch** —— AMD GPU

对于较小的计算机（如 MacBook），Karpathy 建议以下调整策略：

1. **使用更低熵的数据集**，如 [TinyStories](https://huggingface.co/datasets/roneneldan/TinyStories)（GPT-4 生成的短篇故事）
2. **减小词汇表大小**，从 8192 降到 4096、2048 甚至 256（字节级）
3. **降低 `MAX_SEQ_LEN`**，可能降到 256 或更小
4. **减少 `EVAL_TOKENS`**，减少验证数据量
5. **减小模型深度**，`DEPTH` 默认 8，可以降到 4
6. **使用简单的 `WINDOW_PATTERN`**，使用 "L" 而不是 "SSSL"
7. **大幅降低 `TOTAL_BATCH_SIZE`**，保持 2 的幂次，如降到 2^14 (~16K)

## 研究意义

autoresearch 不仅仅是一个有趣的实验，它代表了 AI 研究范式的潜在转变：

1. **自动化探索** —— AI 可以比人类更快地遍历超参数空间
2. **24/7 研究** —— 睡觉时也在进行实验
3. **可重复的流程** —— 实验日志提供了完整的研究轨迹
4. **人机协作** —— 人类设定方向，AI 执行探索

当然，这个项目也有其局限性：
- 仅限于单一 GPU 训练
- 代码复杂度有限（单文件修改）
- 需要精心设计的 `program.md`

## 结语

autoresearch 是一个引人深思的项目。它让我们思考：在未来，AI 研究有多少可以由 AI 自己完成？研究人员的角色会如何转变？

无论如何，这是一个值得尝试的有趣实验。也许你的下一个突破就藏在一夜的自主实验之中。

---

**项目链接**: [github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)

**相关讨论**:
- [Karpathy 的推文](https://twitter.com/karpathy)
- [nanoGPT 父项目](https://github.com/karpathy/nanoGPT)

---

[← Back to Articles](./index.html)
