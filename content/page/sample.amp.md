---
categories: uncategorized
date: 2017-04-19T20:16:00
slug: sample
title: What is Hugo?
description: This is a dummy article to demonstrate the single page layout
type: amp
outputs:
 - amp
---

<div>

<p>Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike other systems which dynamically build a page every time a visitor requests one, Hugo does the building when you create your content. Since websites are viewed far more often than they are edited, Hugo is optimized for website viewing while providing a great writing experience.<br />
Sites built with Hugo are extremely fast and very secure. Hugo sites can be hosted anywhere, including <a href="https://www.heroku.com/" title="Heroku">Heroku</a>, <a href="https://www.godaddy.com/" title="Godaddy">GoDaddy</a>,<a href="http://www.dreamhost.com/" title="DreamHost">DreamHost</a>, <a href="https://pages.github.com/" title="Github Pages">GitHub Pages</a>, <a href="https://www.netlify.com/" title="Netlify">Netlify</a>, <a href="https://surge.sh" title="Surge">Surge</a>, <a href="https://www.aerobatic.com/" title="Aerobatic">Aerobatic</a>, <a href="https://firebase.google.com/docs/hosting/" title="Firebase Hosting">Firebase Hosting</a>, <a href="http://cloud.google.com/storage/" title="Google Cloud Storage">Google Cloud Storage</a>, <a href="http://aws.amazon.com/s3/" title="Amazon S3">Amazon S3</a> and <a href="http://aws.amazon.com/cloudfront/" title="Cloudfront">Cloudfront</a>, and work well with CDNs. Hugo sites run without dependencies on expensive runtimes like Ruby, Python or PHP and without dependencies on any databases.<br />
We think of Hugo as the ideal website creation tool. With nearly instant build times and the ability to rebuild whenever a change is made, Hugo provides a very fast feedback loop. This is essential when you are designing websites, but also very useful when creating content.</p>

<h2 id="what-makes-hugo-different">What makes Hugo different?</h2>

<p>Web site generators render content into HTML files. Most are “dynamic site generators.” That means the HTTP server (which is the program running on your website that the user’s browser talks to) runs the generator to create a new HTML file each and every time a user wants to view a page.<br />
Creating the page dynamically means that the computer hosting the HTTP server has to have enough memory and CPU to effectively run the generator around the clock. If not, then the user has to wait in a queue for the page to be generated.<br />
Nobody wants users to wait longer than needed, so the dynamic site generators programmed their systems to cache the HTML files. When a file is cached, a copy of it is temporarily stored on the computer. It is much faster for the HTTP server to send that copy the next time the page is requested than it is to generate it from scratch.<br />
Hugo takes caching a step further. All HTML files are rendered on your computer. You can review the files before you copy them to the computer hosting the HTTP server. Since the HTML files aren’t generated dynamically, we say that Hugo is a “static site generator.”<br />
Not running a web site generator on your HTTP server has many benefits. The most noticeable is performance - HTTP servers are very good at sending files. So good that you can effectively serve the same number of pages with a fraction of the memory and CPU needed for a dynamic site.<br />
Hugo has two components to help you build and test your web site. The one that you’ll probably use most often is the built-in HTTP server. When you run <code>hugo server</code>, Hugo renders all of your content into HTML files and then runs an HTTP server on your computer so that you can see what the pages look like.<br />
The second component is used when you’re ready to publish your web site to the computer running your website. Running Hugo without any actions will rebuild your entire web site using the <code>baseURL</code> setting from your site’s configuration file. That’s required to have your page links work properly with most hosting companies.</p>

<h2 id="how-fast-is-hugo">How fast is Hugo?</h2>

<iframe width="853" height="510" src="https://www.youtube.com/embed/CdiDYZ51a2o" frameborder="0" allowfullscreen></iframe>

<h2 id="what-does-hugo-do">What does Hugo do?</h2>

<p>In technical terms, Hugo takes a source directory of files and templates and uses these as input to create a complete website.<br />
Hugo boasts the following features:</p>

<h3 id="general">General</h3>

<ul>
<li>Extremely fast build times (1 ms per page)<br /></li>
<li>Completely cross platform: Runs on <i class="fa fa-apple"></i>&nbsp;macOS, <i class="fa fa-linux"></i>&nbsp;Linux, <i class="fa fa-windows"></i>&nbsp;Windows, and more!<br /></li>
<li>Easy <a href="https://gohugo.io/overview/installing/">installation</a><br /></li>
<li>Render changes <a href="https://gohugo.io/overview/usage/">on the fly</a> with <a href="https://gohugo.io/extras/livereload/">LiveReload</a> as you develop<br /></li>
<li>Complete theme support<br />

<ul>
<li>Host your site anywhere<br />
<br /></li>
</ul></li>
</ul>

<h3 id="organization">Organization</h3>

