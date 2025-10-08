---
layout: default
---

<section id="hackfest">

<div class="section-wrapper">

## The hackfest

**The *{{ site.year }} {{ site.title }}* will take place in A Coruña, Galicia, Spain from Monday, June 15th to Wednesday, June 17th.**

**Registration form will open in the coming weeks.**

<!--

**There is no fee to participate either remotely or onsite. But if you are planning to participate onsite, please [fill out the registration form]({{ site.registrationForm }}).**

-->

{% for hackfest in collections.hackfest %}

<div class="entry">

<img src="{{ hackfest.data.imgsrc }}" alt="{{ hackfest.data.imgalt }}" />

### {{ hackfest.data.title }}

{{ hackfest.content }}

</div>

{% endfor %}

</div>

</section>

<section id="talks">

<div class="section-wrapper">

## Talks (from previous edition)

{% for talk in collections.talk %}

<div class="entry{% if talk.data.cancelled %} cancelled{% endif %}">

<a href="#{{ talk.data.page.fileSlug }}" onclick="document.getElementById('{{ talk.data.page.fileSlug }}').showModal();" class="overlay emoji">➕</a>

{% if talk.data.imgsrc %}

<img src="{{ talk.data.imgsrc }}" alt="{{ talk.data.imgalt }}" />

{% endif %}

{% if talk.data.imgsrc2 %}

<img src="{{ talk.data.imgsrc2 }}" alt="{{ talk.data.imgalt2 }}" />

{% endif %}

### <a href="#{{ talk.data.page.fileSlug }}" onclick="document.getElementById('{{ talk.data.page.fileSlug }}').showModal();">{{ talk.data.title }}</a>

#### by {{ talk.data.authors }}

<div class="cancelled">{% if talk.data.cancelled %}Cancelled{% endif %}</div>

<dialog id="{{ talk.data.page.fileSlug }}" onclose="history.pushState('', document.title, window.location.pathname)">

<form method="dialog">
<button autofocus class="close"><span class="emoji">❌</span></button>

{% if talk.data.imgsrc %}

<img src="{{ talk.data.imgsrc }}" alt="{{ talk.data.imgalt }}" {% if talk.data.imgsrc2 %}style="float: none;"{% endif %} />

{% endif %}

{% if talk.data.imgsrc2 %}

<img src="{{ talk.data.imgsrc2 }}" alt="{{ talk.data.imgalt2 }}" style="float: none;" />

<div style="clear: both;"></div>

{% endif %}

### {{ talk.data.title }}

#### by {{ talk.data.authors }}

##### Date: [{{ talk.data.date | date: "%Y/%m/%d - %H:%M CEST (UTC+2)" }}](https://www.timeanddate.com/worldclock/fixedtime.html?iso={{ talk.data.date }}&p1=681)

{% if talk.data.video %}

[Video]({{ talk.data.video }}) {% if talk.data.slides %} | [Slides]({{ talk.data.slides }}) {% endif %}

{% elsif talk.data.slides %}

[Slides]({{ talk.data.slides }})

{% endif %}

<div class="content">

{{ talk.content }}

</div>

<div class="cancelled">{% if talk.data.cancelled %}Cancelled{% endif %}</div>

<button><span class="emoji">❌</span> Close talk</button>

</form>

</dialog>

</div>

{% endfor %}

</div>

<script>
let dialog = document.getElementById(window.location.hash.substring(1));
if ((dialog != null) && (dialog.tagName == "DIALOG")) {
  dialog.showModal();
}
</script>

</section>

<section id="breakout-sessions">

<div class="section-wrapper">

## Breakout Sessions (from previous edition)

{% for breakout in collections.breakoutAsc | sort(attribute="data.title") %}* <a href="https://github.com/Igalia/webengineshackfest/issues/{{ breakout.data.issue }}">{{ breakout.data.title }}</a>
{% endfor %}

</div>

</section>

<section id="attendees">

<div class="section-wrapper">

## Attendees (from previous edition)

