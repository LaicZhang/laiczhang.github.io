---
title: GitHub助力AI之GitHub-Models
copyright: true
comment: false
mathjax: false
date: 2024-08-05 14:53:51
updated: 2024-09-15 14:53:51
tags:
  - ai
  - github
categories: AI
keywords: ai, github, models,gpt,deep-learning,4o,4o-min,gpt-4o,gpt-4o-min,openai,chatgpt
permalink: how-to-use-github-models/
description:
---
## 前言

> 我们正在推出 GitHub Models，使超过 1 亿的开发人员能够成为 AI 工程师并使用行业领先的 AI 模型进行构建。

- ~~已申请，待通过后再更新。~~ 已通过。

<!--more-->

## 申请

申请地址：[Marketplace · GitHub](https://github.com/marketplace/models)

![](https://img1.tucang.cc/api/image/show/5000677e6be6a247a64f6a8a2c3411cb)

![image.png](https://img1.tucang.cc/api/image/show/bb5c5d8d70d819e79aeb540e44f0fb0e)

## 使用

- [gpt4-4o · Marketplace · GitHub](https://github.com/marketplace/models/azure-openai/gpt-4o)

![image.png](https://img1.tucang.cc/api/image/show/affe381d5a55e7bc97f5039853955ed1)

- 由于我还没通过申请，所以点击Playground后还是无法使用。
![image.png](https://img1.tucang.cc/api/image/show/df41048626815f57048d97549ad289c6)

- 通过申请，然后根据提示进行操作。

![](https://img1.tucang.cc/api/image/show/9c7df45bcc94a02e5f00448bc0c23ffc)

### 使用步骤

- 以`openai-gpt-4o`模型为例

1. 登录GitHub账号，点击右上角头像，选择 Settings > Developer settings > Personal access tokens > [Generate new toke](https://github.com/settings/tokens)。
2. 安装openai `npm install openai`
3. 示例代码

```shell
export GITHUB_TOKEN="<your-github-token-goes-here>"
```

```javascript
import OpenAI from "openai";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

export async function main() {

  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
        { role:"system", content: "You are a helpful assistant." },
        { role:"user", content: "What is the capital of France?" }
      ],
      model: modelName,
      temperature: 1.0,
      max_tokens: 1000,
      top_p: 1.0
    });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
```

## 模型选择

GitHub Models 提供了一系列功能各异的模型来满足不同开发需求。如 Mistral 模型具有低延迟优势，而 GPT-4o 在构建需要实时音频、视觉和文本的多模态应用程序时表现出色。开发者可以在这里测试和比较不同模型，选择最适合自己项目的方案。

## 使用限制

游乐场和免费 API 使用受到每分钟请求次数、每天请求次数、每次请求的 token 数和并发请求数的速率限制（文档：[Rate limits - Prototyping with AI models - GitHub Docs](https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits)）。如果达到速率限制，则需要等待限制重置后才能进行更多请求。低、中、高和嵌入模型有不同的速率限制。
![image.png](https://img1.tucang.cc/api/image/show/fb2410ace9f999c019c4f71c0fe3ac5b)

## 相关

- [Introducing GitHub Models: A new generation of AI engineers building on GitHub - The GitHub Blog](https://github.blog/news-insights/product-news/introducing-github-models/)
