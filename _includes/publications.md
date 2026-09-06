<section id="publications" class="publications content-section" aria-labelledby="publications-heading">
  <div class="publications-heading"><h2 id="publications-heading">publications</h2><p class="contribution-note"><sup>*</sup> Co-first authors</p></div>
  <ol class="bibliography">
    {% for paper in site.data.publications.main %}
    <li>
      <article id="{{ paper.id }}" class="row publication-row" aria-labelledby="{{ paper.id }}-title">
        <div class="col-sm-3 abbr">
          <a href="{{ paper.page }}" class="figure-link" tabindex="-1" aria-hidden="true"><img src="{{ paper.image | relative_url }}" class="preview paper-figure" alt="{{ paper.image_alt | escape }}" width="{{ paper.image_width }}" height="{{ paper.image_height }}" loading="lazy" decoding="async"></a>
          <abbr class="badge rounded venue-badge">{{ paper.venue }}</abbr>
        </div>
        <div class="col-sm-9">
          <h3 id="{{ paper.id }}-title" class="title"><a href="{{ paper.page }}">{{ paper.title | escape }}</a></h3>
          <div class="author">{% for author in paper.authors %}{% if author.name == site.title %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% if author.equal %}<sup>*</sup>{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</div>
          <div class="periodical"><em>{{ paper.conference }}</em>, {{ paper.year }}. <span class="paper-status">{{ paper.status }}</span></div>
          <p class="paper-summary">{{ paper.summary }}</p>
          <div class="links">
            <a href="{{ paper.pdf }}" class="btn btn-sm z-depth-0" aria-label="PDF of {{ paper.id | upcase }}">PDF</a>
            <a href="{{ paper.page }}" class="btn btn-sm z-depth-0" aria-label="{{ paper.id | upcase }} paper page">{% if paper.arxiv %}ACL Anthology{% else %}arXiv{% endif %}</a>
            {% if paper.arxiv %}<a href="{{ paper.arxiv }}" class="btn btn-sm z-depth-0" aria-label="{{ paper.id | upcase }} on arXiv">arXiv</a>{% endif %}
          </div>
        </div>
      </article>
    </li>
    {% endfor %}
  </ol>
</section>
