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
    rightsNotice:
      "论文版权归原作者、期刊或其他权利人所有；如需版权或内容更正，请通过 GitHub Issues 联系维护者。请勿提交患者个人信息。",
  },

  nav: {
    analysis: "最新分析",
    questions: "常见问题",
    library: "全部文献",
    about: "关于本站",
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
    eyebrow: "更新于 2026-08-14",
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
      "异常的是左冠状动脉还是右冠状动脉，差别很大。中国专家共识记载，右冠状动脉异常起源比左冠状动脉常见得多，两者之比约为 6 比 1；而左冠状动脉异常起源的猝死发生率是右冠的 1.8 至 4.7 倍。所以医生首先要弄清的，是异常的是哪一条、它又走在什么位置。",
      "很多人一生没有症状，往往是因为别的原因做检查才偶然发现。也有人会出现胸痛、活动时胸闷或晕厥。这里要特别说明一件事：没有症状不等于没有风险——同一份共识引用的数据显示，多达 38% 至 66% 的患者在发生猝死之前，从未出现过任何相关症状。「他一直好好的」不能作为放心的理由。",
      "反过来说，也不必被「猝死」两个字压垮。美国胸外科协会的专家共识指出，在不参加竞技体育的年轻人当中，这类事件的绝对发生率极低；风险主要集中在特定的解剖类型加上高强度运动这个组合上。具体到某一个人风险有多高，取决于解剖形态，需要影像检查才能判断，个体差异很大。",
      "下面这些问题，是家属最常问的。每个问题后面是相关的研究文献——它们能告诉你目前研究说了什么，但不能替代医生对你自己情况的判断。",
    ],
    primerSourcesLabel: "这一段依据下面这几份共识与指南写成，你可以点进去核对：",

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
    summaryCheck: {
      source: {
        badge: "AI 已校对原文",
        note: "这段中文摘要由 AI 起草，并逐句对照本站保存的论文全文校对过。没有医学专业人士参与。",
      },
      metadata: {
        badge: "AI 仅据题录",
        note: "本站没有这篇论文的全文，这段摘要只依据题名和整理者备注写成，无法与原文比对。没有医学专业人士参与。",
      },
      draft: {
        badge: "AI 初稿未校",
        note: "这段中文摘要由 AI 依据文献信息起草，没有经过校对。没有医学专业人士参与。",
      },
    },
    summaryNotice:
      "下面的中文摘要由 AI 起草、也由 AI 校对，没有医学专业人士参与。每条摘要后面的标记，说明它被核到了什么程度。",
  },

  about: {
    metaTitle: "关于本站｜冠状动脉起源异常文献库",
    metaDescription:
      "这个文献库是谁整理的、为什么整理、文献怎么选的、中文摘要怎么来的，以及本站做不到什么。",
    eyebrow: "关于本站",
    title: "这个站是谁做的",
    lede: "如果你打算根据这里的内容做任何决定，你有权先知道它是怎么来的。",
    sections: [
      {
        heading: "整理者",
        body: [
          "这个文献库由一位患者家属整理。我不是医生，不是医学研究者，也没有受过任何医学训练。",
          "家人确诊之后，我发现中文里关于「冠状动脉起源异常」的可靠资料极少，能找到的研究几乎全是英文，普通人读不下去。这个库最初是我为了自己看懂而做的，后来想到别人可能也用得上，才整理成网站。",
        ],
      },
      {
        heading: "文献是怎么选的",
        body: [
          "目前收录 74 条独立记录，涵盖儿童与成人的研究、影像与危险分层、运动参与、外科治疗，以及专家共识和临床指南。每条都保留原始题名、期刊、年份，以及 DOI、PMID、PMCID（如果有），你可以据此回到原始出处核对。",
          "需要说清楚：这不是一份系统综述。收录范围反映的是整理过程中检索到并保存下来的文献，不保证穷尽，也不代表这个领域的全部证据。某个问题下面记录多，不等于那个问题更重要；记录少，也不等于风险更小。",
        ],
      },
      {
        heading: "中文题名和摘要是怎么来的",
        body: [
          "站上的中文题名和白话摘要，全部由 AI 依据文献信息起草；校对也由 AI 完成，方式是逐句对照本站保存的论文全文。整个过程没有医学专业人士参与，没有任何一位医生审阅过这里的文字。",
          "每段摘要后面都有一个标记，说明它被核到什么程度。「AI 已校对原文」表示对照过全文；「AI 仅据题录」表示本站没有这篇论文的全文，摘要只能依据题名和整理备注写成，无法与原文比对；「AI 初稿未校」表示还没有校对过。",
          "这些标记不是免责套话。如果某段摘要和你从医生那里听到的说法不一致，请以医生为准，并且欢迎通过 GitHub 指出错误。",
        ],
      },
      {
        heading: "本站做不到什么",
        body: [
          "不能告诉你该不该手术、能不能运动、风险有多高。这些取决于具体的解剖形态、症状和检查结果，只有看过影像的医生才能判断。",
          "不能替代原文。多数记录本站没有全文；即便有，也是英文的临床论文。摘要只是帮你判断这一篇值不值得拿去问医生。",
          "不保证持续更新。文献整理于 2026 年 8 月，此后发表的研究不在其中。",
          "不收集任何个人信息，也没有注册、评论或上传功能。请不要在 GitHub Issue 里提交姓名、病历号或其他健康信息。",
        ],
      },
      {
        heading: "怎么用它比较好",
        body: [
          "挑出和你的情况最接近的几条，记下 DOI 或 PMID，打印或截图带去门诊，问医生「这篇说的情况和我们像不像」。把它当成一份和医生对话用的清单，而不是答案。",
        ],
      },
    ],
  },

  topic: {
    sourcesLabel: "这段引导语依据的共识与指南：",
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
    visitCount: "本页累计访问",
    visitCountLoading: "正在读取访问次数…",
  },
};
