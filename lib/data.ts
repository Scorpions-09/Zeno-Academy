// News data
export interface NewsItem {
  id: string
  title: string
  summary: string
  content: string
  image: string
  date: string
  author: string
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Zeno Academy Launches New Computer Science Program",
    summary: "The university introduces a cutting-edge computer science program designed to meet industry demands.",
    content: `
      <p>Zeno Academy is proud to announce the launch of our new Computer Science program, designed to prepare students for the rapidly evolving technology landscape. The program will focus on artificial intelligence, machine learning, and data science, areas that are in high demand in today's job market.</p>
      
      <p>The curriculum has been developed in collaboration with industry leaders to ensure that graduates are equipped with the skills and knowledge needed to succeed in the field. Students will have access to state-of-the-art facilities and will be mentored by experienced faculty members who are experts in their respective domains.</p>
      
      <p>"Our goal is to bridge the gap between academic learning and industry requirements," said Dr. Aibek Karimov, Dean of the Computer Science Department. "We believe that this program will not only enhance the employability of our graduates but also contribute to the technological advancement of our country."</p>
      
      <p>Applications for the program are now open, and classes will commence in the fall semester. Scholarships are available for outstanding students.</p>
    `,
    image: "/news-default11.svg?height=400&width=600",
    date: "2023-12-15",
    author: "Dr. Aibek Karimov",
  },
  {
    id: "2",
    title: "Zeno Academy Hosts International Academic Conference",
    summary: "Leading scholars from around the world gathered to discuss advancements in various academic fields.",
    content: `
      <p>Zeno Academy recently hosted the International Conference on Academic Excellence (ICAE), bringing together scholars, researchers, and educators from over 30 countries. The three-day event featured keynote speeches, panel discussions, and workshops on a wide range of topics, from sustainable development to digital transformation in education.</p>
      
      <p>The conference provided a platform for participants to share their research findings, exchange ideas, and establish collaborative networks. Notable speakers included Professor Maria Rodriguez from Stanford University, who presented her groundbreaking research on climate change mitigation strategies, and Dr. Hiroshi Tanaka from Tokyo University, who discussed the implications of artificial intelligence for future generations.</p>
      
      <p>"The diversity of perspectives and the quality of discussions at the conference were truly inspiring," said Professor Gulnara Ismailova, the conference chair. "We are grateful to all the participants for their valuable contributions and look forward to seeing the collaborative projects that will emerge from this gathering."</p>
      
      <p>The proceedings of the conference will be published in a special edition of the Zeno Academy Journal of Interdisciplinary Studies, which will be available online and in print by the end of the year.</p>
    `,
    image: "/news-default22.svg?height=400&width=600",
    date: "2023-11-20",
    author: "Professor Gulnara Ismailova",
  },
  {
    id: "3",
    title: "Zeno Academy Students Win National Innovation Competition",
    summary: "A team of undergraduate students developed an award-winning solution for sustainable agriculture.",
    content: `
      <p>A team of undergraduate students from Zeno Academy has won the National Innovation Competition with their project on sustainable agriculture. The team, consisting of Azamat Bakiev, Dinara Suleimanova, and Ermek Tashmatov, developed a smart irrigation system that uses sensors and artificial intelligence to optimize water usage in agricultural settings.</p>
      
      <p>The project, named "AquaSmart," impressed the judges with its innovative approach to addressing water scarcity, a pressing issue in many regions of the country. The system can reduce water consumption by up to 40% while maintaining or even improving crop yields.</p>
      
      <p>"We are thrilled to receive this recognition for our work," said Azamat Bakiev, the team leader. "Our goal was to create a solution that is not only technologically advanced but also accessible to farmers with limited resources. We believe that AquaSmart has the potential to make a significant impact on sustainable agriculture practices."</p>
      
      <p>The team will receive a grant of $10,000 to further develop their project and will have the opportunity to present their work at the International Agricultural Technology Expo in Berlin next year.</p>
      
      <p>Dr. Nurlan Orozov, the faculty advisor for the team, expressed his pride in the students' achievement. "This success is a testament to the quality of education and the innovative spirit that we foster at Zeno Academy. We are committed to supporting our students in their endeavors to create solutions for real-world problems."</p>
    `,
    image: "/news-default33.svg?height=400&width=600",
    date: "2023-10-05",
    author: "Dr. Nurlan Orozov",
  },
]

