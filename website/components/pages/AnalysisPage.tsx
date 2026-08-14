import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { absoluteUrl, getDictionary, href, type Language } from "../../lib/i18n";
import { analysisBySlug, analysisPath, evidenceTimeline } from "../../lib/analyses";

type Localized = { zh: string; en: string };

type EvidenceRow = {
  slug: string;
  kind: "selective" | "surgical" | "functional";
  study: string;
  population: Localized;
  patients: string;
  age: Localized;
  anatomy: Localized;
  surgery: Localized;
  technique: Localized;
  followUp: Localized;
  outcome: Localized;
  signal: Localized;
};

const evidenceRows: EvidenceRow[] = [
  {
    slug: "2026-d29299373d7f",
    kind: "selective",
    study: "广东省心血管病研究所 2026",
    population: { zh: "儿童纯 AAORCA", en: "Pediatric AAORCA-only" },
    patients: "151 / 151",
    age: { zh: "平均 7.4 岁", en: "Mean 7.4 y" },
    anatomy: {
      zh: "45 例有术中资料：壁内段 44，开口狭窄 40",
      en: "Among 45 with operative anatomy: 44 intramural, 40 ostial stenosis",
    },
    surgery: { zh: "46/151（30.5%）", en: "46/151 (30.5%)" },
    technique: {
      zh: "去顶 44；再植 1；心脏移植 1",
      en: "44 unroofing; 1 reimplantation; 1 heart transplant",
    },
    followUp: { zh: "可用随访较短；无统一中位数", en: "Short available follow-up; no common median" },
    outcome: {
      zh: "无围术期死亡；可用随访中无 SCD/MACE",
      en: "No perioperative death; no SCD/MACE in available follow-up",
    },
    signal: { zh: "选择性手术；解剖与症状并不完全一致", en: "Selective surgery; anatomy and symptoms often diverged" },
  },
  {
    slug: "2026-52c6c055cafa",
    kind: "selective",
    study: "日本全国儿童调查 2026",
    population: { zh: "儿童 AAOCA；右冠型 71", en: "Pediatric AAOCA; 71 right-sided" },
    patients: "106 / 71",
    age: { zh: "中位 9.1 岁", en: "Median 9.1 y" },
    anatomy: {
      zh: "壁内走行与症状独立相关；具体例数未报告",
      en: "Intramural course independently associated with symptoms; count NR",
    },
    surgery: { zh: "39/106（36.8%）", en: "39/106 (36.8%)" },
    technique: { zh: "NR", en: "NR" },
    followUp: { zh: "随访至中位年龄 12.2 岁", en: "Followed to median age 12.2 y" },
    outcome: {
      zh: "全部存活；1 例初诊心肺骤停后接受心脏移植",
      en: "All survived; one presenting arrest was followed by heart transplant",
    },
    signal: { zh: "症状、解剖和负荷检查共同决定处理", en: "Management integrated symptoms, anatomy, and stress testing" },
  },
  {
    slug: "2022-27e176bacbca",
    kind: "selective",
    study: "Bibevski 2022",
    population: { zh: "纯 AAORCA", en: "AAORCA-only" },
    patients: "86 / 86",
    age: { zh: "中位 16 岁", en: "Median 16 y" },
    anatomy: {
      zh: "手术组更多裂隙开口，近端狭窄段更长",
      en: "Slit-like ostia and longer proximal narrowing were more common with surgery",
    },
    surgery: { zh: "26/86（30%）", en: "26/86 (30%)" },
    technique: {
      zh: "去顶 10；新开口 7；改良去顶+新开口 6；去顶+再植 2；再植 1",
      en: "10 unroofing; 7 neo-ostium; 6 modified unroofing + neo-ostium; 2 unroofing + reimplantation; 1 reimplantation",
    },
    followUp: { zh: "中位 3 年；最长 13 年", en: "Median 3 y; up to 13 y" },
    outcome: { zh: "手术组随访功能检查均无缺血", en: "No ischemia on follow-up functional testing after surgery" },
    signal: { zh: "纯右冠型中最清楚的选择性手术证据", en: "A clear example of selective surgery in right-AAOCA" },
  },
  {
    slug: "2014-bcb1e74fe841",
    kind: "surgical",
    study: "Stanford / Mainwaring 2014",
    population: { zh: "已筛选手术 AAOCA；右冠型 47", en: "Selected surgical AAOCA; 47 right-sided" },
    patients: "76 / 47",
    age: { zh: "中位 15 岁", en: "Median 15 y" },
    anatomy: { zh: "55 例接受壁内段去顶", en: "55 underwent unroofing of an intramural segment" },
    surgery: { zh: "100%（手术系列）", en: "100% (surgical series)" },
    technique: { zh: "去顶 55；再植 7；肺动脉移位 14", en: "55 unroofing; 7 reimplantation; 14 PA translocation" },
    followUp: { zh: "中位 6 年", en: "Median 6 y" },
    outcome: { zh: "无早晚期死亡；1 例严重缺血后心脏移植", en: "No early or late death; one later heart transplant for severe ischemia" },
    signal: { zh: "说明成熟中心可按解剖选择不同术式", en: "Supports anatomy-led repair at an experienced centre" },
  },
  {
    slug: "2014-77e6509d5d2b",
    kind: "surgical",
    study: "Mayo / Sharma 2014",
    population: { zh: "已筛选去顶患者；AAORCA 69", en: "Selected unroofing patients; 69 AAORCA" },
    patients: "75 / 69",
    age: { zh: "平均 39.6 岁", en: "Mean 39.6 y" },
    anatomy: { zh: "接受去顶者；壁内比例未单列", en: "All underwent unroofing; intramural proportion NR" },
    surgery: { zh: "100%（手术系列）", en: "100% (surgical series)" },
    technique: { zh: "去顶 75；其中 2 例另加 CABG", en: "75 unroofing; 2 also required CABG" },
    followUp: { zh: "平均 18 个月；最长 7 年", en: "Mean 18 mo; up to 7 y" },
    outcome: { zh: "无早期死亡；1 例非心源性晚期死亡", en: "No early death; one non-cardiac late death" },
    signal: { zh: "支持解剖合适时去顶术成熟可靠", en: "Supports mature unroofing for suitable anatomy" },
  },
  {
    slug: "2026-c8277633b54d",
    kind: "surgical",
    study: "成人 AAORCA 再植 2026",
    population: { zh: "有症状成人 AAORCA", en: "Symptomatic adult AAORCA" },
    patients: "40 / 40",
    age: { zh: "中位 44 岁", en: "Median 44 y" },
    anatomy: { zh: "壁内或主肺间走行", en: "Intramural or interarterial course" },
    surgery: { zh: "100%（手术系列）", en: "100% (surgical series)" },
    technique: { zh: "再植 40；1 例另加静脉桥", en: "40 reimplantations; one additional vein graft" },
    followUp: { zh: "平均 30.3 个月", en: "Mean 30.3 mo" },
    outcome: { zh: "无死亡；14 例复查均无开口狭窄或扭折", en: "No death; all 14 re-imaged vessels had no ostial stenosis or kinking" },
    signal: { zh: "支持成人选择病例中的再植；不能直接外推儿童", en: "Supports adult reimplantation in selected cases; not directly pediatric" },
  },
  {
    slug: "2024-34d565d9bb4a",
    kind: "surgical",
    study: "Ramponi / Puskas 2024",
    population: { zh: "成人 AAORCA", en: "Adult AAORCA" },
    patients: "13 / 13",
    age: { zh: "平均 53.9 岁", en: "Mean 53.9 y" },
    anatomy: { zh: "13/13 裂隙开口、长壁内段及主肺间走行", en: "13/13 slit-like ostium, long intramural and interarterial course" },
    surgery: { zh: "100%（手术系列）", en: "100% (surgical series)" },
    technique: { zh: "正式去顶 13", en: "13 formal unroofing" },
    followUp: { zh: "平均 20.1 个月", en: "Mean 20.1 mo" },
    outcome: { zh: "无 30 天死亡/心梗；无再次干预", en: "No 30-day death/MI; no reintervention" },
    signal: { zh: "长壁内段与去顶术的高度匹配", en: "Strong anatomy–technique match for long intramural segments" },
  },
  {
    slug: "2023-0e3e40c1fa52",
    kind: "surgical",
    study: "CABG 队列 2023",
    population: { zh: "成人混合冠脉异常；严格 AAORCA 6", en: "Mixed adult anomalies; 6 strict AAORCA" },
    patients: "14 / 6",
    age: { zh: "中位 62.5 岁", en: "Median 62.5 y" },
    anatomy: { zh: "7 例另有血流受限性冠心病", en: "7 also had flow-limiting coronary disease" },
    surgery: { zh: "100%（CABG 系列）", en: "100% (CABG series)" },
    technique: { zh: "内胸动脉 CABG 14", en: "14 internal-thoracic-artery CABG" },
    followUp: { zh: "中位 43 个月", en: "Median 43 mo" },
    outcome: { zh: "无围术期死亡；1 例桥血管失败", en: "No perioperative death; one graft failure" },
    signal: { zh: "无固定重度狭窄时要警惕竞争血流", en: "Highlights competitive-flow risk without fixed severe stenosis" },
  },
  {
    slug: "2026-94384acd16a9",
    kind: "functional",
    study: "R-AAOCA CCTA + FFR 2026",
    population: { zh: "成人 R-AAOCA", en: "Adult R-AAOCA" },
    patients: "81 / 81",
    age: { zh: "平均 52.3 岁", en: "Mean 52.3 y" },
    anatomy: { zh: "测量开口、壁内最窄径与几何阻力", en: "Measured ostial and intramural minima plus geometry-based resistance" },
    surgery: { zh: "非手术研究", en: "Non-surgical study" },
    technique: { zh: "—", en: "—" },
    followUp: { zh: "—", en: "—" },
    outcome: { zh: "腺苷 FFR 异常 6.2%；多巴酚丁胺 FFR 异常 19.8%", en: "Abnormal adenosine FFR 6.2%; dobutamine FFR 19.8%" },
    signal: { zh: "动态负荷比静息样扩血管更容易显出问题", en: "Stress-like testing exposed more limitation than vasodilation alone" },
  },
  {
    slug: "2019-d1b9776f9b3b",
    kind: "functional",
    study: "iFR + 多巴酚丁胺 2019",
    population: { zh: "成人 AAORCA 病例报告", en: "Adult AAORCA case report" },
    patients: "1 / 1",
    age: { zh: "成人", en: "Adult" },
    anatomy: { zh: "疑似运动诱发动态梗阻", en: "Suspected exercise-induced dynamic obstruction" },
    surgery: { zh: "机制病例", en: "Mechanistic case" },
    technique: { zh: "—", en: "—" },
    followUp: { zh: "—", en: "—" },
    outcome: { zh: "用多巴酚丁胺 + iFR 模拟运动状态", en: "Dobutamine + iFR used to simulate exertional physiology" },
    signal: { zh: "机制证据，不是自然史或预后证据", en: "Mechanistic evidence, not natural-history evidence" },
  },
  {
    slug: "2026-99c7e79f5a20",
    kind: "functional",
    study: "CCTA + 运动 SPECT 2026",
    population: { zh: "成人混合 AAOCA", en: "Mixed adult AAOCA" },
    patients: "35 / NR",
    age: { zh: "平均 51 岁", en: "Mean 51 y" },
    anatomy: { zh: "60% 至少一项高危 CCTA 特征", en: "60% had at least one high-risk CCTA feature" },
    surgery: { zh: "NR", en: "NR" },
    technique: { zh: "—", en: "—" },
    followUp: { zh: "中位 59 个月", en: "Median 59 mo" },
    outcome: { zh: "51% 运动 SPECT 诱发缺血", en: "51% had inducible ischemia on exercise SPECT" },
    signal: { zh: "联合解剖与功能优于单一检查", en: "Supports integrating anatomy with function" },
  },
  {
    slug: "2025-b6136fc7d7f1",
    kind: "functional",
    study: "运动负荷超声 2025",
    population: { zh: "成人混合 AAOCA", en: "Mixed adult AAOCA" },
    patients: "46 / NR",
    age: { zh: "中年成人为主", en: "Mostly middle-aged adults" },
    anatomy: { zh: "壁内 17%；主肺间 70%；裂隙开口 24%", en: "17% intramural; 70% interarterial; 24% slit-like ostium" },
    surgery: { zh: "4/46（8.7%）", en: "4/46 (8.7%)" },
    technique: { zh: "NR", en: "NR" },
    followUp: { zh: "未手术者中位 3 年", en: "Median 3 y for non-operated patients" },
    outcome: { zh: "仅 1 例 ESE 诱发缺血；未手术者无不良心血管事件", en: "Only one positive ESE; no adverse cardiovascular events in those observed" },
    signal: { zh: "避免只凭所谓高危解剖决定手术", en: "Argues against operating on anatomy labels alone" },
  },
  {
    slug: "2025-6dde4b2363c8",
    kind: "functional",
    study: "儿童多巴酚丁胺负荷 CMR 2025",
    population: { zh: "儿童/青年混合冠脉疾病", en: "Mixed pediatric/young coronary disease" },
    patients: "64 / NR",
    age: { zh: "中位 5.3 岁", en: "Median 5.3 y" },
    anatomy: { zh: "非 AAOCA 专项队列", en: "Not an AAOCA-specific cohort" },
    surgery: { zh: "非手术研究", en: "Non-surgical study" },
    technique: { zh: "—", en: "—" },
    followUp: { zh: "中位 7.4 年", en: "Median 7.4 y" },
    outcome: { zh: "61 例阴性者无心梗、死亡或中止型猝死", en: "No MI, death, or aborted sudden death among 61 negative studies" },
    signal: { zh: "支持无电离辐射的儿童功能学分层", en: "Supports radiation-free functional stratification in children" },
  },
  {
    slug: "2015-cd9815edea3c",
    kind: "selective",
    study: "成人 CCTA 自然史 2015",
    population: { zh: "成人混合冠脉异常；右冠自左窦 36", en: "Mixed adult anomalies; 36 right-from-left" },
    patients: "114 / 36",
    age: { zh: "成人", en: "Adult" },
    anatomy: { zh: "56/114 至少一项高危解剖特征", en: "56/114 had at least one high-risk feature" },
    surgery: { zh: "10/114（8.8%）", en: "10/114 (8.8%)" },
    technique: { zh: "NR", en: "NR" },
    followUp: { zh: "平均 27.1 个月", en: "Mean 27.1 mo" },
    outcome: { zh: "无心源死亡或急性冠脉综合征", en: "No cardiac death or acute coronary syndrome" },
    signal: { zh: "成人资料偏向功能学分层；不能外推儿童", en: "Supports adult functional stratification; not directly pediatric" },
  },
  {
    slug: "2026-3354413da98c",
    kind: "selective",
    study: "Texas Children’s 2026",
    population: { zh: "儿童 AAOCA；右冠型 77.8%", en: "Pediatric AAOCA; 77.8% right-sided" },
    patients: "573 / 446",
    age: { zh: "平均 10.5 岁", en: "Mean 10.5 y" },
    anatomy: { zh: "横断面运动/BMI 数据库；壁内比例 NR", en: "Cross-sectional exercise/BMI database; intramural proportion NR" },
    surgery: { zh: "102/573（17.8%）", en: "102/573 (17.8%)" },
    technique: { zh: "NR", en: "NR" },
    followUp: { zh: "横断面研究", en: "Cross-sectional" },
    outcome: { zh: "85/573（14.8%）有高级影像缺血证据", en: "85/573 (14.8%) had ischemia on advanced imaging" },
    signal: { zh: "大型专病中心也不是发现即手术", en: "Even at a large specialist centre, diagnosis did not mean automatic surgery" },
  },
];

