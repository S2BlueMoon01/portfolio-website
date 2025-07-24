import { Experience } from '@/types'

export const experiencesData: Record<string, Experience[]> = {
  en: [
    {
      id: "senior-frontend-dev",
      company: "Tech Company ABC",
      position: "Senior Frontend Developer",
      startDate: new Date("2022-03-01"),
      description: "Led the development of modern web applications using React, Next.js, and TypeScript. Mentored junior developers and improved application performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      location: "Ho Chi Minh City, Vietnam",
      type: "full-time"
    },
    {
      id: "fullstack-dev",
      company: "Startup XYZ",
      position: "Full Stack Developer",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2022-02-28"),
      description: "Developed and maintained multiple client projects using various technologies. Built REST APIs, integrated third-party services, and implemented responsive designs.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "AWS"],
      location: "Remote",
      type: "full-time"
    },
    {
      id: "frontend-intern",
      company: "Digital Agency DEF",
      position: "Frontend Developer Intern",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2020-05-31"),
      description: "Assisted in developing client websites and landing pages. Learned modern frontend technologies and best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      location: "Ho Chi Minh City, Vietnam",
      type: "internship"
    }
  ],
  vi: [
    {
      id: "senior-frontend-dev",
      company: "Công Ty Công Nghệ ABC",
      position: "Nhà Phát Triển Frontend Cao Cấp",
      startDate: new Date("2022-03-01"),
      description: "Dẫn dắt phát triển các ứng dụng web hiện đại sử dụng React, Next.js và TypeScript. Hướng dẫn các lập trình viên junior và cải thiện hiệu suất ứng dụng 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      type: "full-time"
    },
    {
      id: "fullstack-dev",
      company: "Startup XYZ",
      position: "Nhà Phát Triển Full Stack",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2022-02-28"),
      description: "Phát triển và bảo trì nhiều dự án khách hàng sử dụng các công nghệ đa dạng. Xây dựng REST API, tích hợp dịch vụ bên thứ ba và triển khai thiết kế responsive.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "AWS"],
      location: "Từ xa",
      type: "full-time"
    },
    {
      id: "frontend-intern",
      company: "Công Ty Digital DEF",
      position: "Thực Tập Sinh Phát Triển Frontend",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2020-05-31"),
      description: "Hỗ trợ phát triển các trang web và landing page cho khách hàng. Học các công nghệ frontend hiện đại và thực hành tốt nhất.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      type: "internship"
    }
  ],
  ja: [
    {
      id: "senior-frontend-dev",
      company: "テック株式会社ABC",
      position: "シニアフロントエンド開発者",
      startDate: new Date("2022-03-01"),
      description: "React、Next.js、TypeScriptを使用した現代的なWebアプリケーションの開発をリード。ジュニア開発者の指導を行い、アプリケーションのパフォーマンスを40%向上させました。",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      location: "ホーチミン市、ベトナム",
      type: "full-time"
    },
    {
      id: "fullstack-dev",
      company: "スタートアップXYZ",
      position: "フルスタック開発者",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2022-02-28"),
      description: "様々な技術を使用して複数のクライアントプロジェクトを開発・保守。REST APIの構築、サードパーティサービスの統合、レスポンシブデザインの実装を行いました。",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "AWS"],
      location: "リモート",
      type: "full-time"
    },
    {
      id: "frontend-intern",
      company: "デジタルエージェンシーDEF",
      position: "フロントエンド開発インターン",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2020-05-31"),
      description: "クライアントのウェブサイトやランディングページの開発を支援。現代的なフロントエンド技術とベストプラクティスを学習しました。",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      location: "ホーチミン市、ベトナム",
      type: "internship"
    }
  ]
}
