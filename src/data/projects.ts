import { Project } from '@/types'

export const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with modern UI/UX, payment integration, and admin dashboard.",
      longDescription: "Built with Next.js, TypeScript, Prisma, and Stripe. Features include user authentication, product management, shopping cart, payment processing, order tracking, and comprehensive admin panel.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoUrl: "https://demo-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "web",
      featured: true,
      completedAt: new Date("2024-01-15")
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      longDescription: "Developed using React, Node.js, Socket.io, and MongoDB. Includes features like drag-and-drop task boards, real-time collaboration, file attachments, and time tracking.",
      image: "/images/projects/task-manager.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      demoUrl: "https://demo-taskmanager.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      category: "web",
      featured: true,
      completedAt: new Date("2023-11-20")
    },
    {
      id: "weather-app",
      title: "Weather Forecast App",
      description: "A beautiful weather application with detailed forecasts and location-based services.",
      image: "/images/projects/weather.jpg",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
      demoUrl: "https://expo.dev/@yourusername/weather-app",
      githubUrl: "https://github.com/yourusername/weather-app",
      category: "mobile",
      completedAt: new Date("2023-09-10")
    }
  ],
  vi: [
    {
      id: "ecommerce-platform",
      title: "Nền Tảng Thương Mại Điện Tử",
      description: "Nền tảng thương mại điện tử full-stack với UI/UX hiện đại, tích hợp thanh toán và dashboard quản trị.",
      longDescription: "Được xây dựng với Next.js, TypeScript, Prisma và Stripe. Tính năng bao gồm xác thực người dùng, quản lý sản phẩm, giỏ hàng, xử lý thanh toán, theo dõi đơn hàng và bảng điều khiển quản trị toàn diện.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoUrl: "https://demo-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "web",
      featured: true,
      completedAt: new Date("2024-01-15")
    },
    {
      id: "task-management-app",
      title: "Ứng Dụng Quản Lý Công Việc",
      description: "Ứng dụng quản lý công việc cộng tác với cập nhật thời gian thực và tính năng hợp tác nhóm.",
      longDescription: "Được phát triển bằng React, Node.js, Socket.io và MongoDB. Bao gồm các tính năng như bảng công việc kéo thả, hợp tác thời gian thực, đính kèm tệp và theo dõi thời gian.",
      image: "/images/projects/task-manager.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      demoUrl: "https://demo-taskmanager.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      category: "web",
      featured: true,
      completedAt: new Date("2023-11-20")
    },
    {
      id: "weather-app",
      title: "Ứng Dụng Dự Báo Thời Tiết",
      description: "Ứng dụng thời tiết đẹp với dự báo chi tiết và dịch vụ dựa trên vị trí.",
      image: "/images/projects/weather.jpg",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
      demoUrl: "https://expo.dev/@yourusername/weather-app",
      githubUrl: "https://github.com/yourusername/weather-app",
      category: "mobile",
      completedAt: new Date("2023-09-10")
    }
  ],
  ja: [
    {
      id: "ecommerce-platform",
      title: "Eコマースプラットフォーム",
      description: "モダンなUI/UX、決済統合、管理ダッシュボードを備えたフルスタックEコマースプラットフォーム。",
      longDescription: "Next.js、TypeScript、Prisma、Stripeで構築。ユーザー認証、商品管理、ショッピングカート、決済処理、注文追跡、包括的な管理パネルなどの機能を含みます。",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoUrl: "https://demo-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "web",
      featured: true,
      completedAt: new Date("2024-01-15")
    },
    {
      id: "task-management-app",
      title: "タスク管理アプリ",
      description: "リアルタイム更新とチームコラボレーション機能を備えた協調的タスク管理アプリケーション。",
      longDescription: "React、Node.js、Socket.io、MongoDBを使用して開発。ドラッグ＆ドロップタスクボード、リアルタイムコラボレーション、ファイル添付、時間追跡などの機能を含みます。",
      image: "/images/projects/task-manager.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      demoUrl: "https://demo-taskmanager.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      category: "web",
      featured: true,
      completedAt: new Date("2023-11-20")
    },
    {
      id: "weather-app",
      title: "天気予報アプリ",
      description: "詳細な予報と位置ベースサービスを備えた美しい天気アプリケーション。",
      image: "/images/projects/weather.jpg",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
      demoUrl: "https://expo.dev/@yourusername/weather-app",
      githubUrl: "https://github.com/yourusername/weather-app",
      category: "mobile",
      completedAt: new Date("2023-09-10")
    }
  ]
}