const articleCopy = {
  zh: {
    back: "← 返回首页",
    label: "证据分析 · 20 篇主阅读清单",
    title: "儿童 AAORCA：把病例数、手术比例、术式和随访真正摊平",
    lede:
      "单独读手术系列，会觉得修复安全而成熟；单独读真实世界队列，又会发现大多数孩子并没有手术。把研究设计分开以后，二者并不矛盾：前者回答“选中手术的人修得怎么样”，后者回答“诊断以后谁真正进入手术”。",
    checked:
      "本页由 AI 根据文献库内记录、PubMed 题录/摘要与可获得全文整理，没有医学专业人士审阅。数字用于理解研究，不用于替代个体诊疗。NR 表示论文公开信息未明确报告。",
    toc: "本文目录",
    tocItems: [
      ["takeaway", "先看结论"],
      ["timeline", "证据时间线"],
      ["decision-cohorts", "真实世界手术比例"],
      ["comparison", "患者数据对照表"],
      ["technique", "去顶还是再植"],
      ["physiology", "为什么要看动态缺血"],
      ["surgical-cost", "手术不是风险归零"],
      ["decision", "一句话决策逻辑"],
    ],
    takeawayHeading: "先看结论：争议不在“手术会不会做”，而在“谁必须做”",
    takeaway: [
      ["R-AAOCA 不是自动手术", "儿童和青少年真实世界队列中，接受手术的常见比例约为 18%–37%，但队列定义和转诊偏倚不同，不能合并成一个总比例。"],
      ["高危解剖不是单一开关", "壁内段很重要，但要和开口最小径、近端狭窄长度、症状及运动状态下的缺血证据一起判断。"],
      ["手术总体成熟，但不是零代价", "去顶、再植等修复在经验中心死亡率低；大型多中心数据仍记录了主动脉瓣关闭不全、冠脉再次手术和少量术后死亡。"],
    ],
    timelineHeading: "证据是怎样一步步变化的",
    timelineLede: "早期文献主要证明“能安全修”；近年的问题逐渐转向“谁真的存在动态血流受限”。",
    cohortsHeading: "先把“诊断后有多少人手术”与“手术后效果如何”分开",
    cohortsLede: "下面四组才适合回答真实世界里的选择比例。日本和 Texas 队列包含左冠型，不能直接当作纯 AAORCA 数据。",
    cohortHeaders: ["队列", "总人数", "接受手术", "未手术/未接受修复"],
    comparisonHeading: "患者数据逐篇对照",
    comparisonLede: "20 篇主阅读清单中，可提取出 14 组队列/病例系列和 1 篇机制性病例报告。它们回答的问题不同，因此不做简单汇总。",
    headers: ["研究", "人群与病例数（总数 / AAORCA）", "年龄", "壁内段/近端解剖", "手术比例", "术式", "随访", "死亡/缺血/再干预", "这篇真正回答什么"],
    techniqueHeading: "去顶 vs 再植：术式跟着解剖走",
    techniqueLede: "没有文献证明一种术式适用于所有 AAORCA。关键不是哪一种“更高级”，而是哪一种能把异常开口和近端狭窄真正纠正。",
    diagramCaution: "以下是公开发表的术式技术图，用来解释手术步骤；不是 Jim 的影像，也不代表任何一个孩子的具体手术方案。",
    longTitle: "长而明确的壁内段",
    longBody: "如果去顶后能形成位置合适、足够大的新开口，去顶路径短、经验多。Ramponi/Puskas 的 13 例全部是长壁内段，全部正式去顶，约 20 个月内无死亡、心梗或再次干预。",
    shortTitle: "壁内段短或去顶后开口仍不理想",
    shortBody: "这时再植或新开口重建的吸引力上升，因为它们直接改变冠脉的起点。成人 40 例再植系列显示良好中期通畅，但不能直接外推到 8 岁儿童。",
    cabgTitle: "CABG 通常不是年轻患者的默认备选",
    cabgBody: "没有固定性重度狭窄时，原生 RCA 与桥血管会竞争血流。14 例成人 CABG 系列发生过 1 例桥血管失败，作者也强调无血流限制性病变时要谨慎。",
    unroofingFigure: "A：主动脉切开后探查异常开口；B：从异常开口置入小弯钳，确认壁内段方向；C：沿探针切开冠脉与主动脉之间的共同壁，完成去顶。",
    reimplantFigure: "A：游离并松解异常 RCA；B：连同周围主动脉壁切取冠脉纽扣；C：在正确的右冠窦选择无张力、无扭折的位置打孔，准备吻合。",
    figureCredit: "原图未修改：Padalino 等，Frontiers in Cardiovascular Medicine 2021，图 3 / 图 7，CC BY 4.0。",
    physiologyHeading: "近年的焦点：不只问“走在哪里”，而是问“运动时到底堵不堵”",
    physiologyBody: "81 例成人 R-AAOCA 同时接受两种 FFR。腺苷主要反映固定性狭窄；多巴酚丁胺更接近心率和血压上升时的动态负荷。异常比例从 6.2% 增至 19.8%，提示静息或单纯扩血管检查可能漏掉动态成分。成人结果不能直接套到儿童，但它改变了风险机制的表达方式。",
    adenosine: "腺苷 FFR 异常",
    dobutamine: "多巴酚丁胺 FFR 异常",
    surgicalHeading: "手术不是“修完以后风险永久归零”",
    surgicalBody: "CHSS 收集 682 名不超过 30 岁的 AAOCA 患者，其中 395 人接受手术，来自 45 个中心，中位随访 2.8 年。87% 的修复包含去顶。这组数据最适合提醒我们：手术总体低死亡率、常能解除缺血，但仍是一项真实的心脏手术。",
    chssStats: [
      ["13 人 / 15 次", "冠脉相关再次手术"],
      ["8%", "新出现轻度以上主动脉瓣关闭不全"],
      ["2%", "新出现中度以上主动脉瓣关闭不全"],
      ["4 例", "术后死亡"],
      ["51/64", "术前有缺血者术后缺血消失"],
    ],
    chssNote: "分母并不完全相同：主动脉瓣关闭不全按有术前/术后评估的 358 人计算；缺血按术前有缺血的 64 人计算。不能把这些数字相加。",
    decisionHeading: "把 20 篇浓缩成一条决策链",
    decisionSteps: ["R-AAOCA", "症状是否与运动相关", "开口与近端最小径", "壁内段及其长度", "动态负荷下是否缺血", "观察随访或选择术式"],
    decisionFinal: "最符合全部证据的不是“保守最好”，也不是“早点做掉最安全”，而是精准找出自然史风险已经高于一次低风险外科修复代价的那一小部分患者。",
    sourcesHeading: "本文用到的文献记录",
    sourcesLede: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
  },
  en: {
    back: "← Back to home",
    label: "Evidence analysis · 20-paper reading set",
    title: "Pediatric right-AAOCA: patient counts, operation rates, techniques, and follow-up side by side",
    lede:
      "Read only surgical series and repair looks safe and mature. Read only real-world cohorts and most children are not operated on. These findings are not contradictory: one asks how selected operations perform; the other asks who crosses the threshold for surgery after diagnosis.",
    checked:
      "This page was assembled by AI from the library records, PubMed metadata/abstracts, and available full texts. No medical professional reviewed it. The figures explain studies; they do not guide individual care. NR means not reported in the accessible article information.",
    toc: "On this page",
    tocItems: [
      ["takeaway", "Bottom line"],
      ["timeline", "Evidence timeline"],
      ["decision-cohorts", "Real-world operation rates"],
      ["comparison", "Patient-data comparison"],
      ["technique", "Unroofing or reimplantation"],
      ["physiology", "Why dynamic ischemia matters"],
      ["surgical-cost", "Repair does not erase risk"],
      ["decision", "The decision chain"],
    ],
    takeawayHeading: "Bottom line: the hardest question is not how to repair, but whom to repair",
    takeaway: [
      ["Right-AAOCA does not mean automatic surgery", "Across pediatric and adolescent real-world cohorts, roughly 18%–37% underwent repair. Different definitions and referral patterns mean those percentages must not be pooled."],
      ["High-risk anatomy is not one switch", "An intramural course matters, but so do ostial minimum diameter, the length of proximal narrowing, symptoms, and evidence of ischemia under exercise-like stress."],
      ["Repair is mature, not cost-free", "Unroofing and reimplantation have low mortality at experienced centres, while multicentre data still record aortic insufficiency, coronary reoperation, and a small number of postoperative deaths."],
    ],
    timelineHeading: "How the evidence changed",
    timelineLede: "Early work largely established that repair could be done safely. Recent work asks who actually develops dynamic flow limitation.",
    cohortsHeading: "Separate “how many are operated on?” from “how well does surgery work?”",
    cohortsLede: "These four cohorts can inform real-world selection. The Japanese and Texas cohorts include left-AAOCA, so they are not pure right-AAOCA estimates.",
    cohortHeaders: ["Cohort", "Total", "Operated", "Observed / not repaired"],
    comparisonHeading: "Patient data, study by study",
    comparisonLede: "The 20-paper reading set yields 14 cohorts or case series plus one mechanistic case report. They answer different questions and are not pooled.",
    headers: ["Study", "Population and count (total / AAORCA)", "Age", "Intramural/proximal anatomy", "Operation rate", "Technique", "Follow-up", "Death/ischemia/reintervention", "What it actually answers"],
    techniqueHeading: "Unroofing vs reimplantation: let the anatomy choose",
    techniqueLede: "No evidence establishes one best repair for every AAORCA. The issue is which operation actually corrects the abnormal ostium and proximal narrowing.",
    diagramCaution: "These are published operative-technique drawings used to explain the steps. They are not Jim’s imaging and do not represent an individual child’s surgical plan.",
    longTitle: "A long, definite intramural segment",
    longBody: "When unroofing can create a well-positioned, generous new ostium, it is direct and well established. All 13 adults in the Ramponi/Puskas series had a long intramural segment and underwent formal unroofing, with no death, MI, or reintervention over about 20 months.",
    shortTitle: "A short intramural segment or an unsatisfactory ostium after unroofing",
    shortBody: "Reimplantation or neo-ostial reconstruction becomes more attractive because it changes where the artery starts. A 40-adult reimplantation series reported good intermediate patency, but it cannot be directly extrapolated to an eight-year-old.",
    cabgTitle: "CABG is rarely the default fallback in a young patient",
    cabgBody: "Without severe fixed stenosis, native RCA flow competes with the graft. One graft failure occurred in a 14-adult CABG series, whose authors specifically caution about patients without flow-limiting disease.",
    unroofingFigure: "A: the anomalous ostium is explored after aortotomy; B: a small right-angle clamp maps the intramural course; C: the shared aortic-coronary wall is opened along the probe to complete unroofing.",
    reimplantFigure: "A: the anomalous RCA is dissected and mobilised; B: the ostium is excised as a coronary button; C: the correct sinus is punched at a tension-free, kink-free target for anastomosis.",
    figureCredit: "Unmodified originals: Padalino et al., Frontiers in Cardiovascular Medicine 2021, Figures 3 and 7, CC BY 4.0.",
    physiologyHeading: "The newer question is not only “where does it run?” but “does it obstruct under stress?”",
    physiologyBody: "In 81 adults with R-AAOCA, adenosine FFR—more reflective of fixed narrowing—was abnormal in 6.2%. Dobutamine FFR, closer to the higher heart rate and pressure of exercise, was abnormal in 19.8%. Adult data cannot be applied directly to children, but the contrast makes the dynamic mechanism visible.",
    adenosine: "Abnormal adenosine FFR",
    dobutamine: "Abnormal dobutamine FFR",
    surgicalHeading: "Repair does not reset lifetime risk to zero",
    surgicalBody: "The CHSS enrolled 682 people with AAOCA aged 30 or younger; 395 underwent surgery at 45 centres, with median follow-up of 2.8 years. Unroofing formed part of 87% of repairs. The study shows low mortality and frequent relief of ischemia, while also documenting real morbidity.",
    chssStats: [
      ["13 people / 15 operations", "Coronary-related reoperations"],
      ["8%", "New mild-or-greater aortic insufficiency"],
      ["2%", "New moderate-or-greater aortic insufficiency"],
      ["4", "Postoperative deaths"],
      ["51/64", "Preoperative ischemia no longer present after surgery"],
    ],
    chssNote: "The denominators differ: aortic insufficiency was assessed among 358 with paired evaluations, while ischemia resolution uses the 64 with preoperative ischemia. These figures must not be added together.",
    decisionHeading: "The 20 papers as one decision chain",
    decisionSteps: ["R-AAOCA", "Exertional symptoms", "Ostium and proximal minimum", "Intramural segment and length", "Ischemia under dynamic stress", "Surveillance or anatomy-led repair"],
    decisionFinal: "The combined evidence supports neither “observation is best” nor “early repair is safest.” It supports finding the smaller group whose natural-history risk is likely to exceed the cost of a low-risk open-heart repair.",
    sourcesHeading: "Records used in this analysis",
    sourcesLede: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
} as const;

const cohortRows = [
  { study: "广东儿童纯 AAORCA / Guangdong pediatric AAORCA", total: "151", surgery: "46 (30.5%)", observed: "105 (69.5%)" },
  { study: "Bibevski 纯 AAORCA / AAORCA-only", total: "86", surgery: "26 (30%)", observed: "60 (70%)" },
  { study: "日本儿童混合 AAOCA / Japan pediatric AAOCA", total: "106", surgery: "39 (36.8%)", observed: "67 (63.2%)" },
  { study: "Texas Children’s 混合 AAOCA / pediatric AAOCA", total: "573", surgery: "102 (17.8%)", observed: "471 (82.2%)" },
] as const;

const sourceTitles = [
  ["2026-d29299373d7f", "广东 151 例儿童 AAORCA / Guangdong pediatric AAORCA"],
  ["2026-52c6c055cafa", "日本全国儿童调查 / Japan nationwide pediatric survey"],
  ["2022-27e176bacbca", "Bibevski：手术与非手术 AAORCA / Surgical and nonsurgical AAORCA"],
  ["2014-bcb1e74fe841", "Stanford：按解剖选择修复 / Anatomy-led surgical repair"],
  ["2014-77e6509d5d2b", "Mayo：去顶术系列 / Unroofing series"],
  ["2026-c8277633b54d", "成人 AAORCA 再植 / Adult AAORCA reimplantation"],
  ["2024-34d565d9bb4a", "成人长壁内段去顶 / Adult long-intramural unroofing"],
  ["2023-0e3e40c1fa52", "AAOCA 的 CABG / CABG for anomalous coronaries"],
  ["2026-94384acd16a9", "CCTA 几何参数与 FFR / CCTA geometry and FFR"],
  ["2019-d1b9776f9b3b", "多巴酚丁胺 iFR 机制病例 / Dobutamine-iFR mechanistic case"],
  ["2026-99c7e79f5a20", "CCTA + 运动 SPECT / CCTA + exercise SPECT"],
  ["2025-b6136fc7d7f1", "运动负荷超声 / Exercise stress echocardiography"],
  ["2025-6dde4b2363c8", "儿童多巴酚丁胺负荷 CMR / Pediatric dobutamine stress CMR"],
  ["2015-cd9815edea3c", "成人 CCTA 自然史 / Adult CCTA outcomes"],
  ["2026-3354413da98c", "Texas Children’s 573 例 / 573-patient pediatric cohort"],
  ["2020-576e33889fe8", "CHSS 多中心手术结局 / CHSS multicentre repair outcomes"],
] as const;

export function AnalysisPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const copy = articleCopy[lang];
  const meta = analysisBySlug("aaorca-evidence-20-studies");
  const path = analysisPath(meta.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "AnalysisNewsArticle",
    headline: copy.title,
    description: copy.lede,
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: dict.htmlLang,
    url: absoluteUrl(`${dict.basePath}${path}`),
    mainEntityOfPage: absoluteUrl(`${dict.basePath}${path}`),
    author: {
      "@type": "Organization",
      name: "AAOCA Research Library contributors",
    },
    citation: [
      ...sourceTitles.map(([slug]) => absoluteUrl(`${dict.basePath}/papers/${slug}`)),
      "https://doi.org/10.3389/fcvm.2021.626108",
    ],
  };

  return (
    <main className="analysis-shell">
      <SiteHeader dict={dict} path={path} />

      <article className="analysis-article">
        <Link className="back-link" href={href(dict, "/")}>
          {copy.back}
        </Link>

        <header className="analysis-article-header">
          <div className="analysis-byline">
            <span>{copy.label}</span>
            <time dateTime={meta.date}>{meta.dateLabel[lang]}</time>
            <span>{meta.readingLabel[lang]}</span>
          </div>
          <h1>{copy.title}</h1>
          <p className="analysis-standfirst">{copy.lede}</p>
          <p className="analysis-method-note">{copy.checked}</p>
        </header>

        <nav className="analysis-toc" aria-label={copy.toc}>
          <strong>{copy.toc}</strong>
          <ol>
            {copy.tocItems.map(([id, label], index) => (
              <li key={id}>
                <a href={`#${id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className="analysis-section" id="takeaway">
          <p className="eyebrow">01 · {copy.tocItems[0][1]}</p>
          <h2>{copy.takeawayHeading}</h2>
          <div className="takeaway-grid">
            {copy.takeaway.map(([heading, body], index) => (
              <article key={heading}>
                <span>0{index + 1}</span>
                <h3>{heading}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="analysis-section" id="timeline">
          <p className="eyebrow">02 · {copy.tocItems[1][1]}</p>
          <h2>{copy.timelineHeading}</h2>
          <p className="analysis-section-lede">{copy.timelineLede}</p>
          <ol className="evidence-timeline">
            {evidenceTimeline.map((item) => (
              <li key={item.year}>
                <time>{item.year}</time>
                <span>{item[lang]}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="analysis-section" id="decision-cohorts">
          <p className="eyebrow">03 · {copy.tocItems[2][1]}</p>
          <h2>{copy.cohortsHeading}</h2>
          <p className="analysis-section-lede">{copy.cohortsLede}</p>
          <div className="analysis-table-wrap compact-table">
            <table>
              <thead>
                <tr>
                  {copy.cohortHeaders.map((header) => <th key={header}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {cohortRows.map((row) => (
                  <tr key={row.study}>
                    <th scope="row">{row.study}</th>
                    <td data-label={copy.cohortHeaders[1]}>{row.total}</td>
                    <td data-label={copy.cohortHeaders[2]}><strong>{row.surgery}</strong></td>
                    <td data-label={copy.cohortHeaders[3]}>{row.observed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cohort-contrast">
            <div>
              <span>{lang === "zh" ? "真实世界队列问" : "Real-world cohorts ask"}</span>
              <strong>{lang === "zh" ? "诊断以后，谁跨过手术门槛？" : "Who crosses the threshold after diagnosis?"}</strong>
            </div>
            <div aria-hidden="true">≠</div>
            <div>
              <span>{lang === "zh" ? "手术系列问" : "Surgical series ask"}</span>
              <strong>{lang === "zh" ? "已经决定手术的人，修复效果如何？" : "How do selected operations perform?"}</strong>
            </div>
          </div>
        </section>

        <section className="analysis-section wide-section" id="comparison">
          <p className="eyebrow">04 · {copy.tocItems[3][1]}</p>
          <h2>{copy.comparisonHeading}</h2>
          <p className="analysis-section-lede">{copy.comparisonLede}</p>
          <div className="table-legend">
            <span><i className="dot selective" />{lang === "zh" ? "选择性/自然史队列" : "Selection/natural-history cohort"}</span>
            <span><i className="dot surgical" />{lang === "zh" ? "已筛选手术系列" : "Selected surgical series"}</span>
            <span><i className="dot functional" />{lang === "zh" ? "功能学/机制研究" : "Functional/mechanistic study"}</span>
          </div>
          <div className="analysis-table-wrap evidence-table">
            <table>
              <thead>
                <tr>{copy.headers.map((header) => <th key={header}>{header}</th>)}</tr>
              </thead>
              <tbody>
                {evidenceRows.map((row) => (
                  <tr className={row.kind} key={row.slug}>
                    <th scope="row">
                      <Link href={href(dict, `/papers/${row.slug}`)}>{row.study}</Link>
                    </th>
                    <td data-label={copy.headers[1]}><span className="cell-label">{row.population[lang]}</span>{row.patients}</td>
                    <td data-label={copy.headers[2]}>{row.age[lang]}</td>
                    <td data-label={copy.headers[3]}>{row.anatomy[lang]}</td>
                    <td data-label={copy.headers[4]}>{row.surgery[lang]}</td>
                    <td data-label={copy.headers[5]}>{row.technique[lang]}</td>
                    <td data-label={copy.headers[6]}>{row.followUp[lang]}</td>
                    <td data-label={copy.headers[7]}>{row.outcome[lang]}</td>
                    <td data-label={copy.headers[8]}>{row.signal[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="analysis-section" id="technique">
          <p className="eyebrow">05 · {copy.tocItems[4][1]}</p>
          <h2>{copy.techniqueHeading}</h2>
          <p className="analysis-section-lede">{copy.techniqueLede}</p>
          <p className="diagram-caution">{copy.diagramCaution}</p>
          <div className="technique-paths">
            <article className="procedure-card">
              <div className="procedure-copy">
                <span className="path-tag">A</span>
                <h3>{copy.longTitle}</h3>
                <p>{copy.longBody}</p>
              </div>
              <figure className="technical-figure">
                {/* The original CC BY figure is intentionally not cropped or altered. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figures/aaoca-unroofing-technical.jpg"
                  width="669"
                  height="311"
                  loading="lazy"
                  alt={lang === "zh" ? "去顶术技术图：主动脉切开、探针定位壁内段和切开共同壁" : "Unroofing technique: aortotomy, probe mapping of the intramural segment, and opening the shared wall"}
                />
                <figcaption>
                  <strong>{copy.unroofingFigure}</strong>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8149602/#F3" target="_blank" rel="noreferrer">
                    {copy.figureCredit} <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
              </figure>
            </article>
            <article className="procedure-card reimplant-card">
              <div className="procedure-copy">
                <span className="path-tag">B</span>
                <h3>{copy.shortTitle}</h3>
                <p>{copy.shortBody}</p>
              </div>
              <figure className="technical-figure portrait-figure">
                {/* The original CC BY figure is intentionally not cropped or altered. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figures/aaorca-reimplantation-technical.jpg"
                  width="630"
                  height="846"
                  loading="lazy"
                  alt={lang === "zh" ? "再植术技术图：游离异常冠脉、切取冠脉纽扣并在正确冠窦打孔" : "Reimplantation technique: mobilisation, coronary-button excision, and punching the correct sinus"}
                />
                <figcaption>
                  <strong>{copy.reimplantFigure}</strong>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8149602/#F7" target="_blank" rel="noreferrer">
                    {copy.figureCredit} <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
              </figure>
            </article>
            <article className="cabg-path">
              <span className="path-tag">C</span>
              <h3>{copy.cabgTitle}</h3>
              <p>{copy.cabgBody}</p>
            </article>
          </div>
        </section>

        <section className="analysis-section physiology-section" id="physiology">
          <div>
            <p className="eyebrow">06 · {copy.tocItems[5][1]}</p>
            <h2>{copy.physiologyHeading}</h2>
            <p className="analysis-section-lede">{copy.physiologyBody}</p>
          </div>
          <div className="ffr-comparison" aria-label="FFR comparison">
            <div>
              <span>{copy.adenosine}</span>
              <strong>6.2%</strong>
              <i style={{ "--bar": "31%" } as CSSProperties} />
              <small>5 / 81</small>
            </div>
            <div>
              <span>{copy.dobutamine}</span>
              <strong>19.8%</strong>
              <i style={{ "--bar": "99%" } as CSSProperties} />
              <small>16 / 81</small>
            </div>
          </div>
        </section>

        <section className="analysis-section" id="surgical-cost">
          <p className="eyebrow">07 · {copy.tocItems[6][1]}</p>
          <h2>{copy.surgicalHeading}</h2>
          <p className="analysis-section-lede">{copy.surgicalBody}</p>
          <div className="chss-grid">
            {copy.chssStats.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <p className="denominator-note">{copy.chssNote}</p>
          <Link className="analysis-source-link" href={href(dict, "/papers/2020-576e33889fe8")}>
            {lang === "zh" ? "查看 CHSS 原始记录" : "Open the CHSS record"} <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="analysis-section decision-section" id="decision">
          <p className="eyebrow">08 · {copy.tocItems[7][1]}</p>
          <h2>{copy.decisionHeading}</h2>
          <ol className="decision-chain">
            {copy.decisionSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <blockquote>{copy.decisionFinal}</blockquote>
        </section>

        <section className="analysis-section analysis-sources">
          <p className="eyebrow">{lang === "zh" ? "文献入口" : "Sources"}</p>
          <h2>{copy.sourcesHeading}</h2>
          <p className="analysis-section-lede">{copy.sourcesLede}</p>
          <ol>
            {sourceTitles.map(([slug, title]) => (
              <li key={slug}>
                <Link href={href(dict, `/papers/${slug}`)}>{title}</Link>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <SiteFooter dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
