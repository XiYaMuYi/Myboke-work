# 个人作品集网站

AI FDE Engineer 个人作品集 - 深色专业科技风

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion（动画）
- shadcn/ui（组件库）
- Lucide React（图标）

## 本地开发

```bash
# 安装依赖
npm install

# 初始化 shadcn 组件
npx shadcn@latest init
# 选择：new-york 风格、tailwind v4、css 变量

# 添加需要的组件
npx shadcn@latest add button card dialog badge input textarea sonner

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 部署到阿里云轻量服务器

### 方式一：Nginx 静态托管（推荐）

```bash
# 1. 本地构建
npm run build

# 2. 将 dist/ 目录上传到服务器
scp -r dist/ root@你的服务器IP:/usr/share/nginx/html/portfolio

# 3. 服务器上配置 Nginx
# 编辑 /etc/nginx/conf.d/portfolio.conf
server {
    listen 80;
    server_name 你的域名或IP;

    root /usr/share/nginx/html/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}

# 4. 重启 Nginx
nginx -t && systemctl restart nginx
```

### 方式二：Node 服务预览

```bash
# 安装 serve
npm install -g serve

# 启动（端口 3000）
serve -s dist -l 3000

# 用 pm2 保持后台运行
pm2 serve dist 3000 --name portfolio
```

## 自定义内容

所有内容数据都在 `src/data/portfolio.ts` 中，修改以下部分即可：

- `MOCK_PERSONAL_INFO` — 个人信息（名字、职位、简介、标签）
- `MOCK_SKILLS` — 技能栈
- `MOCK_PROJECTS` — 项目列表（企业项目 / 个人项目）
- `MOCK_EXPERIENCE` — 工作经历
- `MOCK_CONTACT` — 联系方式（GitHub、邮箱、LinkedIn）

## 替换图片

项目图片目前使用 Unsplash 占位图，建议替换为本地图片：

1. 将图片放入 `public/images/` 目录
2. 修改 `src/data/portfolio.ts` 中的 `imageUrl` 和 `screenshots` 为 `/images/xxx.jpg`

## 项目结构

```
portfolio-website/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── components.json
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── index.tsx          # 入口
    ├── app.tsx            # 路由
    ├── index.css          # 全局样式
    ├── tailwind-theme.css # 主题变量
    ├── data/
    │   └── portfolio.ts   # 所有内容数据
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── ui/            # shadcn 组件
    └── pages/
        └── HomePage/
            ├── HomePage.tsx
            └── sections/
                ├── HeroSection.tsx
                ├── AboutSection.tsx
                ├── SkillsSection.tsx
                ├── ProjectsSection.tsx
                ├── ExperienceSection.tsx
                └── ContactSection.tsx
```
