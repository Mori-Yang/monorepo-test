# Notice

-   子仓库：

    -   需要打包对应的`.d.ts`, vite 使用`vite-plugin-dts`; 打包的入口文件，例如 mori-components(组件库) 的 `src/index.ts` 作为入口;
    -   `package.json` 文件中声明 `"types": "<打包后的入口.d.ts>"`;

需要打包的原因：例如这里的 mori-components 使用了 tailwindcss，作为一种 postCSS，如果根项目没有安装 tailwindcss，那么组件将无样式

```ts
// vite.config.ts
import { defineConfig, ConfigEnv } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig((configEnv: ConfigEnv) => ({
    plugins: [
        // dts插件配置入口
        dts({
            insertTypesEntry: true,
            include: [
                "./src/index.ts",
                "./src/components/**/*",
                "./src/hooks/**/*",
            ],
        }),
    ],
}));
```

```json
// package.json
{
    "types": "./dist/index.d.ts"
    // ...
}
```

-   主仓库：
    -   添加子仓库 `git submodule add <repo url>`
    -   pnpm 配置 monorepo
    -   需要在 `package.json` 中声明子仓库的路径，例如：`"dependencies":{"mori-components": "workspace:*"}`
    -   上一步配置成功后，需要在子仓库目录中执行打包，之后重新在根 intsall，这样会将子仓库作为依赖安装

```yaml
# pnpm-workspace.yaml
packages:
    - "packages/*"
```

```json
// package.json
{
    "dependencies": {
        // ...
        "mori-components": "workspace:*"
    }
}
```

```bash
# 仓库更新
git submodule update --init --remote --recursive
# 安装依赖 这里会将 mori-components 安装
pnpm install
```

# workspace protocol

https://pnpm.io/workspaces#workspace-protocol-workspace
