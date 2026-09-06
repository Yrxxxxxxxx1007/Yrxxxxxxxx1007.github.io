---
title: ''
summary: Ruixuan Yang is an undergraduate at XJTU researching efficient language models, token pruning, and
  post-training through on-policy and reasoning distillation.
type: landing
sections:
- block: resume-biography-3
  id: about
  content:
    username: me
    headings:
      about: About Me
      education: Education
      interests: Research Interests
  design:
    background:
      gradient_mesh:
        enable: true
    name:
      size: md
    avatar:
      size: medium
      shape: circle
- block: markdown
  id: research
  content:
    title: Research
    text: 'My research centers on efficient language models and how they learn to reason.


      **Model efficiency.** Token pruning and knowledge distillation to reduce the cost of language model inference.


      **Post-training & reasoning.** On-policy distillation (OPD), multi-teacher learning, and chain-of-thought
      distillation to improve reasoning capabilities.

      '
  design:
    columns: '1'
- block: collection
  id: papers
  content:
    title: Selected Publications
    filters:
      folders:
      - publications
      featured_only: true
    order: desc
    sort_by: Weight
  design:
    view: article-grid
    columns: 2
- block: markdown
  id: news
  content:
    title: News
    text: '| Date | Update |

      | :--- | :--- |

      | **Jul 2026** | Joined [Prof. Yulun Zhang''s group](https://yulunzhang.com/) at Shanghai Jiao Tong University
      as a research intern. |

      | **Apr 2026** | **[COMPACT](/publications/compact/)** was accepted to **IJCAI 2026**. |

      | **Apr 2026** | **[MIND](/publications/mind/)** was accepted to **ACL 2026** as a main-conference long
      paper. |

      | **Apr 2026** | Joined the ENCODE Lab at Westlake University as a visiting student, advised by [Prof.
      Huan Wang](https://huanwang.tech/). |

      '
  design:
    columns: '1'
- block: resume-experience
  id: experience
  content:
    username: me
    show_education: false
  design:
    date_format: Jan 2006
    is_education_first: false
---
