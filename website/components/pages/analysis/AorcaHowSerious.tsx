import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-how-serious";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "患者指南 · AAORCA", en: "Patient guide · AAORCA" },
  title: {
    zh: "右冠状动脉异常起源于左冠窦（AAORCA）：到底严重吗？",
    en: "Right coronary artery arising from the left sinus (AAORCA): how serious is it?",
  },
  lede: {
    zh: "右冠状动脉起源异常（AAORCA，也常写作 R-AAOCA）是指右冠状动脉没有从右冠窦发出，而是从左冠窦发出。这篇按家长最常搜索的顺序回答：它是什么、哪些解剖特征被认为更危险、猝死风险到底有多大、要做哪些检查、什么情况下考虑手术、能不能运动，以及各国共识怎么说。",
    en: "Anomalous aortic origin of the right coronary artery (AAORCA, also written R-AAOCA) means the right coronary artery arises from the left sinus rather than the right. This page answers in the order families usually search: what it is, which anatomical features are considered more dangerous, how large the sudden-death risk really is, which tests are used, when surgery is considered, whether sport can continue, and what the consensus documents say.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅，不能替代医生的诊断和建议。本页没有给出任何一个具体孩子的风险数字；凡本库未持有全文的文献，其数字仅来自题录与摘要层面。是否检查、是否手术、能否运动，必须由你的心内科与心外科团队结合影像和检查结果决定。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it and it does not replace medical diagnosis or advice. It gives no risk figure for any individual child; where this library does not hold a full text, figures rest on metadata and abstract level only. Whether to test, operate, or restrict sport must be decided by your cardiology and surgical team from the actual imaging and test results.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this page" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2020-8bcae4884a2a", title: { zh: "先天性心脏病外科治疗中国专家共识（十二）：先天性冠状动脉异常", en: "Chinese expert consensus (part 12): congenital coronary anomalies" } },
    { slug: "2017-eef7d139c8b6", title: { zh: "AATS 2017 专家共识：AAOCA", en: "AATS 2017 expert consensus: AAOCA" } },
    { slug: "2020-27b1754e3df3", title: { zh: "ASE 先天性冠状动脉异常多模态评估指南", en: "ASE multimodality assessment of congenital coronary anomalies" } },
    { slug: "2024-b021e8a43bf9", title: { zh: "儿童冠状动脉起源异常综述", en: "Anomalous aortic origin of a coronary artery in pediatric patients" } },
    { slug: "2019-29a21e711c7a", title: { zh: "CHSS：与心肌缺血相关的解剖特征", en: "CHSS: anatomic features associated with myocardial ischemia" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA 的缺血与结局", en: "Texas Children’s 220-child R-AAOCA ischemia cohort" } },
    { slug: "2026-d29299373d7f", title: { zh: "151 例儿童 AAORCA：解剖特征与症状的不一致", en: "151 children with AAORCA: anatomy and symptoms disagree" } },
    { slug: "2026-924accf79cba", title: { zh: "AHA 2026：儿童冠状动脉缺血检测科学声明", en: "AHA 2026 statement on coronary ischemic testing in children" } },
    { slug: "2023-bdc164171ffa", title: { zh: "运动负荷试验能否用于 AAOCA 风险分层", en: "Is exercise stress testing useful for risk stratification in AAOCA?" } },
    { slug: "2020-576e33889fe8", title: { zh: "CHSS 多中心手术结局", en: "CHSS multicentre repair outcomes" } },
    { slug: "2025-96ebfd17d8eb", title: { zh: "AHA/ACC 2025：心血管异常运动员的竞技运动参与", en: "AHA/ACC 2025 statement on competitive sports participation" } },
    { slug: "2015-d96e5cc95fe6", title: { zh: "AHA/ACC 2015：竞技运动员资格联合声明", en: "AHA/ACC 2015 competitive athlete eligibility statement" } },
  ],
};

const sections: Section[] = [
  {
    id: "short-answer",
    nav: { zh: "先看结论", en: "Short answer" },
    kind: "cards",
    heading: { zh: "三句话回答「严重吗」", en: "Three sentences on “how serious”" },
    items: [
      {
        title: { zh: "不是所有人都危险", en: "Not everyone is at high risk" },
        body: {
          zh: "AAORCA 常因为别的原因做心脏检查时被偶然发现，很多人终身没有症状。本库收录的多个儿童真实世界队列里，大部分右冠型患者没有接受手术。",
          en: "AAORCA is often found by chance during a heart check done for another reason, and many people never have symptoms. In several real-world pediatric cohorts in this library, most right-sided patients were not operated on.",
        },
      },
      {
        title: { zh: "但也不能当作「没事」", en: "But it cannot be treated as “nothing”" },
        body: {
          zh: "在运动时，这条异常的冠状动脉有可能受压或供血不足。有运动中晕厥、运动相关胸痛，或者已经检查出诱发性缺血的人，应当认真评估是否需要手术。",
          en: "During exercise this anomalous artery can be compressed or under-perfused. People with exertional syncope, exertional chest pain, or demonstrated inducible ischemia warrant a serious assessment for surgery.",
        },
      },
      {
        title: { zh: "关键不在片子「难不难看」", en: "What matters is less how the scan looks" },
        body: {
          zh: "壁内段、主动脉-肺动脉间走行、裂隙样开口都是线索，但目前没有任何一项能单独预测谁会出事。更有分量的是症状史，以及负荷状态下有没有缺血。",
          en: "An intramural segment, an interarterial course, and a slit-like ostium are all clues, but none predicts alone who will have a problem. More weight rests on the symptom history and on whether ischemia appears under stress.",
        },
      },
    ],
  },
  {
    id: "what-is-it",
    nav: { zh: "是什么", en: "What it is" },
    kind: "prose",
    heading: { zh: "右冠起源于左冠窦，是什么意思", en: "What “right coronary from the left sinus” means" },
    paragraphs: [
      {
        zh: "心脏自己的血管叫冠状动脉。通常，右冠状动脉从主动脉根部的右冠窦发出，左冠状动脉从左冠窦发出。AAORCA 指的是右冠状动脉的开口长在了对侧——左冠窦——然后再绕到心脏右侧去供血。因为开口在「对面」，医学上也把它称为从对侧冠窦起源的冠状动脉异常（R-ACAOS）。",
        en: "The heart’s own blood vessels are the coronary arteries. Normally the right coronary artery arises from the right sinus of the aortic root and the left coronary from the left sinus. In AAORCA the right coronary artery’s opening sits on the opposite side — the left sinus — and the vessel then travels back across to supply the right side of the heart. Because the opening is on the opposite sinus, the condition is also called R-ACAOS.",
      },
      {
        zh: "它属于先天性变异，出生就有，不是后天形成的，也不是由孩子的饮食、运动或家长的行为造成的。它与左冠状动脉起源于右冠窦（L-AAOCA）是同一大类里的不同类型，两者的风险特点并不相同，查资料时要分清是哪一种。",
        en: "It is congenital: present from birth, not acquired, and not caused by a child’s diet, activity, or anything a parent did. It belongs to the same family as the left coronary artery arising from the right sinus (L-AAOCA), but the two types behave differently, so when you read it matters which one a source is describing.",
      },
    ],
  },
  {
    id: "dangerous-anatomy",
    nav: { zh: "哪些解剖特征", en: "Anatomical features" },
    kind: "table",
    wide: true,
    heading: { zh: "报告里常见的几个词：壁内段、主肺动脉间走行、裂隙样开口", en: "Words you will meet in the report: intramural, interarterial, slit-like" },
    lede: {
      zh: "影像报告里出现的这些词，被认为与风险有关，但它们是「线索」而不是「判决」。",
      en: "These report terms are associated with risk, but they are clues, not verdicts.",
    },
    headers: [
      { zh: "术语", en: "Term" },
      { zh: "通俗解释", en: "Plain meaning" },
      { zh: "为什么被关注", en: "Why it draws attention" },
    ],
    rows: [
      [
        { zh: "壁内段", en: "Intramural segment" },
        { zh: "这段冠状动脉不是在主动脉外面走，而是埋在主动脉壁里面。", en: "A stretch of the coronary artery that runs inside the aortic wall instead of outside it." },
        { zh: "运动时主动脉扩张，可能挤压壁内的血管；壁内段的长短也决定了手术怎么做。", en: "The aorta expands with exertion and may squeeze the embedded vessel; its length also shapes the choice of operation." },
      ],
      [
        { zh: "主动脉—肺动脉间走行", en: "Interarterial course" },
        { zh: "冠状动脉从主动脉和肺动脉两根大血管之间穿过。", en: "The coronary artery passes between the aorta and the pulmonary artery." },
        { zh: "理论上运动时两根大血管同时扩张，可能夹住中间的冠状动脉。", en: "In theory both great vessels expand during exercise and could pinch the artery between them." },
      ],
      [
        { zh: "裂隙样开口", en: "Slit-like ostium" },
        { zh: "冠状动脉的开口不是圆的，而是扁成一条缝。", en: "The artery’s opening is flattened into a slit rather than round." },
        { zh: "开口窄，血流进入受限；运动需要更多血流时可能不够。", en: "A narrow opening limits inflow, which may fall short when exercise demands more flow." },
      ],
      [
        { zh: "锐角起源", en: "Acute take-off angle" },
        { zh: "血管离开主动脉时拐了一个很尖的角度。", en: "The vessel leaves the aorta at a sharp angle." },
        { zh: "尖角可能让开口更容易被压扁。", en: "A sharp angle may make the opening easier to collapse." },
      ],
    ],
    note: {
      zh: "本库收录的儿童队列显示，这些特征与缺血并不完全对应：解剖看起来高危的孩子，负荷检查不一定出现缺血。详见《高危解剖不等于高危生理》。",
      en: "Pediatric cohorts in this library show these features do not map cleanly onto ischemia: a child with high-risk-looking anatomy does not necessarily show ischemia on stress testing. See the analysis “High-risk anatomy is not high-risk physiology”.",
    },
  },
  {
    id: "sudden-death",
    nav: { zh: "猝死风险", en: "Sudden-death risk" },
    kind: "prose",
    heading: { zh: "会猝死吗？风险到底有多大", en: "Can it cause sudden death? How large is the risk?" },
    paragraphs: [
      {
        zh: "先说清楚能说的：AAOCA 是年轻运动员运动相关心脏骤停的已知原因之一，这也是它受到重视的原因。但同时，现有证据普遍认为右冠型总体风险低于左冠型（L-AAOCA），2025 年 AHA/ACC 的竞技运动科学声明对两者采取了明显不同的立场。",
        en: "What can be said plainly: AAOCA is a recognised cause of exercise-related cardiac arrest in young athletes, which is why it is taken seriously. At the same time, current evidence generally places right-sided disease at lower risk than left-sided disease (L-AAOCA), and the 2025 AHA/ACC competitive sports statement takes a clearly different position on the two.",
      },
      {
        zh: "再说不能说的：目前没有一个可靠的数字，能告诉你「某个具体孩子在未来几年里发生猝死的概率」。这类事件很少见，研究人群大多是已经被发现问题、被转诊到专业中心的人，既可能高估也可能低估一般人群的风险；各研究的随访时间也偏短。本站不会给出一个看似精确的百分比。",
        en: "And what cannot be said: no reliable figure tells you “the probability that this particular child will die suddenly in the coming years”. Such events are rare, study populations are mostly people already identified and referred to specialist centres, which can over- or under-state risk for the general population, and follow-up is short. This site will not offer a deceptively precise percentage.",
      },
      {
        zh: "可以参考的是已发表队列的方向：在 Texas Children’s 的 220 例儿童 R-AAOCA 研究和广东 151 例儿童 AAORCA 研究中，大部分患者并未手术；后者的非手术组 105 例随访期间总体稳定，未观察到心源性猝死或主要心血管事件，但作者也明确说随访时间偏短，不足以评价长期风险。",
        en: "What can be used is the direction of published cohorts: in the 220-child Texas Children’s R-AAOCA study and the 151-child Guangdong AAORCA study, most patients were not operated on; in the latter, the 105 non-surgical patients remained broadly stable with no sudden cardiac death or major cardiovascular event observed, though the authors state follow-up was too short to judge long-term risk.",
      },
    ],
  },
  {
    id: "symptoms",
    nav: { zh: "症状", en: "Symptoms" },
    kind: "cards",
    heading: { zh: "哪些表现需要立刻重视", en: "Which signs should be taken seriously" },
    lede: {
      zh: "下面这些表现不一定由 AAORCA 引起，但在已知有这个解剖变异的孩子身上，应当尽快告诉医生。",
      en: "These signs are not necessarily caused by AAORCA, but in a child known to have this variant they should be reported to the clinician promptly.",
    },
    items: [
      {
        title: { zh: "运动中或运动后晕厥", en: "Fainting during or after exercise" },
        body: {
          zh: "运动时突然头晕、眼前发黑、倒下，是最需要重视的信号，应当停止运动并尽快就医。",
          en: "Sudden dizziness, greying of vision, or collapse during exertion is the signal that matters most; stop the activity and seek care promptly.",
        },
      },
      {
        title: { zh: "运动相关的胸痛或胸闷", en: "Exertional chest pain or tightness" },
        body: {
          zh: "可重复出现的、一运动就发生的胸痛，比静息时偶尔的胸痛更有意义。儿童胸痛多数并非心脏原因，但对已知 AAORCA 者不应忽略。",
          en: "Reproducible pain that comes on with exertion matters more than an occasional pain at rest. Most chest pain in children is not cardiac, but in a child with known AAORCA it should not be dismissed.",
        },
      },
      {
        title: { zh: "运动时心悸或异常心跳", en: "Palpitations or irregular beats with exercise" },
        body: {
          zh: "运动时出现心跳突然加快、不规则，或伴随眩晕，应当记录发生情形，并考虑做运动心电监测。",
          en: "A sudden fast or irregular heartbeat, or one accompanied by light-headedness, during exercise should be documented and may prompt monitored exercise ECG.",
        },
      },
    ],
  },
  {
    id: "tests",
    nav: { zh: "做哪些检查", en: "Tests" },
    kind: "table",
    wide: true,
    heading: { zh: "需要做哪些检查", en: "Which tests are used" },
    lede: {
      zh: "常见的检查组合是：先用超声发现线索，再用 CTA 或心脏 MRI 看清开口和走行，最后用负荷检查判断运动时心肌供血够不够。",
      en: "The usual sequence is echocardiography to find clues, CTA or cardiac MRI to define ostium and course, then stress testing to ask whether blood supply is adequate during exertion.",
    },
    headers: [
      { zh: "检查", en: "Test" },
      { zh: "回答什么问题", en: "Question it answers" },
      { zh: "局限", en: "Limit" },
    ],
    rows: [
      [
        { zh: "心脏超声", en: "Echocardiography" },
        { zh: "初步发现冠状动脉开口位置有无异常，同时排除其他结构问题。", en: "Initial look at ostial position, and screening for other structural problems." },
        { zh: "对壁内段和走行看得不够完整，不能用来排除。", en: "Does not show the intramural segment and course fully; it cannot be used to exclude." },
      ],
      [
        { zh: "冠状动脉 CTA", en: "Coronary CTA" },
        { zh: "开口位置、壁内段长度、是否走在两大血管之间、开口形态。", en: "Ostial position, intramural length, whether it passes between the great vessels, ostial shape." },
        { zh: "有电离辐射；只显示解剖，不显示运动时的血流。", en: "Involves ionising radiation; shows anatomy, not flow during exercise." },
      ],
      [
        { zh: "心脏 MRI / 负荷 CMR", en: "Cardiac MRI / stress CMR" },
        { zh: "无辐射下看解剖，负荷 CMR 还可观察心肌灌注是否受影响。", en: "Anatomy without radiation; stress CMR can also look at whether myocardial perfusion is affected." },
        { zh: "低龄儿童可能需要镇静，各中心的开展程度不同。", en: "Younger children may need sedation, and availability varies between centres." },
      ],
      [
        { zh: "运动负荷试验 / 心肺运动试验", en: "Exercise stress test / cardiopulmonary exercise test" },
        { zh: "运动时有没有症状、心律失常或心电图缺血改变。", en: "Whether symptoms, arrhythmia, or ECG ischemic change appear during exercise." },
        { zh: "一次阴性不能完全排除；负荷强度和方式会影响结果的分量。", en: "One negative result does not fully exclude; the intensity and mode of stress change how much it weighs." },
      ],
    ],
    note: {
      zh: "做哪些检查、什么时候做，由医生按具体情况决定。AHA 2026 儿童缺血检测声明建议按临床问题选择方式，而不是机械重复同一种检查。详见《怎样才算证明缺血》。",
      en: "Which tests, and when, is a clinical decision. The AHA 2026 pediatric ischemic testing statement advises choosing the modality from the clinical question rather than repeating one test. See the analysis “What counts as demonstrating ischemia”.",
    },
  },
  {
    id: "surgery",
    nav: { zh: "什么时候考虑手术", en: "When surgery is considered" },
    kind: "prose",
    heading: { zh: "什么情况下会考虑手术", en: "When surgery is considered" },
    paragraphs: [
      {
        zh: "各中心意见比较一致的是：已经出现心脏骤停、经评估由该异常引起的运动性晕厥，或检查证实了诱发性心肌缺血，这些情况下通常会认真考虑手术。争议主要集中在没有症状、没有缺血证据，只是 CTA 看起来「高危」的那部分人。",
        en: "Centres broadly agree that surgery is seriously considered after cardiac arrest, after exertional syncope attributed to the anomaly, or when inducible myocardial ischemia is demonstrated. The disagreement concentrates on people with no symptoms and no ischemia evidence whose CTA merely looks high-risk.",
      },
      {
        zh: "手术并非没有代价。CHSS 多中心数据记录了新发主动脉瓣关闭不全、残余缺血和冠状动脉相关再次手术；常见术式有去顶术、冠状动脉再植等，选择主要取决于壁内段的长度和位置。这些内容详见《术式跟着壁内段走》和「要不要手术」专题页。",
        en: "Surgery is not free of cost. The CHSS multicentre data record new aortic regurgitation, residual ischemia, and coronary-related reoperation; common techniques include unroofing and coronary reimplantation, chosen mainly by intramural length and position. See the analysis “Technique follows the intramural segment” and the surgery question page.",
      },
      {
        zh: "如果医生建议手术，向有经验的大型先心病中心多咨询几家，并问清主刀医生做过多少例解剖类似的手术，是合理的。本站「国内就医线索」页对此有具体建议。",
        en: "If surgery is advised, it is reasonable to consult more than one experienced congenital-heart centre and to ask how many anatomically similar repairs the operating surgeon has performed. The care-in-China page of this site gives practical advice on this.",
      },
    ],
  },
  {
    id: "exercise",
    nav: { zh: "能不能运动", en: "Exercise" },
    kind: "prose",
    heading: { zh: "能不能运动", en: "Can sport continue" },
    paragraphs: [
      {
        zh: "这是证据最薄的一块：专门研究 AAOCA 与运动的文献本来就少。能说的是方向：过去的建议更严格，近年对右冠型更倾向于「先完整评估，再共同决策」。2025 年 AHA/ACC 声明认为，主动脉—肺动脉间走行的右冠型患者如果没有提示缺血的症状、没有诱发性缺血，经过完整评估和共同决策后，参加竞技运动可能是合理的。",
        en: "This is the thinnest part of the evidence: research specific to AAOCA and exercise is scarce. The direction can be stated: earlier advice was stricter, and recent guidance for right-sided disease leans toward complete assessment first, then shared decision-making. The 2025 AHA/ACC statement holds that for interarterial right-sided patients with no ischemic symptoms and no inducible ischemia, competitive sport may be reasonable after complete evaluation and shared decision-making.",
      },
      {
        zh: "请注意这个结论的前提是「已经完成功能评估」，而不是「还没查过」。尚未评估的孩子，或者出现过运动晕厥、运动胸痛的孩子，运动安排应先咨询医生。",
        en: "Note the premise: functional evaluation has been completed, not that it has not yet been done. For a child who has not been evaluated, or who has had exertional syncope or chest pain, activity should first be discussed with the clinician.",
      },
    ],
  },
  {
    id: "consensus",
    nav: { zh: "共识怎么说", en: "What consensus says" },
    kind: "table",
    heading: { zh: "各国共识与指南各说了什么", en: "What the consensus documents say" },
    headers: [
      { zh: "文件", en: "Document" },
      { zh: "和这个问题相关的内容", en: "Relevance to this question" },
    ],
    rows: [
      [
        { zh: "先天性心脏病外科治疗中国专家共识（十二）", en: "Chinese expert consensus on surgery for congenital heart disease (part 12)" },
        { zh: "国内先天性冠状动脉异常外科治疗的专家意见，是国内医生讨论手术指征时的常用参考。", en: "Expert opinion on surgery for congenital coronary anomalies in China, commonly referenced by domestic clinicians." },
      ],
      [
        { zh: "AATS 2017 AAOCA 专家共识", en: "AATS 2017 AAOCA expert consensus" },
        { zh: "国际上以外科为主的专家共识，对诊断评估、手术指征和术后随访给出框架。", en: "A surgery-led international consensus giving a framework for evaluation, indications, and postoperative follow-up." },
      ],
      [
        { zh: "ASE 先天性冠状动脉异常多模态评估指南", en: "ASE multimodality assessment of congenital coronary anomalies" },
        { zh: "影像学会的指南，说明超声、CTA、MRI 各自适合回答什么问题。", en: "An imaging society guide on what echocardiography, CTA, and MRI are each suited to answer." },
      ],
      [
        { zh: "AHA/ACC 2015 与 2025 竞技运动声明", en: "AHA/ACC 2015 and 2025 competitive sports statements" },
        { zh: "说明有心血管异常的运动员如何评估和决定是否参赛；2025 版对右冠型的立场与 2015 版相比有变化。", en: "Describe how athletes with cardiovascular abnormalities are assessed and cleared; the 2025 version’s stance on right-sided disease has changed from 2015." },
      ],
    ],
    note: {
      zh: "共识不是随机试验的结论，多数建议的证据等级偏低。把它们当作与医生讨论的起点，而不是终点。",
      en: "Consensus statements are not randomised-trial conclusions, and most recommendations rest on low-level evidence. Treat them as the starting point for a discussion with your clinician, not the end of it.",
    },
  },
  {
    id: "questions",
    nav: { zh: "带去门诊的问题", en: "Questions to ask" },
    kind: "steps",
    heading: { zh: "带去门诊的五个问题", en: "Five questions to take to the clinic" },
    steps: [
      { zh: "这是不是右冠起源于左冠窦？壁内段多长，是否走在两大血管之间？", en: "Is this the right coronary from the left sinus? How long is the intramural segment, and does it pass between the great vessels?" },
      { zh: "孩子有没有做过运动负荷评估？是什么方式，强度够吗？", en: "Has stress testing been done? By what method, and was the intensity adequate?" },
      { zh: "目前有没有缺血证据，还是只有 CTA 上的高危解剖？", en: "Is there ischemia evidence, or only high-risk anatomy on CTA?" },
      { zh: "如果选择观察，多久复查一次？出现什么情况要重新讨论手术？", en: "If observing, how often is review, and what would reopen the surgery discussion?" },
      { zh: "现在能做哪些运动，哪些需要暂时避免？", en: "Which activities are fine now, and which should be avoided for the moment?" },
    ],
    quote: {
      zh: "好的门诊讨论，不是医生给一个答案，而是你们一起把「已知、未知、下一步」写清楚。",
      en: "A good clinic discussion is not a single answer from the doctor but a shared page that states what is known, what is unknown, and what comes next.",
    },
  },
];

export function AorcaHowSeriousPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
