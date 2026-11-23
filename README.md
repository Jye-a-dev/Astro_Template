# Astro Template - Production Ready

Khung khởi tạo dự án Astro hiện đại, chuẩn hóa kiến trúc Production-ready, tối ưu hóa cho cả quy trình làm việc độc lập (**Solo**) lẫn cộng tác nhóm (**Team**).

---

## 🚀 Giới thiệu & Tech Stack

Dự án được xây dựng trên nền tảng **Astro 5+ / 7+** với triết lý **Zero-JS mặc định**, kết hợp cùng hệ sinh thái công nghệ mới nhất:

| Thư viện / Công cụ        | Phiên bản thực tế    | Mục đích sử dụng                                            |
| :------------------------ | :------------------- | :---------------------------------------------------------- |
| **Astro**                 | `^7.4.13`            | Web Framework tốc độ cao, Content Layer API                 |
| **Tailwind CSS**          | `^4.3.5`             | CSS Utility-first engine thế hệ mới                         |
| **@tailwindcss/vite**     | `^4.3.5`             | Plugin Vite chính thức cho Tailwind CSS v4                  |
| **TypeScript**            | `^6.0.3`             | Type system nghiêm ngặt với cấu hình Path Alias `@/*`       |
| **Zod**                   | `^4.6.7`             | Schema validation & Type-safe Environment Variables         |
| **@lucide/astro**         | `^1.78.0`            | Thư viện biểu tượng vector tối ưu cho Astro                 |
| **clsx & tailwind-merge** | `^2.1.1` / `^3.7.1`  | Tiện ích gộp class Tailwind an toàn (`cn()`)                |
| **ESLint**                | `^10.15.0`           | Linter kiểm soát chất lượng mã nguồn (Flat Config)          |
| **eslint-plugin-astro**   | `^3.2.1`             | Bộ quy chuẩn linting cho file `.astro`                      |
| **Prettier**              | `^3.10.1`            | Tự động format mã nguồn (tích hợp Astro & Tailwind plugins) |
| **Husky & Lint-Staged**   | `^9.1.7` / `^17.6.2` | Tự động lint và format staged files trước khi commit        |
| **Commitlint**            | `^21.2.4`            | Chuẩn hóa thông điệp commit theo Conventional Commits       |

---

## 📋 Yêu cầu hệ thống

- **Node.js**: Phiên bản `>= 22` (Khuyến nghị sử dụng phiên bản ghi trong `.nvmrc`).
- **NPM**: Phiên bản `>= 10.x`.
- **VS Code Extensions khuyến nghị**:
  - `astro-build.astro-vscode` (Astro Support)
  - `dbaeumer.vscode-eslint` (ESLint)
  - `esbenp.prettier-vscode` (Prettier Formatter)
  - `bradlc.vscode-tailwindcss` (Tailwind CSS IntelliSense)

---

## ⚡ Quick Start

Khởi động dự án chỉ với 4 bước đơn giản:

```bash
# 1. Clone repository
git clone <repository_url> astro_template
cd astro_template

# 2. Tạo file biến môi trường từ mẫu
cp .env.example .env

# 3. Cài đặt toàn bộ dependencies
npm install

# 4. Khởi chạy môi trường phát triển (mặc định Port 5000)
npm run dev
```

Mở trình duyệt và truy cập: **`http://localhost:5000`**

---

## ⚙️ Cấu hình Biến môi trường (`.env`)

Hệ thống hỗ trợ điều khiển Port và URL trực tiếp từ file `.env`:

| Biến môi trường       | Giá trị mặc định            | Phạm vi         | Mô tả                                        |
| :-------------------- | :-------------------------- | :-------------- | :------------------------------------------- |
| `PORT`                | `5000`                      | Server / Vite   | Cổng chạy cho cả `dev` và `preview` server   |
| `PUBLIC_SITE_URL`     | `http://localhost:5000`     | Client & Server | URL gốc của website (hỗ trợ canonical & SEO) |
| `PUBLIC_API_BASE_URL` | `http://localhost:8000/api` | Client & Server | Đường dẫn cơ sở kết nối tới Backend API      |

> **Quy tắc bảo mật biến môi trường:**
>
> - Các biến bắt đầu bằng tiền tố `PUBLIC_` sẽ được Astro expose ra phía trình duyệt (Client-side) thông qua `import.meta.env.PUBLIC_*`.
> - Các biến **không** có tiền tố `PUBLIC_` (ví dụ `PORT`, API secret keys) chỉ có thể truy cập ở môi trường Server / Build, bảo vệ an toàn thông tin nhạy cảm.
> - Tất cả biến được validate qua Zod tại `src/config/env.ts` với giá trị fallback an toàn, tránh lỗi gãy build khi mới clone.