// Faculty data
export interface FacultyMember {
  id: string
  name: string
  title: string
  department: string
  bio: string
  image: string
}

export const facultyData: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. Aibek Karimov",
    title: "Dean of Computer Science",
    department: "Computer Science",
    bio: "Dr. Karimov has over 15 years of experience in computer science research and education. He specializes in artificial intelligence and machine learning, with a focus on natural language processing. Before joining Zeno Academy, he worked at leading tech companies and research institutions in Europe and the United States.",
    image: "/news-default1.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Professor Gulnara Ismailova",
    title: "Chair of International Relations",
    department: "Political Science",
    bio: "Professor Ismailova is an expert in international relations with a focus on Central Asian geopolitics. She has published numerous articles and books on regional security, economic cooperation, and diplomatic relations. She regularly consults for international organizations and government agencies on policy matters.",
    image: "/news-default2.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Dr. Nurlan Orozov",
    title: "Associate Professor",
    department: "Engineering",
    bio: "Dr. Orozov specializes in sustainable engineering solutions for developing regions. His research focuses on renewable energy systems, water resource management, and appropriate technology. He has led several international research projects and has been recognized for his contributions to engineering education.",
    image: "/news-default3.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Dr. Elmira Abdyldaeva",
    title: "Head Librarian",
    department: "Library Sciences",
    bio: "Dr. Abdyldaeva is a specialist in library science and information management. She has played a key role in modernizing the university's library system and expanding its digital resources. Her research interests include digital preservation, information literacy, and the history of books and manuscripts in Central Asia.",
    image: "/news-default4.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Professor Marat Dzhumaliev",
    title: "Professor of Economics",
    department: "Economics",
    bio: "Professor Dzhumaliev is a renowned economist with expertise in development economics and economic policy. He has served as an advisor to various government agencies and international organizations. His research focuses on economic transition, poverty reduction, and sustainable development in post-Soviet countries.",
    image: "/news-default5.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Dr. Ainura Sultanbekova",
    title: "Associate Professor",
    department: "Medicine",
    bio: "Dr. Sultanbekova is a medical researcher and educator specializing in public health and epidemiology. She has conducted extensive research on infectious diseases and preventive healthcare in rural communities. She is actively involved in community outreach programs and health education initiatives.",
    image: "/news-default6.svg?height=300&width=300",
  },
]

// University statistics
export interface UniversityStats {
  students: number
  faculty: number
  programs: number
  research: number
  international: number
  alumni: number
}

export const universityStats: UniversityStats = {
  students: 5000,
  faculty: 350,
  programs: 75,
  research: 120,
  international: 800,
  alumni: 25000,
}

// Admission requirements
export interface AdmissionRequirement {
  program: string
  requirements: string[]
  deadlines: {
    fall: string
    spring: string
  }
}

export const admissionRequirements: AdmissionRequirement[] = [
  {
    program: "Undergraduate Programs",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 3.0 on a 4.0 scale",
      "Standardized test scores (SAT or ACT)",
      "English proficiency test scores (TOEFL or IELTS) for international students",
      "Personal statement",
      "Two letters of recommendation",
    ],
    deadlines: {
      fall: "April 15",
      spring: "November 1",
    },
  },
  {
    program: "Graduate Programs",
    requirements: [
      "Bachelor's degree from an accredited institution",
      "Minimum GPA of 3.2 on a 4.0 scale",
      "GRE or GMAT scores (depending on the program)",
      "English proficiency test scores (TOEFL or IELTS) for international students",
      "Statement of purpose",
      "Three letters of recommendation",
      "Resume or curriculum vitae",
    ],
    deadlines: {
      fall: "March 1",
      spring: "October 15",
    },
  },
  {
    program: "International Students",
    requirements: [
      "Academic credentials equivalent to U.S. standards",
      "English proficiency test scores (minimum TOEFL score of 90 or IELTS score of 6.5)",
      "Financial documentation showing ability to cover tuition and living expenses",
      "Copy of passport",
      "Visa application materials (after acceptance)",
    ],
    deadlines: {
      fall: "February 15",
      spring: "September 15",
    },
  },
]
