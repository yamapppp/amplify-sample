# amplify-sample

## 基本設定

```ssh
~/Github/ $ yarn create nx-workspace

・・・

✔ Where would you like to create your workspace? · amplify-sample
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · nextjs
✔ Standalone project or integrated monorepo? · integrated
✔ Application name · user
✔ Would you like to use the App Router (recommended)? · Yes
✔ Default stylesheet format · css
✔ Enable distributed caching to make your CI faster · Yes
```

### アプリケーションの追加

```ssh
~/Github/amplify-sample $ yarn nx g @nrwl/next:app admin
```

### ポート変更

```ssh
~/Github/amplify-sample $ cat apps/admin/project.json
{
  "name": "admin",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "apps/admin",
  "projectType": "application",
  "targets": {
    ・・・
    "serve": {
      "executor": "@nx/next:server",
      "defaultConfiguration": "development",
      "options": {
        "port": 4300,
        "buildTarget": "admin:build",
        "dev": true
      },
      ・・・
    },
    ・・・
  }
}
```

### 立ち上げ

```ssh
yarn nx run-many --target serve --all --parallel
```
