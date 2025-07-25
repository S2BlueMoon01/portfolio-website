import { Experience } from '@/types'

export const experiencesData: Record<string, Experience[]> = {
  en: [
    {
      id: "event-platform-developer",
      company: "NTQ Solution",
      position: "Full Stack Developer",
      startDate: new Date("2024-10-01"),
      description: "Currently developing a comprehensive event management platform with advanced features including file exports (PDF, CSV, Excel), CSV import functionality, S3 file storage, event registration system, facility and equipment rentals, and detailed revenue analytics. Utilizing modern AWS serverless architecture with Amplify, GraphQL, DynamoDB, and Lambda functions.",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "TypeScript"],
      location: "Remote",
      type: "contract"
    },
    {
      id: "ai-video-freelance",
      company: "Japanese Company (Freelance)",
      position: "Full Stack Developer",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-10-31"),
      description: "Developed an innovative AI-powered video presentation platform that generates presentations from prompts. The system supports document uploads (PDF, PPTX, TXT) and creates engaging presentation videos with customizable voice synthesis, dynamic avatars, character creation, background audio integration, and comprehensive content editing capabilities.",
      technologies: ["ReactJs", "NextJs", "TypeScript", "Node.js", "AI/ML APIs", "Video Processing", "Text-to-Speech", "Avatar Generation", "PDF Processing"],
      location: "Remote",
      type: "freelance"
    },
    {
      id: "fullstack-dev-bwai",
      company: "Bwai Tech",
      position: "Fullstack Developer",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-04-30"),
      description: "Employed at BwaiTech, a startup focusing on web development. Contributed to diverse projects including building an e-commerce platform for Coco Paris Boutique and crafting a homepage for a medical clinic. Acquired practical skills in deploying websites, managing VPS, configuring Ubuntu servers, and implementing server technologies like Nginx, PM2, HTTPS, SSL.",
      technologies: ["ReactJs", "NextJs", "NestJs", "TypeScript", "MongoDB", "TailwindCSS", "VPS", "Nginx", "PM2"],
      location: "Vietnam",
      type: "full-time"
    },
    {
      id: "intern-usol",
      company: "USOL Vietnam", 
      position: "Summer Internship Training",
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-08-31"),
      description: "Received comprehensive training in various aspects of software development, including security practices, Horenso communication system, code refactoring, database management, web development (HTML/CSS/JavaScript), ReactJS, development processes, testing techniques, quality management, and practical exercises in ReactJS and RESTful API development.",
      technologies: ["ReactJs", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "PostgreSQL", "JWT"],
      location: "Vietnam",
      type: "internship"
    }
  ],
  vi: [
    {
      id: "event-platform-developer",
      company: "NTQ Solution",
      position: "Nhà Phát Triển Full Stack",
      startDate: new Date("2024-10-01"),
      description: "Hiện đang phát triển nền tảng quản lý sự kiện toàn diện với các tính năng nâng cao bao gồm xuất file (PDF, CSV, Excel), import CSV, lưu trữ file trên S3, hệ thống đăng ký sự kiện, thuê cơ sở vật chất và thiết bị, cùng phân tích doanh thu chi tiết. Sử dụng kiến trúc serverless AWS hiện đại với Amplify, GraphQL, DynamoDB và Lambda functions.",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "TypeScript"],
      location: "Remote",
      type: "contract"
    },
    {
      id: "ai-video-freelance",
      company: "Công Ty Nhật Bản (Freelance)",
      position: "Nhà Phát Triển Full Stack",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-10-31"),
      description: "Phát triển nền tảng thuyết trình video AI tiên tiến tạo bài thuyết trình từ prompt. Hệ thống hỗ trợ upload tài liệu (PDF, PPTX, TXT) và tạo video thuyết trình hấp dẫn với khả năng tùy chỉnh giọng nói, avatar động, tạo nhân vật, tích hợp âm thanh nền và chỉnh sửa nội dung toàn diện.",
      technologies: ["ReactJs", "NextJs", "TypeScript", "Node.js", "AI/ML APIs", "Video Processing", "Text-to-Speech", "Avatar Generation", "PDF Processing"],
      location: "Remote",
      type: "freelance"
    },
    {
      id: "fullstack-dev-bwai",
      company: "Bwai Tech",
      position: "Nhà Phát Triển Fullstack",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-04-30"),
      description: "Làm việc tại BwaiTech, một startup chuyên về phát triển web. Đóng góp vào các dự án đa dạng bao gồm xây dựng nền tảng thương mại điện tử cho Coco Paris Boutique và tạo trang chủ cho phòng khám y tế. Có được kỹ năng thực tế trong việc triển khai website, quản lý VPS, cấu hình máy chủ Ubuntu và triển khai các công nghệ máy chủ như Nginx, PM2, HTTPS, SSL.",
      technologies: ["ReactJs", "NextJs", "NestJs", "TypeScript", "MongoDB", "TailwindCSS", "VPS", "Nginx", "PM2"],
      location: "Việt Nam",
      type: "full-time"
    },
    {
      id: "intern-usol",
      company: "USOL Vietnam",
      position: "Thực Tập Sinh Mùa Hè",
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-08-31"),
      description: "Nhận được đào tạo toàn diện về các khía cạnh khác nhau của phát triển phần mềm, bao gồm thực hành bảo mật, hệ thống giao tiếp Horenso, tái cấu trúc mã, quản lý cơ sở dữ liệu, phát triển web (HTML/CSS/JavaScript), ReactJS, quy trình phát triển, kỹ thuật kiểm thử, quản lý chất lượng và các bài tập thực hành về ReactJS và phát triển RESTful API.",
      technologies: ["ReactJs", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "PostgreSQL", "JWT"],
      location: "Việt Nam",
      type: "internship"
    }
  ],
  ja: [
    {
      id: "event-platform-developer",
      company: "NTQ Solution",
      position: "フルスタック開発者",
      startDate: new Date("2024-10-01"),
      description: "現在、ファイルエクスポート（PDF、CSV、Excel）、CSV インポート機能、S3ファイルストレージ、イベント登録システム、施設・機器レンタル、詳細な収益分析などの高度な機能を備えた包括的なイベント管理プラットフォームを開発中。Amplify、GraphQL、DynamoDB、Lambda関数を使用した最新のAWSサーバーレスアーキテクチャを活用。",
      technologies: ["ReactJs", "AWS Amplify", "GraphQL", "DynamoDB", "AppSync", "S3", "Cognito", "Lambda", "TypeScript"],
      location: "リモート",
      type: "contract"
    },
    {
      id: "ai-video-freelance",
      company: "日本企業（フリーランス）",
      position: "フルスタック開発者",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-10-31"),
      description: "プロンプトからプレゼンテーションを生成する革新的なAI動画プレゼンテーションプラットフォームを開発。システムはドキュメントアップロード（PDF、PPTX、TXT）をサポートし、カスタマイズ可能な音声合成、動的アバター、キャラクター作成、背景音声統合、包括的なコンテンツ編集機能を備えた魅力的なプレゼンテーション動画を作成。",
      technologies: ["ReactJs", "NextJs", "TypeScript", "Node.js", "AI/ML APIs", "Video Processing", "Text-to-Speech", "Avatar Generation", "PDF Processing"],
      location: "リモート",
      type: "freelance"
    },
    {
      id: "fullstack-dev-bwai",
      company: "Bwai Tech",
      position: "フルスタック開発者",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-04-30"),
      description: "Web開発に特化したスタートアップBwaiTechで勤務。Coco Paris Boutiqueのeコマースプラットフォーム構築や医療クリニックのホームページ作成など、多様なプロジェクトに貢献。Webサイトの展開、VPS管理、Ubuntuサーバーの設定、Nginx、PM2、HTTPS、SSLなどのサーバー技術の実装において実践的なスキルを習得。",
      technologies: ["ReactJs", "NextJs", "NestJs", "TypeScript", "MongoDB", "TailwindCSS", "VPS", "Nginx", "PM2"],
      location: "ベトナム",
      type: "full-time"
    },
    {
      id: "intern-usol",
      company: "USOL Vietnam",
      position: "サマーインターンシップ研修",
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-08-31"),
      description: "セキュリティプラクティス、Horensoコミュニケーションシステム、コードリファクタリング、データベース管理、Web開発（HTML/CSS/JavaScript）、ReactJS、開発プロセス、テスト技術、品質管理、ReactJSとRESTful API開発の実習など、ソフトウェア開発の様々な側面について包括的な研修を受けました。",
      technologies: ["ReactJs", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "PostgreSQL", "JWT"],
      location: "ベトナム",
      type: "internship"
    }
  ]
}
