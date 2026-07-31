# AAOCA / AAORCA 研究文献库：儿童、成人与专家共识

[在线检索 / Search online](https://aaoca.pheth.com) · [English](README.en.md) · [引用本项目](CITATION.cff) · [版权与全文说明](RIGHTS.md) · [参与维护](CONTRIBUTING.md)

这是一个面向临床、科研和教学的双语可检索文献库，主题覆盖**冠状动脉起源异常**（Anomalous Aortic Origin of a Coronary Artery, **AAOCA**）、**右冠状动脉起源异常**（**AAORCA / ARCA-L**）、儿童与成人危险分层、影像学评估、运动管理和外科治疗。

The **AAOCA Research Library** is a bilingual, deduplicated bibliography for anomalous aortic origin of a coronary artery, including pediatric and adult studies, expert consensus statements, clinical guidelines, imaging, ischemia assessment, sports participation, and surgical outcomes.

## 目录

- [目录结构](#目录结构)
- [分类与使用规则](#分类与使用规则)
- [专家共识与指南](#专家共识与指南8)
- [儿童 - 全文](#儿童---全文20)
- [儿童 - 非全文](#儿童---非全文18)
- [成人 - 全文](#成人---全文11)
- [成人 - 非全文](#成人---非全文14)
- [完整性与去重](#完整性与去重)
- [引用、许可与贡献](#引用许可与贡献)

整理日期：2026-07-31

当前仓库共收录 **63 条独立文献记录、622 个 PDF 页面**：儿童类 **38 条**（20 全文、18 非全文），成人类 **25 条**（11 全文、14 非全文）。

> [!WARNING]
> **凡文件名含 `NON_FULLTEXT`，均不是论文全文。** 这些条目因出版社付费墙、登录要求、反自动下载限制，或仅取得书目信息/会议摘要等原因，未在本地收录正式全文。每个文件只是一页书目访问卡，醒目标注“非全文”，并附 DOI、PMID（如已分配）及原始入口。**没有用摘要冒充论文，也不能把访问卡当作原文引用。**

## 目录结构

```text
papers/
├── pediatric/
│   ├── fulltext/
│   └── non_fulltext/
└── adult/
    ├── fulltext/
    └── non_fulltext/

index/
├── bibliography_and_access_status.csv
├── bibliography_and_access_status.json
├── pdf_integrity_check.tsv
├── SHA256SUMS.txt
└── manifest.txt
```

## 分类与使用规则

- 明确纳入儿童、青少年或以儿童先天性心脏病为主要应用场景者归入“儿童”。
- 明确纳入成人、成人指南，或样本平均/中位年龄及多数受试者为成人者归入“成人”。
- 跨年龄研究只保留一个分类；分类依据已写入相应全文条目的“研究概况”。
- “全文”包括完整论文、指南、完整预印本、完整作者稿、出版社 reference 版本或官方合订本；后几类均在获取状态或研究概况中单独说明。
- `NON_FULLTEXT` 访问卡仅用于定位合法入口；引用前必须通过 DOI、PMID 或原始入口取得并核对正式论文。

## 专家共识与指南（8）

| 年份 | 共识/指南 | 机构或期刊 | 状态 | 本地文件 |
|:---:|---|---|---|:---:|
| 2025 | Clinical Considerations for Competitive Sports Participation for Athletes With Cardiovascular Abnormalities: A Scientific Statement From the American Heart Association and American College of Cardiology | Circulation | ⚠️ 非全文 | [【非全文】PDF](<papers/pediatric/non_fulltext/2025_NON_FULLTEXT_Kim_AHA_ACC_Competitive_Athlete_Scientific_Statement.pdf>) |
| 2021 | 2020 ESC Guidelines on sports cardiology and exercise in patients with cardiovascular disease | European Heart Journal | ⚠️ 非全文 | [【非全文】PDF](<papers/adult/non_fulltext/2021_NON_FULLTEXT_Pelliccia_ESC_Sports_Cardiology_Guideline.pdf>) |
| 2020 | 先天性心脏病外科治疗中国专家共识（十二）：先天性冠状动脉异常 | 中国胸心血管外科临床杂志 | 全文 | [PDF](<papers/pediatric/fulltext/2020_An_Li_Chinese_Expert_Consensus_Congenital_Coronary_Anomalies.pdf>) |
| 2020 | Recommendations for Multimodality Assessment of Congenital Coronary Anomalies: A Guide from the American Society of Echocardiography | Journal of the American Society of Echocardiography | 全文 | [PDF](<papers/pediatric/fulltext/2020_Frommelt_ASE_Multimodality_Congenital_Coronary_Anomalies_Guideline.pdf>) |
| 2020 | 2020 ESC Guidelines for the management of adult congenital heart disease | European Heart Journal | ⚠️ 非全文 | [【非全文】PDF](<papers/adult/non_fulltext/2020_NON_FULLTEXT_ESC_Adult_CHD_Guideline.pdf>) |
| 2019 | 2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease | Journal of the American College of Cardiology | 全文 | [PDF](<papers/adult/fulltext/2019_Stout_AHA_ACC_Adult_CHD_Guideline.pdf>) |
| 2017 | Expert consensus guidelines: Anomalous aortic origin of a coronary artery | Journal of Thoracic and Cardiovascular Surgery | 全文 | [PDF](<papers/pediatric/fulltext/2017_Brothers_AATS_AAOCA_Expert_Consensus.pdf>) |
| 2015 | Eligibility and Disqualification Recommendations for Competitive Athletes With Cardiovascular Abnormalities: Task Force 4: Congenital Heart Disease: A Scientific Statement From the American Heart Association and American College of Cardiology | Circulation | 全文 | [PDF](<papers/pediatric/fulltext/2015_AHA_ACC_Competitive_Athlete_Eligibility_Combined_Statement.pdf>) |

## 儿童 - 全文（20）

| 年份 | 论文 | 来源 | DOI/入口 | 获取状态 | 研究概况 | PDF |
|:---:|---|---|---|---|---|:---:|
| 2026 | Risk stratification and real-world management of pediatric AAORCA: discordance between anatomical features and clinical symptoms | Frontiers in Cardiovascular Medicine | [10.3389/fcvm.2026.1876090](https://doi.org/10.3389/fcvm.2026.1876090) | 全文 | 儿童 AAORCA 单中心队列，151 例。 | [PDF](<papers/pediatric/fulltext/2026_Yu_Pediatric_AAORCA_Risk_Stratification.pdf>) |
| 2026 | Single-center clinical analysis of anomalous aortic origin of a coronary artery (AAOCA) in children: a multimodal imaging approach to risk stratification | Journal of Cardiothoracic Surgery | [10.1186/s13019-026-04667-9](https://doi.org/10.1186/s13019-026-04667-9) | 全文-reference | 儿童队列，58 例；出版社 Article in Press/reference 全文。 | [PDF](<papers/pediatric/fulltext/2026_Wang_Pediatric_AAOCA_Multimodal_Imaging_reference.pdf>) |
| 2026 | Surgical Outcomes of anomalous aortic origin of coronary arteries: early and mid-term results from a single-center experience | BMC Pediatrics | [10.1186/s12887-026-06746-1](https://doi.org/10.1186/s12887-026-06746-1) | 全文 | 儿童外科队列，17 例。 | [PDF](<papers/pediatric/fulltext/2026_Cao_Pediatric_AAOCA_Surgical_Outcomes.pdf>) |
| 2025 | Right Axillary Thoracotomy for Anomalous Aortic Origin of a Coronary Artery in Children | Congenital Heart Disease | [10.32604/chd.2026.076517](https://doi.org/10.32604/chd.2026.076517) | 全文 | 儿童右腋下开胸病例系列，12 例；按正式卷期年份 2025 归档。 | [PDF](<papers/pediatric/fulltext/2025_Li_Pediatric_AAOCA_Right_Axillary_Thoracotomy.pdf>) |
| 2025 | Surgical treatment of anomalous aortic origin of the coronary artery in paediatric patients: a Chinese single-center experience | BMC Surgery | [10.1186/s12893-025-02781-4](https://doi.org/10.1186/s12893-025-02781-4) | 全文 | 儿童外科队列，27 例。 | [PDF](<papers/pediatric/fulltext/2025_Luo_Pediatric_AAOCA_Surgery_China.pdf>) |
| 2024 | Fluid-structure interaction simulations for the prediction of fractional flow reserve in pediatric patients with anomalous aortic origin of a coronary artery | arXiv preprint | [原始入口](https://arxiv.org/abs/2405.01703) | 全文-预印本 | 儿童 FSI/FFR 建模；完整预印本，不是期刊最终版。 | [PDF](<papers/pediatric/fulltext/2024_Puelz_Pediatric_AAOCA_FFR_Preprint.pdf>) |
| 2023 | Anomalous right coronary artery originating from the aorta: a series of nine pediatric cases | BMC Pediatrics | [10.1186/s12887-023-04377-4](https://doi.org/10.1186/s12887-023-04377-4) | 全文 | 儿童 ARCA-L 病例系列，9 例。 | [PDF](<papers/pediatric/fulltext/2023_Na_9_Pediatric_ARCA_Cases.pdf>) |
| 2023 | Clinical analysis of sixty-nine children with anomalous aortic origin of the coronary artery | European Journal of Pediatrics | [10.1007/s00431-023-05075-0](https://doi.org/10.1007/s00431-023-05075-0) | 全文 | 儿童队列，69 例。 | [PDF](<papers/pediatric/fulltext/2023_Zhen_69_Children_AAOCA.pdf>) |
| 2022 | Congenital Anomalous Origin of Coronary Artery Disease in Children With Syncope: A Case Series | Frontiers in Pediatrics | [10.3389/fped.2022.879753](https://doi.org/10.3389/fped.2022.879753) | 全文 | 儿童晕厥病例系列，8 例。 | [PDF](<papers/pediatric/fulltext/2022_Gao_Children_Syncope_Case_Series.pdf>) |
| 2022 | Surgery for Anomalous Aortic Origin of a Coronary Artery (AAOCA) in Children and Adolescents: A Meta-Analysis | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/21501351221095424](https://doi.org/10.1177/21501351221095424) | 全文 | 儿童、青少年和 30 岁以下青年外科荟萃分析。 | [PDF](<papers/pediatric/fulltext/2022_Ponzoni_Pediatric_AAOCA_Meta_Analysis.pdf>) |
| 2020 | Anomalous aortic origin of a coronary artery in two children | Asian Cardiovascular & Thoracic Annals | [10.1177/0218492319870614](https://doi.org/10.1177/0218492319870614) | 全文 | 2 例儿童心搏骤停后确诊并接受去顶术。 | [PDF](<papers/pediatric/fulltext/2020_Hosoda_Two_Pediatric_AAOCA_Cases.pdf>) |
| 2020 | Exercise-Induced Abnormalities of Regional Myocardial Deformation in Anomalous Aortic Origin of the Right Coronary Artery | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/2150135120947689](https://doi.org/10.1177/2150135120947689) | 全文 | 儿童/青少年运动负荷超声研究；各组平均年龄约 13-15 岁。 | [PDF](<papers/pediatric/fulltext/2020_Binka_AAORCA_Exercise_Myocardial_Deformation.pdf>) |
| 2020 | Recommendations for Multimodality Assessment of Congenital Coronary Anomalies: A Guide from the American Society of Echocardiography | Journal of the American Society of Echocardiography | [10.1016/j.echo.2019.10.011](https://doi.org/10.1016/j.echo.2019.10.011) | 全文 | ASE 先天性冠状动脉异常多模态影像指南；与 SCAI、JSE 和 SCMR 合作制定；以先天性/儿童影像评估为主要应用场景。 | [PDF](<papers/pediatric/fulltext/2020_Frommelt_ASE_Multimodality_Congenital_Coronary_Anomalies_Guideline.pdf>) |
| 2020 | 先天性心脏病外科治疗中国专家共识（十二）：先天性冠状动脉异常 | 中国胸心血管外科临床杂志 | [10.7507/1007-4848.202008031](https://doi.org/10.7507/1007-4848.202008031) | 全文 | 国家心血管病专家委员会先天性心脏病专业委员会制定；覆盖 AAOCA、冠状动脉异常起源于肺动脉、冠状动脉瘘及相关外科诊疗建议。 | [PDF](<papers/pediatric/fulltext/2020_An_Li_Chinese_Expert_Consensus_Congenital_Coronary_Anomalies.pdf>) |
| 2019 | Features associated with myocardial ischemia in anomalous aortic origin of a coronary artery: A Congenital Heart Surgeons' Society study | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2019.02.122](https://doi.org/10.1016/j.jtcvs.2019.02.122) | 全文 | CHSS 多中心队列；诊断年龄不超过 30 岁，主要归入儿童/青年。 | [PDF](<papers/pediatric/fulltext/2019_Jegatheeswaran_CHSS_Ischemia_Features.pdf>) |
| 2019 | Perfusion Study Helps in the Management of the Intraseptal Course of an Anomalous Coronary Artery | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/2150135119829004](https://doi.org/10.1177/2150135119829004) | 全文 | 11 岁儿童病例；核素灌注研究用于指导手术。 | [PDF](<papers/pediatric/fulltext/2019_Agati_Intraseptal_Anomalous_Coronary_Perfusion_Study.pdf>) |
| 2017 | Expert consensus guidelines: Anomalous aortic origin of a coronary artery | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2016.06.066](https://doi.org/10.1016/j.jtcvs.2016.06.066) | 全文 | AATS 专家共识；以先天性/儿童及青年管理为主要应用场景。 | [PDF](<papers/pediatric/fulltext/2017_Brothers_AATS_AAOCA_Expert_Consensus.pdf>) |
| 2015 | Eligibility and Disqualification Recommendations for Competitive Athletes With Cardiovascular Abnormalities: Task Force 4: Congenital Heart Disease: A Scientific Statement From the American Heart Association and American College of Cardiology | Circulation | [10.1161/CIR.0000000000000240](https://doi.org/10.1161/CIR.0000000000000240) | 全文-官方合订本 | AHA/ACC 竞技运动员先天性心脏病共识；本地 PDF 为 ACC 发布的 108 页官方合订本，其中完整收录 Task Force 4；DOI/PMID 对应该章节。 | [PDF](<papers/pediatric/fulltext/2015_AHA_ACC_Competitive_Athlete_Eligibility_Combined_Statement.pdf>) |
| 2012 | Anomalous aortic origin of coronary arteries from the opposite sinus: A critical appraisal of risk | BMC Cardiovascular Disorders | [10.1186/1471-2261-12-83](https://doi.org/10.1186/1471-2261-12-83) | 全文 | 以儿童和青年猝死风险及管理为主要应用场景的风险评述。 | [PDF](<papers/pediatric/fulltext/2012_Penalver_AAOCA_Risk_Critical_Appraisal.pdf>) |
| 2011 | Anomalous Aortic Origin of a Coronary Artery: Preoperative Diagnosis and Surgical Planning | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/2150135111406938](https://doi.org/10.1177/2150135111406938) | 全文 | 外科队列，53 例；平均年龄 13.9 岁（4-65 岁），按主要年龄归入儿童。 | [PDF](<papers/pediatric/fulltext/2011_Turner_AAOCA_Preoperative_Diagnosis_and_Surgical_Planning.pdf>) |

## 儿童 - 非全文（18）

> 下表每一项及其本地 PDF 都是 **非全文书目访问卡**，不是论文原文。

| 年份 | 状态与题名 | 来源 | DOI | PMID | 原始入口 | 本地访问卡 |
|:---:|---|---|---|---|:---:|:---:|
| 2026 | ⚠️ **非全文**<br>Clinical characteristics and outcomes of the anomalous aortic origin of a coronary artery: a nationwide pediatric survey in Japan | Heart and Vessels | [10.1007/s00380-026-02722-y](https://doi.org/10.1007/s00380-026-02722-y) | [42472738](https://pubmed.ncbi.nlm.nih.gov/42472738/) | [原始入口](https://doi.org/10.1007/s00380-026-02722-y) | [【非全文】PDF](<papers/pediatric/non_fulltext/2026_NON_FULLTEXT_Japan_Pediatric_Nationwide_Survey.pdf>) |
| 2026 | ⚠️ **非全文**<br>Proposed Standardized Nomenclature for Anomalous Aortic Origin of a Coronary Artery: An International Multidisciplinary Initiative | JACC: Cardiovascular Imaging | [10.1016/j.jcmg.2026.02.005](https://doi.org/10.1016/j.jcmg.2026.02.005) | 未分配或未检得（截至 2026-07-31） | [原始入口](https://doi.org/10.1016/j.jcmg.2026.02.005) | [【非全文】PDF](<papers/pediatric/non_fulltext/2026_NON_FULLTEXT_AAOCA_Standardized_Nomenclature.pdf>) |
| 2025 | ⚠️ **非全文**<br>Clinical Considerations for Competitive Sports Participation for Athletes With Cardiovascular Abnormalities: A Scientific Statement From the American Heart Association and American College of Cardiology | Circulation | [10.1161/CIR.0000000000001297](https://doi.org/10.1161/CIR.0000000000001297) | [39973614](https://pubmed.ncbi.nlm.nih.gov/39973614/) | [原始入口](https://doi.org/10.1161/CIR.0000000000001297) | [【非全文】PDF](<papers/pediatric/non_fulltext/2025_NON_FULLTEXT_Kim_AHA_ACC_Competitive_Athlete_Scientific_Statement.pdf>) |
| 2025 | ⚠️ **非全文**<br>Outcomes of 230 Patients Undergoing Surgical Repair of Anomalous Aortic Origin of a Coronary Artery | The Annals of Thoracic Surgery | [10.1016/j.athoracsur.2025.01.029](https://doi.org/10.1016/j.athoracsur.2025.01.029) | [39983947](https://pubmed.ncbi.nlm.nih.gov/39983947/) | [原始入口](https://doi.org/10.1016/j.athoracsur.2025.01.029) | [【非全文】PDF](<papers/pediatric/non_fulltext/2025_NON_FULLTEXT_230_Patient_Surgical_Outcomes.pdf>) |
| 2025 | ⚠️ **非全文**<br>The Diagnosis and Therapeutic Management of Anomalous Aortic Origin of the Coronary Artery: A Retrospective Study Conducted at a Single Center in China | Reviews in Cardiovascular Medicine | [10.31083/RCM33432](https://doi.org/10.31083/RCM33432) | 未分配或未检得（截至 2026-07-31） | [原始入口](https://doi.org/10.31083/RCM33432) | [【非全文】PDF](<papers/pediatric/non_fulltext/2025_NON_FULLTEXT_China_Single_Center_Management.pdf>) |
| 2023 | ⚠️ **非全文**<br>Application of Patient-Specific Computational Fluid Dynamics in Anomalous Aortic Origin of Coronary Artery: A Systematic Review | Journal of Cardiovascular Development and Disease | [10.3390/jcdd10090384](https://doi.org/10.3390/jcdd10090384) | [37754814](https://pubmed.ncbi.nlm.nih.gov/37754814/) | [原始入口](https://doi.org/10.3390/jcdd10090384) | [【非全文】PDF](<papers/pediatric/non_fulltext/2023_NON_FULLTEXT_Patient_Specific_CFD_Systematic_Review.pdf>) |
| 2023 | ⚠️ **非全文**<br>Clinical presentation and medium-term outcomes of children with anomalous aortic origin of the left coronary artery: high-risk features beyond interarterial course | Circulation: Cardiovascular Interventions | [10.1161/CIRCINTERVENTIONS.122.012635](https://doi.org/10.1161/CIRCINTERVENTIONS.122.012635) | [37192311](https://pubmed.ncbi.nlm.nih.gov/37192311/) | [原始入口](https://doi.org/10.1161/CIRCINTERVENTIONS.122.012635) | [【非全文】PDF](<papers/pediatric/non_fulltext/2023_NON_FULLTEXT_Pediatric_AAOLCA_Clinical_Outcomes.pdf>) |
| 2023 | ⚠️ **非全文**<br>Ischemia in Anomalous Aortic Origin of a Right Coronary Artery: Large Pediatric Cohort Medium-Term Outcomes | Circulation: Cardiovascular Interventions | [10.1161/CIRCINTERVENTIONS.122.012631](https://doi.org/10.1161/CIRCINTERVENTIONS.122.012631) | [37071720](https://pubmed.ncbi.nlm.nih.gov/37071720/) | [原始入口](https://doi.org/10.1161/CIRCINTERVENTIONS.122.012631) | [【非全文】PDF](<papers/pediatric/non_fulltext/2023_NON_FULLTEXT_Pediatric_AAORCA_Ischemia_Outcomes.pdf>) |
| 2023 | ⚠️ **非全文**<br>Trends in surgical management of anomalous aortic origin of the coronary artery over 2 decades | JTCVS Open | [10.1016/j.xjon.2023.07.017](https://doi.org/10.1016/j.xjon.2023.07.017) | [38204671](https://pubmed.ncbi.nlm.nih.gov/38204671/) | [原始入口](https://doi.org/10.1016/j.xjon.2023.07.017) | [【非全文】PDF](<papers/pediatric/non_fulltext/2023_NON_FULLTEXT_Surgical_Management_Trends.pdf>) |
| 2022 | ⚠️ **非全文**<br>Anomalous Aortic Origin of Right Coronary Artery: Outcomes of Surgical and Nonsurgical Treatment | The Annals of Thoracic Surgery | [10.1016/j.athoracsur.2021.11.008](https://doi.org/10.1016/j.athoracsur.2021.11.008) | [34890570](https://pubmed.ncbi.nlm.nih.gov/34890570/) | [原始入口](https://doi.org/10.1016/j.athoracsur.2021.11.008) | [【非全文】PDF](<papers/pediatric/non_fulltext/2022_NON_FULLTEXT_AAORCA_Surgical_vs_Nonsurgical.pdf>) |
| 2020 | ⚠️ **非全文**<br>Outcomes after anomalous aortic origin of a coronary artery repair: A Congenital Heart Surgeons' Society Study | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2020.01.114](https://doi.org/10.1016/j.jtcvs.2020.01.114) | [32800265](https://pubmed.ncbi.nlm.nih.gov/32800265/) | [原始入口](https://doi.org/10.1016/j.jtcvs.2020.01.114) | [【非全文】PDF](<papers/pediatric/non_fulltext/2020_NON_FULLTEXT_CHSS_Repair_Outcomes.pdf>) |
| 2018 | ⚠️ **非全文**<br>Outcomes of surgical intervention for anomalous aortic origin of a coronary artery: A large contemporary prospective cohort study | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2017.08.116](https://doi.org/10.1016/j.jtcvs.2017.08.116) | [29074047](https://pubmed.ncbi.nlm.nih.gov/29074047/) | [原始入口](https://doi.org/10.1016/j.jtcvs.2017.08.116) | [【非全文】PDF](<papers/pediatric/non_fulltext/2018_NON_FULLTEXT_Prospective_Surgical_Outcomes.pdf>) |
| 2018 | ⚠️ **非全文**<br>Patients with anomalous aortic origin of the coronary artery remain at risk after surgical repair | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2017.12.134](https://doi.org/10.1016/j.jtcvs.2017.12.134) | [29526358](https://pubmed.ncbi.nlm.nih.gov/29526358/) | [原始入口](https://pmc.ncbi.nlm.nih.gov/articles/PMC5960432/) | [【非全文】PDF](<papers/pediatric/non_fulltext/2018_NON_FULLTEXT_Postoperative_Risk.pdf>) |
| 2017 | ⚠️ **非全文**<br>Clinical evaluation of anomalous aortic origin of a coronary artery (AAOCA) | Congenital Heart Disease | [10.1111/chd.12505](https://doi.org/10.1111/chd.12505) | [28621042](https://pubmed.ncbi.nlm.nih.gov/28621042/) | [原始入口](https://doi.org/10.1111/chd.12505) | [【非全文】PDF](<papers/pediatric/non_fulltext/2017_NON_FULLTEXT_AAOCA_Clinical_Evaluation.pdf>) |
| 2016 | ⚠️ **非全文**<br>Decision analysis to define the optimal management of athletes with anomalous aortic origin of a coronary artery | Journal of Thoracic and Cardiovascular Surgery | [10.1016/j.jtcvs.2016.07.076](https://doi.org/10.1016/j.jtcvs.2016.07.076) | [27751241](https://pubmed.ncbi.nlm.nih.gov/27751241/) | [原始入口](https://doi.org/10.1016/j.jtcvs.2016.07.076) | [【非全文】PDF](<papers/pediatric/non_fulltext/2016_NON_FULLTEXT_Athlete_Management_Decision_Analysis.pdf>) |
| 2014 | ⚠️ **非全文**<br>Anomalous Aortic Origin of a Coronary Artery: A Report From the Congenital Heart Surgeons Society Registry | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/2150135113516984](https://doi.org/10.1177/2150135113516984) | [24403351](https://pubmed.ncbi.nlm.nih.gov/24403351/) | [原始入口](https://doi.org/10.1177/2150135113516984) | [【非全文】PDF](<papers/pediatric/non_fulltext/2014_NON_FULLTEXT_CHSS_Registry_Report.pdf>) |
| 2014 | ⚠️ **非全文**<br>Surgical repair of anomalous aortic origin of a coronary artery | European Journal of Cardio-Thoracic Surgery | [10.1093/ejcts/ezt614](https://doi.org/10.1093/ejcts/ezt614) | [24431169](https://pubmed.ncbi.nlm.nih.gov/24431169/) | [原始入口](https://doi.org/10.1093/ejcts/ezt614) | [【非全文】PDF](<papers/pediatric/non_fulltext/2014_NON_FULLTEXT_AAOCA_Surgical_Repair_76_Patients.pdf>) |
| 2010 | ⚠️ **非全文**<br>The registry of anomalous aortic origin of the coronary artery of the Congenital Heart Surgeons' Society | Cardiology in the Young | [10.1017/S1047951110001095](https://doi.org/10.1017/S1047951110001095) | [21087560](https://pubmed.ncbi.nlm.nih.gov/21087560/) | [原始入口](https://doi.org/10.1017/S1047951110001095) | [【非全文】PDF](<papers/pediatric/non_fulltext/2010_NON_FULLTEXT_CHSS_Registry.pdf>) |

## 成人 - 全文（11）

| 年份 | 论文 | 来源 | DOI/入口 | 获取状态 | 研究概况 | PDF |
|:---:|---|---|---|---|---|:---:|
| 2026 | Fluid dynamics-informed CCTA-derived geometric parameters in right coronary artery anomalies predict abnormal invasive Adenosine-FFR and Dobutamine-FFR | Complete manuscript; journal/DOI not stated in local file | 未分配或未检得 | 全文-作者稿 | 成人作者稿/完整手稿；平均年龄 52.3 岁；本地文件未注明 DOI。 | [PDF](<papers/adult/fulltext/2026_Mokhtari_CCTA_Geometry_FFR_Manuscript.pdf>) |
| 2026 | Histological assessment of the intramural segment in adults with an anomalous aortic origin of a coronary artery with an interarterial course | BMC Cardiovascular Disorders | [10.1186/s12872-026-06000-7](https://doi.org/10.1186/s12872-026-06000-7) | 全文-reference | 成人组织学研究；出版社 Article in Press/reference 全文。 | [PDF](<papers/adult/fulltext/2026_Verheijen_Adult_Intramural_Histology_reference.pdf>) |
| 2025 | AI-based detection and classification of anomalous aortic origin of coronary arteries using coronary CT angiography images | Nature Communications | [10.1038/s41467-025-58362-9](https://doi.org/10.1038/s41467-025-58362-9) | 全文 | 以成人冠脉 CCTA 工作流为主的大型 AI 数据集。 | [PDF](<papers/adult/fulltext/2025_Shiri_AI_AAOCA_CCTA.pdf>) |
| 2025 | Anomalous Aortic Origin of a Coronary Artery: Results from a Single Surgical Team in Spain | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/21501351241278684](https://doi.org/10.1177/21501351241278684) | 全文 | 成人外科队列，16 例；中位年龄 43.3 岁。 | [PDF](<papers/adult/fulltext/2025_Varela_Barca_AAOCA_Spanish_Surgical_Outcomes.pdf>) |
| 2024 | First report from the European registry for anomalous aortic origin of coronary artery (EURO-AAOCA) | Interdisciplinary CardioVascular and Thoracic Surgery | [10.1093/icvts/ivae074](https://doi.org/10.1093/icvts/ivae074) | 全文 | 混合年龄欧洲注册；中位年龄 33 岁，按主要年龄归入成人。 | [PDF](<papers/adult/fulltext/2024_Grani_EURO_AAOCA_Registry.pdf>) |
| 2024 | Surgical outcomes in adolescents and adults with anomalous aortic origin of a coronary artery | Frontiers in Cardiovascular Medicine | [10.3389/fcvm.2024.1489303](https://doi.org/10.3389/fcvm.2024.1489303) | 全文 | 混合青少年与成人队列；年龄 13-57 岁，中位 26 岁，归入成人。 | [PDF](<papers/adult/fulltext/2024_Li_Adolescent_Adult_Surgical_Outcomes.pdf>) |
| 2021 | Anomalous Aortic Origin of a Coronary Artery Repair Through an Anterior Minithoracotomy | Innovations | [10.1177/15569845211031541](https://doi.org/10.1177/15569845211031541) | 全文 | 微创外科病例系列，11 例；成人占多数，按主要年龄归入成人。 | [PDF](<papers/adult/fulltext/2021_Nellis_AAOCA_Anterior_Minithoracotomy_Repair.pdf>) |
| 2020 | Coronary Computed Tomography Angiography-Derived Fractional Flow Reserve in Patients with Anomalous Origin of the Right Coronary Artery from the Left Coronary Sinus | Korean Journal of Radiology | [10.3348/kjr.2019.0230](https://doi.org/10.3348/kjr.2019.0230) | 全文 | 成人 CCTA/CT-FFR 队列，94 例；平均年龄 54.4 岁。 | [PDF](<papers/adult/fulltext/2020_Tang_CT_FFR_94_Adult_Patients.pdf>) |
| 2019 | 2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease | Journal of the American College of Cardiology | [10.1016/j.jacc.2018.08.1029](https://doi.org/10.1016/j.jacc.2018.08.1029) | 全文 | 成人先天性心脏病指南；正式期刊卷期年份为 2019。 | [PDF](<papers/adult/fulltext/2019_Stout_AHA_ACC_Adult_CHD_Guideline.pdf>) |
| 2018 | Clinical Strategies of Anomalous Aortic Origin of the Coronary Artery Arising from the Opposite Sinus | 中国分子心脏病学杂志 | [10.16563/j.cnki.1671-6272.2018.06.005](https://doi.org/10.16563/j.cnki.1671-6272.2018.06.005) | 全文 | 回顾性队列，64 例；其中 56 例为 30-75 岁中老年患者，归入成人。 | [PDF](<papers/adult/fulltext/2018_Su_Opposite_Sinus_AAOCA_Clinical_Strategies.pdf>) |
| 2014 | The distribution and prognosis of anomalous coronary arteries identified by cardiovascular magnetic resonance: 15 year experience from two tertiary centres | Journal of Cardiovascular Magnetic Resonance | [10.1186/1532-429X-16-34](https://doi.org/10.1186/1532-429X-16-34) | 全文 | 成人为主的 CMR 队列，172 例；中位年龄 54 岁。 | [PDF](<papers/adult/fulltext/2014_Ripley_CMR_172_Adult_Patients.pdf>) |

## 成人 - 非全文（14）

> 下表每一项及其本地 PDF 都是 **非全文书目访问卡**，不是论文原文。

| 年份 | 状态与题名 | 来源 | DOI | PMID | 原始入口 | 本地访问卡 |
|:---:|---|---|---|---|:---:|:---:|
| 2026 | ⚠️ **非全文**<br>Adults with anomalous aortic origin of a coronary artery: impact of invasive functional testing on clinical decision making - insights from the MuSCAT registry | European Heart Journal - Imaging Methods and Practice | [10.1093/ehjimp/qyag010](https://doi.org/10.1093/ehjimp/qyag010) | [41742957](https://pubmed.ncbi.nlm.nih.gov/41742957/) | [原始入口](https://doi.org/10.1093/ehjimp/qyag010) | [【非全文】PDF](<papers/adult/non_fulltext/2026_NON_FULLTEXT_Adult_MuSCAT_Invasive_Testing.pdf>) |
| 2026 | ⚠️ **非全文**<br>Anomalous Aortic Origin of the Right Coronary Artery in Adults: Surgical Reimplantation With Intermediate-Term Results | World Journal for Pediatric and Congenital Heart Surgery | [10.1177/21501351261450105](https://doi.org/10.1177/21501351261450105) | [42272401](https://pubmed.ncbi.nlm.nih.gov/42272401/) | [原始入口](https://doi.org/10.1177/21501351261450105) | [【非全文】PDF](<papers/adult/non_fulltext/2026_NON_FULLTEXT_Adult_AAORCA_Reimplantation.pdf>) |
| 2026 | ⚠️ **非全文**<br>Prevalence and anatomical variants of anomalous aortic origin of a coronary artery assessed by coronary CT angiography: a single-center study | European Heart Journal - Cardiovascular Imaging (conference abstract) | [10.1093/ehjci/jeaf367.353](https://doi.org/10.1093/ehjci/jeaf367.353) | 未分配或未检得（截至 2026-07-31） | [原始入口](https://doi.org/10.1093/ehjci/jeaf367.353) | [【非全文】PDF](<papers/adult/non_fulltext/2026_NON_FULLTEXT_Adult_CCTA_Prevalence_Conference_Abstract.pdf>) |
| 2025 | ⚠️ **非全文**<br>Clinical and Prognostic Significance of Anomalous Origin of a Coronary Artery in Adults | Circulation | [10.1161/CIRCULATIONAHA.125.074198](https://doi.org/10.1161/CIRCULATIONAHA.125.074198) | [40995628](https://pubmed.ncbi.nlm.nih.gov/40995628/) | [原始入口](https://doi.org/10.1161/CIRCULATIONAHA.125.074198) | [【非全文】PDF](<papers/adult/non_fulltext/2025_NON_FULLTEXT_Adult_Clinical_Prognostic_Significance.pdf>) |
| 2025 | ⚠️ **非全文**<br>Surgical approach and outcomes in adults with anomalous aortic origin of coronary arteries at a reference center: Outcomes of proximal coronary surgery | JTCVS Open | [10.1016/j.xjon.2025.05.011](https://doi.org/10.1016/j.xjon.2025.05.011) | [41169309](https://pubmed.ncbi.nlm.nih.gov/41169309/) | [原始入口](https://pmc.ncbi.nlm.nih.gov/articles/PMC12570585/) | [【非全文】PDF](<papers/adult/non_fulltext/2025_NON_FULLTEXT_Adult_Proximal_Coronary_Surgery.pdf>) |
| 2023 | ⚠️ **非全文**<br>Management of Adults With Anomalous Aortic Origin of the Coronary Arteries: State-of-the-Art Review | Journal of the American College of Cardiology | [10.1016/j.jacc.2023.08.012](https://doi.org/10.1016/j.jacc.2023.08.012) | [37855757](https://pubmed.ncbi.nlm.nih.gov/37855757/) | [原始入口](https://doi.org/10.1016/j.jacc.2023.08.012) | [【非全文】PDF](<papers/adult/non_fulltext/2023_NON_FULLTEXT_Adult_AAOCA_State_of_the_Art.pdf>) |
| 2022 | ⚠️ **非全文**<br>Coronary artery disease in adults with anomalous aortic origin of a coronary artery | JTCVS Open | [10.1016/j.xjon.2022.04.022](https://doi.org/10.1016/j.xjon.2022.04.022) | [36004264](https://pubmed.ncbi.nlm.nih.gov/36004264/) | [原始入口](https://pmc.ncbi.nlm.nih.gov/articles/PMC9390708/) | [【非全文】PDF](<papers/adult/non_fulltext/2022_NON_FULLTEXT_Adult_AAOCA_Coronary_Disease.pdf>) |
| 2021 | ⚠️ **非全文**<br>2020 ESC Guidelines on sports cardiology and exercise in patients with cardiovascular disease | European Heart Journal | [10.1093/eurheartj/ehaa605](https://doi.org/10.1093/eurheartj/ehaa605) | [32860412](https://pubmed.ncbi.nlm.nih.gov/32860412/) | [原始入口](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/sports-cardiology-and-exercise/) | [【非全文】PDF](<papers/adult/non_fulltext/2021_NON_FULLTEXT_Pelliccia_ESC_Sports_Cardiology_Guideline.pdf>) |
| 2021 | ⚠️ **非全文**<br>The significance of symptoms before and after surgery for anomalous aortic origin of coronary arteries in adolescents and adults | Interactive CardioVascular and Thoracic Surgery | [10.1093/icvts/ivaa234](https://doi.org/10.1093/icvts/ivaa234) | [33221843](https://pubmed.ncbi.nlm.nih.gov/33221843/) | [原始入口](https://doi.org/10.1093/icvts/ivaa234) | [【非全文】PDF](<papers/adult/non_fulltext/2021_NON_FULLTEXT_Adolescent_Adult_Surgical_Symptoms.pdf>) |
| 2020 | ⚠️ **非全文**<br>2020 ESC Guidelines for the management of adult congenital heart disease | European Heart Journal | [10.1093/eurheartj/ehaa554](https://doi.org/10.1093/eurheartj/ehaa554) | [32860028](https://pubmed.ncbi.nlm.nih.gov/32860028/) | [原始入口](https://doi.org/10.1093/eurheartj/ehaa554) | [【非全文】PDF](<papers/adult/non_fulltext/2020_NON_FULLTEXT_ESC_Adult_CHD_Guideline.pdf>) |
| 2017 | ⚠️ **非全文**<br>Anomalous Aortic Origin of a Coronary Artery From the Inappropriate Sinus of Valsalva | Journal of the American College of Cardiology | [10.1016/j.jacc.2017.01.031](https://doi.org/10.1016/j.jacc.2017.01.031) | [28335843](https://pubmed.ncbi.nlm.nih.gov/28335843/) | [原始入口](https://doi.org/10.1016/j.jacc.2017.01.031) | [【非全文】PDF](<papers/adult/non_fulltext/2017_NON_FULLTEXT_JACC_AAOCA_Review.pdf>) |
| 2017 | ⚠️ **非全文**<br>Outcome in middle-aged individuals with anomalous origin of the coronary artery from the opposite sinus: a matched cohort study | European Heart Journal | [10.1093/eurheartj/ehx046](https://doi.org/10.1093/eurheartj/ehx046) | [28329166](https://pubmed.ncbi.nlm.nih.gov/28329166/) | [原始入口](https://doi.org/10.1093/eurheartj/ehx046) | [【非全文】PDF](<papers/adult/non_fulltext/2017_NON_FULLTEXT_Middle_Aged_Matched_Cohort.pdf>) |
| 2016 | ⚠️ **非全文**<br>Anomalous Coronary Arteries: Analysis of Clinical Outcome Based Upon Arterial Course and Surgical Intervention in an Adult Population | Academic Radiology | [10.1016/j.acra.2016.03.020](https://doi.org/10.1016/j.acra.2016.03.020) | [27161207](https://pubmed.ncbi.nlm.nih.gov/27161207/) | [原始入口](https://doi.org/10.1016/j.acra.2016.03.020) | [【非全文】PDF](<papers/adult/non_fulltext/2016_NON_FULLTEXT_Adult_Clinical_Outcomes.pdf>) |
| 2014 | ⚠️ **非全文**<br>Surgical unroofing of anomalous aortic origin of a coronary artery: a single-center experience | The Annals of Thoracic Surgery | [10.1016/j.athoracsur.2014.04.114](https://doi.org/10.1016/j.athoracsur.2014.04.114) | [25038010](https://pubmed.ncbi.nlm.nih.gov/25038010/) | [原始入口](https://doi.org/10.1016/j.athoracsur.2014.04.114) | [【非全文】PDF](<papers/adult/non_fulltext/2014_NON_FULLTEXT_AAOCA_Surgical_Unroofing.pdf>) |

## 完整性与去重

- README 只索引仓库内的唯一记录，不保留重复副本。
- 所有 PDF 均已重新打开检查页数；所有非全文卡均以 `NON_FULLTEXT` 命名，并验证 PDF 元数据含“非全文 / NOT FULL TEXT”标识。
- README 中的本地 PDF 链接均已验证；文件页数、字节数和 SHA-256 见 `index/`。
- DOI 或 PMID 确实未分配、尚未进入 PubMed，或截至整理日未检得时，明确写作“未分配或未检得”，没有猜填或留空。

## 引用、许可与贡献

- 推荐引用信息见 [`CITATION.cff`](CITATION.cff)。
- 本项目自有代码采用 MIT License；自有说明文字和整理后的元数据采用 CC BY 4.0。第三方论文 PDF **不在上述许可范围内**，具体边界见 [`RIGHTS.md`](RIGHTS.md)。
- 发现遗漏、分类错误、失效入口或重复记录时，请按 [`CONTRIBUTING.md`](CONTRIBUTING.md) 提交 Issue 或 Pull Request。
- 本项目仅用于文献发现与研究整理，不构成医疗建议。临床决策应查阅正式论文、现行指南并由合格专业人员作出。
