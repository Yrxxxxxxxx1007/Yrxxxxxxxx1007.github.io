---
layout: homepage
---

<section id="about" aria-labelledby="name-heading">
  <header class="post-header">
    <h1 id="name-heading" class="post-title"><span class="font-weight-bold">Ruixuan</span> Yang</h1>
    <p class="desc">Undergraduate · <a href="https://www.xjtu.edu.cn/">Xi'an Jiaotong University</a></p>
  </header>
  <div class="clearfix about-content">
    <aside class="profile float-right">
      <figure><img class="img-fluid z-depth-1 rounded portrait" src="{{ site.avatar | relative_url }}" alt="Ruixuan Yang" width="1280" height="960" fetchpriority="high" decoding="async"></figure>
      <div class="profile-contact">
        <a class="email-address" href="mailto:{{ site.mailto_primary }}">{{ site.mailto_primary }}</a>
        <a class="email-address" href="mailto:{{ site.mailto_secondary }}">{{ site.mailto_secondary }}</a>
        <div class="profile-social">
          <a href="{{ site.google_scholar }}" rel="me">Google Scholar <span aria-hidden="true">↗</span></a>
          <a href="{{ site.github_link }}" rel="me">GitHub <span aria-hidden="true">↗</span></a>
          {% if site.cv_link %}<a href="{{ site.cv_link }}">CV <span aria-hidden="true">↗</span></a>{% endif %}
        </div>
      </div>
    </aside>
    <div class="biography">
      <p>I am <strong>Ruixuan Yang</strong>, an undergraduate in the <a href="https://math.xjtu.edu.cn/">School of Mathematics and Statistics</a> at <a href="https://www.xjtu.edu.cn/">Xi'an Jiaotong University (XJTU)</a>. My research focuses on making large language models more efficient and improving their reasoning through post-training.</p>
      <p>I am currently a research intern in <a href="https://yulunzhang.com/">Prof. Yulun Zhang's group</a> at <a href="https://en.sjtu.edu.cn/">Shanghai Jiao Tong University</a> and a visiting student in the <a href="https://westlake-encode-lab.github.io/">ENCODE Lab</a> at <a href="https://en.westlake.edu.cn/">Westlake University</a>, advised by <a href="https://huanwang.tech/">Prof. Huan Wang</a>.</p>
      <div id="research" class="research-interests">
        <h2>research interests</h2>
        <ul>
          <li><strong>Model efficiency:</strong> token pruning and knowledge distillation for efficient language model inference.</li>
          <li><strong>Post-training &amp; reasoning:</strong> on-policy distillation (OPD), multi-teacher learning, and chain-of-thought distillation.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="news" class="news content-section" aria-labelledby="news-heading">
  <h2 id="news-heading">news</h2>
  <table class="table table-sm table-borderless">
    <tbody>
      <tr><th scope="row"><time datetime="2026-07">Jul 2026</time></th><td>Joined <a href="https://yulunzhang.com/">Prof. Yulun Zhang's group</a> at Shanghai Jiao Tong University as a research intern.</td></tr>
      <!-- Month follows the official paper-notification date, April 29: https://2026.ijcai.org/important-dates/ -->
      <tr><th scope="row"><time datetime="2026-04">Apr 2026</time></th><td><a href="#compact">COMPACT</a> was accepted to <strong>IJCAI 2026</strong>.</td></tr>
      <tr><th scope="row"><time datetime="2026-04">Apr 2026</time></th><td><a href="#mind">MIND</a> was accepted to <strong>ACL 2026</strong> as a main-conference long paper.</td></tr>
      <tr><th scope="row"><time datetime="2026-04">Apr 2026</time></th><td>Joined the ENCODE Lab at Westlake University as a visiting student, advised by <a href="https://huanwang.tech/">Prof. Huan Wang</a>.</td></tr>
    </tbody>
  </table>
</section>

{% include_relative _includes/publications.md %}

<section id="experience" class="content-section" aria-labelledby="experience-heading">
  <h2 id="experience-heading">research experience</h2>
  <div class="experience-list">
    <div class="experience-item">
      <div><h3>Shanghai Jiao Tong University</h3><p>Research Intern · Yulun Zhang's Group</p><p class="advisor">Advised by <a href="https://yulunzhang.com/">Prof. Yulun Zhang</a>.</p></div>
      <p class="experience-date"><time datetime="2026-07">Jul 2026</time> — Present</p>
    </div>
    <div class="experience-item">
      <div><h3>Westlake University</h3><p>Visiting Student · <a href="https://westlake-encode-lab.github.io/">ENCODE Lab</a></p><p class="advisor">Advised by <a href="https://huanwang.tech/">Prof. Huan Wang</a>.</p></div>
      <p class="experience-date"><time datetime="2026-04">Apr 2026</time> — Present</p>
    </div>
    <div class="experience-item">
      <div><h3>Xi'an Jiaotong University</h3><p>Visiting Student · <a href="https://xjtuiair-urlab.github.io/portal/">Cognitive Architecture Group</a></p><p class="advisor">Institute of AI &amp; Robotics. Advised by <a href="https://scholar.xjtu.edu.cn/en/persons/pengju-ren/">Prof. Pengju Ren</a> and Boran Zhao.</p></div>
      <p class="experience-date"><time datetime="2025-10">Oct 2025</time> — <time datetime="2026-05">May 2026</time></p>
    </div>
  </div>
</section>

<section id="education" class="content-section" aria-labelledby="education-heading">
  <h2 id="education-heading">education</h2>
  <div class="education-entry"><h3>Xi'an Jiaotong University</h3><p>B.S. in progress · School of Mathematics and Statistics</p></div>
</section>
