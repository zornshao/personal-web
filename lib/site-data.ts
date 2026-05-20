export const SITE_DATA = {
  personalInfo: {
    name: { zh: "邵卓仁", en: "Zhuoren Shao" },
    title: { zh: "博士研究员 / 数字化转型顾问", en: "Doctoral Researcher / Digital Transformation Consultant" },
    bio: {
      zh: "我致力于探究规范、技术与个体之间的三角互动关系。在攻读法学博士与社会学博士学位之前，我于中国和意大利完成了新闻传播学学士、法学学士及法学硕士的学术训练。目前的研究兴趣聚焦于法律社会学、知识产权法、数字政策与规制。基于在基础教育行业十年的创业与实践积淀，我也深切关注教育社会学相关议题。此前，我曾担任清华大学智能法治研究院研究助理，并在《21世纪经济报道》及意大利 Di Donna、Libutti Trotta 等律师事务所从事研究工作。此外，我积极投身于社会实践，曾发起'美丽乡村青年笔记'及'凉山青年书架'等公益项目，并担任《头号地标》及《澎湃新闻》等媒体平台的专栏主编与撰稿人。",
      en: "My intellectual pursuits revolve around the triadic interaction between norms, technology, and individuals. Prior to pursuing my doctoral research in Law and Sociology, I received multi-disciplinary training in China and Italy, earning a B.A. in Journalism and Communication, as well as an LL.B. and an LL.M. My current research focuses on the sociology of law, intellectual property, and digital policy and regulation. Drawing upon a decade of entrepreneurial and professional practice in basic education, I also maintain a strong research interest in the sociology of education. My professional trajectory includes research roles at the Institute for AI and Law at Tsinghua University, the 21st Century Business Herald, and Italian law firms such as Di Donna and Libutti Trotta. Committed to social engagement, I have served as a youth convener for public welfare projects including 'Rural Youth Notes' and 'Liangshan Youth Bookshelf,' and as a regular contributor and columnist for prominent media platforms such as 'The Landmark' and 'The Paper.'"
    },
    affiliations: [
      { zh: "厦门大学法学院", en: "School of Law, Xiamen University" },
      { zh: "香港理工大学应用社会科学系", en: "Department of Applied Social Sciences, The Hong Kong Polytechnic University" },
      { zh: "香港理工大学社会政策与社会创业中心", en: "Centre for Social Policy and Social Entrepreneurship (CSPSE)" }
    ],
    email: "zorn@vip.163.com",
    linkedin: "https://www.linkedin.com/in/zhuoren-shao-b7809237a/"
  },
  publications: {
    journals: [
      {
        id: "j1",
        title: { 
          zh: "大学生应对高校个人信息收集的抵抗行为及其影响因素：基于fsQCA的组态分析", 
          en: "Configurational Analysis of College Students' Resistance to Personal Information Collection: Based on fsQCA" 
        },
        source: "华东师范大学学报(教育科学版) / ECNU Review of Education",
        year: "2025"
      },
      {
        id: "j2",
        title: { 
          zh: "中国地方立法层面数据治理的扎根理论研究", 
          en: "A Grounded Theory Study of Data Governance at the Local Legislative Level in China" 
        },
        source: "Forthcoming",
        year: "2027"
      }
    ],
    books: [
      {
        id: "b1",
        title: { 
          zh: "Between Dependence and Security: Belt and Road EU States in the 5G Governance Dilemma", 
          en: "Between Dependence and Security: Belt and Road EU States in the 5G Governance Dilemma" 
        },
        series: "Navigating the Geopolitics of Strategic Technology, Digital Law and Governance series",
        publisher: "Routledge",
        year: "2025"
      }
    ],
    conferences: [
      {
        id: "c1",
        title: { 
          zh: "基层官僚与AI的使用：中国交通执法中'混合官僚制'的形成", 
          en: "Street-Level Bureaucrats and the Use of AI: The Making of 'Hybrid Bureaucracy' in Chinese Traffic Policing" 
        },
        conference: "2026 EASP Annual Conference",
        year: "July 2026"
      }
    ],
    media: [
      { 
        id: "m1",
        title: { zh: "苹果夹缝生存：关税回旋镖下的闪转腾挪", en: "Apple's Survival: Maneuvering Under the Tariff Boomerang" }, 
        outlet: "21世纪经济报道 / 21st Century Business Herald", 
        year: "2025-04" 
      },
      { 
        id: "m2",
        title: { zh: "建议优化科技制造业融资环境", en: "Optimizing Financing Environment for Tech Manufacturing" }, 
        outlet: "21世纪经济报道 / 21st Century Business Herald", 
        year: "2025-03" 
      },
      { 
        id: "m3",
        title: { zh: "AI芯片新战场：英伟达的攻与守", en: "New Battleground for AI Chips: Nvidia's Offense and Defense" }, 
        outlet: "21世纪经济报道 / 21st Century Business Herald", 
        year: "2025-02" 
      },
      { 
        id: "m4",
        title: { zh: "芯片巨头交锋汽车赛道", en: "Chip Giants Clashing on the Automotive Track" }, 
        outlet: "21世纪经济报道 / 21st Century Business Herald", 
        year: "2025-01" 
      }
    ]
  },
  projects: [
    {
      id: "p1",
      type: "academic" as const,
      title: { zh: "小学校园治理研究", en: "Research on Primary School Campus Governance" },
      role: { zh: "主要研究员", en: "Core Researcher" },
      period: "2024 - 2026"
    }
  ]
}

export type SiteDataType = typeof SITE_DATA
