# Multi purpose blog

Multi purpose blog made with GatsbyJS :D

You can add interesting videos, texts, blog posts, basically whatever you want as long as there is some appropriate content.

# Contribute

Before pushing any `MD` file, please run command `npm run docs:lint`

# How to add a new video

Example of markdown:

```markdown
## Title of video

[](link to youtube video url)
```

Youtube link can be:

```markdown
[](http://www.youtube.com/watch?v=someHash)

[](https://www.youtube.com/embed?v=someHash)

<!-- Or as a iframe element -->

<!-- Link should be specified as ...youtube.com/embed/someHash -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/someHash" frameborder="0" allowfullscreen></iframe>

```
