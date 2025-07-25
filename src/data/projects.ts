import { Project } from '@/types'

export const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: "event-management-system",
      title: "Event Management Platform",
      description: "A comprehensive event management system with file exports, facility rentals, and revenue analytics using AWS Amplify and GraphQL.",
      longDescription: "Currently developing a complete event management platform with export capabilities (PDF, CSV, Excel), CSV import functionality, S3 file storage, event registration system, meeting room and equipment rentals, and comprehensive revenue analytics. Built with modern AWS serverless architecture.",
      image: "/images/projects/event-platform.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "JavaScript"],
      category: "web",
      featured: true,
      inProgress: true,
      startedAt: new Date("2024-10-01")
    },
    {
      id: "gym-booking-system",
      title: "Gym Equipment Booking System",
      description: "A booking platform for gym equipment with real-time availability tracking and user management.",
      longDescription: "Developed a booking system that allows users to reserve gym equipment with real-time availability updates, user authentication, booking history, and admin management features. Implemented efficient scheduling algorithms and notification system.",
      image: "/images/projects/gym-booking.jpg", 
      technologies: ["ReactJs", "DynamoDB", "NodeJs", "JWT"],
      githubUrl: "https://github.com/s2bluemoon01/gym-booking",
      category: "web",
      featured: true,
      completedAt: new Date("2024-08-15")
    },
    {
      id: "ai-video-freelance",
      title: "AI Video Presentation Generator",
      description: "AI-powered platform for generating presentation videos from documents with customizable avatars and voice options.",
      longDescription: "Freelance project for a Japanese company developing an AI video generation system. Users can upload PDF, PPTX, or TXT files to create presentation videos with AI-generated content. Features include customizable voice selection, avatar creation, background music integration, and content editing capabilities.",
      image: "/images/projects/ai-video.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "Cognito", "JavaScript", "AI/ML"],
      category: "web",
      featured: true,
      completedAt: new Date("2024-10-01")
    },
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
      id: "event-management-system",
      title: "Hệ Thống Quản Lý Sự Kiện",
      description: "Nền tảng quản lý sự kiện toàn diện với xuất file, thuê cơ sở vật chất và phân tích doanh thu sử dụng AWS Amplify và GraphQL.",
      longDescription: "Hiện đang phát triển nền tảng quản lý sự kiện hoàn chỉnh với khả năng xuất file (PDF, CSV, Excel), import CSV, lưu trữ file trên S3, đăng ký sự kiện, thuê phòng họp và thiết bị, cùng phân tích doanh thu toàn diện. Xây dựng với kiến trúc serverless AWS hiện đại.",
      image: "/images/projects/event-platform.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "JavaScript"],
      category: "web",
      featured: true,
      inProgress: true,
      startedAt: new Date("2024-10-01")
    },
    {
      id: "gym-booking-system",
      title: "Hệ Thống Booking Máy Tập",
      description: "Nền tảng đặt lịch máy tập với theo dõi tình trạng real-time và quản lý người dùng.",
      longDescription: "Phát triển hệ thống booking cho phép người dùng đặt lịch máy tập với cập nhật tình trạng real-time, xác thực người dùng, lịch sử đặt lịch và tính năng quản trị. Triển khai thuật toán lập lịch hiệu quả và hệ thống thông báo.",
      image: "/images/projects/gym-booking.jpg",
      technologies: ["ReactJs", "DynamoDB", "NodeJs", "JWT"],
      githubUrl: "https://github.com/s2bluemoon01/gym-booking",
      category: "web",
      featured: true,
      completedAt: new Date("2024-08-15")
    },
    {
      id: "ai-video-freelance",
      title: "Hệ Thống Tạo Video Thuyết Trình AI",
      description: "Nền tảng AI tạo video thuyết trình từ tài liệu với tùy chọn avatar và giọng nói có thể tùy chỉnh.",
      longDescription: "Dự án freelance cho công ty Nhật Bản phát triển hệ thống tạo video AI. Người dùng có thể upload file PDF, PPTX, TXT để tạo video thuyết trình với nội dung được AI tạo ra. Tính năng bao gồm lựa chọn giọng nói tùy chỉnh, tạo avatar, tích hợp âm nhạc nền và khả năng chỉnh sửa nội dung.",
      image: "/images/projects/ai-video.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "Cognito", "JavaScript", "AI/ML"],
      category: "web",
      featured: true,
      completedAt: new Date("2024-10-01")
    },
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
      id: "event-management-system",
      title: "イベント管理プラットフォーム",
      description: "AWS AmplifyとGraphQLを使用したファイルエクスポート、施設レンタル、収益分析機能を備えた包括的なイベント管理システム。",
      longDescription: "現在、エクスポート機能（PDF、CSV、Excel）、CSV インポート機能、S3ファイルストレージ、イベント登録システム、会議室および機器レンタル、包括的な収益分析を備えた完全なイベント管理プラットフォームを開発中。最新のAWSサーバーレスアーキテクチャで構築。",
      image: "/images/projects/event-platform.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "JavaScript"],
      category: "web",
      featured: true,
      inProgress: true,
      startedAt: new Date("2024-10-01")
    },
    {
      id: "gym-booking-system", 
      title: "ジム機器予約システム",
      description: "リアルタイム空き状況追跡とユーザー管理機能を備えたジム機器の予約プラットフォーム。",
      longDescription: "ユーザーがジム機器を予約できるシステムを開発。リアルタイム空き状況更新、ユーザー認証、予約履歴、管理機能を実装。効率的なスケジューリングアルゴリズムと通知システムを実装。",
      image: "/images/projects/gym-booking.jpg",
      technologies: ["ReactJs", "DynamoDB", "NodeJs", "JWT"],
      githubUrl: "https://github.com/s2bluemoon01/gym-booking",
      category: "web",
      featured: true,
      completedAt: new Date("2024-08-15")
    },
    {
      id: "ai-video-freelance",
      title: "AIビデオプレゼンテーション生成システム",
      description: "カスタマイズ可能なアバターと音声オプションを備えた、ドキュメントからプレゼンテーションビデオを生成するAIプラットフォーム。",
      longDescription: "日本企業向けのフリーランスプロジェクトでAIビデオ生成システムを開発。ユーザーはPDF、PPTX、TXTファイルをアップロードしてAI生成コンテンツでプレゼンテーションビデオを作成可能。カスタマイズ可能な音声選択、アバター作成、背景音楽統合、コンテンツ編集機能を含む。",
      image: "/images/projects/ai-video.jpg",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "Cognito", "JavaScript", "AI/ML"],
      category: "web",
      featured: true,
      completedAt: new Date("2024-10-01")
    },
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