<ul>
<li>Straightforward <a href="https://gohugo.io/content/organization/">organization</a><br /></li>
<li>Support for <a href="https://gohugo.io/content/sections/">website sections</a><br /></li>
<li>Completely customizable <a href="https://gohugo.io/extras/urls/">URLs</a><br /></li>
<li>Support for configurable <a href="https://gohugo.io/taxonomies/overview/">taxonomies</a> which includes categories and tags. Create your own custom organization of content<br /></li>
<li>Ability to <a href="https://gohugo.io/content/ordering/">sort content</a> as you desire<br /></li>
<li>Automatic <a href="https://gohugo.io/extras/toc/">table of contents</a> generation<br /></li>
<li>Dynamic menu creation<br /></li>
<li><a href="https://gohugo.io/extras/urls/">Pretty URLs</a> support<br /></li>
<li><a href="https://gohugo.io/extras/permalinks/">Permalink</a> pattern support<br /></li>
<li><a href="https://gohugo.io/extras/aliases/">Aliases</a> (redirects)<br />
<br /></li>
</ul>

<h3 id="content">Content</h3>

<ul>
<li>Native support for content written in <a href="https://gohugo.io/content/example/">Markdown</a><br />

<ul>
<li>Support for other languages through <em>external helpers</em>, see <a href="https://gohugo.io/content/supported-formats">supported formats</a><br /></li>
</ul></li>
<li>Support for TOML, YAML and JSON metadata in <a href="https://gohugo.io/content/front-matter/">frontmatter</a><br /></li>
<li>Completely <a href="https://gohugo.io/layout/homepage/">customizable homepage</a><br /></li>
<li>Support for multiple <a href="https://gohugo.io/content/types/">content types</a><br /></li>
<li>Automatic and user defined <a href="https://gohugo.io/content/summaries/">summaries</a><br /></li>
<li><a href="https://gohugo.io/extras/shortcodes/">Shortcodes</a> to enable rich content inside of Markdown<br /></li>
<li><a href="https://gohugo.io/layout/variables/">“Minutes to Read”</a> functionality<br /></li>
<li><a href="https://gohugo.io/layout/variables/">“Wordcount”</a> functionality<br />
<br /></li>
</ul>

<h3 id="additional-features">Additional Features</h3>

<ul>
<li>Integrated <a href="https://disqus.com/">Disqus</a> comment support<br /></li>
<li>Integrated <a href="https://google-analytics.com/">Google Analytics</a> support<br /></li>
<li>Automatic <a href="https://gohugo.io/layout/rss/">RSS</a> creation<br /></li>
<li>Support for <a href="http://golang.org/pkg/html/template/">Go</a>, <a href="https://github.com/eknkc/amber">Amber</a> and <a href="https://github.com/yosssi/ace">Ace</a> HTML templates<br /></li>
<li>Syntax <a href="https://gohugo.io/extras/highlighting/">highlighting</a> powered by <a href="http://pygments.org/">Pygments</a><br />
<br /></li>
</ul>

<p>See what’s coming next in the <a href="https://gohugo.io/meta/roadmap/">roadmap</a>.</p>

<h2 id="who-should-use-hugo">Who should use Hugo?</h2>

<p>Hugo is for people that prefer writing in a text editor over a browser.<br />
Hugo is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.<br />
Hugo is for people building a blog, company site, portfolio, tumblog, documentation, single page site or a site with thousands of pages.</p>

<h2 id="why-did-you-write-hugo">Why did you write Hugo?</h2>

<p>I wrote Hugo ultimately for a few reasons. First, I was disappointed with WordPress, my then website solution. With it, I couldn’t create content as efficiently as I wanted to. It rendered slowly. It required me to be online to write posts: plus its constant security updates and the horror stories of people’s hacked blogs! I hated how content for it was written only in HTML, instead of the much simpler Markdown. Overall, I felt like WordPress got in my way much more than it helped me. It kept me from writing great content.<br />
I looked at the existing static site generators like <a href="http://jekyllrb.com/" title="Jekyll">Jekyll</a>, <a href="https://middlemanapp.com/" title="Middleman">Middleman</a> and <a href="http://nanoc.ws/" title="Nanoc">Nanoc</a>. All had complicated installation dependencies and took far longer to render my blog with its hundreds of posts than I felt was acceptable. I wanted a framework to be able to give me rapid feedback while making changes to the templates, and the 5+-minute render times were just too slow. In general, they were also very blog minded and didn’t have the ability to provide other content types and flexible URLs.<br />
I wanted to develop a fast and full-featured website framework without any dependencies. The <a href="http://golang.org/" title="Go language">Go language</a> seemed to have all the features I needed in a language. I began developing Hugo in Go and fell in love with the language. I hope you will enjoy using Hugo (and contributing to it) as much as I have writing it.<br />
—Steve Francia (@spf13)</p>

<h2 id="next-steps">Next Steps</h2>

<ul>
<li>Install Hugo<br /></li>
<li>Quick start<br /></li>
<li>Join the Mailing List<br /></li>
<li>Star us on GitHub<br /></li>
<li>Discussion Forum<br />
<br /></li>
</ul>
