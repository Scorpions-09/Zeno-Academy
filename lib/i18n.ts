type Language = 'en' | 'zh'

type Translations = {
  [key in Language]: {
    nav: {
      home: string
      news: string
      admissions: string
      about: string
      applyNow: string
    }
    hero: {
      title: string
      subtitle: string
      description: string
      applyNow: string
      learnMore: string
    }
    mission: {
      title: string
      description: string
    }
    values: {
      title: string
      excellence: {
        title: string
        description: string
      }
      integrity: {
        title: string
        description: string
      }
      innovation: {
        title: string
        description: string
      }
    }
    news: {
      title: string
      description: string
      readMore: string
      viewAll: string
    }
    cta: {
      title: string
      description: string
    }
  }
}

export const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      news: 'News',
      admissions: 'Admissions',
      about: 'About Us',
      applyNow: 'Apply Now'
    },
    hero: {
      title: 'Welcome to Zeno Academy',
      subtitle: 'Зено академиясы',
      description: 'Empowering minds through education and innovation. We are dedicated to fostering intellectual growth, critical thinking, and a commitment to excellence in all our academic pursuits.',
      applyNow: 'Apply Now',
      learnMore: 'Learn More'
    },
    mission: {
      title: 'Our Mission',
      description: 'At Zeno Academy, we are committed to providing a transformative educational experience that prepares students to be leaders, innovators, and responsible global citizens.'
    },
    values: {
      title: 'Our Core Values',
      excellence: {
        title: 'Excellence',
        description: 'We strive for excellence in all our endeavors, from academic programs to research initiatives and community service.'
      },
      integrity: {
        title: 'Integrity',
        description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.'
      },
      innovation: {
        title: 'Innovation',
        description: 'We foster a culture of creativity, critical thinking, and innovation to address the challenges of our time.'
      }
    },
    news: {
      title: 'Latest News',
      description: 'Stay updated with the latest happenings, events, and announcements from Zeno Academy.',
      readMore: 'Read More',
      viewAll: 'View All News'
    },
    cta: {
      title: 'Begin Your Journey',
      description: 'Take the first step towards a transformative educational experience at Zeno Academy.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      news: '新闻',
      admissions: '招生',
      about: '关于我们',
      applyNow: '立即申请'
    },
    hero: {
      title: '欢迎来到泽诺学院',
      subtitle: 'Зено академиясы',
      description: '通过教育和创新赋能思维。我们致力于在所有学术追求中培养智力成长、批判性思维和追求卓越的精神。',
      applyNow: '立即申请',
      learnMore: '了解更多'
    },
    mission: {
      title: '我们的使命',
      description: '在泽诺学院，我们致力于提供变革性的教育体验，培养学生成为领导者、创新者和负责任的全球公民。'
    },
    values: {
      title: '核心价值观',
      excellence: {
        title: '卓越',
        description: '我们在所有工作中追求卓越，从学术项目到研究计划和社区服务。'
      },
      integrity: {
        title: '诚信',
        description: '我们在所有互动中坚持最高标准的诚实、透明和道德行为。'
      },
      innovation: {
        title: '创新',
        description: '我们培养创造力、批判性思维和创新文化，以应对时代的挑战。'
      }
    },
    news: {
      title: '最新消息',
      description: '及时了解泽诺学院的最新动态、活动和公告。',
      readMore: '阅读更多',
      viewAll: '查看所有新闻'
    },
    cta: {
      title: '开启您的旅程',
      description: '迈出在泽诺学院获得变革性教育体验的第一步。'
    }
  }
}