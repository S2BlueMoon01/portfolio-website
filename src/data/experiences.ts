import { Experience } from '@/types'

export const experiencesData: Record<string, Experience[]> = {
  en: [
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
