import type { Dictionary } from "./types";

export const zh: Dictionary = {
  lang: "zh",
  htmlLang: "zh-CN",
  basePath: "",

  site: {
    name: "冠状动脉起源异常文献库",
    tagline: "写给患者和家属的研究文献索引",
    disclaimer:
      "本站整理公开发表的研究文献，帮助你和医生讨论，不能替代医生的诊断和建议。",
    notMedicalAdvice: "文献整理与检索，不提供医疗建议。",
  },

  nav: {
    questions: "常见问题",
    library: "全部文献",
    rights: "版权说明",
    github: "GitHub",
    switchTo: "English",
    switchToLabel: "Switch to English",
    backToHome: "返回首页",
  },

  home: {
    metaTitle: "冠状动脉起源异常（AAOCA）：写给患者和家属的文献库",
    metaDescription:
      "冠状动脉起源异常（AAOCA / AAORCA）是什么、严不严重、要做什么检查、还能不能运动、要不要手术。按家属最常问的问题整理的公开研究文献索引，中英文对照。",
    eyebrow: "更新于 2026-07-31",
    title: "冠状动脉起源异常",
    subtitle: "AAOCA / AAORCA",
    lede: "如果你或家人刚被诊断出这个情况，这里按你最可能想问的几个问题，整理了目前公开发表的研究文献。",
    startReading: "先了解这是什么",
    browseLibrary: "直接检索全部文献",

    primerEyebrow: "先读这一段",
    primerHeading: "这是什么情况",
    primerBody: [
      "心脏自己也需要血液供应，负责这件事的是两条冠状动脉。它们从主动脉根部发出，一左一右，各有各的固定位置。",
      "「冠状动脉起源异常」（英文缩写 AAOCA）指的是其中一条冠状动脉的开口长在了不该长的地方——比如本该从左侧发出的，却从右侧发出。如果这条血管接下来又走行在主动脉和肺动脉之间，被挤压的可能性会增加。这是一种先天的解剖差异，不是后天得的病，也不会传染。",
      "很多人终生没有症状，往往是因为别的原因做检查才偶然发现。也有人会出现胸痛、活动时胸闷或晕厥，少数情况下与剧烈运动中的心脏事件有关。风险高低和具体的解剖形态有关，需要影像检查来判断，个体差异很大。",
      "下面这些问题，是家属最常问的。每个问题后面是相关的研究文献——它们能告诉你目前研究说了什么，但不能替代医生对你自己情况的判断。",
    ],

    questionsEyebrow: "按问题浏览",
    questionsHeading: "你可能想问的",
    questionsLede:
      "每个问题下面都有一段说明，讲清楚目前的研究到什么程度、哪些地方还没有定论。",
    recordCount: (count) => `${count} 条文献`,

    statsLabel: "收录概况",
    stats: {
      total: "条独立记录",
      pediatric: "条儿童相关",
      adult: "条成人相关",
      guidance: "条共识与指南",
    },

    principlesEyebrow: "整理原则",
    principlesHeading: "可追溯、可核对、不混淆获取状态",
    principles: [
      {
        number: "01",
        heading: "儿童和成人分开",
        body: "跨年龄的研究只归入一类，分类依据保留在原始索引里。",
      },
      {
        number: "02",
        heading: "共识和指南单独成条",
        body: "专家共识与临床指南保持独立可检索，因为它们是医生判断的主要依据。",
      },
      {
        number: "03",
        heading: "没有全文的会说清楚",
        body: "不能提供全文的记录会明确标出，并给出正规获取入口，绝不用摘要冒充论文。",
      },
    ],
  },

  explorer: {
    eyebrow: "全部文献",
    heading: "检索全部文献",
    lede: "题名按原文保留，中文题名为对照翻译。",
    searchLabel: "搜索文献",
    searchPlaceholder: "试试「运动」「手术」「心脏 CT」，或输入 DOI、PMID",
    suggestionsLabel: "试试搜索",
    suggestions: ["还能运动吗", "手术效果", "心脏 CT", "猝死风险", "儿童", "专家共识"],
    population: "人群",
    access: "能不能看到全文",
    kind: "文献类型",
    topic: "问题",
    all: "全部",
    pediatric: "儿童",
    adult: "成人",
    full: "有全文",
    nonfull: "没有全文",
    consensusOnly: "只看共识和指南",
    results: (count) => `${count} 条结果`,
    clear: "清除筛选",
    empty: "没有找到相关记录。可以试试更短的词，或者清除筛选条件。",
    looseNotice: "没有完全符合的记录，以下是部分相关的：",
    originalTitle: "题名按原文保留",
  },

  card: {
    view: "查看这一条",
    source: "原始入口",
    fullBadge: "有全文",
    nonfullBadge: "本站没有全文",
    consensusBadge: "共识 / 指南",
    pediatricBadge: "儿童",
    adultBadge: "成人",
    nonfullNote: "本站只有书目信息，需要到期刊网站获取全文。",
    noIdentifier: "未检得 DOI / PMID",
    draftBadge: "AI 初稿",
    draftTitle: "这段中文摘要由 AI 依据文献信息起草，尚未经过人工核对。",
  },

  topic: {
    metaTitle: (question) => `${question}｜冠状动脉起源异常文献库`,
    metaDescription: (question) =>
      `关于冠状动脉起源异常（AAOCA / AAORCA）「${question}」这个问题，目前公开发表的研究文献整理。`,
    eyebrow: "常见问题",
    recordsHeading: "相关文献",
    recordCount: (count) => `${count} 条`,
    ordering: "共识和指南排在前面，本站没有全文的记录排在最后。",
    otherQuestions: "其他问题",
    backToAll: "← 返回首页",
    empty: "这个问题下暂时没有记录。",
  },

  detail: {
    backToAll: "← 返回全部文献",
    originalTitleLabel: "原文题名",
    summaryHeading: "这篇研究讲了什么",
    noSummary: "这一条还没有中文摘要，可以先看原文题名和下面的正规入口。",
    populationLabel: "人群",
    accessLabel: "获取状态",
    pagesLabel: "本地页数",
    curatorNoteLabel: "整理说明",
    topicsLabel: "相关问题",
    accessFull: "有全文",
    accessNonFull: "本站没有全文",
    nonfullHeading: "本站没有这篇的全文",
    nonfullBody:
      "由于付费墙、需要登录或来源限制，这一条只保留了书目信息和正规入口。本站不会用摘要冒充论文。",
    nonfullHowTo:
      "可以凭下面的 DOI 或 PMID 编号，请医生、医院图书馆或大学图书馆代为调阅。",
    identifiersEyebrow: "正规入口",
    identifiersHeading: "怎么找到这篇原文",
    identifiersHelp:
      "这几个编号是这篇文献的唯一身份号。把编号给医生或图书馆，就能准确找到这一篇。",
    noIdentifiers: "截至整理日，未检得 DOI、PMID 或 PMCID。",
    openSource: "打开原始入口",
    provenanceSummary: "仓库溯源信息（文件路径与校验和）",
    recordPath: "文件路径",
    checksum: "SHA-256 校验和",
    provenanceNote:
      "路径与校验和用于核对整理记录，不代表第三方文件获得本项目许可。",
  },

  footer: {
    citation: "引用本项目",
    rights: "版权与全文说明",
    contributing: "参与维护",
    github: "GitHub",
  },
};
