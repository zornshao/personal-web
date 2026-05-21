export const SITE_DATA = {
  personalInfo: {
    name: { zh: "邵卓仁", en: "Zhuoren Shao" },
    title: { zh: "博士研究员", en: "Doctoral Researcher" },
    bio: {
      zh: [
        "我的研究致力于探索规范、技术与个体之间的互动关系。在攻读法学博士与社会学博士学位之前，我在中国和意大利取得了新闻传播学学士、法学学士与法学硕士学位。",
        "目前，我的研究兴趣主要集中于法律社会学、知识产权法、数字政策与规制。基于在基础教育行业十年的创业与实践积淀，我也关注教育社会学相关议题。",
        "此前，我在清华大学智能法治研究院、21财经、Di Donna Law Firm、Libutti Trotta Law Firm担任研究助理或实习研究员。此外，我曾以青年召集人身份发起了'美丽乡村青年笔记''凉山青年书架'等公益项目，并担任头号地标、澎湃等新媒体平台的撰稿人或专栏主编。"
      ],
      en: [
        "My research explores the interaction between norms, technology, and individuals. Prior to pursuing dual doctoral degrees in Law and Sociology, I completed undergraduate and graduate studies in China and Italy, earning a B.A. in Journalism and Communication, an LL.B., and an LL.M.",
        "My current research interests center on the sociology of law, intellectual property law, and digital policy and regulation. Drawing on a decade of entrepreneurial and professional practice in basic education, I also maintain a keen interest in the sociology of education.",
        "Previously, I served as a research assistant or intern researcher at the Institute for AI and Law at Tsinghua University, 21st Century Business Herald, Di Donna Law Firm, and Libutti Trotta Law Firm. I have also initiated public welfare projects including 'Rural Youth Notes' and 'Liangshan Youth Bookshelf' as a youth convener, and contributed as a writer and columnist for media platforms including The Landmark and The Paper."
      ]
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
        source: {
          zh: "华东师范大学学报(教育科学版) ",
          en: "Joumal of East China Normal University (Educational Sciences)"
        }
        year: "2025"
      },
      {
        id: "j2",
        title: { 
          zh: "A Grounded Theory Study of Data Governance at the Local Legislative Level in China", 
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
        series: "Navigating the Geopolitics of Strategic Technology, Digital Law and Governance Series",
        publisher: "Routledge",
        year: "2026"
      }
    ],
    conferences: [
      {
        id: "c1",
        title: { 
          zh: "Street-Level Bureaucrats and the Use of AI: The Making of 'Hybrid Bureaucracy' in Chinese Traffic Policing", 
          en: "Street-Level Bureaucrats and the Use of AI: The Making of 'Hybrid Bureaucracy' in Chinese Traffic Policing" 
        },
        conference: "2026 EASP Annual Conference",
        year: "2026"
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
      title: { zh: "小学班级数字化管理与学生日常行为习惯养成", en: "Research on Primary School Campus Digital Governance and the development of students' daily habits" },
      role: { zh: "主要研究员", en: "Core Researcher" },
      period: "2026 - 2027"
    }
    {
      id: "p2",
      title: { zh: "中国知识产权治理中的多元主体：制度变迁与行动逻辑", en: "Multiple Stakeholders in China's Intellectual Property Governance: Institutional Change and Action Logic" },
      role: { zh: "主要研究员", en: "Core Researcher" },
      period: "2026 - 2028"
    }
{
      id: "p3",
      title: { zh: "中国交通执法中的算法使用与民众的法律意识", en: "The use of algorithms in China's traffic law enforcement and public legal awareness" },
      role: { zh: "主要研究员", en: "Core Researcher" },
      period: "2025 - 2027"
    }
  ]
}

export type SiteDataType = typeof SITE_DATA
