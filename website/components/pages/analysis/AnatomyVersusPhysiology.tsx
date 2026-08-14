import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-anatomy-versus-physiology";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 风险分层", en: "Evidence analysis · risk stratification" },
  title: {
    zh: "高危解剖不等于高危生理：R-AAOCA 的风险到底写在哪里",
    en: "High-risk anatomy is not high-risk physiology: where R-AAOCA risk actually lives",
  },
  lede: {
    zh: "壁内段、主动脉-肺动脉间走行和一个偏小的近端直径，长期被当作 AAORCA 的高危标志。近年的儿童队列和功能学研究并没有推翻这些线索，但确实说明了一件事：没有任何单一解剖特征能够独立预测缺血，因此“看到高危解剖就手术”和“右冠型都没事”都不符合现有证据。",
    en: "An intramural course, an interarterial course, and a narrow proximal segment have long been treated as the high-risk markers of AAORCA. Recent pediatric cohorts and functional studies do not overturn those clues, but they do establish one thing: no single anatomic feature predicts ischemia on its own. Neither “high-risk anatomy means surgery” nor “right-sided lesions are harmless” matches the evidence.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅。文中所有数字都注明了来源研究和分母，用于解释研究，不用于指导任何个体的治疗决定。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it. Every figure is attributed to its source study with its denominator; the numbers explain research and do not guide individual care.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2017-eef7d139c8b6", title: { zh: "AATS 2017 专家共识", en: "AATS 2017 expert consensus" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 儿童 R-AAOCA 缺血与中期结局", en: "Texas Children’s pediatric R-AAOCA ischemia and outcomes" } },
    { slug: "2026-d29299373d7f", title: { zh: "广东 151 例儿童 AAORCA", en: "Guangdong 151-child AAORCA cohort" } },
    { slug: "2023-bdc164171ffa", title: { zh: "Qasim：运动负荷试验的分层价值", en: "Qasim: exercise stress testing for risk stratification" } },
    { slug: "2021-b61abb3cb074", title: { zh: "儿童多巴酚丁胺负荷 CMR 的可行性", en: "Feasibility of pediatric dobutamine stress CMR" } },
    { slug: "2026-94384acd16a9", title: { zh: "CCTA 几何参数与腺苷/多巴酚丁胺 FFR", en: "CCTA geometry versus adenosine and dobutamine FFR" } },
    { slug: "2020-576e33889fe8", title: { zh: "CHSS 多中心手术结局", en: "CHSS multicentre repair outcomes" } },
    { slug: "2023-5ef3c3c3ba18", title: { zh: "术后残留高危解剖特征的 CTA 对比", en: "Postoperative high-risk anatomic features on CTA" } },
    { slug: "2023-0e3e40c1fa52", title: { zh: "AAOCA 的冠脉搭桥", en: "CABG for anomalous coronary arteries" } },
    { slug: "2022-86ad8963ac78", title: { zh: "儿童与青少年 AAOCA 手术综述", en: "Surgery for AAOCA in children and adolescents" } },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: {
      zh: "三句话概括目前的证据位置",
      en: "Where the evidence currently stands, in three statements",
    },
    items: [
      {
        title: { zh: "解剖是线索，不是判决", en: "Anatomy is a clue, not a verdict" },
        body: {
          zh: "壁内段、主动脉-肺动脉间走行、裂隙样开口和锐角起源都与风险有关，但在现有的儿童 AAORCA 队列里，没有哪一项能单独把发生缺血的人挑出来。",
          en: "An intramural course, an interarterial course, a slit-like ostium, and an acute take-off all relate to risk, yet in published pediatric AAORCA cohorts none of them identifies, on its own, who develops ischemia.",
        },
      },
      {
        title: { zh: "缺血证据是目前最有分量的一票", en: "Documented ischemia carries the most weight" },
        body: {
          zh: "在争议最少的地方，各家中心的做法是一致的：确诊的诱发性心肌缺血是手术指征。争议集中在没有缺血证据、只有“难看的 CTA”的那一部分人。",
          en: "Where the field agrees, it agrees on this: documented inducible ischemia is an indication for repair. The disagreement concentrates on patients with an alarming CTA and no functional evidence.",
        },
      },
      {
        title: { zh: "手术低死亡率，但不是零代价", en: "Repair has low mortality, not zero cost" },
        body: {
          zh: "经验中心的死亡率很低，但多中心数据仍记录了新发主动脉瓣关闭不全、残余缺血和冠脉相关再次手术。这些代价决定了不能对所有解剖高危者一律手术。",
          en: "Mortality at experienced centres is low, while multicentre data still record new aortic insufficiency, residual ischemia, and coronary reoperation. Those costs are why anatomically high-risk patients are not operated on indiscriminately.",
        },
      },
    ],
  },
  {
    id: "layers",
    nav: { zh: "三层证据", en: "Three layers of evidence" },
    kind: "table",
    heading: {
      zh: "把线索分成解剖、临床事件和生理三层来看",
      en: "Separate the clues into anatomy, clinical events, and physiology",
    },
    lede: {
      zh: "这三层不是同一种证据。解剖层由一次影像决定，临床事件层由已经发生过什么决定，生理层需要主动做负荷检查去获得。目前的分歧几乎全部来自第三层的缺口。",
      en: "These are not the same kind of evidence. The anatomic layer comes from one scan, the clinical layer from what has already happened, and the physiologic layer only from a stress test somebody has to order. Almost all disagreement traces back to a gap in the third layer.",
    },
    headers: [
      { zh: "层次", en: "Layer" },
      { zh: "包含什么", en: "What it contains" },
      { zh: "怎么得到", en: "How it is obtained" },
      { zh: "目前能承担的决策重量", en: "Weight it can currently bear" },
    ],
    rows: [
      [
        { zh: "解剖", en: "Anatomy" },
        { zh: "起源冠窦、壁内段及其长度、主动脉-肺动脉间走行、开口形态、起源角、近端最小截面", en: "Sinus of origin, intramural course and its length, interarterial course, ostial shape, take-off angle, minimum proximal cross-section" },
        { zh: "CTA（必要时加 CMR）", en: "CTA, with CMR where needed" },
        { zh: "确定诊断和术式方向；单独用于判断是否手术时证据不足", en: "Establishes the diagnosis and points to a technique; insufficient on its own to decide whether to operate" },
      ],
      [
        { zh: "临床事件", en: "Clinical events" },
        { zh: "心脏骤停、运动性晕厥、可重复的运动相关胸痛、恶性室性心律失常", en: "Cardiac arrest, exertional syncope, reproducible exertional chest pain, malignant ventricular arrhythmia" },
        { zh: "病史与随访", en: "History and follow-up" },
        { zh: "出现即显著提高手术权重；缺席不等于风险为零", en: "Any of these markedly raises the case for repair; their absence is not proof of safety" },
      ],
      [
        { zh: "生理", en: "Physiology" },
        { zh: "负荷状态下右冠供血区是否出现灌注异常、室壁运动异常或血流受限", en: "Whether the right coronary territory shows perfusion or wall-motion abnormality, or flow limitation, under stress" },
        { zh: "负荷灌注影像、CPET；必要时侵入性 FFR/IVUS", en: "Stress perfusion imaging and CPET; invasive FFR or IVUS where needed" },
        { zh: "目前最接近手术指征的证据，也是多数病例最缺的一层", en: "The evidence closest to an indication for surgery, and the layer most often missing" },
      ],
    ],
  },
  {
    id: "numbers",
    nav: { zh: "0.2% 从哪来", en: "Where 0.2% came from" },
    kind: "prose",
    heading: {
      zh: "被反复引用的 0.2%，必须连同它的前提一起引用",
      en: "The much-quoted 0.2% has to be quoted together with its assumptions",
    },
    paragraphs: [
      {
        zh: "AATS 2017 专家共识引用了一项推算：15 至 35 岁、参加竞技运动的 AAOCA 人群中，20 年累计死亡风险约为左冠型 6.3%、右冠型 0.2%。这是目前中英文讨论里被引用最多的一组数字。",
        en: "The AATS 2017 expert consensus cites a calculation that, among people aged 15 to 35 with AAOCA who take part in competitive sports, the cumulative 20-year risk of death is about 6.3% for left-sided and 0.2% for right-sided lesions. These are the most frequently quoted figures in the field.",
      },
      {
        zh: "共识本身在同一段里就写明了限制：这类分析容易受到确认偏倚和漏报影响，而且大多数风险估计建立在“猝死发生率”和“人群患病率”两个都不确定的假设之上。换句话说，0.2% 是一个由分子和分母都不牢固的模型推出来的量级，而不是对某一个患者的预后测算。",
        en: "The same passage states the limits: such analyses are prone to ascertainment bias and under-reporting, and most risk estimates rest on assumed rates of sudden death and an assumed population prevalence. The 0.2% is therefore an order-of-magnitude figure from a model whose numerator and denominator are both uncertain, not a prognosis for an individual.",
      },
      {
        zh: "它有用的地方在于方向：右冠型的绝对事件率远低于左冠型，也远低于尸检系列给人的印象。它不适合用来对某一个孩子说“风险只有五百分之一”，因为它的适用人群是竞技运动员，而且没有按壁内段、开口形态或缺血证据分层。",
        en: "Its usefulness is directional: absolute event rates in right-sided disease are far below left-sided disease, and far below the impression left by autopsy series. It cannot be applied to an individual child as “a one-in-five-hundred risk,” because its population is competitive athletes and it is not stratified by intramural course, ostial shape, or ischemia.",
      },
    ],
  },
  {
    id: "no-single-feature",
    nav: { zh: "没有单一开关", en: "No single switch" },
    kind: "prose",
    heading: {
      zh: "为什么“高危解剖”不能单独作为手术开关",
      en: "Why “high-risk anatomy” cannot be the switch on its own",
    },
    paragraphs: [
      {
        zh: "Texas Children's 的儿童 R-AAOCA 队列研究报告了一个反直觉的结果：患者可以在没有典型症状的情况下存在诱发性缺血，而缺血也不能简单地由壁内段长度预测。这直接削弱了“壁内段越长越危险，所以按长度决定手术”的推理。",
        en: "The Texas Children's pediatric R-AAOCA cohort reports a counter-intuitive result: patients can have inducible ischemia without typical symptoms, and ischemia is not simply predicted by intramural length. That undercuts the reasoning that longer intramural segments should decide surgery by themselves.",
      },
      {
        zh: "2026 年广东省的 151 例儿童 AAORCA 队列从另一侧给出同样的信号。CTA 上主动脉-肺动脉间走行约占 48.8%、开口狭窄约占 39.5%；但在区分有症状与无症状时，主动脉-肺动脉间走行和壁内段都没有形成清晰界限，只有开口狭窄在单因素分析中信号最强，且在校正年龄等变量后未达传统统计学显著性。作者的结论是解剖特征与临床表现之间存在明显不一致，必须结合临床和功能评价。",
        en: "The 2026 Guangdong cohort of 151 children with AAORCA points the same way from another angle. On CTA, an interarterial course appeared in about 48.8% and ostial stenosis in about 39.5%. Neither the interarterial course nor the intramural course separated symptomatic from asymptomatic patients cleanly; ostial stenosis carried the strongest univariable signal but did not reach conventional significance after adjustment. The authors conclude that anatomic features and clinical presentation are discordant, and that clinical and functional assessment must be combined.",
      },
      {
        zh: "把这两组数据放在一起，结论不是“解剖不重要”，而是“解剖决定了值得做什么检查、以及如果手术该怎么做，但不足以单独决定要不要手术”。",
        en: "Read together, the conclusion is not that anatomy is unimportant. It is that anatomy determines which tests are worth doing and how a repair should be performed, but not, on its own, whether to repair.",
      },
    ],
  },
  {
    id: "exercise-ecg",
    nav: { zh: "跑台阴性的含义", en: "What a negative treadmill means" },
    kind: "stats",
    heading: {
      zh: "普通运动心电图阴性，远不足以排除缺血",
      en: "A negative exercise ECG is far from enough to exclude ischemia",
    },
    lede: {
      zh: "155 名 20 岁以下 AAOCA 患者（右冠型 126 例）同时接受最大运动试验与多巴酚丁胺负荷心脏磁共振。以负荷 CMR 为参照，单纯运动心电图检出诱发缺血的敏感度约 19%；加入心肺运动试验的指标后升到约 58%。两种检查对缺血的判断彼此不一致。",
      en: "In 155 patients aged 20 or younger with AAOCA (126 right-sided), maximal exercise testing and dobutamine stress CMR were both performed. Taking stress CMR as the reference, exercise ECG alone detected inducible ischemia with a sensitivity of about 19%; adding cardiopulmonary exercise testing raised it to about 58%. The two tests did not agree with each other.",
    },
    stats: [
      { value: "19%", label: { zh: "单纯运动心电图的敏感度", en: "Sensitivity of exercise ECG alone" } },
      { value: "58%", label: { zh: "加入 CPET 后的敏感度", en: "Sensitivity once CPET is added" } },
      { value: "155 / 126", label: { zh: "AAOCA 总人数 / 其中右冠型", en: "Total AAOCA / right-sided" } },
      { value: "224 次", label: { zh: "另一研究中儿童负荷 CMR 检查次数", en: "Pediatric stress CMR studies in a separate series" } },
      { value: "14%", label: { zh: "其中出现负荷诱发灌注减低（31/221）", en: "With inducible hypoperfusion (31/221)" } },
    ],
    note: {
      zh: "两组数字来自不同研究、不同分母，不能相加。负荷 CMR 系列共 182 名患者完成 224 次检查，其中 221 次完成并可诊断。",
      en: "The figures come from different studies with different denominators and must not be added. The stress CMR series covered 182 patients and 224 examinations, of which 221 were completed and diagnostic.",
    },
  },
  {
    id: "dynamic",
    nav: { zh: "动态成分", en: "The dynamic component" },
    kind: "prose",
    heading: {
      zh: "静息几何与运动状态下的血流，不是同一个问题",
      en: "Resting geometry and flow under exertion are not the same question",
    },
    paragraphs: [
      {
        zh: "一项 81 名成人 R-AAOCA 的研究同时做了两种侵入性 FFR。腺苷主要反映固定性狭窄，异常率约 6.2%；多巴酚丁胺更接近心率和收缩力上升的运动状态，异常率约 19.8%。同一批血管，两种负荷方式给出的结论差三倍。",
        en: "A study of 81 adults with R-AAOCA performed two invasive FFR measurements. Adenosine, which mainly reflects fixed narrowing, was abnormal in about 6.2%. Dobutamine, closer to the raised heart rate and contractility of exercise, was abnormal in about 19.8%. In the same vessels, the two forms of stress differ threefold.",
      },
      {
        zh: "这组数据来自平均年龄约 52 岁的成人，不能直接外推到儿童。它的价值在于机制：如果压迫成分是动态的，那么一次静息影像和一次单纯扩血管负荷检查都可能低估问题，而一次“看起来很窄”的 CTA 也不必然对应运动时的血流受限。",
        en: "These are adults with a mean age of about 52 and cannot be extrapolated directly to children. Their value is mechanistic: if the compressive component is dynamic, a resting scan and a pure vasodilator stress test can both understate the problem, while an alarming-looking CTA does not necessarily correspond to flow limitation during exercise.",
      },
      {
        zh: "同一项研究还发现，开口短轴等几何参数比“是否存在壁内段”这一分类更能对应动态血流异常。这属于新兴的研究方向，目前没有可以直接用于临床分层的阈值。",
        en: "The same study found that geometric parameters such as ostial minor diameter corresponded to abnormal dynamic flow better than the binary presence of an intramural course. This is an emerging line of work; it does not yet provide thresholds usable for clinical stratification.",
      },
    ],
  },
  {
    id: "cost",
    nav: { zh: "手术的代价", en: "The cost of repair" },
    kind: "stats",
    heading: {
      zh: "修复解决了什么，又留下了什么",
      en: "What repair resolves, and what it leaves behind",
    },
    lede: {
      zh: "CHSS 收集 682 名不超过 30 岁的 AAOCA 患者，其中 395 人在 45 个中心接受手术，中位随访 2.8 年，87% 的修复包含去顶。同一批数据既说明手术总体安全，也说明它不是零代价。",
      en: "The CHSS enrolled 682 people with AAOCA aged 30 or younger; 395 underwent surgery at 45 centres with a median follow-up of 2.8 years, and unroofing formed part of 87% of repairs. The same dataset shows both that repair is broadly safe and that it is not free.",
    },
    stats: [
      { value: "51/64", label: { zh: "术前有缺血者术后缺血消失", en: "Preoperative ischemia resolved after surgery" } },
      { value: "8%", label: { zh: "新出现轻度以上主动脉瓣关闭不全（27/358）", en: "New mild-or-greater aortic insufficiency (27/358)" } },
      { value: "2%", label: { zh: "新出现中度以上主动脉瓣关闭不全（7/358）", en: "New moderate-or-greater aortic insufficiency (7/358)" } },
      { value: "13 人 / 15 次", label: { zh: "冠脉相关再次手术", en: "Coronary-related reoperations" } },
      { value: "4 例", label: { zh: "术后死亡", en: "Postoperative deaths" } },
    ],
    note: {
      zh: "分母不同，不能相加：主动脉瓣关闭不全按有术前/术后配对评估的 358 人计算，缺血消失按术前存在缺血的 64 人计算。",
      en: "The denominators differ and must not be added: aortic insufficiency is calculated among the 358 with paired evaluations, and ischemia resolution among the 64 with preoperative ischemia.",
    },
  },
  {
    id: "residual",
    nav: { zh: "术后仍在主肺之间", en: "Still interarterial after repair" },
    kind: "prose",
    heading: {
      zh: "去顶以后仍然“夹在两根大动脉之间”，并不等于手术失败",
      en: "Still running between the great arteries after unroofing does not mean the operation failed",
    },
    paragraphs: [
      {
        zh: "62 名儿童在术后中位 3 个月复查 CTA：去顶 45 例、切断再植 17 例。两组术后都不再见到裂隙样开口和壁内段。去顶组 100% 仍为锐角起源，主动脉-肺动脉间走行由 43/45 降到 35/45，增厚的冠脉间嵴由 22/45 降到 10/45。",
        en: "Sixty-two children had CTA at a median of 3 months after surgery: 45 unroofing and 17 transection with reimplantation. Neither group showed a residual slit-like ostium or intramural course. After unroofing, an acute take-off persisted in 100%, the interarterial course fell from 43/45 to 35/45, and a thickened intercoronary pillar from 22/45 to 10/45.",
      },
      {
        zh: "再植组这些残留特征都消失，但 2/17（12%）出现严重冠脉狭窄，需要急诊再次手术，而去顶组没有出现这种吻合口相关问题。也就是说，两种术式各自解决和各自新增的问题并不相同。",
        en: "After reimplantation those residual features were absent, but 2 of 17 (12%) developed severe coronary stenosis requiring urgent revision, a problem the unroofing group did not have. The two techniques resolve and introduce different things.",
      },
      {
        zh: "这组数据支持一个概念上的转变：如果关键机制是壁内段受压和开口狭窄，那么把这两点解决就是手术的实质成果，术后影像上仍存在的走行方向并不自动构成失败。这些残留特征的长期临床意义，作者本人也说明尚不清楚。",
        en: "The data support a conceptual shift: if the operative mechanism is intramural compression and ostial narrowing, resolving those two is the substantive result, and a persisting course on postoperative imaging is not automatically a failure. The authors themselves state that the long-term significance of these residual features remains unknown.",
      },
    ],
  },
  {
    id: "alternatives",
    nav: { zh: "搭桥与肺动脉移位", en: "Bypass and PA translocation" },
    kind: "prose",
    heading: {
      zh: "为什么冠脉搭桥和肺动脉移位通常不是年轻患者的首选",
      en: "Why bypass grafting and pulmonary artery translocation are usually not first choices in the young",
    },
    paragraphs: [
      {
        zh: "AAOCA 的原生冠脉通常不是完全闭塞的固定性病变。搭桥以后原生血流与桥血管竞争，桥血管的通畅率因此受到影响；相关成人系列中出现过桥血管失败，作者也特别提醒在没有血流限制性病变时慎用。对一个还有几十年寿命的儿童，这不是一个理想的第一方案。",
        en: "In AAOCA the native coronary is usually not a fixed, fully obstructive lesion. After bypass, native flow competes with the graft and graft patency suffers; graft failure has been reported in adult series whose authors specifically caution against grafting without flow-limiting disease. For a child with decades ahead, that is not an attractive first option.",
      },
      {
        zh: "肺动脉移位改变的是大血管之间的空间，而不是异常冠脉的开口和壁内段。当瓶颈明确在开口和壁内段时，移开肺动脉并不直接扩大有效冠脉入口，因此它更适合特定解剖构型或作为组合术式的一部分。",
        en: "Pulmonary artery translocation changes the space between the great vessels rather than the anomalous ostium and intramural segment. Where the bottleneck is clearly the ostium and intramural course, moving the pulmonary artery does not by itself enlarge the effective coronary inlet, so it fits particular anatomies or a combined procedure.",
      },
    ],
  },
  {
    id: "chain",
    nav: { zh: "结论链", en: "The chain" },
    kind: "steps",
    heading: { zh: "把这些证据串成一条判断顺序", en: "The evidence as one sequence of judgements" },
    steps: [
      { zh: "确认是右冠型还是左冠型", en: "Establish right-sided versus left-sided origin" },
      { zh: "查有没有心脏骤停、运动性晕厥、恶性心律失常", en: "Check for arrest, exertional syncope, malignant arrhythmia" },
      { zh: "量化开口与近端几何，而不是只读一个直径", en: "Quantify ostial and proximal geometry, not one diameter" },
      { zh: "用负荷检查回答运动状态下是否缺血", en: "Answer whether ischemia appears under stress" },
      { zh: "有缺血则按解剖选择术式；无缺血则进入结构化随访", en: "With ischemia, choose a technique by anatomy; without it, enter structured surveillance" },
    ],
    quote: {
      zh: "现有证据既不支持“看到高危解剖就尽早手术”，也不支持“右冠型可以不管”。它支持的是：先把生理层面的风险测清楚，再让解剖决定手术怎么做。",
      en: "The evidence supports neither “operate early on sight of high-risk anatomy” nor “right-sided disease can be ignored.” It supports measuring the physiologic layer first, then letting anatomy determine how a repair would be done.",
    },
  },
];

export function AnatomyVersusPhysiologyPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
