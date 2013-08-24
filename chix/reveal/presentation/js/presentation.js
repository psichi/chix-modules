// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
head(function() {
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'http://localhost:8080/reveal/presentation/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'http://localhost:8080/reveal/presentation/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'http://localhost:8080/reveal/presentation/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'http://localhost:8080/reveal/presentation/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'http://localhost:8080/reveal/presentation/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'http://localhost:8080/reveal/presentation/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});
});
