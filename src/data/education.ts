import { Education } from '@/types'

export const educationData: Record<string, Education[]> = {
  en: [
    {
      id: "information-technology",
      institution: "ThuyLoi University",
      degree: "Bachelor of Information Technology Engineering",
      field: "Information Security",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2024-06-30"),
      gpa: 3.1,
      description: "Focused on information security, software engineering, and web development. Achieved multiple scholarships during academic years.",
      location: "Ha Noi, Vietnam"
    }
  ],
  vi: [
    {
      id: "information-technology",
      institution: "Đại Học Thủy Lợi",
      degree: "Cử Nhân Kỹ Thuật Công Nghệ Thông Tin",
      field: "An Toàn Thông Tin",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2024-06-30"),
      gpa: 3.1,
      description: "Tập trung vào an toàn thông tin, kỹ thuật phần mềm và phát triển web. Đạt được nhiều học bổng trong các năm học.",
      location: "Hà Nội, Việt Nam"
    }
  ],
  ja: [
    {
      id: "information-technology",
      institution: "トゥイロイ大学",
      degree: "情報技術工学学士",
      field: "情報セキュリティ",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2024-06-30"),
      gpa: 3.1,
      description: "情報セキュリティ、ソフトウェア工学、ウェブ開発に焦点を当てて学習。学業期間中に複数の奨学金を獲得。",
      location: "ハノイ、ベトナム"
    }
  ]
}
