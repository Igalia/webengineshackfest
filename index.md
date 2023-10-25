---
layout: default
---

<section id="hackfest">

<div class="section-wrapper">

## The hackfest

#### The **{{ site.year }} {{ site.title }}** will take place in A Coruña, Galicia, Spain from Monday, June 3th to Wednesday, June 5th.

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

## Talks (2023 Edition)

{% for talk in collections.talk %}

<div class="entry{% if talk.data.cancelled %} cancelled{% endif %}">

<a onclick="document.getElementById('{{ talk.data.page.fileSlug }}').showModal();" class="overlay emoji">➕</a>

{% if talk.data.imgsrc %}

<img src="{{ talk.data.imgsrc }}" alt="{{ talk.data.imgalt }}" />

{% endif %}

### <a onclick="document.getElementById('{{ talk.data.page.fileSlug }}').showModal();">{{ talk.data.title }}</a>

#### by {{ talk.data.authors }}

<div class="cancelled">{% if talk.data.cancelled %}Cancelled{% endif %}</div>

<dialog id="{{ talk.data.page.fileSlug }}">

{% if talk.data.imgsrc %}

<img src="{{ talk.data.imgsrc }}" alt="{{ talk.data.imgalt }}" />

{% endif %}

### {{ talk.data.title }}

#### by {{ talk.data.authors }}

##### Date: [{{ talk.data.date | date: "%Y/%m/%d %H:%M" }}](https://www.timeanddate.com/worldclock/fixedtime.html?iso={{ talk.data.dateiso }})

[Video]({{ talk.data.video }}) | [Slides]({{ talk.data.slides }})

<div class="content">

{{ talk.content }}

</div>

<form method="dialog"><button autofocus><span class="emoji">❌</span> Close</button></form>

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

<section id="venue">

<div class="section-wrapper">

## Venue

<figure>
  <img alt="Picture of Palexco building" src="/img/palexco.jpg" />
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

#### More sponsors are welcome! If you would like to contribute as a sponsor, please [contact us](mailto:hackfest@webengineshackfest.org).

{% if collections.host %}

### Host & Organizer

{% for sponsor in collections.host %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-host.png" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Host & Organizer" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.gold %}

### Gold Sponsors

{% for sponsor in collections.gold %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-gold.png" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Gold Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.silver %}

### Silver Sponsors

{% for sponsor in collections.silver %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-silver.png" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Silver Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.bronze %}

### Bronze Sponsors

{% for sponsor in collections.bronze %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-bronze.png" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} Bronze Sponsor" /></a>
</div>
{% endfor %}

{% endif %}

{% if collections.other %}

### Other Sponsors

{% for sponsor in collections.other %}
<div class="entry">
  <a href="{{ sponsor.data.url }}"><img src="/img/sponsors/logo-{{ sponsor.data.title | slugify }}-other.png" alt="{{ sponsor.data.title }} logo" title="{{ sponsor.data.title }} {{ sponsor.data.type }}" /></a>
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
   * Germán Poo-Caamaño
   * Ioanna Dimitriou
   * Javier Moran
   * Abhijeet Kandalkar

For urgent issues, you may also call <a href="tel:+34951204844">+34 951 204 844</a> and then enter the PIN
`1818` followed by the hash sign (`#`). This will call Javier Moran, Andy Wingo
and Ioanna Dimitriou.

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

### [@webhackfest@floss.social](https://floss.social/@webhackfest)
### [@webhackfest](http://twitter.com/webhackfest)
### <span class="emoji">📧</span> <hackfest@webengineshackfest.org>
### <span class="emoji">☎️ </span> <a href="tel:+34 981 913 991">+34 981 913 991</a>

</div>

</section>