* Aapo Alasuutari
* Abhijeet Kandalkar
* Adrián Mora Rodríguez
* Adrián Pérez de Castro
* Alejandro G. Castro
* Alexander Dunaev
* Alice Boxhall
* Alicia Boya Garcia
* Andreu Botella
* Angel M Miguel
* Ankesh Bharti
* Anna Weine
* Anne van Kesteren
* Antonio Gomes Netto
* Bernd Kaiser
* Brian Kardell
* Byungwoo Lee
* Carlos Bentzen
* Carmen Cañas
* Casiano Rodriguez-Leon
* Chengzhong Wu
* Chris Cuellar
* Christian Liebel
* Christian Ulbrich
* Claire Hurst
* Claudio Saavedra
* Daniel Ehrenberg
* Daniel Huigens
* Dave Vandyke
* Delan Azabani
* Diego González
* Diego Pino Garcia
* Dietrich Ayala
* Dmitry Bezhetskov
* Dominik Röttsches
* Dongxu Liu
* Eemeli Aro
* Emilio Cobos Álvarez
* Enrique Ocaña González
* Eri Pazos Pérez
* Frédéric Wang
* Gengming Liu
* Georges Basile Stavracas Neto
* Giorgio Maone
* Gyuyoung Kim
* Haili Bai
* Henrique Ferreiro
* Ian Grunert
* Ioanna M. Dimitriou H.
* Jacob
* Jacobo Aragunde Pérez
* Jan Bajana
* Javier Fernandez Garcia-Boente
* Jeongeun Kim
* Jesse Alama
* John Xu
* Jon Butler
* Jon Kuperman
* Jonas Haukenes
* Jonas Kruckenberg
* Jonas Menken
* Jonathan Kew
* Jonathan Schwender
* José Dapena Paz
* Joyee Cheung
* Juan J. Sanchez
* Justin Michaud
* Keeley Hammond
* Keith Cirkel
* Kyungsun Lee
* Leo Kettmeir
* Lino Le Van
* Lorenzo Tilve
* Luca Casonato
* Luke Hubbard
* Luke Warlow
* Maksim Sisov
* Manuel Rego
* Marais Rossouw
* Mario Sánchez-Prada
* Martin Alvarez-Espinar
* Martin Robinson
* Max Ihlenfeldt
* Maxim Yaskevich
* Miguel Gomez
* Mike Pennisi
* Mikhail Barash
* Miyoung Shin
* Ms2ger
* Mukilan Thiyagarajan
* Nguyen Viet Do
* Nick Pfeiffer
* Nick Yamane
* Nico Burns
* Nicolò Ribaudo
* Nikolas Zimmermann
* Nina Kolesa
* Oliver Medhurst
* Olivier Tilloy
* Oriol Brufau
* Pablo Saavedra Rodiño
* Pablo Santana Gonzalez
* Patrick Griffis
* Pawel Lampe
* Philip Chimento
* Philippe Normand
* Pier Angelo Vendrame
* Przemyslaw Gorszkowski
* Rafael Fernández López
* Rakhi Sharma
* Raphael Kubo da Costa
* Rob Buis
* Robert Kroeger
* Robin Berjon
* Roger Zanoni
* Romulo Cintra
* Rui Hildt
* Sam Weinig
* Sergey Rubanov
* Shane F Carr
* sideshowbarker
* Simon Pena
* Simon Wülker
* snek
* Stefan Reinhold
* Stephen Chenney
* Thomas Steiner
* Tom Schuster
* Ujjwal Sharma
* Valerie Young
* Vincent Hilla
* Vitaly Dyachkov
* Vlad Zahorodnii
* Xabier Rodríguez Calvar
* Xiaoqian Wu
* Yeunjoo Choi
* Youenn Fablet
* Yutao Liu

</div>

</section>

<section id="venue">

<div class="section-wrapper">

## Venue

<figure>
  <img alt="Picture of Palexco building" src="/img/palexco.webp" />
  <figcaption><a href="https://www.palexco.com/">Palexco</a> (Palacio de Exposiciones y Congresos)<br>
Muelle de Transatlánticos s/n, 15003, A Coruña, Galicia (Spain)</figcaption>
</figure>

</div>

</section>

<section id="travel">

<div class="section-wrapper">

## Travel And Accommodation

{% for travel in collections.travel %}

<div class="entry">

<h3><span class="emoji">{{ travel.data.emoji }}</span><br>{{ travel.data.title }}</h3>

{{ travel.content }}

</div>

{% endfor %}

</div>

</section>

<section id="sponsors">

<div class="section-wrapper">

## Sponsors

**More information about how to become sponsor coming soon.**

<!-- **More sponsors are welcome! If you would like to contribute as a sponsor, please check the list of [sponsoring packages](/sponsoring/) and [contact us](mailto:hackfest@webengineshackfest.org).** -->

{% if collections.host %}

### Host & Organizer

{% for sponsor in collections.host %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-host.webp" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Host & Organizer" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.gold %}

### Gold Sponsors

