---
title: Nestjs项目升级eslint到v9过程全解
copyright: true
comment: false
mathjax: false
date: 2024-10-23 13:44:50
updated: 2024-01-08 13:44:50
tags:
  - nest
categories: nest
keywords: 升级,eslint,v9,prettier,v8,eslint9,nest,nestjs,migrate
permalink: upgrade-eslint-to-v9/
description: 本文将详细介绍 Nestjs 项目从 eslint 8 升级到 eslint 9 的过程，并介绍 eslint 9 配置规则和集成 prettier。
---
距离 9.0 版本发布已经4个多月了，主流框架或者工具基本都已经适配，体验一下新版本。

eslint 8 到 9 属于破坏性更新（Break Change），因此导致 eslint v8 的配置方式无法直接使用（可以使用兼容包，但这不是本文的主题）。

其实大家最关心的就是从 eslint 8 到 9 之后的写法，而与 eslint 息息相关的多种配置插件也需要大量的变更，因此本文核心就是：使用 eslint9 配置规则和集成 prettier。

- 2025.1.8 更新，nest已经更新，不再需要再自己去手动改eslint配置文件。

<!-- more -->
## 准备工作

- 将node版本升级到20
- 删除`.eslintrc.js`,`.eslintignore`文件

## 配置文件

- eslint.config.mjs

```mjs
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules', '**/node_modules/**', '**/*.js', '**/*.d.ts'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.spec.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksVoidReturn": false,
          "checksConditionals": false
        }
      ],
      "@typescript-eslint/require-await": "off",
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/only-throw-error': 'off',
    },
  },
);
```

- ignores部分可以自行添加之前.eslintignore文件内容

## 参考

- https://eslint.org/docs/latest/use/migrate-to-9.0.0
- https://github.com/nestjs/nest/blob/master/eslint.config.mjs