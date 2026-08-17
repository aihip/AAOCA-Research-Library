export const UPDATE_HISTORY_PATH = "/updates";

type Localized = { zh: string; en: string };

export type UpdateEntry = {
  date: string;
  title: Localized;
  summary: Localized;
  changes: Localized[];
  commits: string[];
};

export const updates: UpdateEntry[] = [
  {
    date: "2026-08-17",
    title: {
      zh: "新增中国就医线索与家长会诊建议",
      en: "Added China care leads and consultation guidance for families",
    },
    summary: {
      zh: "整理可由官方资料核实的国内医院与医生线索，并补充选择中心、核实同类手术经验和取得独立第二意见的实用建议。",
      en: "Added officially verifiable hospital and clinician leads in China, together with practical guidance on choosing a centre, checking directly comparable surgical experience, and obtaining an independent second opinion.",
    },
    changes: [
      {
        zh: "新增阜外医院、北京安贞医院、重庆医科大学附属儿童医院和上海儿童医学中心等就医线索，并明确这不是排名、转诊或疗效背书。",
        en: "Added care leads for Fuwai Hospital, Beijing Anzhen Hospital, Children's Hospital of Chongqing Medical University, and Shanghai Children's Medical Center, with explicit limits against treating the list as a ranking, referral, or endorsement.",
      },
      {
        zh: "建议家长多咨询大型先心病中心，重点核实主刀医生对相似冠脉解剖和相近术式的实际病例经验，并正视心脏手术的真实风险。",
        en: "Advised families to consult multiple large congenital-heart centres, verify the operating surgeon's experience with comparable coronary anatomy and repairs, and treat the operation as real heart surgery with genuine risk.",
      },
      {
        zh: "新增“先独立看片、后比较方案”的第二意见方法：不先用其他医生的姓名或结论给新会诊定调，同时强调必须如实提供完整病史并回答医生提问。",
        en: "Added an independent-second-opinion sequence: let the new clinician review the images before introducing other clinicians' names or conclusions, while still disclosing the full medical history and answering questions honestly.",
      },
      {
        zh: "为旧版论文地址增加永久跳转，避免历史链接继续形成重复页面或无效索引入口。",
        en: "Added permanent redirects for legacy paper URLs so old links no longer create duplicate or invalid indexing entry points.",
      },
    ],
    commits: ["8c715cf", "7126f1b", "e38bcb9", "cc86188"],
  },
  {
    date: "2026-08-14",
    title: {
      zh: "分析体系扩充，文献库增至 91 条",
      en: "Analysis collection expanded; library reached 91 records",
    },
    summary: {
      zh: "集中补入风险分层、缺血评估、手术技术与保守观察资料，并把分散的专题文章整理成可浏览的分析目录。",
      en: "Added risk, ischemia-testing, surgical-technique, and surveillance evidence, and organised the long-form articles into a browsable analysis collection.",
    },
    changes: [
      {
        zh: "发布“怎样才算证明缺血”和“保守观察不是不管”等证据分析。",
        en: "Published evidence analyses on demonstrating ischemia and active surveillance.",
      },
      {
        zh: "补入 ESC 运动心脏病学指南、IVUS/FFR、运动负荷 CMR 等全文与题录。",
        en: "Added the ESC sports-cardiology guideline plus IVUS/FFR and exercise-CMR records and full texts.",
      },
      {
        zh: "统一规范页面地址，并让所有中英文公开页面都能记录本页访问次数。",
        en: "Normalised public URLs and enabled page-view tracking across every Chinese and English public page.",
      },
      {
        zh: "新增本更新历史，公开记录网站内容与功能的主要变化。",
        en: "Added this update history to make major content and product changes visible.",
      },
      {
        zh: "首页新增按发表年份和入库月份自动统计的论文时间面板。",
        en: "Added an automatically maintained homepage timeline by publication year and accession month.",
      },
      {
        zh: "全站页脚新增公开联系邮箱，方便反馈内容、版权与维护问题。",
        en: "Added a public contact email to every page for content, rights, and maintenance enquiries.",
      },
      {
        zh: "修复站内锚点链接在跳转后反复锁定滚动位置的问题。",
        en: "Fixed in-page fragment links repeatedly locking the scroll position after navigation.",
      },
      {
        zh: "新增经过匿名与来源边界处理的网友问诊经验，并与可核查的研究证据分开呈现。",
        en: "Added a de-identified community consultation experience with explicit source limits, kept separate from verifiable research evidence.",
      },
    ],
    commits: ["f161714", "bb9e735", "265b6ce", "bca721c", "35af62d", "5059cbc", "fee52be"],
  },
  {
    date: "2026-08-13",
    title: {
      zh: "建立 AAORCA 决策证据主线",
      en: "Built the AAORCA decision-evidence spine",
    },
    summary: {
      zh: "从单篇文献列表推进到可比较的证据时间线，重点呈现不同人群、检查方法和术式之间不能直接横比的差异。",
      en: "Moved beyond a paper list to a comparative evidence timeline that keeps populations, test methods, and surgical series from being treated as interchangeable.",
    },
    changes: [
      {
        zh: "新增病例数、手术比例、术式、随访和结局并排比较的长篇分析。",
        en: "Added a long-form comparison of patient counts, operation rates, techniques, follow-up, and outcomes.",
      },
      {
        zh: "用来源明确的手术图替换示意草图，并改善触屏表格阅读。",
        en: "Replaced technique sketches with sourced surgical figures and improved tables on touch screens.",
      },
      {
        zh: "补充 AAOCA、AAORCA、ACAOS 等术语及中英文检索同义词。",
        en: "Expanded AAOCA, AAORCA, and ACAOS terminology and bilingual search synonyms.",
      },
    ],
    commits: ["81918ca", "2bc404d", "eb2f863", "03645c4", "7ec2f6b"],
  },
  {
    date: "2026-08-10",
    title: {
      zh: "新增 2026 年儿童 AAOCA 手术队列",
      en: "Added a 2026 pediatric AAOCA surgical cohort",
    },
    summary: {
      zh: "收录首尔大学儿童医院 34 例手术病例的开放获取正式版全文，并同步更新索引、摘要和计数。",
      en: "Added the open-access version of record for a 34-patient surgical series from Seoul National University Children's Hospital, with index and summary updates.",
    },
    changes: [
      {
        zh: "儿童全文记录增至 21 条，当时全库共 64 条、632 页。",
        en: "The pediatric full-text collection reached 21 records; the library then held 64 records and 632 pages.",
      },
    ],
    commits: ["88ae0c8"],
  },
  {
    date: "2026-08-03",
    title: {
      zh: "上线逐页访问统计",
      en: "Launched per-page visit tracking",
    },
    summary: {
      zh: "为每个内容页面增加独立访问计数，并接入 Cloudflare Pages Functions 与 D1 数据库。",
      en: "Added a separate visit count for each content page using Cloudflare Pages Functions and D1.",
    },
    changes: [
      {
        zh: "页脚显示本页累计访问，数据按规范化路径分别保存。",
        en: "The footer shows cumulative views for the current page, stored by normalised path.",
      },
      {
        zh: "补齐生产数据库绑定和 Functions 部署链路。",
        en: "Completed the production database binding and Functions deployment path.",
      },
    ],
    commits: ["f6060d7", "6d50088", "51fcc6a", "331a9bb", "2ae4978"],
  },
  {
    date: "2026-07-31",
    title: {
      zh: "双语患者版文献库上线",
      en: "Bilingual patient-facing library launched",
    },
    summary: {
      zh: "项目从文献文件集合发展为按患者和家属常见问题组织的中英文网站。",
      en: "The project grew from a literature file collection into a bilingual website organised around the questions patients and families ask.",
    },
    changes: [
      {
        zh: "首批整理 63 条文献，为全部记录补充中文标题、白话摘要和主题标签。",
        en: "Launched with 63 records, each given a Chinese title, plain-language summary, and topic labels.",
      },
      {
        zh: "建立独立中英文路由、搜索、问题页、来源标识和获取状态说明。",
        en: "Established independent Chinese and English routes, search, question pages, provenance, and access-status explanations.",
      },
      {
        zh: "补充版权、隐私、维护者身份和人工审阅范围说明。",
        en: "Added rights, privacy, maintainer identity, and human-review scope disclosures.",
      },
    ],
    commits: ["6d95265", "cc9118c", "611f73a", "977ad3a"],
  },
];
