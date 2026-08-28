# 蔡宏伟 - AI FDE Engineer 个人作品集

深色专业科技风个人作品集网站，展示 AI 工程化能力与项目经验。

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

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 部署到服务器

### Nginx 静态托管（推荐）

```bash
# 1. 本地构建
npm run build

# 2. 将 dist/ 目录上传到服务器
scp -r dist/ root@你的服务器IP:/usr/share/nginx/html/portfolio

# 3. 配置 Nginx
# /etc/nginx/conf.d/portfolio.conf
server {
    listen 80;
    server_name 你的域名或IP;
    root /usr/share/nginx/html/portfolio;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# 4. 重启 Nginx
nginx -t && systemctl restart nginx
```

## 自定义内容

所有内容数据都在 `src/data/portfolio.ts` 中：

- `MOCK_PERSONAL_INFO` — 个人信息（名字、职位、简介、头像、标签）
- `MOCK_SKILLS` — 技能栈（5大类，带熟练度）
- `MOCK_PROJECTS` — 项目列表（企业项目 + 个人项目）
- `MOCK_EXPERIENCE` — 工作经历
- `MOCK_EDUCATION` — 教育背景
- `MOCK_CONTACT` — 联系方式（GitHub、邮箱、电话、所在地）

## 替换图片

项目图片目前使用 Unsplash 占位图，建议替换为真实截图：

1. 将图片放入 `public/images/` 目录
2. 修改 `src/data/portfolio.ts` 中的 `imageUrl` 和 `screenshots` 为 `/images/xxx.jpg`

## 项目结构

```
portfolio-v2/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── index.tsx
    ├── app.tsx
    ├── index.css
    ├── data/
    │   └── portfolio.ts       # 所有内容数据
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Layout.tsx
    │   └── ui/                 # shadcn 组件
    ├── hooks/
    │   └── use-mobile.ts
    ├── lib/
    │   └── utils.ts
    └── pages/
        ├── HomePage/
        │   ├── HomePage.tsx
        │   └── sections/
        │       ├── HeroSection.tsx
        │       ├── AboutSection.tsx
        │       ├── SkillsSection.tsx
        │       ├── ProjectsSection.tsx
        │       ├── ExperienceSection.tsx
        │       ├── EducationSection.tsx
        │       └── ContactSection.tsx
        └── NotFoundPage/
            └── NotFoundPage.tsx
```
