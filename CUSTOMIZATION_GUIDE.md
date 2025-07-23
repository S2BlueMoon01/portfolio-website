# Hướng Dẫn Tùy Chỉnh Portfolio Website

## 🎯 Mục Tiêu Hoàn Thiện

Portfolio website của bạn hiện đã được xây dựng thành công với các trang cơ bản. Để có một website hoàn chỉnh và ấn tượng, bạn cần thực hiện các bước sau:

## 📝 Bước 1: Tùy Chỉnh Thông Tin Cá Nhân

### 1.1. Cập nhật dữ liệu cá nhân
Mở file `src/data/index.ts` và thay thế tất cả thông tin placeholder bằng thông tin thực của bạn:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Tên Thật Của Bạn",
  title: "Full-Stack Developer & UI/UX Designer", // Hoặc title phù hợp
  bio: "Mô tả ngắn gọn về bạn...",
  email: "email@thucte.com",
  phone: "+84 xxx xxx xxx",
  location: "Thành phố, Việt Nam",
  website: "https://yourwebsite.com",
  // Cập nhật tất cả các mạng xã hội
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    // ...
  }
}
```

### 1.2. Cập nhật projects
Thay thế các project mẫu bằng các project thực tế của bạn trong cùng file:

```typescript
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Tên Project Thực",
    description: "Mô tả chi tiết project...",
    longDescription: "Mô tả chi tiết hơn...",
    technologies: ["React", "Node.js", "MongoDB"], // Công nghệ thực tế
    category: "web",
    featured: true,
    image: "/images/project-1.jpg", // Hình ảnh thực tế
    gallery: ["/images/project-1-1.jpg", "/images/project-1-2.jpg"],
    githubUrl: "https://github.com/yourusername/project-1",
    liveUrl: "https://project-1.yourdomain.com",
    // ...
  }
]
```

### 1.3. Cập nhật skills và experience
Điền thông tin về kỹ năng và kinh nghiệm làm việc thật của bạn.

## 🖼️ Bước 2: Thêm Hình Ảnh

### 2.1. Chuẩn bị hình ảnh
- **Avatar**: `public/images/avatar.jpg` (400x400px, tối ưu cho web)
- **Project Screenshots**: `public/images/project-*.jpg` 
- **Resume**: `public/resume.pdf`

### 2.2. Tối ưu hình ảnh
- Sử dụng format WebP hoặc AVIF để tối ưu tốc độ
- Kích thước phù hợp (không quá 500KB/ảnh)
- Tỉ lệ khung hình nhất quán

## 🎨 Bước 3: Khôi Phục Header & Footer

Hiện tại Header và Footer đã bị comment để website có thể build thành công. Cần sửa lỗi Button component trước:

### 3.1. Sửa lỗi Button component
Vấn đề có thể do Button component không export đúng. Kiểm tra các import trong:
- `src/components/theme-toggle.tsx`
- `src/components/header.tsx`

### 3.2. Khôi phục Header & Footer
Sau khi sửa lỗi, uncomment trong `src/app/layout.tsx`:

```typescript
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Và trong JSX:
<Header />
<main className="flex-1 pt-16">
  {children}
</main>
<Footer />
```

## 🚀 Bước 4: Khôi Phục Các Trang Đầy Đủ

Hiện tại các trang đang sử dụng version đơn giản. Khôi phục các trang đầy đủ:

```bash
# Khôi phục trang home
mv src/app/page-backup.tsx src/app/page.tsx

# Khôi phục trang about  
mv src/app/about/page-backup.tsx src/app/about/page.tsx

# Khôi phục trang projects
mv src/app/projects/page-backup.tsx src/app/projects/page.tsx

# Khôi phục trang experience
mv src/app/experience/page-backup.tsx src/app/experience/page.tsx
```

## 🔧 Bước 5: Sửa Lỗi và Tối Ưu

### 5.1. Fix các lỗi import
- Kiểm tra tất cả các import của Button component
- Đảm bảo all icons import đúng từ heroicons và lucide-react

### 5.2. Test trên các thiết bị
- Desktop (1920x1080)
- Tablet (768x1024) 
- Mobile (375x667)

### 5.3. Kiểm tra hiệu suất
Chạy Lighthouse để đạt điểm 90+:
```bash
npm run build
npm run start
```

## 🌍 Bước 6: Deploy

### 6.1. Chuẩn bị cho Production
- Cập nhật `next-sitemap.config.js` với domain thực
- Cập nhật `public/robots.txt` với domain thực
- Tạo file `.env.local` cho các environment variables

### 6.2. Deploy lên Vercel
1. Push code lên GitHub
2. Connect GitHub repo với Vercel
3. Deploy tự động

### 6.3. Setup Custom Domain (tuỳ chọn)
- Mua domain
- Cấu hình DNS
- Setup SSL certificate

## 📱 Bước 7: Thêm Tính Năng Nâng Cao

### 7.1. Contact Form với Backend
- Setup form handler với Vercel Functions
- Hoặc tích hợp với Formspree, Netlify Forms

### 7.2. Google Analytics
- Thêm Google Analytics 4
- Setup conversion tracking

### 7.3. SEO Nâng Cao
- Thêm structured data (JSON-LD)
- Meta tags cho social sharing
- Sitemap optimization

## 🎯 Checklist Hoàn Thiện

- [ ] Cập nhật tất cả thông tin cá nhân trong `src/data/index.ts`
- [ ] Thêm hình ảnh avatar và project screenshots
- [ ] Sửa lỗi Button component và khôi phục Header/Footer
- [ ] Khôi phục tất cả các trang đầy đủ
- [ ] Test responsive design trên tất cả thiết bị
- [ ] Kiểm tra Lighthouse score (mục tiêu 90+)
- [ ] Setup domain và deploy production
- [ ] Test tất cả links và tính năng
- [ ] Setup Google Analytics
- [ ] Backup source code

## 🆘 Troubleshooting

### Nếu build fail:
1. Kiểm tra console errors
2. Đảm bảo tất cả imports đúng
3. Kiểm tra TypeScript types
4. Chạy `npm run lint` để fix linting issues

### Nếu trang trống:
1. Kiểm tra console trong Developer Tools
2. Kiểm tra network requests
3. Đảm bảo components render đúng

### Performance issues:
1. Optimize images (WebP format)
2. Code splitting
3. Lazy loading components
4. Minimize bundle size

---

**Ghi chú**: Website hiện tại đã có cấu trúc hoàn chỉnh và sẵn sàng cho việc tùy chỉnh. Bước quan trọng nhất là thay thế dữ liệu placeholder bằng thông tin thực tế của bạn và sửa các lỗi component để có thể khôi phục đầy đủ tính năng.
