import { Education } from '@/types'

export const educationData: Record<string, Education[]> = {
  en: [
    {
      id: "computer-science",
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: new Date("2016-09-01"),
      endDate: new Date("2020-06-30"),
      gpa: 3.8,
      description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      location: "Ho Chi Minh City, Vietnam"
    }
  ],
  vi: [
    {
      id: "computer-science",
      institution: "Đại Học Công Nghệ",
      degree: "Cử Nhân Khoa Học",
      field: "Khoa Học Máy Tính",
      startDate: new Date("2016-09-01"),
      endDate: new Date("2020-06-30"),
      gpa: 3.8,
      description: "Tập trung vào kỹ thuật phần mềm, thuật toán và cấu trúc dữ liệu. Tốt nghiệp loại xuất sắc.",
      location: "Thành phố Hồ Chí Minh, Việt Nam"
    }
  ],
  ja: [
    {
      id: "computer-science",
      institution: "工科大学",
      degree: "理学士",
      field: "コンピュータサイエンス",
      startDate: new Date("2016-09-01"),
      endDate: new Date("2020-06-30"),
      gpa: 3.8,
      description: "ソフトウェアエンジニアリング、アルゴリズム、データ構造に焦点を当てて学習。優秀な成績で卒業。",
      location: "ホーチミン市、ベトナム"
    }
  ]
}
