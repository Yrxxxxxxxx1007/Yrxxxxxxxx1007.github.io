<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}
{% assign ven = link.conference_short | downcase | strip %}
{% assign has_teaser = false %}
{% if link.image and link.image != '' %}
  {% assign has_teaser = true %}
{% endif %}

<li>
<div class="pub-row pub-row--aligned">
  <div class="pub-venue-col {% if has_teaser %}pub-venue-col--with-teaser{% endif %}">
    {% if has_teaser %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" alt="" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %}
    <span class="venue-tag {% if ven == 'arxiv' %}venue-tag--arxiv{% elsif ven == 'acl' %}venue-tag--acl{% else %}venue-tag--default{% endif %}">{{ link.conference_short }}</span>
    {% endif %}
  </div>
  <div class="pub-body-col">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
