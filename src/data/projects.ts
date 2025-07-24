import { Project } from '@/types'

export const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: "coco-paris-boutique",
      title: "Coco Paris Boutique",
      description: "An e-commerce platform with comprehensive features including real-time notifications, payment integration, and admin dashboard.",
      longDescription: "Built a complete e-commerce solution with JWT authentication, WebSocket notifications, VNPay payment integration, real-time chat, and admin analytics. Features include discount codes, flash sales, skeleton loading, and comprehensive order management system.",
      image: "/images/projects/coco-paris.jpg",
      technologies: ["ReactJs", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "Socket.io", "AWS S3", "VNPay", "Bootstrap"],
      demoUrl: "https://cocoparisboutique.com",
      githubUrl: "https://github.com/s2bluemoon01/coco-paris-boutique",
      category: "web",
      featured: true,
      completedAt: new Date("2024-03-15")
    },
    {
      id: "clinic-homepage",
      title: "Medical Clinic Homepage",
      description: "A modern clinic website with content management system for doctors, services, and news management.",
      longDescription: "Developed using Next.js and NestJS with comprehensive admin features including doctor profile management, service administration, news management, and advanced search functionality. Implemented XSS sanitization for security.",
      image: "/images/projects/clinic.jpg",
      technologies: ["NextJs", "TypeScript", "NestJs", "MongoDB", "TailwindCSS", "ChakraUI"],
      demoUrl: "https://phongkhambacsyvanthanh.com",
      githubUrl: "https://github.com/s2bluemoon01/clinic-website",
      category: "web",
      featured: true,
      completedAt: new Date("2024-02-20")
    },
    {
      id: "event-management",
      title: "Event Management System",
      description: "A comprehensive event management application with member management and role-based access control.",
      longDescription: "Final project for Summer Internship Training at USOL. Built with React and Java Spring Boot, featuring JWT authentication, CRUD operations for events, member management, search and filter functionality, and role-based access control.",
      image: "/images/projects/event-management.jpg",
      technologies: ["ReactJs", "Java", "Spring Boot", "PostgreSQL", "JWT", "Bootstrap"],
      githubUrl: "https://github.com/s2bluemoon01/event-management",
      category: "web",
      completedAt: new Date("2023-08-30")
    }
  ],
  vi: [
    {
      id: "coco-paris-boutique",
      title: "Coco Paris Boutique",
      description: "Nền tảng thương mại điện tử với các tính năng toàn diện bao gồm thông báo real-time, tích hợp thanh toán và dashboard quản trị.",
      longDescription: "Xây dựng giải pháp thương mại điện tử hoàn chỉnh với xác thực JWT, thông báo WebSocket, tích hợp thanh toán VNPay, chat real-time và phân tích quản trị. Tính năng bao gồm mã giảm giá, flash sale, skeleton loading và hệ thống quản lý đơn hàng toàn diện.",
      image: "/images/projects/coco-paris.jpg",
      technologies: ["ReactJs", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "Socket.io", "AWS S3", "VNPay", "Bootstrap"],
      demoUrl: "https://cocoparisboutique.com",
      githubUrl: "https://github.com/s2bluemoon01/coco-paris-boutique",
      category: "web",
      featured: true,
      completedAt: new Date("2024-03-15")
    },
    {
      id: "clinic-homepage",
      title: "Trang Chủ Phòng Khám Y Tế",
      description: "Website phòng khám hiện đại với hệ thống quản lý nội dung cho bác sĩ, dịch vụ và quản lý tin tức.",
      longDescription: "Phát triển bằng Next.js và NestJS với các tính năng quản trị toàn diện bao gồm quản lý hồ sơ bác sĩ, quản trị dịch vụ, quản lý tin tức và chức năng tìm kiếm nâng cao. Triển khai XSS sanitization để bảo mật.",
      image: "/images/projects/clinic.jpg",
      technologies: ["NextJs", "TypeScript", "NestJs", "MongoDB", "TailwindCSS", "ChakraUI"],
      demoUrl: "https://phongkhambacsyvanthanh.com",
      githubUrl: "https://github.com/s2bluemoon01/clinic-website",
      category: "web",
      featured: true,
      completedAt: new Date("2024-02-20")
    },
    {
      id: "event-management",
      title: "Hệ Thống Quản Lý Sự Kiện",
      description: "Ứng dụng quản lý sự kiện toàn diện với quản lý thành viên và kiểm soát truy cập dựa trên vai trò.",
      longDescription: "Dự án cuối khóa cho Chương trình Thực tập Mùa hè tại USOL. Xây dựng với React và Java Spring Boot, có tính năng xác thực JWT, các thao tác CRUD cho sự kiện, quản lý thành viên, chức năng tìm kiếm và lọc, và kiểm soát truy cập dựa trên vai trò.",
      image: "/images/projects/event-management.jpg",
      technologies: ["ReactJs", "Java", "Spring Boot", "PostgreSQL", "JWT", "Bootstrap"],
      githubUrl: "https://github.com/s2bluemoon01/event-management",
      category: "web",
      completedAt: new Date("2023-08-30")
    }
  ],
  ja: [
    {
      id: "coco-paris-boutique",
      title: "Coco Paris Boutique",
      description: "リアルタイム通知、決済統合、管理ダッシュボードを含む包括的な機能を持つeコマースプラットフォーム。",
      longDescription: "JWT認証、WebSocket通知、VNPay決済統合、リアルタイムチャット、管理分析を備えた完全なeコマースソリューションを構築。割引コード、フラッシュセール、スケルトンローディング、包括的な注文管理システムなどの機能を含む。",
      image: "/images/projects/coco-paris.jpg",
      technologies: ["ReactJs", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "Socket.io", "AWS S3", "VNPay", "Bootstrap"],
      demoUrl: "https://cocoparisboutique.com",
      githubUrl: "https://github.com/s2bluemoon01/coco-paris-boutique",
      category: "web",
      featured: true,
      completedAt: new Date("2024-03-15")
    },
    {
      id: "clinic-homepage",
      title: "医療クリニックホームページ",
      description: "医師、サービス、ニュース管理のためのコンテンツ管理システムを備えた現代的なクリニックウェブサイト。",
      longDescription: "Next.jsとNestJSを使用して開発し、医師プロフィール管理、サービス管理、ニュース管理、高度な検索機能を含む包括的な管理機能を実装。セキュリティのためにXSSサニタイゼーションを実装。",
      image: "/images/projects/clinic.jpg",
      technologies: ["NextJs", "TypeScript", "NestJs", "MongoDB", "TailwindCSS", "ChakraUI"],
      demoUrl: "https://phongkhambacsyvanthanh.com",
      githubUrl: "https://github.com/s2bluemoon01/clinic-website",
      category: "web",
      featured: true,
      completedAt: new Date("2024-02-20")
    },
    {
      id: "event-management",
      title: "イベント管理システム",
      description: "メンバー管理とロールベースアクセス制御を備えた包括的なイベント管理アプリケーション。",
      longDescription: "USOLでのサマーインターンシップ研修の最終プロジェクト。ReactとJava Spring Bootで構築し、JWT認証、イベントのCRUD操作、メンバー管理、検索・フィルター機能、ロールベースアクセス制御を実装。",
      image: "/images/projects/event-management.jpg",
      technologies: ["ReactJs", "Java", "Spring Boot", "PostgreSQL", "JWT", "Bootstrap"],
      githubUrl: "https://github.com/s2bluemoon01/event-management",
      category: "web",
      completedAt: new Date("2023-08-30")
    }
  ]
}