---

## 📂 Sơ đồ Cấu trúc thư mục & Quy tắc phân chia

Kiến trúc kết hợp giữa **Thin Pages** và **Feature-Based Hybrid** giúp mã nguồn tường minh, dễ phân công nhiệm vụ:

```text
src/
├── assets/                   # Hình ảnh, đa phương tiện tối ưu qua astro:assets
├── components/
│   └── ui/                   # Các UI components dùng chung toàn hệ thống (Button, Card...)
├── config/
│   └── env.ts                # Validate & xuất biến môi trường type-safe bằng Zod
├── content/
│   └── blog/                 # Dữ liệu Markdown mẫu cho Content Layer API
│       └── welcome.md
├── features/                 # Phân chia theo module nghiệp vụ độc lập
│   └── example/
│       ├── api/              # Hàm fetch / gọi API backend của feature
│       ├── components/       # Component giao diện nội bộ chỉ dùng trong feature
│       ├── schemas/          # Zod schemas kiểm tra dữ liệu đầu vào/ra
│       └── types/            # TypeScript interfaces/types riêng của feature
├── layouts/
│   └── BaseLayout.astro      # Khung trang chuẩn (Meta SEO, import global.css, slot)
├── lib/                      # Cấu hình SDK bên thứ 3 (Firebase, Supabase, Axios...)
├── pages/                    # CHỈ chứa Routing và API Endpoints (Thin Pages)
│   ├── api/
│   │   └── health.ts         # Endpoint kiểm tra trạng thái hệ thống (/api/health)
│   ├── 404.astro             # Trang báo lỗi 404
│   └── index.astro           # Trang chủ
├── styles/
│   └── global.css            # Nạp Tailwind CSS (@import "tailwindcss";)
├── types/
│   └── api.ts                # Khai báo TypeScript types chung toàn dự án
├── utils/
│   └── cn.ts                 # Utility kết hợp class Tailwind (clsx + tailwind-merge)
└── content.config.ts         # Khai báo Content Collections theo Astro 5 Content Layer API
```

### Nguyên tắc đặt mã nguồn:

1. **`src/pages/` (Thin Pages):** Tuyệt đối không viết business logic phức tạp tại đây. Chỉ import layout, components từ `src/features/` hoặc `src/components/ui/` để ghép thành trang.
2. **`src/features/<module>/`:** Mỗi thư mục đại diện cho một chức năng/nghiệp vụ. Nhóm làm việc hoặc cá nhân có thể phát triển độc lập trong từng module mà không gây xung đột Git (merge conflicts).
3. **`src/components/ui/`:** Nơi chứa các thành phần nguyên tử dùng chung (Button, Modal, Input, Badge...).
4. **`src/content.config.ts`:** Nơi duy nhất định nghĩa Content Collections bằng loader (`glob`, `file`) theo chuẩn Astro 5.

---

## 🛠️ Danh sách NPM Scripts

| Lệnh              | Mục đích                                                                  |
| :---------------- | :------------------------------------------------------------------------ |
| `npm run dev`     | Khởi chạy máy chủ phát triển cục bộ tại cổng chỉ định trong `.env`        |
| `npm run build`   | Đóng gói sản phẩm tối ưu hóa để triển khai Production vào thư mục `dist/` |
| `npm run preview` | Xem trước bản build Production tại máy cục bộ                             |
| `npm run check`   | Chạy bộ kiểm tra Type-check và Astro diagnostics (`astro check`)          |
| `npm run lint`    | Quét và phát hiện lỗi cú pháp, quy ước mã với ESLint Flat Config          |
| `npm run format`  | Tự động format toàn bộ mã nguồn theo chuẩn Prettier & Tailwind            |

---

## 📝 Quy ước Git Commit (Conventional Commits)

Dự án áp dụng Git Hook tự động (`husky` + `commitlint` + `lint-staged`) để kiểm tra format và nội dung commit trước khi lưu vào lịch sử Git:

**Cú pháp chuẩn:**

```text
<type>(<scope>): <mô tả ngắn gọn bằng chữ thường>
```

**Các `type` được hỗ trợ:**

- `feat`: Tính năng mới cho người dùng.
- `fix`: Sửa lỗi phát sinh trong mã.
- `docs`: Cập nhật hoặc bổ sung tài liệu.
- `style`: Định dạng mã, khoảng trắng, dấu chấm phẩy (không đổi logic).
- `refactor`: Tái cấu trúc mã nguồn nhưng không đổi chức năng hay sửa bug.
- `perf`: Cải thiện hiệu năng xử lý hoặc tốc độ tải.
- `test`: Bổ sung hoặc chỉnh sửa unit/integration test.
- `chore`: Thay đổi cấu hình build, scripts hoặc dependencies.
