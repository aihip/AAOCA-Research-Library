import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-decision-model";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 决策建模", en: "Evidence analysis · decision modelling" },
  title: {
    zh: "从查资料到决策建模：哪些变量真的改变结论",
    en: "From reading papers to modelling the decision: which variables actually move it",
  },
  lede: {
    zh: "读到一定程度，继续增加论文数量不再提高判断质量。更有用的做法是把决策变量摊开，标出每一项背后的证据强度，再排出检查顺序。这样做以后会看到，绝大多数关于 R-AAOCA 的分歧都停在同一个缺口上：负荷状态下到底有没有缺血。",
    en: "Past a point, adding more papers stops improving the judgement. It is more useful to lay the decision variables out, mark how strong the evidence behind each one is, and then order the tests. Do that, and most disagreement about R-AAOCA turns out to rest on a single gap: whether ischemia appears under stress.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅。文中的权重表不是经过验证的临床评分系统，不能把各项相加得出一个总分来决定治疗。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it. The weighting table is not a validated clinical score; the entries must not be summed into a total that decides treatment.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA", en: "Texas Children’s 220-child R-AAOCA cohort" } },
    { slug: "2023-bdc164171ffa", title: { zh: "Qasim：运动负荷试验的分层价值", en: "Qasim: exercise stress testing for risk stratification" } },
    { slug: "2021-b61abb3cb074", title: { zh: "儿童多巴酚丁胺负荷 CMR 的可行性", en: "Feasibility of pediatric dobutamine stress CMR" } },
    { slug: "2026-924accf79cba", title: { zh: "AHA 2026 儿童冠脉缺血检测科学声明", en: "AHA 2026 pediatric coronary ischemic testing statement" } },
    { slug: "2026-0b67b39d1ffd", title: { zh: "首尔 34 例：右冠型是否需要尽早手术", en: "Seoul 34-patient series: is prompt right-sided surgery needed?" } },
    { slug: "2022-27e176bacbca", title: { zh: "Bibevski：手术与非手术 AAORCA", en: "Bibevski: surgical and nonsurgical AAORCA" } },
    { slug: "2026-d29299373d7f", title: { zh: "广东 151 例儿童 AAORCA", en: "Guangdong 151-child AAORCA cohort" } },
    { slug: "2026-b511bcdcae1f", title: { zh: "MuSCAT：侵入性功能检查对决策的影响", en: "MuSCAT: invasive functional testing and decisions" } },
    { slug: "2020-576e33889fe8", title: { zh: "CHSS 多中心手术结局", en: "CHSS multicentre repair outcomes" } },
    { slug: "2025-96ebfd17d8eb", title: { zh: "2025 AHA/ACC 竞技运动科学声明", en: "2025 AHA/ACC competitive sports statement" } },
    { slug: "2026-1857dc200bc2", title: { zh: "武汉 58 例儿童 AAOCA 多模态影像", en: "Wuhan 58-child multimodal imaging cohort" } },
    { slug: "2020-27b1754e3df3", title: { zh: "ASE 先天性冠脉异常多模态评估指南", en: "ASE multimodality assessment guideline" } },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: { zh: "把问题从“做不做”换成“还缺哪一块证据”", en: "Change the question from “operate?” to “which evidence is missing?”" },
    items: [
      {
        title: { zh: "变量之间的证据强度差很多", en: "The variables differ greatly in evidential strength" },
        body: {
          zh: "起源侧别、心脏骤停史、运动性晕厥有很强的支持；壁内段长度、冠脉优势型这些常被讨论的因素，目前的支持要弱得多。把它们等权相加会得到误导性的结论。",
          en: "Side of origin, a history of arrest, and exertional syncope are strongly supported. Much-discussed factors such as intramural length and coronary dominance are supported far more weakly. Weighting them equally produces a misleading answer.",
        },
      },
      {
        title: { zh: "解剖与功能构成一张 2×2", en: "Anatomy and function form a two-by-two" },
        body: {
          zh: "CTA 严重与否、负荷检查阳性与否，可以组合出四种情况。只有其中两种是清楚的，另外两种需要不同的应对，而不是同一句结论。",
          en: "A severe or unremarkable CTA crossed with a positive or negative stress test gives four cells. Only two of them are clear; the other two call for different responses, not one sentence.",
        },
      },
      {
        title: { zh: "顺序本身就是结论的一部分", en: "The order of testing is itself part of the answer" },
        body: {
          zh: "先把现有影像重新量化，再做功能评估，最后才讨论侵入性检查。顺序颠倒会让后面的检查失去解释的锚点。",
          en: "Re-quantify the existing imaging, then assess function, and only then discuss invasive testing. Reversing the order leaves later tests without an anchor for interpretation.",
        },
      },
    ],
  },
  {
    id: "variables",
    nav: { zh: "变量与权重", en: "Variables and weight" },
    kind: "table",
    heading: { zh: "决策变量按证据强度排开", en: "The decision variables, ranked by evidential strength" },
    lede: {
      zh: "下表不是评分系统，不能相加。它要说明的是同一张检查报告里的不同条目，其实并不享有同等的决策地位。",
      en: "The table below is not a score and cannot be summed. Its point is that entries appearing side by side on one report do not carry equal standing in the decision.",
    },
    wide: true,
    headers: [
      { zh: "变量", en: "Variable" },
      { zh: "证据来源", en: "Evidence base" },
      { zh: "把决策推向", en: "Pushes the decision toward" },
      { zh: "能承担的权重", en: "Weight it can bear" },
    ],
    rows: [
      [
        { zh: "起源侧别（右冠型 vs 左冠型）", en: "Side of origin (right versus left)" },
        { zh: "多个队列与共识；右冠型绝对事件率明显更低", en: "Multiple cohorts and consensus; absolute event rates are clearly lower on the right" },
        { zh: "右冠型倾向观察", en: "Right-sided lesions toward observation" },
        { zh: "强", en: "Strong" },
      ],
      [
        { zh: "心脏骤停或恶性室性心律失常史", en: "History of cardiac arrest or malignant ventricular arrhythmia" },
        { zh: "所有指南与共识一致", en: "Consistent across guidelines and consensus" },
        { zh: "手术", en: "Surgery" },
        { zh: "强", en: "Strong" },
      ],
      [
        { zh: "运动性晕厥", en: "Exertional syncope" },
        { zh: "共识列为高危表现", en: "Listed as a high-risk presentation in consensus" },
        { zh: "手术", en: "Surgery" },
        { zh: "强", en: "Strong" },
      ],
      [
        { zh: "负荷检查证实的诱发性缺血", en: "Inducible ischemia documented on stress testing" },
        { zh: "目前争议最少的手术指征", en: "The least contested indication for repair" },
        { zh: "手术", en: "Surgery" },
        { zh: "强，且是多数病例最缺的一项", en: "Strong, and most often the missing item" },
      ],
      [
        { zh: "开口狭窄 / 裂隙样开口", en: "Ostial stenosis or a slit-like ostium" },
        { zh: "广东 151 例中与症状的单因素信号最强，但校正后未达显著", en: "Strongest univariable signal with symptoms in the Guangdong 151, not significant after adjustment" },
        { zh: "手术方向", en: "Toward surgery" },
        { zh: "中高，需要先精确定量", en: "Moderate-to-high, once properly quantified" },
      ],
      [
        { zh: "壁内段存在与否", en: "Presence of an intramural course" },
        { zh: "机制清楚，但不能单独预测缺血", en: "Mechanistically clear, but not predictive of ischemia on its own" },
        { zh: "手术方向", en: "Toward surgery" },
        { zh: "中等；主要影响术式", en: "Moderate; mainly affects the technique" },
      ],
      [
        { zh: "壁内段长度", en: "Length of the intramural course" },
        { zh: "220 例队列中有缺血与无缺血者长度相同（中位 5 mm，四分位 4–7）", en: "Identical in patients with and without ischemia in the 220-child cohort (median 5 mm, IQR 4–7)" },
        { zh: "不推向任何一侧", en: "Neither side" },
        { zh: "作为风险因子很弱；作为术式因子很重要", en: "Weak as a risk factor; important as a technical factor" },
      ],
      [
        { zh: "主动脉-肺动脉间走行", en: "Interarterial course" },
        { zh: "传统高危形态，但在儿童队列中未能区分有无症状", en: "A traditional high-risk feature that did not separate symptomatic from asymptomatic children" },
        { zh: "手术方向", en: "Toward surgery" },
        { zh: "中等，且明显低于过去的印象", en: "Moderate, and clearly below its historical reputation" },
      ],
      [
        { zh: "冠脉优势型", en: "Coronary dominance" },
        { zh: "生理上可解释，缺乏针对性队列证据", en: "Physiologically plausible, without dedicated cohort evidence" },
        { zh: "不足以推向任何一侧", en: "Not enough to push either way" },
        { zh: "弱，不应写进决策公式", en: "Weak; should not enter the decision formula" },
      ],
      [
        { zh: "年龄", en: "Age" },
        { zh: "广东队列中有症状者平均年龄高于无症状者，但混杂于表达能力和运动量", en: "Symptomatic children were older in the Guangdong cohort, confounded by activity level and ability to report symptoms" },
        { zh: "不单独决定", en: "Not decisive alone" },
        { zh: "弱；但决定随访的时间跨度", en: "Weak; but it sets the horizon for surveillance" },
      ],
    ],
  },
  {
    id: "matrix",
    nav: { zh: "解剖 × 功能", en: "Anatomy × function" },
    kind: "table",
    heading: { zh: "四种组合，只有两种是清楚的", en: "Four combinations, only two of them clear" },
    headers: [
      { zh: "CTA 表现", en: "CTA appearance" },
      { zh: "负荷功能检查", en: "Functional stress testing" },
      { zh: "证据位置", en: "Where the evidence sits" },
    ],
    rows: [
      [
        { zh: "严重", en: "Severe" },
        { zh: "阳性", en: "Positive" },
        { zh: "最清楚的一格：解剖病变已经产生生理后果，手术权重明显上升", en: "The clearest cell: the lesion has physiologic consequences, and the case for repair rises sharply" },
      ],
      [
        { zh: "不突出", en: "Unremarkable" },
        { zh: "阴性", en: "Negative" },
        { zh: "另一格清楚的：最支持结构化观察", en: "The other clear cell: structured observation is best supported" },
      ],
      [
        { zh: "不突出", en: "Unremarkable" },
        { zh: "阳性", en: "Positive" },
        { zh: "功能结果的分量高于影像外观，需要复核检查质量并重新读片", en: "The functional result outweighs the appearance; verify test quality and re-read the images" },
      ],
      [
        { zh: "严重", en: "Severe" },
        { zh: "阴性", en: "Negative" },
        { zh: "真正的灰区：既不能宣布安全，也不构成手术指征，需要多学科讨论", en: "The genuine grey zone: neither a clean bill of health nor an indication, and the place for multidisciplinary discussion" },
      ],
    ],
  },
  {
    id: "sequence",
    nav: { zh: "检查顺序", en: "Test sequence" },
    kind: "steps",
    heading: { zh: "先重新量化，再测生理，最后才谈侵入性检查", en: "Re-quantify first, measure physiology next, discuss invasive testing last" },
    lede: {
      zh: "多模态评估之所以被反复强调，是因为单一检查的敏感度都不理想。顺序的意义在于：前一步的结果决定后一步值不值得做。",
      en: "Multimodality assessment is stressed because no single test has satisfactory sensitivity. The order matters because each step decides whether the next one is worth doing.",
    },
    steps: [
      { zh: "重新精读现有 CTA，得到面积与长度而不是一个直径", en: "Re-read the existing CTA for areas and lengths, not one diameter" },
      { zh: "静息心电与高质量心超建立基线", en: "Establish a baseline with resting ECG and a good echocardiogram" },
      { zh: "心肺运动试验，而不是只看 ST 段", en: "Cardiopulmonary exercise testing, not just the ST segment" },
      { zh: "负荷灌注影像回答“负荷时缺不缺血”", en: "Stress perfusion imaging to answer whether ischemia appears" },
      { zh: "只有结果互相矛盾且会改变决定时，才讨论侵入性评估", en: "Only when results conflict and would change the decision, discuss invasive assessment" },
    ],
  },
  {
    id: "resting-imaging",
    nav: { zh: "静息影像的位置", en: "Where resting imaging sits" },
    kind: "prose",
    heading: { zh: "为什么静息灌注影像不适合放在决策的关键位置", en: "Why resting perfusion imaging does not belong at the decision point" },
    paragraphs: [
      {
        zh: "AAOCA 的狭窄可能带有动态成分：心率上升、血压升高、主动脉扩张、心肌耗氧量增加时，壁内冠脉的几何形态会进一步改变。一次静息状态下的灌注检查测不到这一部分。",
        en: "Narrowing in AAOCA can have a dynamic component: as heart rate, blood pressure, aortic dimensions, and myocardial oxygen demand rise, the geometry of an intramural coronary changes further. A resting perfusion study cannot see that component.",
      },
      {
        zh: "美国心脏协会 2026 年关于儿童冠状动脉缺血检测的科学声明，正是围绕这个问题展开：不同负荷方式和不同影像手段各有优势与限制，儿童检测需要按年龄、病变机制和负荷方式来选择，没有一种检查可以包打天下。声明同时指出，血管扩张药适合评价灌注，但并不能完全复制运动生理。",
        en: "The American Heart Association's 2026 scientific statement on coronary ischemic testing in children is built around this problem: provocative agents and imaging modalities each have strengths and limits, testing must be matched to age and mechanism, and no single study covers everything. It also notes that vasodilators are suited to assessing perfusion but do not fully reproduce exercise physiology.",
      },
      {
        zh: "这不意味着核素检查没有价值。武汉的 58 例儿童 AAOCA 队列中，27 人接受 SPECT 心肌灌注显像，其中 21 人显示灌注缺损，最终 7 人手术。它说明在实际工作中，核素检查确实参与了分层；但它是单中心回顾性资料，不能用来确立哪一种检查最能预测猝死。",
        en: "This does not make nuclear imaging worthless. In a 58-child AAOCA cohort from Wuhan, 27 underwent SPECT myocardial perfusion imaging, 21 of whom showed perfusion defects, and 7 ultimately had surgery. It shows nuclear imaging genuinely taking part in stratification; but it is single-centre retrospective data and cannot establish which test best predicts sudden death.",
      },
    ],
  },
  {
    id: "zones",
    nav: { zh: "三个区", en: "Three zones" },
    kind: "cards",
    heading: { zh: "手术区、观察区和灰区分别长什么样", en: "What the surgical, observational, and grey zones look like" },
    items: [
      {
        title: { zh: "手术区", en: "The surgical zone" },
        body: {
          zh: "确诊的诱发性缺血；运动性晕厥或近似晕厥且高度怀疑心源性；心脏骤停或恶性室性心律失常；可重复的运动缺血症状并有与右冠供血区一致的客观证据。出现其中一项，尤其两项以上并存时，手术权重迅速上升。",
          en: "Documented inducible ischemia; exertional syncope or near-syncope strongly suspected to be cardiac; cardiac arrest or malignant ventricular arrhythmia; reproducible exertional ischemic symptoms with objective findings matching the right coronary territory. One of these — and especially two together — raises the case for repair quickly.",
        },
      },
      {
        title: { zh: "观察区", en: "The observational zone" },
        body: {
          zh: "没有骤停、没有运动性晕厥、没有恶性心律失常；CPET 正常；负荷灌注检查未见右冠供血区诱发缺血；症状不可重复。此时结构化随访有相当扎实的证据基础，而不是“不管它”。",
          en: "No arrest, no exertional syncope, no malignant arrhythmia; a normal CPET; no inducible ischemia in the right coronary territory on stress perfusion; symptoms that cannot be reproduced. Structured surveillance here has a solid evidence base, and is not the same as doing nothing.",
        },
      },
      {
        title: { zh: "灰区", en: "The grey zone" },
        body: {
          zh: "影像上开口极窄、面积狭窄明显、壁内段清楚，但所有无创检查阴性。既不能宣布安全（无创检查存在假阴性），也不构成手术指征。这里才是多学科讨论和必要时侵入性评估的位置。",
          en: "Imaging shows a very narrow ostium, marked area stenosis, and a definite intramural course, while every non-invasive test is negative. This is neither a clean bill of health — false negatives exist — nor an indication. It is where multidisciplinary discussion, and if necessary invasive assessment, belong.",
        },
      },
    ],
  },
  {
    id: "philosophies",
    nav: { zh: "两种手术哲学", en: "Two surgical philosophies" },
    kind: "prose",
    heading: { zh: "同一批证据支撑了两种明显不同的做法", en: "The same evidence supports two visibly different practices" },
    paragraphs: [
      {
        zh: "生理优先的一派可以用 Texas Children's 的前瞻性儿童 R-AAOCA 队列作为代表：220 名 21 岁以下患者，中位年龄 11.4 岁；168 人（76%）没有运动相关症状，52 人（24%）有运动性胸痛或晕厥。负荷灌注显像在无症状组 11/120（9%）、有症状组 9/49（18%）阳性；单纯运动试验在无症状组仅 2/164（1.2%）阳性。最终 56/220（26%）因高危特征被建议手术，52 人实际手术（去顶 38、再植 14），中位随访 4.6 年全部存活并恢复运动。",
        en: "The physiology-first approach is represented by the prospective Texas Children's pediatric R-AAOCA cohort: 220 patients under 21, median age 11.4 years; 168 (76%) without exertional symptoms and 52 (24%) with exertional chest pain or syncope. Stress perfusion imaging was positive in 11/120 (9%) of the asymptomatic group and 9/49 (18%) of the symptomatic group, while exercise testing alone was positive in only 2/164 (1.2%) of the asymptomatic group. Surgery was recommended for 56/220 (26%) with high-risk features and performed in 52 (38 unroofing, 14 reimplantation); all were alive and back to exercise at a median follow-up of 4.6 years.",
      },
      {
        zh: "解剖优先的一派可以用首尔的 34 例手术系列作为代表：其中 32 例（94.1%）为 AAORCA，32/34 接受去顶，没有手术死亡和冠脉相关并发症。作者据此主张，对具有高危解剖的无症状 AAORCA，可以考虑扩大手术适应证。",
        en: "The anatomy-first approach is represented by a 34-patient surgical series from Seoul: 32 (94.1%) were AAORCA, 32 of 34 underwent unroofing, and there were no surgical deaths or coronary-related complications. On that basis the authors argue for considering surgery in asymptomatic AAORCA with high-risk anatomy.",
      },
      {
        zh: "两组数据都成立，但回答的问题不同。手术系列只包含已经被选去手术的人，它能证明“手术可以做得很好”，不能证明“不手术这些人会出事”。这就是两派各自都能拿出合理依据的原因。",
        en: "Both datasets hold, but they answer different questions. A surgical series contains only those already selected for surgery: it can show that the operation goes well, not that these patients would have come to harm without it. That is why both camps can cite reasonable evidence.",
      },
    ],
  },
  {
    id: "gap",
    nav: { zh: "证据缺口", en: "The evidence gap" },
    kind: "prose",
    heading: { zh: "真正缺的研究几乎不可能被做出来", en: "The study that is actually missing is nearly impossible to run" },
    paragraphs: [
      {
        zh: "要直接回答“手术还是观察更好”，需要把大量解剖相似的儿童随机分组，随访数十年，比较总体存活与生活质量。这样的试验在事件率极低、随访跨度极长的疾病里几乎无法完成，因此现在没有，短期内也不会有。",
        en: "Answering “repair or observe?” directly would require randomising a large number of anatomically similar children and following them for decades to compare survival and quality of life. With such low event rates over such a long horizon, that trial is effectively impossible; it does not exist and will not soon.",
      },
      {
        zh: "在缺少这项研究的情况下，能做的是把两侧的已知量都写清楚。观察一侧：右冠型绝对事件率低，多个真实世界队列中大部分患者未接受手术。手术一侧：经验中心死亡率低，但 CHSS 的 395 例数据仍记录了新发主动脉瓣关闭不全、冠脉相关再次手术和少量术后死亡，术前存在缺血者也不是全部在术后消失。",
        en: "Without it, what remains is to state both sides' known quantities. On the observation side: absolute event rates in right-sided disease are low, and most patients in several real-world cohorts were not operated on. On the repair side: mortality at experienced centres is low, yet the 395-patient CHSS dataset still records new aortic insufficiency, coronary reoperation, and a small number of postoperative deaths, and preoperative ischemia did not resolve in every patient.",
      },
      {
        zh: "侵入性功能检查在灰区里确实能改变决定。MuSCAT 登记的阶段性结果显示，侵入性功能评估使相当一部分成人患者的治疗计划发生改变。这说明当无创结果与解剖严重冲突时，进一步测量是有产出的，而不是仅仅增加一次操作风险。",
        en: "Invasive functional testing does change decisions inside the grey zone. Interim results from the MuSCAT registry show invasive functional assessment altering the management plan in a substantial share of adult patients. Where non-invasive findings and anatomy conflict sharply, further measurement produces information rather than merely adding procedural risk.",
      },
    ],
  },
  {
    id: "surveillance",
    nav: { zh: "观察不是不管", en: "Observation is not inaction" },
    kind: "prose",
    heading: { zh: "如果选择观察，观察本身需要有结构", en: "If observation is chosen, the observation itself needs structure" },
    paragraphs: [
      {
        zh: "观察路线的内容是：定期复核症状史与运动情况、心电与心超，随年龄增长在可配合时加入心肺运动试验和负荷影像，并把每一次结果与自己的基线比较，而不是与人群平均值比较。",
        en: "The observational route means periodically reviewing symptom history and activity, ECG and echocardiography, adding cardiopulmonary exercise testing and stress imaging once a child can cooperate, and comparing each result against that person's own baseline rather than a population average.",
      },
      {
        zh: "重复 CTA 不属于常规年度项目。它更适合作为解剖基线、在明显生长之后重新评价、在临床情况变化时评价，以及手术前后的评价。相关的多模态评估指南也强调按问题选择检查，而不是按固定周期堆叠检查。",
        en: "Repeat CTA is not a routine annual item. It fits as an anatomic baseline, a re-assessment after substantial growth, a response to clinical change, and pre- and post-operative evaluation. Multimodality guidance likewise emphasises choosing tests by question rather than stacking them on a fixed schedule.",
      },
      {
        zh: "运动管理方面，2025 年 AHA/ACC 的竞技运动科学声明对主动脉-肺动脉间走行的右冠型采取了明显区别于左冠型的立场：在没有提示缺血的症状、也没有诱发缺血的前提下，经过完整评估与共同决策，参加竞技运动可能是合理的。这一立场的前提正是完成了功能评估，而不是尚未评估。",
        en: "On activity, the 2025 AHA/ACC competitive sports statement takes a clearly different position for interarterial right-sided lesions than for left-sided ones: absent ischemic symptoms and absent inducible ischemia, competitive participation may be reasonable after full evaluation and shared decision-making. The premise is that the functional evaluation has been completed, not that it is still outstanding.",
      },
    ],
  },
];

export function DecisionModelPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