{% for sponsor in collections.gold %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-gold.webp" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Gold Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.silver %}

### Silver Sponsors

{% for sponsor in collections.silver %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-silver.webp" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Silver Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.bronze %}

### Bronze Sponsors

{% for sponsor in collections.bronze %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-bronze.webp" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Bronze Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.other %}

### Other Sponsors

{% for sponsor in collections.other %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-other.webp" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} {{ sponsor.data.type }}" /></a>
</div>
{% endfor %}

{% endif %}

</div>

</section>

<section id="coc">

<div class="section-wrapper">

## Code Of Conduct

Igalia is a project which attempts to make space for equality within a system
that is highly unequal. In order to do this, we must counter the structural
discrimination that surrounds us in the world and, in particular, in our
industry. Our desire is expressed through our foundational principles, our
internal processes, and guidelines for how we treat each other. The ultimate
goal of the code of conduct is to keep Igalia welcoming for all those who
interact with us in good faith and to be a positive and fulfilling influence in
the lives of the people within our community.

This code of conduct has three sections. In the first section, we present the
ideals we believe should underlie interactions within Igalia. In the second
section, we describe types of unacceptable behavior. Finally, in the third
section, we describe how to report problems, so that we can take steps to
ensure that Igalia remains both safe and healthy.

This policy applies in all of the following contexts:
   * The Igalia offices
   * All internal and external meetings including assemblies and the partners council
   * All mailing lists, bug trackers, wikis, and all other online services
   * Igalia sponsored social gatherings such as summits
   * Igalia hosted conferences, hackathons, and other public and private events
   * At all times where a person is acting as a representative of Igalia, including sponsored external events, communities, or using a company e-mail address

### Expected Behavior

#### Be Respectful and Kind

Always assume that others are competent and trying to do their best.  Look out
for one another and offer help when it is appropriate and welcome. The words
you choose are important, so choose them carefully. Be aware that words and
imagery have different meanings across countries, cultures, and communities. If
you are unsure whether something is appropriate, it is better to keep it to
yourself. Be quick to apologize and learn from your mistakes.

#### Include Everyone

Encourage all voices. Amplify new points of view and listen actively. If you
find yourself dominating a discussion, it is especially important to step back
and make room for other voices. When repeating ideas and suggestions, give
credit to the person who introduced them. Be aware of the amount of time taken
up by the dominant members of the group. When it is possible, make sure there
are alternative ways to contribute.

#### Seek Understanding and Consensus

Discussion and debate are essential to Igalia, but we have to remember that we
are not trying to "win" disagreements. Always try to encourage constructive
discussions and inclusive thinking so that we are working with a wide range of
perspectives. At the same time, reject intolerance and the dehumanization of
others.

#### Speak Up

The responsibility for maintaining a safe environment is shared among all of
us. If you think something violates the code of conduct, say something.

### Unacceptable Behavior
   * Unwelcome, offensive or hurtful comments or jokes related to age, gender, gender identity and expression, sexual orientation, disability, illnesses, mental illness, neuro(a)typicality, physical appearance, body size, race, religion, national origin, nationality, ancestry, or pregnancy
   * Unwelcome, offensive, or hurtful comments or jokes regarding a person’s lifestyle choices and practices
   * Deliberate misgendering, use of “dead” or rejected names, or use of inappropriate nicknames
   * Gratuitous or off-topic sexual images or behavior, non-consensual physical contact and simulated physical contact, or any other type of unwelcome sexual attention
   * Violence, threats of violence, or incitement of violence, including encouraging others to commit self-harm
   * Deliberate intimidation or the sabotage of work
   * Stalking or unwelcome photography, recording, or logging of online activity
   * Sustained disruption of discussion
   * A pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others
   * Deliberate “outing” of any aspect of a person’s identity without their consent except as necessary to protect vulnerable people from intentional abuse
   * Publication of private and personal (unrelated to work) communication, except when it is used as evidence of a code of conduct violation
   * Retaliation for reporting a code of conduct violation

It is impossible to list all types of unacceptable behavior, but a general rule
is that conduct committed in bad faith, which causes harm or distress, or after
requests to stop is unacceptable. This includes actions taken without malice.
When in doubt, take responsibility for your actions, apologize, and move on.
Finally, reporting a violation of the code of conduct does not ever violate the
code of conduct.

### Reporting
There are several ways that you can report behavior that makes you or others feel unsafe, unwelcome, or excluded. These include:
   * Emailing ([conduct@igalia.com](mailto:conduct@igalia.com))
   * Speaking to the organizer of an Igalia hosted event

Emails sent to conduct@igalia.com are received by:
   * Andy Wingo
   * Brenna Brown
   * Danielle Mayabb
   * Eric Meyer
   * Javier Moran

For urgent issues, you may also call <a href="tel:+34951204844">+34 951 204 844</a> and then enter the PIN
`1818` followed by the hash sign (`#`). This will call Andy Wingo, Brenna Brown, and Eric Meyer.

People reported as violating the code of conduct will not take part in the
process of handling that report. After the report, immediate action will be
taken to ensure the safety and well-being of those involved.

Potential consequences of unacceptable behaviour:
   * Removal from an event
   * Temporary removal from Igalia services or locations
   * Permanent removal from Igalia services or locations
   * Termination of employment

</div>

</section>

<section id="contact">

<div class="section-wrapper">

## Contact Us

### <a rel="me" href="https://floss.social/@webhackfest">@webhackfest@floss.social</a>
### [@webengineshackfest.org](https://bsky.app/profile/webengineshackfest.org)
### <span class="emoji">📧</span> <hackfest@webengineshackfest.org>
### <span class="emoji">📞</span> <a href="tel:+34 981 913 991">+34 981 913 991</a>

</div>

</section>

