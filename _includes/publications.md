<section id="publications" aria-labelledby="publications-heading">
  <div class="section-heading"><span class="section-number" aria-hidden="true">03</span><h2 id="publications-heading">Publications</h2></div>
  <p class="publication-note"><sup>*</sup> Equal contribution / co-first authors. My name is highlighted in bold.</p>
  <div class="publication-list">
    {% for paper in site.data.publications.main %}
    <article id="{{ paper.id }}" class="publication" aria-labelledby="{{ paper.id }}-title">
      <a class="publication-image" href="{{ paper.page }}" tabindex="-1" aria-hidden="true"><img src="{{ paper.image | relative_url }}" alt="{{ paper.image_alt | escape }}" width="{{ paper.image_width }}" height="{{ paper.image_height }}" loading="lazy" decoding="async"></a>
      <div class="publication-body">
        <div class="publication-meta"><span class="venue">{{ paper.venue }}</span><span class="publication-status">{{ paper.status }}</span></div>
        <h3 id="{{ paper.id }}-title"><a href="{{ paper.page }}">{{ paper.title | escape }}</a></h3>
        <p class="authors">{% for author in paper.authors %}{% if author.name == site.title %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% if author.equal %}<sup>*</sup>{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
        <p class="publication-summary">{{ paper.summary }}</p>
        <div class="paper-links">
          <a href="{{ paper.pdf }}" aria-label="PDF of {{ paper.id | upcase }}">PDF <span aria-hidden="true">↗</span></a>
          <a href="{{ paper.page }}" aria-label="{{ paper.id | upcase }} paper page">{% if paper.arxiv %}ACL Anthology{% else %}arXiv{% endif %} <span aria-hidden="true">↗</span></a>
          {% if paper.arxiv %}<a href="{{ paper.arxiv }}" aria-label="{{ paper.id | upcase }} on arXiv">arXiv <span aria-hidden="true">↗</span></a>{% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
