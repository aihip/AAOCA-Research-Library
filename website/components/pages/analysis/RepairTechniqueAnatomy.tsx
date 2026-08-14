import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-repair-technique-anatomy";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 术式选择", en: "Evidence analysis · choosing the repair" },
  title: {
    zh: "术式跟着壁内段走：去顶、再植与新开口重建的分工",
    en: "Let the intramural segment choose: unroofing, reimplantation, or a neo-ostium",
  },
  lede: {
    zh: "AAORCA 的手术讨论经常被简化成“去顶还是再植”。现有外科文献给出的答案不是排名，而是分工：壁内段有多长、走在主动脉瓣交界上方还是下方，基本决定了哪一种重建能真正建立一个位置合适、口径足够的新开口。",
    en: "Discussion of AAORCA surgery often collapses into “unroofing or reimplantation.” The surgical literature does not answer with a ranking but with a division of labour: how long the intramural segment is, and whether it runs above or below the aortic valve commissure, largely determines which repair can actually create a well-positioned ostium of adequate calibre.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅。文中的解剖情形用于解释术式逻辑，不是任何一位患者的影像或手术方案。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it. The anatomic scenarios illustrate the logic of technique selection; they are not any patient's imaging or surgical plan.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2025-228311570164", title: { zh: "Mery 与 Beckerman：AAOCA 的最佳术式是什么", en: "Mery and Beckerman: what is the optimal technique?" } },
    { slug: "2021-eb4b1433c513", title: { zh: "切断再植与去顶的直接比较（61 例）", en: "Reimplantation versus unroofing, 61 patients" } },
    { slug: "2023-5ef3c3c3ba18", title: { zh: "术后残留高危解剖特征的 CTA 对比", en: "Postoperative high-risk anatomic features on CTA" } },
    { slug: "2019-971a4d85729a", title: { zh: "完整去顶与主动脉瓣交界重新悬吊", en: "Complete unroofing and commissural resuspension" } },
    { slug: "2003-891ae131a1fd", title: { zh: "早期去顶系列与新开口重建", en: "An early unroofing series and neo-ostium creation" } },
    { slug: "2016-37dcd1bf3b04", title: { zh: "成人 AAORCA 再植 16 例", en: "Reimplantation in 16 adults with AAORCA" } },
    { slug: "2025-547493071487", title: { zh: "Stanford 230 例手术结局", en: "Stanford 230-patient surgical outcomes" } },
    { slug: "2023-38c245e2e2c1", title: { zh: "Mayo 148 例按流程去顶", en: "Mayo protocolized unroofing, 148 patients" } },
    { slug: "2020-576e33889fe8", title: { zh: "CHSS 多中心手术结局", en: "CHSS multicentre repair outcomes" } },
    { slug: "2026-07cb5fd4bd9e", title: { zh: "国内 17 例儿童手术早中期结果", en: "A 17-child surgical series from China" } },
    { slug: "2022-86ad8963ac78", title: { zh: "儿童与青少年 AAOCA 手术综述", en: "Surgery for AAOCA in children and adolescents" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA", en: "Texas Children’s 220-child R-AAOCA cohort" } },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: { zh: "术式问题的正确提法", en: "How the question should be posed" },
    items: [
      {
        title: { zh: "去顶改造主动脉壁，再植改造冠脉起源", en: "Unroofing reshapes the aortic wall; reimplantation reshapes the origin" },
        body: {
          zh: "去顶把壁内冠脉与主动脉之间的共同壁打开，不切断冠脉；再植把冠脉切下来，在合适冠窦重新建立开口。两者解决的问题和引入的新问题都不一样。",
          en: "Unroofing opens the wall shared by the intramural coronary and the aorta without dividing the artery; reimplantation detaches the artery and re-establishes an ostium in the appropriate sinus. They solve different problems and introduce different new ones.",
        },
      },
      {
        title: { zh: "决定因素是长度与位置，不是先进程度", en: "Length and position decide it, not how modern a technique sounds" },
        body: {
          zh: "壁内段长且位于主动脉瓣上方，去顶最合适；位于瓣下方且足够长，可在合适冠窦建立新开口；位于瓣下方而长度不足，或壁内段很短甚至不存在，再植最合适。",
          en: "A long intramural segment above the aortic valve suits unroofing; one below the valve but long enough suits creating a neo-ostium in the appropriate sinus; one below the valve and too short, or a short or absent intramural segment, suits reimplantation.",
        },
      },
      {
        title: { zh: "术前需要回答的是可行性，不是偏好", en: "The pre-operative question is feasibility, not preference" },
        body: {
          zh: "关键问题是：这一段去顶以后，能不能形成位置合适、口径足够的新开口？如果术前就预判不能，就应该在术前而不是术中确定替代方案。",
          en: "The operative question is whether unroofing this segment can produce a well-positioned ostium of adequate calibre. If the answer is predicted to be no, the alternative should be settled before the operation rather than during it.",
        },
      },
    ],
  },
  {
    id: "what-unroofing-does",
    nav: { zh: "去顶做了什么", en: "What unroofing does" },
    kind: "prose",
    heading: { zh: "去顶术的实质：打开共同壁，而不是移动冠脉", en: "What unroofing actually does: it opens a shared wall, it does not move the artery" },
    paragraphs: [
      {
        zh: "壁内型 AAORCA 的一段冠脉不是自由走行在心表，而是嵌在主动脉壁内，与主动脉共用一层壁。去顶就是沿这一段切开共同壁，使壁内段直接向主动脉腔开放。",
        en: "In intramural AAORCA a length of the artery does not run free on the epicardium but sits within the aortic wall, sharing a layer of it with the aorta. Unroofing divides that shared wall along the segment so the intramural portion opens directly into the aortic lumen.",
      },
      {
        zh: "由此同时完成两件事：解除壁内段受到的侧向压迫；把原本裂隙样的小开口变成一个更大的新开口。对一段足够长的壁内段，这两点正好对应目前认为最重要的两个机制。",
        en: "That accomplishes two things at once: it relieves the lateral compression of the intramural segment, and it converts a slit-like ostium into a larger new one. For a sufficiently long intramural segment, those two correspond precisely to the mechanisms currently thought to matter most.",
      },
      {
        zh: "它没有做的是把冠脉搬到正常的右冠窦。术后 CTA 的对照研究直接证明了这一点：去顶后锐角起源保留 100%，主动脉-肺动脉间走行由 43/45 降到 35/45。因此“术后影像上仍在两根大动脉之间”并不等于手术失败，而是这一术式本来就不改变远端走行。",
        en: "What it does not do is relocate the artery to a normal right sinus. Comparative postoperative CTA shows this directly: after unroofing an acute take-off persisted in 100% and the interarterial course fell only from 43/45 to 35/45. A course still running between the great arteries on postoperative imaging is therefore not a failed operation; that course is simply not what this technique changes.",
      },
    ],
  },
  {
    id: "match",
    nav: { zh: "解剖与术式对应", en: "Anatomy to technique" },
    kind: "table",
    heading: { zh: "外科综述给出的对应关系", en: "The mapping the surgical literature gives" },
    lede: {
      zh: "下表按外科综述归纳，三种核心术式各有明确适用的解剖，不存在一种适用于全部 AAOCA 的方案。",
      en: "The table follows a surgical review: each of the three core techniques has an anatomy it fits, and no single operation suits every AAOCA.",
    },
    headers: [
      { zh: "壁内段情形", en: "Intramural situation" },
      { zh: "综述给出的术式", en: "Technique the review indicates" },
      { zh: "理由", en: "Reason" },
    ],
    rows: [
      [
        { zh: "长，且走行在主动脉瓣上方", en: "Long, running above the aortic valve" },
        { zh: "去顶术", en: "Unroofing" },
        { zh: "可以打开足够长的共同壁，形成宽敞且位置合适的新开口，且不必处理瓣交界", en: "Enough shared wall can be opened to create a generous, well-placed ostium without touching the commissure" },
      ],
      [
        { zh: "长，但走行在主动脉瓣下方", en: "Long, but running below the aortic valve" },
        { zh: "在合适冠窦部分去顶、建立新开口", en: "Partial unroofing at the appropriate sinus to create a neo-ostium" },
        { zh: "避免为了完整去顶而大范围处理主动脉瓣交界", en: "Avoids extensive commissural manipulation undertaken only to complete a full unroofing" },
      ],
      [
        { zh: "位于瓣下方且长度不足以建立新开口", en: "Below the valve and not long enough for a neo-ostium" },
        { zh: "冠脉切断再植", en: "Coronary transection and reimplantation" },
        { zh: "直接改变冠脉起点，绕开长度不足的问题", en: "Changes where the artery starts, bypassing the shortage of length" },
      ],
      [
        { zh: "壁内段很短或不存在", en: "Short or absent intramural segment" },
        { zh: "冠脉切断再植", en: "Coronary transection and reimplantation" },
        { zh: "去顶几乎没有可打开的共同壁，难以形成有意义的新开口", en: "There is almost no shared wall to open, so unroofing cannot create a meaningful new ostium" },
      ],
    ],
  },
  {
    id: "five-mm",
    nav: { zh: "5 mm 这个数字", en: "About the 5 mm figure" },
    kind: "prose",
    heading: { zh: "5 mm 是一条经验分界，不是国际统一阈值", en: "Five millimetres is an empirical dividing line, not an international threshold" },
    paragraphs: [
      {
        zh: "先说清楚这个数字的来源和限度。它不是任何指南规定的手术阈值，而是从两组具体数据里读出来的方向：术后 CTA 研究发现，术前壁内段不足 5 mm 与右冠型去顶后残留增厚的冠脉间嵴相关；另一组 61 例的直接比较中，接受再植与接受去顶者的壁内段长度其实接近（中位 5 mm 对 6 mm），说明长度只是判断中的一项，而不是分流开关。",
        en: "Its provenance and limits come first. It is not a threshold set by any guideline but a direction read off two datasets: postoperative CTA showed that a preoperative intramural length under 5 mm was associated with a residual thickened intercoronary pillar after unroofing in right-sided lesions; and in a direct comparison of 61 patients, intramural length was in fact similar between those reimplanted and those unroofed (median 5 mm versus 6 mm), showing that length is one input rather than a switch.",
      },
      {
        zh: "同一项 61 例研究的结论把适应证写得更具体：当走行位于瓣交界以下、当去顶不能把开口迁移到合适冠窦、或当去顶后仍会受到冠脉间嵴压迫时，切断再植是有用的替代方案。注意这三条都不是“长度小于某个数”，而是“去顶做不到某个结果”。",
        en: "The same 61-patient study states the indication more concretely: transection and reimplantation is a useful alternative when the course lies below the commissure, when unroofing does not relocate the ostium to the appropriate sinus, or when unroofing would leave compression by the intercoronary pillar. None of the three is “length below a number”; all three are “unroofing cannot achieve a result.”",
      },
      {
        zh: "国内的一组 17 例儿童手术系列也报告了同样的顾虑：壁内段较短时，去顶可能无法把冠脉开口有效重新定位。这组数据规模小、随访有限，但它说明这不是某一个中心的特殊看法。",
        en: "A 17-child surgical series from China raises the same concern: with a short intramural segment, unroofing may not effectively relocate the coronary ostium. The series is small with limited follow-up, but it shows the concern is not one centre's idiosyncrasy.",
      },
    ],
  },
  {
    id: "commissure",
    nav: { zh: "瓣交界的代价", en: "The cost at the commissure" },
    kind: "prose",
    heading: { zh: "为什么“在瓣交界上方还是下方”比长度更值得问", en: "Why “above or below the commissure” is worth asking before length" },
    paragraphs: [
      {
        zh: "主动脉瓣叶在交界处相接并获得支撑，而壁内冠脉常常正好从这个区域附近经过。如果壁内段穿到交界附近或以下，想完整打开它就可能必须先处理瓣交界，这就把一个冠脉手术变成同时涉及主动脉瓣的手术。",
        en: "The aortic leaflets meet and are supported at the commissures, and an intramural coronary often passes near exactly that region. If the segment runs at or below a commissure, opening it completely may require taking the commissure down first — which turns a coronary operation into one that also involves the aortic valve.",
      },
      {
        zh: "处理瓣交界之后重新悬吊是一种成熟做法。一组 26 例连续去顶手术中，早期 9 例只做去顶、随后 17 例常规加做交界重新悬吊；随访中重新悬吊组没有出现主动脉瓣反流，未悬吊组 6/9（67%）出现轻度以上反流。需要注意两组随访时间不同，这是同一中心的前后对比而不是随机比较。",
        en: "Resuspending the commissure afterwards is an established answer. In 26 consecutive unroofing operations, the first 9 had unroofing alone and the subsequent 17 routinely had commissural resuspension; on follow-up no patient in the resuspension group had aortic regurgitation, while 6 of 9 (67%) in the earlier group had mild-or-greater regurgitation. The follow-up durations differed, and this is a before-and-after comparison within one centre rather than a randomised one.",
      },
      {
        zh: "另一种答案是干脆不去动交界。一组 9 例的早期系列中，所有病例的壁内段都位于交界水平或以下，其中 2 例不做大范围去顶、直接在合适位置建立新开口以避免处理冠脉间交界；作者提出这样可能减少主动脉瓣受累。该系列同时报告 1 例术后 44 个月因重度主动脉瓣反流接受 Ross 手术，说明这一顾虑是真实的。",
        en: "The other answer is to avoid the commissure altogether. In an early series of 9 patients, every intramural segment lay at or below the commissure, and 2 had a new ostium created at an appropriate site without extensive unroofing, specifically to avoid disturbing the intercoronary commissure; the authors suggested this might spare the aortic valve. The same series reports one patient requiring a Ross procedure for severe aortic insufficiency 44 months later, which shows the concern is real.",
      },
      {
        zh: "多中心层面的数字给出了背景量级：CHSS 的 395 例手术中，有配对评估的 358 人里新出现轻度以上主动脉瓣关闭不全约 8%（27/358），中度以上约 2%（7/358）。这既说明总体概率不高，也说明它不是零。",
        en: "Multicentre figures give the background magnitude: among the 395 CHSS operations, of the 358 with paired evaluations about 8% (27/358) developed new mild-or-greater aortic insufficiency and about 2% (7/358) moderate-or-greater. The probability is low, and it is not zero.",
      },
    ],
  },
  {
    id: "reimplantation-risk",
    nav: { zh: "再植的失败点", en: "Where reimplantation fails" },
    kind: "prose",
    heading: { zh: "再植把风险集中到一个新的位置：吻合口", en: "Reimplantation concentrates the risk in one new place: the anastomosis" },
    paragraphs: [
      {
        zh: "再植在理论上可以同时消除异常冠窦起源、裂隙样开口、壁内段、锐角起源和冠脉间嵴的影响。术后 CTA 的对照数据支持这一点：再植组术后这些高危特征基本消失，锐角起源仅 2/17（12%）残留。",
        en: "In principle, reimplantation can eliminate the anomalous sinus of origin, the slit-like ostium, the intramural course, the acute take-off, and the intercoronary pillar at once. Comparative postoperative CTA supports this: after reimplantation those features were essentially gone, with an acute take-off persisting in only 2 of 17 (12%).",
      },
      {
        zh: "代价是产生了一个原本不存在的吻合口，它必须不狭窄、不扭曲、不折角、没有张力，并且随生长保持合适。同一项研究中，再植组 2/17（12%）出现严重冠脉狭窄，需要急诊再次手术，而去顶组没有出现这一类问题。",
        en: "The cost is an anastomosis that did not previously exist and must remain unnarrowed, unkinked, untwisted, tension-free, and adequate as the child grows. In the same study, 2 of 17 (12%) in the reimplantation group developed severe coronary stenosis requiring urgent revision, a category of problem the unroofing group did not have.",
      },
      {
        zh: "成人系列指向同一个位置。16 例 AAORCA 再植中 15 例（94%）成功，无手术死亡；1 例术中判断再植效果不满意且脱离体外循环困难，改做大隐静脉搭桥。成功者术后无症状，随访影像未见狭窄、扭折或肺动脉压迫。也就是说，再植的主要风险发生在手术当时，而不是慢慢显现。",
        en: "An adult series points to the same place. Of 16 AAORCA reimplantations, 15 (94%) succeeded with no operative mortality; one was judged unsatisfactory intraoperatively with difficulty weaning from bypass and was converted to a saphenous vein graft. Those completed were symptom-free with no stenosis, kinking, or pulmonary artery compression on follow-up imaging. The principal risk of reimplantation declares itself in the operating room rather than slowly afterwards.",
      },
    ],
  },
  {
    id: "head-to-head",
    nav: { zh: "直接比较", en: "Head to head" },
    kind: "stats",
    heading: { zh: "两种术式的直接比较：结果接近，适应证不同", en: "Compared directly: similar results, different indications" },
    lede: {
      zh: "61 例儿童 AAOCA 手术中，切断再植 16 例（26%）、去顶 45 例（74%），两组壁内段长度接近。末次随访恢复不受限运动的比例几乎相同。这说明当术式与解剖匹配时，结果趋同；它不能用来证明某一种术式更优。",
      en: "Among 61 pediatric AAOCA operations, 16 (26%) were transection and reimplantation and 45 (74%) unroofing, with similar intramural lengths. The proportion released to unrestricted exercise at last follow-up was nearly identical. This shows that results converge when technique matches anatomy; it cannot show one technique to be superior.",
    },
    stats: [
      { value: "15/16", label: { zh: "再植组恢复不受限运动（94%）", en: "Reimplantation released to unrestricted exercise (94%)" } },
      { value: "42/45", label: { zh: "去顶组恢复不受限运动（93%）", en: "Unroofing released to unrestricted exercise (93%)" } },
      { value: "5 / 6 mm", label: { zh: "两组壁内段长度中位数", en: "Median intramural length in the two groups" } },
    ],
    note: {
      zh: "两组由外科医生按解剖分配，不是随机分组，因此不能把组间差异解释为术式的因果效应。",
      en: "Patients were allocated by anatomy at the surgeon's judgement, not randomised, so differences between groups cannot be read as causal effects of technique.",
    },
  },
  {
    id: "large-series",
    nav: { zh: "大系列在说什么", en: "What the large series say" },
    kind: "prose",
    heading: { zh: "两组大系列各自成立，也各自受限", en: "Two large series, each valid and each limited" },
    paragraphs: [
      {
        zh: "一家单中心的 230 例 AAOCA 手术（手术时中位年龄 17 岁）中，去顶 86 例、冠脉再植 123 例、心肌内左主干修复 13 例、其他 8 例。中位随访 4 年，没有早期或晚期死亡；6 例（2.6%）因症状复发或缺血再次手术，其中 3 例为冠脉解剖性狭窄、3 例为术前未诊断的心肌桥。再植组没有再次手术，去顶组 5 例（5.8%）。该中心据此表示目前偏好冠脉再植。",
        en: "In one single-centre series of 230 AAOCA operations (median age at surgery 17 years), 86 had unroofing, 123 coronary reimplantation, 13 repair of an intraconal left main, and 8 other procedures. Over a median follow-up of 4 years there were no early or late deaths; 6 patients (2.6%) were reoperated for recurrent symptoms or ischemia, 3 for anatomic coronary narrowing and 3 for a previously undiagnosed myocardial bridge. There were no reoperations in the reimplantation group and 5 (5.8%) in the unroofing group. On that basis the centre states a current preference for reimplantation.",
      },
      {
        zh: "另一家中心 148 例按统一流程实施的去顶手术（中位年龄 44.4 岁，右冠型 130 例）显示，中位随访 9.5 年，10 年与 15 年生存率均为 94.5%，儿童亚组中位随访 10.9 年没有早期或晚期死亡。这是目前随访最长的去顶经验之一。",
        en: "At another centre, 148 protocolized unroofing operations (median age 44.4 years, 130 right-sided) showed 10- and 15-year survival of 94.5% over a median follow-up of 9.5 years, with no early or late deaths in the pediatric subgroup at a median follow-up of 10.9 years. It is one of the longest-followed unroofing experiences available.",
      },
      {
        zh: "两者不能直接相比：患者年龄结构、解剖构成、术式分配和随访长度都不同，而且术式在两家中心都是由外科医生按解剖选择的。可以成立的结论是，两种术式在成熟中心都能取得很低的死亡率；不能成立的结论是，其中一种在长期上优于另一种。",
        en: "They are not directly comparable: age structure, anatomic mix, technique allocation, and follow-up length all differ, and in both centres the technique was chosen by the surgeon according to anatomy. What holds is that both techniques achieve very low mortality at experienced centres. What does not hold is that either is superior in the long run.",
      },
      {
        zh: "还有一层限制适用于全部这些数据：AAOCA 修复的随访目前普遍以年为单位，而一个学龄儿童需要考虑的是几十年。没有任何一组现有数据能回答术后三四十年后的情况。",
        en: "One further limit applies to all of it: follow-up after AAOCA repair is currently measured in years, while a school-age child's horizon is decades. No existing dataset answers what these repairs look like thirty or forty years on.",
      },
    ],
  },
  {
    id: "questions",
    nav: { zh: "术前该问什么", en: "Questions before surgery" },
    kind: "table",
    heading: { zh: "把术前讨论从“谁主刀”换成可回答的技术问题", en: "Shift the pre-operative discussion from “who operates” to answerable technical questions" },
    lede: {
      zh: "下列问题都可以在术前依据 CTA 回答，而且答案会直接改变手术计划。它们的共同点是：不要求医生承诺结果，只要求说明方案与备选方案。",
      en: "Each question below can be answered before surgery from the CTA, and each answer changes the plan. They share one property: they ask for a plan and a fallback, not a promise about the outcome.",
    },
    headers: [
      { zh: "问题", en: "Question" },
      { zh: "它会改变什么", en: "What it changes" },
    ],
    rows: [
      [
        { zh: "壁内段具体多少毫米？", en: "How many millimetres is the intramural segment?" },
        { zh: "决定去顶能打开的长度", en: "Sets how much shared wall unroofing can open" },
      ],
      [
        { zh: "其中多少位于主动脉瓣交界上方？", en: "How much of it lies above the aortic valve commissure?" },
        { zh: "决定是否必须处理瓣交界", en: "Determines whether the commissure must be touched" },
      ],
      [
        { zh: "去顶后新开口会落在哪个冠窦？", en: "Into which sinus will the new ostium open after unroofing?" },
        { zh: "区分“打开了”与“重新定位了”", en: "Separates “opened” from “relocated”" },
      ],
      [
        { zh: "术后还会不会经过增厚的冠脉间嵴？", en: "Will the course still pass a thickened intercoronary pillar?" },
        { zh: "对应短壁内段去顶后的已知残留问题", en: "Addresses the known residual problem after unroofing a short segment" },
      ],
      [
        { zh: "如果术中发现壁内段只有 2–3 mm，备选方案是什么？", en: "If the intramural segment proves to be only 2–3 mm, what is the fallback?" },
        { zh: "把方案 B 从术中临时决定提前到术前", en: "Moves plan B from an intraoperative decision to a pre-operative one" },
      ],
      [
        { zh: "是否会做主动脉瓣交界重新悬吊？", en: "Will the commissure be resuspended?" },
        { zh: "与术后主动脉瓣反流风险直接相关", en: "Bears directly on postoperative aortic insufficiency" },
      ],
      [
        { zh: "术中如何确认吻合口没有张力或折角？", en: "How will the anastomosis be checked for tension or kinking?" },
        { zh: "对应再植最主要的失败模式", en: "Addresses reimplantation's principal failure mode" },
      ],
      [
        { zh: "脱离体外循环后血流不理想时怎么办？", en: "What happens if flow is inadequate after weaning from bypass?" },
        { zh: "已有系列中确实发生过，需要事先有答案", en: "This has happened in published series and needs an answer in advance" },
      ],
    ],
  },
  {
    id: "order",
    nav: { zh: "两层决策", en: "Two layers" },
    kind: "steps",
    heading: { zh: "术式讨论应该发生在第二层，而不是第一层", en: "Technique belongs to the second layer of the decision, not the first" },
    steps: [
      { zh: "第一层：是否存在值得手术的缺血或高危临床事件", en: "Layer one: is there ischemia or a high-risk clinical event that warrants surgery" },
      { zh: "第二层第一步：壁内段长度", en: "Layer two, step one: intramural length" },
      { zh: "第二步：与主动脉瓣交界的关系", en: "Step two: relationship to the aortic valve commissure" },
      { zh: "第三步：去顶后新开口的位置与口径", en: "Step three: position and calibre of the ostium unroofing would create" },
      { zh: "第四步：在去顶、新开口重建与再植之间做解剖导向的选择", en: "Step four: choose between unroofing, a neo-ostium, and reimplantation by anatomy" },
    ],
    quote: {
      zh: "把顺序颠倒过来——先认定一种术式，再寻找支持它的理由——会让所有术前影像变成对既定方案的确认，而不是对方案的检验。",
      en: "Reversing the order — settling on a technique first and then looking for reasons — turns the pre-operative imaging into confirmation of a decision already made rather than a test of it.",
    },
  },
];

export function RepairTechniqueAnatomyPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
