import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-ischemia-testing";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 缺血检测", en: "Evidence analysis · testing for ischemia" },
  title: {
    zh: "怎样才算证明缺血：负荷方式决定了一次阴性结果的分量",
    en: "What counts as proof of ischemia: the stressor decides what a negative result is worth",
  },
  lede: {
    zh: "R-AAORCA 要回答的不是“这条冠脉看起来窄不窄”，而是“心率、血压和心肌耗氧上升时，它能不能供上血”。现有证据一致指向同一件事：没有任何单项检查能够排除 AAOCA 的诱发性缺血，而一次阴性结果的分量，取决于负荷是否足够、以及负荷方式是否与病变机制相符。",
    en: "The question in R-AAORCA is not whether the artery looks narrow but whether it can supply blood once heart rate, blood pressure, and myocardial oxygen demand rise. The evidence converges on one point: no single test excludes inducible ischemia in AAOCA, and what a negative result is worth depends on whether the stress was hard enough and whether the type of stress matches the mechanism.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅。文中的数字均标注了来源研究的人群与年龄，成人阈值不能直接套用于儿童。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it. Every figure is reported with the population and age of its source study; adult thresholds do not transfer directly to children.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2026-924accf79cba", title: { zh: "AHA 2026：儿童冠状动脉缺血检测科学声明", en: "AHA 2026 statement on coronary ischemic testing in children" } },
    { slug: "2023-bdc164171ffa", title: { zh: "Qasim：155 例运动试验与负荷 CMR 的对照", en: "Qasim: exercise testing versus stress CMR in 155 patients" } },
    { slug: "2021-b61abb3cb074", title: { zh: "Doan：儿童多巴酚丁胺负荷 CMR 的可行性与安全性", en: "Doan: feasibility and safety of pediatric dobutamine stress CMR" } },
    { slug: "2025-6dde4b2363c8", title: { zh: "儿童多巴酚丁胺负荷 CMR 后的冠脉事件", en: "Coronary events after pediatric dobutamine stress CMR" } },
    { slug: "2025-b485627dd017", title: { zh: "Carter：青少年与青年 AAOCA 的运动负荷 CMR", en: "Carter: exercise stress CMR in adolescents and young adults" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA 的缺血与结局", en: "Texas Children’s 220-child R-AAOCA ischemia cohort" } },
    { slug: "2026-c5c7256c39d9", title: { zh: "Stark：IVUS 与腺苷 FFR 对比多巴酚丁胺 FFR", en: "Stark: IVUS and adenosine FFR versus dobutamine FFR" } },
    { slug: "2026-94384acd16a9", title: { zh: "CCTA 几何参数预测腺苷/多巴酚丁胺 FFR 异常", en: "CCTA geometry predicting abnormal adenosine and dobutamine FFR" } },
    { slug: "2026-b511bcdcae1f", title: { zh: "MuSCAT：侵入性功能学检测如何改变成人决策", en: "MuSCAT: how invasive functional testing changes adult decisions" } },
    { slug: "2025-b6136fc7d7f1", title: { zh: "AAOCA 负荷超声心动图的双中心经验", en: "Stress echocardiography in AAOCA at two centres" } },
    { slug: "2026-99c7e79f5a20", title: { zh: "成人 CCTA 与运动负荷 SPECT 的功能—解剖整合", en: "CCTA and exercise SPECT in adults with AAOCA" } },
    { slug: "2020-c09a074e6ec1", title: { zh: "Binka：运动负荷超声的区域心肌形变异常", en: "Binka: regional deformation abnormalities on exercise stress echo" } },
    { slug: "2019-29a21e711c7a", title: { zh: "CHSS：与心肌缺血相关的解剖特征", en: "CHSS: anatomic features associated with myocardial ischemia" } },
    { slug: "2026-1857dc200bc2", title: { zh: "武汉 58 例儿童 AAOCA 的多模态影像分层", en: "A 58-child AAOCA cohort stratified by multimodality imaging" } },
    { slug: "2020-27b1754e3df3", title: { zh: "ASE 先天性冠状动脉异常多模态影像指南", en: "ASE guide to multimodality assessment of congenital coronary anomalies" } },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: { zh: "三句话把缺血检测说清楚", en: "Three sentences on testing for ischemia" },
    items: [
      {
        title: { zh: "缺血是负荷时的供血问题，不是静息时的外观问题", en: "Ischemia is a supply problem under load, not an appearance at rest" },
        body: {
          zh: "静息心电图、静息心超、CTA 都无法直接检测缺血。CTA 提供的是可能缺血的解剖基础，缺血本身必须在心率、血压和心肌耗氧上升时去测。",
          en: "A resting ECG, a resting echocardiogram, and a CTA cannot detect ischemia directly. A CTA supplies the anatomic basis for possible ischemia; ischemia itself has to be measured while heart rate, blood pressure, and oxygen demand are rising.",
        },
      },
      {
        title: { zh: "阴性结果的分量取决于负荷够不够、对不对", en: "A negative result is worth what the stress was worth" },
        body: {
          zh: "同一个人，负荷不足或负荷方式不匹配，可以得到一个看似安心的阴性。AHA 2026 声明明确指出：血管扩张药适用于固定性狭窄，而怀疑动态压迫时首选多巴酚丁胺。",
          en: "In the same patient, an inadequate or mismatched stressor can produce a reassuring negative. The AHA 2026 statement is explicit: vasodilators suit fixed obstruction, while dobutamine is the preferred agent where dynamic narrowing is suspected.",
        },
      },
      {
        title: { zh: "缺血级联意味着检查有先后，不是有优劣", en: "The ischemic cascade orders the tests rather than ranking them" },
        body: {
          zh: "灌注异常通常出现在室壁运动异常、心电图改变和症状之前。因此只看室壁运动或只看心电图的检查，天然会漏掉较早阶段的缺血。",
          en: "Perfusion abnormalities generally appear before wall-motion change, ECG change, and symptoms. A test that looks only at wall motion, or only at the ECG, will therefore miss the earlier stages by construction.",
        },
      },
    ],
  },
  {
    id: "cascade",
    nav: { zh: "缺血级联", en: "The ischemic cascade" },
    kind: "prose",
    heading: { zh: "为什么“没有胸痛”不能作为终点", en: "Why “no chest pain” cannot be the endpoint" },
    paragraphs: [
      {
        zh: "美国心脏协会 2026 年关于儿童冠状动脉缺血检测的科学声明，把冠脉血流不足之后的变化描述成一个有次序的级联：先是代谢层面的改变，然后是室壁运动异常，再是心电图改变，最后才是心绞痛与心肌梗死。不同检查捕捉的是这个链条上的不同环节，因此各自的敏感度、特异度和适用场景并不相同。",
        en: "The American Heart Association's 2026 scientific statement on coronary ischemic testing in children describes what follows inadequate coronary flow as an ordered cascade: metabolic changes first, then wall-motion abnormalities, then ECG changes, and only at the end angina and infarction. Different tests capture different links in that chain, which is why their sensitivity, specificity, and appropriateness differ.",
      },
      {
        zh: "声明同时给出了支持这个次序的直接证据：在成人冠脉狭窄和儿童 AAOCA 的多巴酚丁胺负荷心脏磁共振中，心肌灌注异常都比室壁运动异常更常见。也就是说，灌注成像看到的是更早的一层。",
        en: "The statement also gives the evidence for that order: on dobutamine stress cardiovascular magnetic resonance, myocardial perfusion abnormalities are more common than wall-motion abnormalities both in adults with coronary stenosis and in children with AAOCA. Perfusion imaging is looking at an earlier layer.",
      },
      {
        zh: "对 AAOCA 还有一层特殊性。声明指出，AAOCA 的缺血可以同时包含固定性梗阻和动态梗阻两种成分。固定成分在静息和药物扩张下就能显现；动态成分只有在主动脉压力升高、心率加快、心肌收缩力增强时才出现。检查方案如果只覆盖前者，结论就只覆盖前者。",
        en: "AAOCA adds a further wrinkle. The statement notes that AAOCA can create ischemia by blending fixed and dynamic obstruction. The fixed component shows up at rest and under pharmacologic dilation; the dynamic component appears only as aortic pressure, heart rate, and contractility rise. A protocol that covers only the first covers only the first in its conclusions.",
      },
      {
        zh: "这也解释了为什么解剖学研究无法替代功能学检查。CHSS 的 560 例（诊断时不超过 30 岁）多中心研究发现，壁内走行、壁内段长度和开口异常与“有缺血证据”相关；但在已经有缺血证据的患者中，是否发生心脏骤停或猝死并没有找到相关的解剖特征。解剖能提示风险，不能替代对血流的测量。",
        en: "It also explains why anatomic studies cannot stand in for functional ones. The CHSS multicentre study of 560 patients (aged 30 or younger at diagnosis) found an intramural course, intramural length, and orifice anomalies associated with evidence of ischemia; yet among those with such evidence, no anatomic feature was shown to be associated with sudden cardiac arrest or death. Anatomy flags risk; it does not measure flow.",
      },
    ],
  },
  {
    id: "exercise-ecg",
    nav: { zh: "运动心电图的上限", en: "The ceiling of exercise ECG" },
    kind: "stats",
    heading: { zh: "跑台阴性能排除多少：一个被直接测量过的数字", en: "How much a normal treadmill excludes: a number that has been measured directly" },
    lede: {
      zh: "155 名 20 岁以下 AAOCA 患者（右冠型 126 例、左冠型 29 例）同时接受最大运动试验与多巴酚丁胺负荷 CMR。以负荷 CMR 为参照，单纯运动心电图检出诱发缺血的敏感度约 19%；把心肺运动试验的指标（峰值摄氧量、氧脉搏及其曲线形态）纳入判断后升到约 58%。两种检查对是否存在缺血的判断彼此不一致。",
      en: "In 155 patients aged 20 or younger with AAOCA (126 right-sided, 29 left-sided), maximal exercise testing and dobutamine stress CMR were both performed. Against stress CMR as the reference, exercise ECG alone detected inducible ischemia with a sensitivity of about 19%; adding cardiopulmonary exercise variables — peak oxygen uptake, oxygen pulse, and the shape of its curve — raised it to about 58%. The two tests disagreed with each other about who had ischemia.",
    },
    stats: [
      { value: "19%", label: { zh: "单纯运动心电图的敏感度", en: "Sensitivity of exercise ECG alone" } },
      { value: "58%", label: { zh: "加入 CPET 指标后的敏感度", en: "Sensitivity once CPET variables are added" } },
      { value: "50–60%", label: { zh: "AHA 给出的单独 CPET 检出缺血敏感度区间", en: "AHA's range for standalone CPET" } },
      { value: "75–85%", label: { zh: "CPET 联合负荷影像后的区间", en: "The range once CPET is combined with stress imaging" } },
    ],
    note: {
      zh: "前两个数字来自 AAOCA 专门研究，后两个是 AHA 声明给出的儿童一般性区间，两组数据的人群和参照标准不同，不能互相替换。共同点是：运动心电图主要依赖 ST 段改变，而儿童缺血中 ST 改变本来就少见。",
      en: "The first two figures come from an AAOCA-specific study, the last two are the AHA statement's general pediatric ranges; the populations and reference standards differ and the figures are not interchangeable. What they share: exercise ECG rests on ST-segment change, and ST change is uncommon in pediatric ischemia to begin with.",
    },
  },
  {
    id: "stressor",
    nav: { zh: "负荷方式的选择", en: "Choosing the stressor" },
    kind: "table",
    heading: { zh: "扩血管药与多巴酚丁胺问的不是同一个问题", en: "Vasodilators and dobutamine do not ask the same question" },
    lede: {
      zh: "AHA 2026 声明把负荷药物分成两类，并说明了各自适用的病变类型。对以动态压迫为机制的病变，这个区分直接决定检查结论是否成立。",
      en: "The AHA 2026 statement separates stress agents into two classes and states which lesion each suits. Where the mechanism is dynamic compression, that distinction decides whether the test result means anything.",
    },
    headers: [
      { zh: "负荷方式", en: "Stressor" },
      { zh: "生理作用", en: "What it does physiologically" },
      { zh: "声明给出的适用场景", en: "Where the statement places it" },
    ],
    rows: [
      [
        { zh: "腺苷 / 双嘧达莫 / 瑞加德松", en: "Adenosine, dipyridamole, regadenoson" },
        { zh: "冠脉扩张，制造充血状态", en: "Coronary vasodilation producing hyperemia" },
        { zh: "固定性冠脉梗阻的负荷试验；在低龄儿童、川崎病和冠脉操作术后优先于运动负荷", en: "Stress testing for fixed coronary obstruction; preferred over exercise in smaller children, Kawasaki disease, and after coronary manipulation" },
      ],
      [
        { zh: "多巴酚丁胺（必要时加阿托品）", en: "Dobutamine, with atropine where needed" },
        { zh: "β1 激动，提高心率与心肌收缩力，从而提高心肌耗氧，部分复制运动生理", en: "A beta-1 agonist raising heart rate and contractility, and thus oxygen demand, reproducing part of exercise physiology" },
        { zh: "怀疑冠脉存在动态狭窄时的首选负荷药物，也用于不能耐受扩血管药者", en: "The preferred agent where dynamic narrowing of the coronary artery is suspected, and for those who cannot tolerate vasodilators" },
      ],
      [
        { zh: "真实运动（跑台或踏车）", en: "Real exercise, treadmill or cycle" },
        { zh: "同时产生需求上升与外周血流动力学变化，最接近发病情境", en: "Raises demand and changes peripheral haemodynamics at once, closest to the circumstances in which events occur" },
        { zh: "较大儿童可用，AAOCA 尤其如此；跑台优于踏车，因为能激发更高的心肌耗氧", en: "Available in older children and specifically noted for AAOCA; a treadmill is preferred over a cycle because it elicits higher myocardial oxygen demand" },
      ],
      [
        { zh: "侵入性 FFR / iFR + 多巴酚丁胺", en: "Invasive FFR or iFR under dobutamine" },
        { zh: "在负荷状态下直接测量跨病变压力比", en: "Measures the pressure ratio across the lesion directly under stress" },
        { zh: "以动态梗阻为机制的冠脉异常首选多巴酚丁胺激发，并用舒张期 FFR 或 iFR 以避免收缩期压力过冲造成假阴性", en: "For coronary anomalies with dynamic obstruction, dobutamine provocation is preferred, with diastolic FFR or iFR to avoid a falsely normal result from systolic pressure overshoot" },
      ],
    ],
  },
  {
    id: "modalities",
    nav: { zh: "各项检查的分工", en: "What each test settles" },
    kind: "table",
    wide: true,
    heading: { zh: "阳性说明什么，阴性排除什么", en: "What a positive says, and what a negative rules out" },
    lede: {
      zh: "下表按“这项检查究竟测量了什么”排列。注意最后一列：绝大多数检查的阴性预测能力弱于其阳性提示能力，这正是需要多模态评估的原因。",
      en: "The table is ordered by what each test actually measures. Note the last column: for most of them a negative excludes less than a positive establishes, which is precisely why multimodality assessment is recommended.",
    },
    headers: [
      { zh: "检查", en: "Test" },
      { zh: "测量对象", en: "What it measures" },
      { zh: "阳性的含义", en: "What a positive means" },
      { zh: "阴性能排除什么", en: "What a negative excludes" },
    ],
    rows: [
      [
        { zh: "静息心电图 / 心肌损伤标志物", en: "Resting ECG and injury biomarkers" },
        { zh: "当前是否存在心肌损伤或电活动异常", en: "Present myocardial injury or electrical abnormality" },
        { zh: "值得进一步检查", en: "Grounds for further testing" },
        { zh: "几乎不能排除诱发性缺血", en: "Almost nothing about inducible ischemia" },
      ],
      [
        { zh: "静息超声心动图", en: "Resting echocardiography" },
        { zh: "心功能与静息室壁运动，部分显示起源", en: "Function, resting wall motion, sometimes the origin" },
        { zh: "提示已有心肌受累", en: "Suggests established myocardial involvement" },
        { zh: "不能排除；对 AAOCA 的假阴性率不低", en: "Does not exclude; its false-negative rate in AAOCA is appreciable" },
      ],
      [
        { zh: "CTA", en: "CTA" },
        { zh: "解剖：开口形态、壁内段、走行、面积", en: "Anatomy: ostial shape, intramural segment, course, area" },
        { zh: "提供可能缺血的机制基础", en: "Supplies the mechanism by which ischemia could occur" },
        { zh: "本身不检测缺血", en: "It does not test for ischemia at all" },
      ],
      [
        { zh: "运动心电图", en: "Exercise ECG" },
        { zh: "运动中的 ST 改变、心律失常、症状", en: "ST change, arrhythmia, and symptoms during exercise" },
        { zh: "明显异常时分量很重", en: "Carries real weight when clearly abnormal" },
        { zh: "在 AAOCA 中敏感度约 19%，排除能力弱", en: "Sensitivity about 19% in AAOCA; weak as an exclusion" },
      ],
      [
        { zh: "最大 CPET", en: "Maximal CPET" },
        { zh: "在心电图之外加入摄氧量、氧脉搏与通气效率", en: "Adds oxygen uptake, oxygen pulse, and ventilatory efficiency to the ECG" },
        { zh: "异常氧脉搏与负荷 CMR 阳性相关", en: "An abnormal oxygen pulse tracks with a positive stress CMR" },
        { zh: "敏感度升至约 58%，仍会漏", en: "Sensitivity rises to about 58%; it still misses cases" },
      ],
      [
        { zh: "负荷超声心动图", en: "Stress echocardiography" },
        { zh: "负荷后新出现的区域性室壁运动异常", en: "New regional wall-motion abnormality after stress" },
        { zh: "阳性发生在症状与心电图改变之前，价值明确", en: "A positive precedes symptoms and ECG change, and is meaningful" },
        { zh: "阴性不能排除更早期的灌注异常", en: "A negative does not exclude the earlier perfusion stage" },
      ],
      [
        { zh: "负荷核素灌注（SPECT）", en: "Stress nuclear perfusion (SPECT)" },
        { zh: "负荷与静息状态下的心肌灌注对比", en: "Myocardial perfusion compared between stress and rest" },
        { zh: "可逆性缺损是客观缺血证据", en: "A reversible defect is objective evidence of ischemia" },
        { zh: "有电离辐射；儿童一般在 CMR 不可行或需要跑台运动时选用", en: "Involves ionising radiation; in children it is generally chosen when CMR is unavailable or treadmill exercise is wanted" },
      ],
      [
        { zh: "负荷灌注 CMR", en: "Stress perfusion CMR" },
        { zh: "灌注、室壁运动、心功能与瘢痕", en: "Perfusion, wall motion, function, and scar" },
        { zh: "同时覆盖缺血级联的多个环节", en: "Covers several points of the ischemic cascade at once" },
        { zh: "目前无创证据中分量最重，但仍取决于负荷是否到位", en: "The weightiest non-invasive evidence available, still conditional on adequate stress" },
      ],
      [
        { zh: "延迟钆增强（LGE）", en: "Late gadolinium enhancement" },
        { zh: "心肌瘢痕", en: "Myocardial scar" },
        { zh: "缺血型瘢痕说明既往损伤已经发生", en: "An ischemic pattern shows damage has already occurred" },
        { zh: "回答的是过去，不是当下的可逆性缺血", en: "It answers the past, not present reversible ischemia" },
      ],
      [
        { zh: "侵入性 FFR / IVUS", en: "Invasive FFR and IVUS" },
        { zh: "跨病变压力比与管腔横截面，可在负荷下重复测量", en: "Trans-lesional pressure ratio and lumen cross-section, repeatable under stress" },
        { zh: "最直接的血流动力学证据", en: "The most direct haemodynamic evidence" },
        { zh: "侵入性，儿童数据有限，属于灰区裁判而非首选", en: "Invasive, with limited pediatric data; an adjudicator for grey-zone cases, not a first step" },
      ],
    ],
    note: {
      zh: "本表按 AHA 2026 声明与 ASE 多模态影像指南归纳；具体到某一位患者，检查顺序还要看年龄、配合程度、镇静需要和当地经验。",
      en: "The table follows the AHA 2026 statement and the ASE multimodality guide; for an individual patient the order also depends on age, ability to cooperate, sedation requirements, and local experience.",
    },
  },
  {
    id: "stress-cmr",
    nav: { zh: "负荷 CMR 的位置", en: "Where stress CMR sits" },
    kind: "prose",
    heading: { zh: "负荷灌注 CMR：目前分量最重的无创证据，但不是无条件的", en: "Stress perfusion CMR: the weightiest non-invasive evidence, with conditions attached" },
    paragraphs: [
      {
        zh: "AHA 2026 声明把 CMR 称为儿童心肌灌注评价的首选方式，理由是诊断与安全性的综合考虑：不使用电离辐射，同时给出灌注、室壁运动、心功能与瘢痕。声明也写明了两个例外——当 CMR 存在兼容性或安全性问题时，以及当希望采用常规跑台运动负荷时（AAOCA 正是被点名的例子），核素检查可能更合适。",
        en: "The AHA 2026 statement calls CMR the modality of choice for assessing myocardial perfusion in children, on combined diagnostic and safety grounds: no ionising radiation, and perfusion, wall motion, function, and scar in one study. It also names two exceptions — when CMR compatibility or safety is a problem, and when conventional treadmill stress is desirable, with AAOCA given as the example — where nuclear testing may be preferred.",
      },
      {
        zh: "在 AAOCA 上，声明的表述更具体：当心肺运动试验没有给出与缺血一致的明确结论时，负荷 CMR 是有价值的补充，原因正是运动试验在这个病中的敏感度偏低。这与前面 19% 与 58% 的数字是同一件事的两种说法。",
        en: "For AAOCA the statement is more specific: stress CMR is a valuable adjunct where CPET does not provide definitive findings congruent with ischemia, precisely because of the test's low sensitivity in this condition. That is the same fact as the 19% and 58% figures above, stated the other way round.",
      },
      {
        zh: "可行性方面，一组 182 名 20 岁以下 AAOCA 患者共完成 224 次多巴酚丁胺负荷 CMR，其中 221 次完成且可判读，31 次（约 14%）出现诱发性心肌灌注减低。这组数据说明这项检查在有经验的儿童冠脉中心可以常规开展，但也说明它需要这样的中心：另一组 64 名 23 岁以下冠脉病患者、80 次多巴酚丁胺负荷 CMR 的研究，专门以“检查后的冠脉事件”为题，说明安全性本身是被认真追踪的问题。",
        en: "On feasibility, one series of 182 patients under 20 with AAOCA completed 224 dobutamine stress CMR studies, of which 221 were completed and diagnostic, with inducible hypoperfusion in 31 (about 14%). That shows the study can be run routinely at an experienced pediatric coronary centre — and that it needs one: a separate series of 64 patients under 23 with coronary disease undergoing 80 dobutamine stress CMR studies was published specifically on coronary events following the test, which is not a question anyone tracks idly.",
      },
      {
        zh: "还有一层年龄限制。声明指出，低龄儿童常常需要镇静，而在镇静状态下进行的负荷灌注成像研究得并不充分；全身麻醉下的多巴酚丁胺负荷超声在检查开始前血压和心率就已经被压低，更难达到 85% 预测最大心率的目标。也就是说，“能不能做”和“做出来能不能采信”，在小年龄段是两个需要分别回答的问题。",
        en: "Age imposes a further limit. The statement notes that young children often need sedation, and that provocative perfusion imaging under sedation has not been extensively studied; under general anaesthesia, dobutamine stress echocardiography starts from a lowered blood pressure and heart rate, making the 85%-of-predicted target harder to reach. Whether a study can be done and whether its result can be trusted are two separate questions in the younger age range.",
      },
    ],
  },
  {
    id: "exercise-cmr",
    nav: { zh: "运动负荷 CMR", en: "Exercise stress CMR" },
    kind: "stats",
    heading: { zh: "运动负荷 CMR：机制上最贴切，心率上还有差距", en: "Exercise CMR: the closest mechanism, with a gap in heart rate" },
    lede: {
      zh: "费城儿童医院回顾了 2011–2024 年间 38 名 AAOCA 患者的磁共振内卧式踏车运动负荷检查（右冠型 28 例、左冠型 8 例、单支冠脉 2 例），年龄中位 16 岁（13–24 岁）。运动到峰值后立即采集负荷灌注，15 分钟后采集静息灌注。这是这一方法在 AAOCA 中的首次成组报告。",
      en: "Children's Hospital of Philadelphia reviewed exercise stress CMR with supine cycle ergometry in 38 AAOCA patients between 2011 and 2024 (28 right-sided, 8 left-sided, 2 single coronary), median age 16 years, range 13–24. Stress perfusion was acquired immediately at peak exercise and rest perfusion 15 minutes later. It is the first report of the method as a series in AAOCA.",
    },
    stats: [
      { value: "160", label: { zh: "负荷 CMR 中位峰值心率（次/分，约预测值 80%）", en: "Median peak heart rate during exercise CMR, bpm (about 80% predicted)" } },
      { value: "187", label: { zh: "同一批患者最近一次 CPET 的中位峰值心率（约 97%）", en: "Median peak heart rate at their most recent CPET (about 97%)" } },
      { value: "0/38", label: { zh: "静息或负荷下出现灌注缺损者", en: "With a perfusion defect at rest or with stress" } },
    ],
    note: {
      zh: "全组也未见心肌瘢痕。作者的结论是方法可行、生理上更贴近运动，但卧式踏车能达到的心率明显低于真正的最大运动，与多巴酚丁胺负荷相当。零阳性率来自一个 38 人的回顾性队列，不能读成“运动 CMR 查不出缺血”，也不能读成“AAOCA 很少缺血”。",
      en: "No myocardial scar was found either. The authors conclude the method is feasible and physiologically closer to exercise, while noting that supine cycling reaches heart rates well below true maximal exercise and comparable to dobutamine stress. A zero-positive rate in a retrospective cohort of 38 cannot be read as “exercise CMR finds nothing” nor as “AAOCA is rarely ischemic.”",
    },
  },
  {
    id: "invasive",
    nav: { zh: "侵入性裁判", en: "The invasive adjudicator" },
    kind: "prose",
    heading: { zh: "当负荷方式改变结论：成人 R-AAOCA 的直接证据", en: "When the stressor changes the answer: direct evidence in adult R-AAOCA" },
    paragraphs: [
      {
        zh: "一项前瞻性单中心研究纳入 73 名新诊断的成人 R-AAOCA（壁内/主肺动脉间走行，平均年龄 51±13 岁），每人同时接受多巴酚丁胺 FFR、腺苷 FFR 与静息 IVUS。以多巴酚丁胺 FFR≤0.80 为血流动力学显著的参照标准，17 人（23%）异常。",
        en: "A prospective single-centre study enrolled 73 adults with newly diagnosed R-AAOCA and an interarterial/intramural course (mean age 51 ± 13 years), each undergoing dobutamine FFR, adenosine FFR, and resting IVUS. Taking dobutamine FFR ≤0.80 as the reference for haemodynamic relevance, 17 (23%) were abnormal.",
      },
      {
        zh: "关键结果是两种负荷的不一致：腺苷 FFR≤0.80 只出现在 5 人（7%），其特异度与阳性预测值为 100%，但敏感度仅 29%、阴性预测值 82%。换句话说，腺苷 FFR 阳性几乎可以确诊，阴性却漏掉了大约七成在多巴酚丁胺下才显现的病例。静息 IVUS 走的是另一条路：最小管腔面积 ≤5.5 mm² 的敏感度与阴性预测值为 100%，特异度 68%、阳性预测值 49%，适合用来排除而不是确诊。",
        en: "The key finding is the disagreement between stressors. Adenosine FFR ≤0.80 occurred in only 5 patients (7%), with 100% specificity and positive predictive value but 29% sensitivity and 82% negative predictive value. A positive adenosine FFR is close to diagnostic; a negative one missed roughly seven in ten of the cases that declared themselves under dobutamine. Resting IVUS behaves in the opposite way: a minimal lumen area ≤5.5 mm² had 100% sensitivity and negative predictive value with 68% specificity and 49% positive predictive value, which makes it a tool for excluding rather than confirming.",
      },
      {
        zh: "另一组 81 名成人 R-AAOCA（平均 52.3 岁）的数据方向一致：腺苷 FFR 异常率约 6.2%，多巴酚丁胺 FFR 异常率约 19.8%。同一批血管，两种负荷方式给出的阳性率差三倍。",
        en: "A separate dataset of 81 adults with R-AAOCA (mean age 52.3 years) points the same way: adenosine FFR was abnormal in about 6.2% and dobutamine FFR in about 19.8%. The same vessels, and a threefold difference in positive rate depending on the stressor.",
      },
      {
        zh: "侵入性检查改变决策的幅度也被量化过。MuSCAT 多中心前瞻性研究纳入 76 名 16 岁以上、走行于主肺动脉间或室间隔内的 AAOCA 患者（中位年龄 53 岁）。无创功能学检查阳性 10 人（13%）、阴性 59 人（78%）；侵入性功能学检查与无创结果不一致者 21 人（28%），并使 15 人（占全队列 20%）的治疗建议发生改变。",
        en: "How much invasive testing changes decisions has also been quantified. The multicentre prospective MuSCAT study enrolled 76 patients aged 16 or older with an interarterial or intraseptal AAOCA (median age 53). Non-invasive functional testing was positive in 10 (13%) and negative in 59 (78%); invasive functional testing disagreed with the non-invasive result in 21 (28%) and changed the treatment recommendation for 15 patients, 20% of the whole cohort.",
      },
      {
        zh: "这三组数据都来自中年成人，FFR≤0.80 和 IVUS 5.5 mm² 这样的阈值不能直接用于儿童——儿童的心肌质量、血管口径和参考血流都不同。它们能证明的是机制：评估 AAORCA 时，负荷方式必须能复制运动生理，否则阴性结果的排除能力会被系统性高估。",
        en: "All three datasets come from middle-aged adults, and thresholds such as FFR ≤0.80 or an IVUS area of 5.5 mm² do not transfer to children, whose myocardial mass, vessel calibre, and reference flow all differ. What they establish is mechanism: in assessing AAORCA, the stressor has to reproduce exercise physiology, or the exclusionary power of a negative result will be systematically overestimated.",
      },
    ],
  },
  {
    id: "resting-perfusion",
    nav: { zh: "静息灌注显像的边界", en: "The limits of resting perfusion" },
    kind: "prose",
    heading: { zh: "一份静息 SPECT 能说明什么：一篇论文自己写下了答案", en: "What a resting SPECT can settle: one paper states the answer itself" },
    paragraphs: [
      {
        zh: "武汉的一组 58 例儿童 AAOCA 队列采用了分层转诊的核素灌注策略：只有存在缺血相关症状、心电图异常、心肌损伤标志物升高或 CTA 高危解剖特征者才做 SPECT-MPI。27 人接受检查，6 人灌注正常、21 人显示灌注缺损；7 人最终接受手术，术前均有胸痛、CTA 证实的开口狭窄与壁内走行，以及阳性灌注缺损。",
        en: "A 58-child AAOCA cohort from Wuhan used a triaged nuclear-perfusion strategy: SPECT-MPI was ordered only for children with ischemia-related symptoms, an abnormal ECG, raised injury biomarkers, or high-risk CTA anatomy. Twenty-seven were imaged, 6 with normal perfusion and 21 with perfusion defects; 7 eventually had surgery, all of them with chest pain, CTA-confirmed ostial stenosis and an intramural course, and a positive perfusion defect.",
      },
      {
        zh: "方法部分写明示踪剂为 99mTc-MIBI，剂量按体重标准化，为静息给药，没有描述跑台或药物负荷方案。讨论部分作者自己把这一点列为研究的主要局限：由于家长顾虑辐射暴露与药物负荷风险而拒绝追加检查，本研究缺少负荷灌注成像。",
        en: "The methods state that the tracer was 99mTc-MIBI, weight-standardised, and given at rest; no treadmill or pharmacologic stress protocol is described. In the discussion the authors name this as a principal limitation of the study: stress perfusion imaging was absent because caregivers declined the additional testing over concerns about radiation exposure and the risks of pharmacologic stress.",
      },
      {
        zh: "因此这组数据可以支持的结论是：核素灌注显像在真实工作中确实参与了分层，而且阳性结果与高危 CTA 解剖相关。它不能支持的结论是：静息灌注正常等于不存在运动诱发缺血。这两件事的区别，恰恰是负荷—静息对照存在与否。",
        en: "The cohort therefore supports one conclusion — nuclear perfusion imaging does take part in real-world stratification, and positive findings tracked with high-risk CTA anatomy — and not another: that normal resting perfusion means no exercise-induced ischemia. The difference between those two statements is exactly the stress-versus-rest comparison.",
      },
      {
        zh: "由此可以得到一个具体的问法。当医院提出做“心肌灌注显像”时，值得先确认的是：这是静息显像，还是负荷—静息对照？如果是负荷，用的是哪一种负荷方式？这不是质疑检查本身，而是决定结果该被赋予多少分量。",
        en: "That yields a concrete question. When a hospital proposes myocardial perfusion imaging, it is worth establishing first whether it is a resting study or a stress–rest comparison, and if it involves stress, which stressor. The point is not to doubt the test but to know how much weight its result can carry.",
      },
    ],
  },
  {
    id: "cohort",
    nav: { zh: "儿童队列的量级", en: "The pediatric baseline" },
    kind: "prose",
    heading: { zh: "在没有症状的孩子里，负荷灌注检查仍能查出缺血", en: "Inducible ischemia turns up in children without symptoms too" },
    paragraphs: [
      {
        zh: "Texas Children's 的前瞻性儿童 R-AAOCA 队列有 220 名 21 岁以下患者，中位年龄 11.4 岁；168 人（76%）没有运动相关症状，52 人（24%）有运动性胸痛或晕厥。负荷灌注显像在无症状组阳性 11/120（9%），在有症状组 9/49（18%）；而单纯运动试验在无症状组只有 2/164（1.2%）阳性。",
        en: "The prospective pediatric R-AAOCA cohort at Texas Children's comprised 220 patients under 21, median age 11.4 years; 168 (76%) had no exertional symptoms and 52 (24%) had exertional chest pain or syncope. Stress perfusion imaging was positive in 11 of 120 (9%) without symptoms and 9 of 49 (18%) with them, while exercise testing alone was positive in only 2 of 164 (1.2%) of the asymptomatic group.",
      },
      {
        zh: "两个数字放在一起说明了两件事。第一，症状不是缺血的可靠筛子：无症状组仍有约 9% 查出诱发缺血。第二，检查方式决定了检出率：同一群无症状孩子，负荷灌注显像的阳性率是单纯运动试验的七倍以上。",
        en: "Read together, the two figures say two things. First, symptoms are not a reliable filter: about 9% of the asymptomatic group still had inducible ischemia. Second, the modality sets the yield: in the same asymptomatic children, stress perfusion imaging was positive more than seven times as often as exercise testing alone.",
      },
      {
        zh: "队列的另一半是它的克制之处。最终 56/220（26%）因高危特征被建议手术，52 人实际接受手术，中位随访 4.6 年全部存活并恢复运动。也就是说，查出缺血的孩子是少数，而这个少数正是这套检查体系要找的人。",
        en: "The other half of the cohort is its restraint. In the end 56 of 220 (26%) were recommended surgery for high-risk features and 52 were operated, with all alive and returned to exercise at a median follow-up of 4.6 years. Children with demonstrable ischemia are a minority — and that minority is exactly whom this testing strategy exists to find.",
      },
      {
        zh: "在成人一侧也有同方向的数据：一组 46 名中年 AAOCA 患者的双中心负荷超声研究，和一组 35 名成人的 CCTA 联合运动 SPECT 研究，都在把功能学结果与解剖并列使用。这些研究规模都不大，共同点不是某个具体数值，而是评估路径：先解剖，后功能，二者不一致时再往下走。",
        en: "Adult data run the same way: a two-centre stress echocardiography study in 46 middle-aged AAOCA patients and a 35-patient study pairing CCTA with exercise SPECT both place functional results alongside anatomy. None of these series is large, and what they share is not a number but a route: anatomy first, function next, and a further step only where the two disagree.",
      },
    ],
  },
  {
    id: "order",
    nav: { zh: "检查顺序", en: "The order of testing" },
    kind: "steps",
    heading: { zh: "一条与证据强度一致的检查顺序", en: "An order of testing that matches the strength of the evidence" },
    lede: {
      zh: "顺序的原则是：先做无创、可重复、信息密度高的，再把侵入性检查留给结论真正冲突的情形。",
      en: "The principle is to start with the non-invasive, repeatable, information-dense tests, and to keep invasive testing for the cases where conclusions genuinely conflict.",
    },
    steps: [
      { zh: "精读现有 CTA：开口短径与面积、壁内段长度、面积狭窄率、走行", en: "Re-read the existing CTA: ostial minor axis and area, intramural length, area stenosis, course" },
      { zh: "最大强度 CPET，配全程 12 导联心电图，记录是否达到最大用力", en: "A maximal CPET with continuous 12-lead ECG, documenting whether maximal effort was reached" },
      { zh: "负荷灌注影像，并明确使用了哪一种负荷方式", en: "Stress perfusion imaging, with the stressor explicitly identified" },
      { zh: "把三者与症状史并列，看是否指向同一个结论", en: "Set all three beside the symptom history and see whether they point the same way" },
      { zh: "只有在结论冲突且将直接决定是否手术时，才在有经验的中心讨论 IVUS 与多巴酚丁胺 FFR", en: "Only where they conflict and the answer decides an operation, discuss IVUS and dobutamine FFR at an experienced centre" },
    ],
    quote: {
      zh: "把顺序反过来——先接受一个阴性结果，再据此停止评估——的问题不在于结论错误，而在于这个结论的可信度从未被测量过。",
      en: "Reversing the order — accepting a negative result and stopping there — is not necessarily a wrong conclusion. The problem is that its reliability was never measured.",
    },
  },
  {
    id: "negative",
    nav: { zh: "阴性怎么读", en: "Reading a negative" },
    kind: "cards",
    heading: { zh: "“没有发现缺血”与“没有缺血”之间的距离", en: "The distance between “no ischemia found” and “no ischemia”" },
    items: [
      {
        title: { zh: "一组可信的阴性长什么样", en: "What a credible negative looks like" },
        body: {
          zh: "达到足够负荷的最大 CPET，心电图无缺血改变，摄氧量与氧脉搏正常，无运动诱发复杂室性心律失常；高质量负荷灌注影像未见诱发灌注缺损与室壁运动异常；LGE 无缺血型瘢痕；且没有运动性晕厥或骤停史。",
          en: "A maximal CPET that actually reached adequate load, with no ischemic ECG change, normal oxygen uptake and oxygen pulse, and no exercise-induced complex ventricular arrhythmia; high-quality stress perfusion imaging with no inducible defect and no wall-motion abnormality; no ischemic scar on LGE; and no history of exertional syncope or arrest.",
        },
      },
      {
        title: { zh: "它支持什么", en: "What it supports" },
        body: {
          zh: "支持在结构化随访下继续观察，而不是“不管它”。随访的内容包括定期复核症状与运动情况、心电与心超，并随年龄增长在可配合时重复功能学检查，与自己的基线而不是人群均值比较。",
          en: "It supports continued observation under structured surveillance, which is not the same as doing nothing: periodic review of symptoms and activity, ECG and echocardiography, and repeat functional testing as the child grows able to cooperate — compared against their own baseline rather than a population mean.",
        },
      },
      {
        title: { zh: "它不支持什么", en: "What it does not support" },
        body: {
          zh: "不支持“未来风险为零”的说法。现有各项检查的敏感度都不是 100%，不同负荷方式之间还会互相不一致，而随访年限普遍以年计，尚不能回答几十年后的问题。",
          en: "It does not support a claim of zero future risk. No available test has 100% sensitivity, different stressors disagree with one another, and follow-up is generally measured in years while the horizon for a child is decades.",
        },
      },
    ],
  },
];

export function IschemiaTestingPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
