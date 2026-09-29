---
title: ''
summary: Ruixuan Yang is an undergraduate at XJTU researching model efficiency, multimodal LLMs, post-training
  and reasoning, and the measurement of AI intelligence.
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
    text: |
      I study how to make language and multimodal models more efficient, more capable, and better understood. My interests include:

      **Model Efficiency.** Knowledge distillation, model and token pruning, and efficient training and inference.

      **MLLMs.** Multimodal large language models, with an interest in visual understanding and multimodal reasoning.

      **Post-training & Reasoning.** On-policy distillation (OPD), self-distillation, multi-teacher learning, and chain-of-thought distillation to improve model reasoning.

      **Measuring AI Intelligence.** Understanding and evaluating the knowledge, reasoning, and generalization capabilities of AI systems.

      I am also open to related questions across machine learning and AI.
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
    text: |
      | Date | Update |
      | :--- | :--- |
      | **Sep 2026** | Our preprint **[LT-OPD](/publications/lt-opd/)**, *Fewer Tokens, More Self-Teaching*, is now available on arXiv. |
      | **Sep 2026** | **[ECHO](/publications/echo/)** was accepted to **NeurIPS 2026**. |
      | **Apr 2026** | **[COMPACT](/publications/compact/)** was accepted to **IJCAI 2026**. |
      | **Apr 2026** | **[MIND](/publications/mind/)** was accepted to **ACL 2026** as a main-conference long paper. |
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
