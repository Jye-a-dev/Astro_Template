# AGENTS.md - Architecture & Coding Conventions

## 1. Zero-JS & Hydration Directives

- Ưu tiên render HTML/CSS tĩnh mặc định (Zero-JS architecture).
- Chỉ sử dụng client directives (`client:load`, `client:visible`, `client:idle`) khi thực sự cần tương tác phía client.
- Dùng component `<Image />` từ `astro:assets` cho tất cả hình ảnh nội bộ để tối ưu dung lượng và layout shift.

## 2. Content Collections (Astro 5+ Content Layer API)

- Tất cả Content Collections phải được khai báo tại `src/content.config.ts`.
- Sử dụng `defineCollection` và loader `glob` từ `astro/loaders`.
- Tuyệt đối không sử dụng đường dẫn legacy `src/content/config.ts`.
- Luôn validate schema của collection bằng Zod.

## 3. Styling & Icons

- Sử dụng Tailwind CSS v4 thông qua `@tailwindcss/vite` trong `astro.config.mjs`.
- Khai báo `@import "tailwindcss";` ở dòng đầu tiên của `src/styles/global.css`.
- Tránh tạo file `tailwind.config.js` truyền thống; dùng CSS theme variables hoặc Tailwind utilities.
- Tận dụng `@lucide/astro` cho icons để đảm bảo lightweight và tree-shakeable.

## 4. Thin Pages & Feature-Based Architecture

- Thư mục `src/pages/` chỉ chứa định tuyến URL (.astro) và API endpoints (.ts). Không đặt logic nghiệp vụ tại đây.
- Toàn bộ business logic, API calls, schemas và UI đặc thù đưa vào `src/features/<feature-name>/`.
  - `src/features/<feature>/api/`: Hàm fetch / gọi API backend.
  - `src/features/<feature>/components/`: Component nội bộ của feature.
  - `src/features/<feature>/schemas/`: Zod validation schemas.
  - `src/features/<feature>/types/`: Type definitions riêng của feature.
- Các UI component dùng chung đặt tại `src/components/ui/` (Button, Card, Input...).

## 5. Path Alias & TypeScript

- Luôn import thông qua path alias `@/*` (đã map tới `./src/*` trong `tsconfig.json`).
- Kế thừa `astro/tsconfigs/strict`, không sử dụng `baseUrl` đã deprecated trong TS 6+.

## 6. Git & Commits

- Tuân thủ nghiêm ngặt Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.
