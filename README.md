# pythonnortheast.com

The Python North East website on the new .com domain

## Adding Events

To add a new event, add a new Markdown document to the `_posts` directory
with a filename following this format:

```
<Year>-<Month>-<Day>-slug.md
for example:
2017-09-13-zeromq.md
```

Then start with this template:

```markdown
---
layout: event
title: Build Interconnecting Apps with ZeroMQ
link: https://attending.io/events/zeromq-python
---
This is a description of the event. The first paragraph will be used as an
excerpt.
```

To add an image the following syntax is reconmended:

```markdown
[Link to a page]({{ site.baseurl }}{% link /assets/logo.png %})
```
