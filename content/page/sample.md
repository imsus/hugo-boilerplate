---
categories: uncategorized
date: 2017-04-19T20:16:00
slug: sample
title: What is Hugo?
description: This is a dummy article to demonstrate the single page layout
ampfile: sample.amp.md
outputs:
 - html
 - json
---

Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike other systems which dynamically build a page every time a visitor requests one, Hugo does the building when you create your content. Since websites are viewed far more often than they are edited, Hugo is optimized for website viewing while providing a great writing experience.

Sites built with Hugo are extremely fast and very secure. Hugo sites can be hosted anywhere, including [Heroku][1], [GoDaddy][2],[DreamHost][3], [GitHub Pages][4], [Netlify][5], [Surge][6], [Aerobatic][7], [Firebase Hosting][8], [Google Cloud Storage][9], [Amazon S3][10] and [Cloudfront][11], and work well with CDNs. Hugo sites run without dependencies on expensive runtimes like Ruby, Python or PHP and without dependencies on any databases.

We think of Hugo as the ideal website creation tool. With nearly instant build times and the ability to rebuild whenever a change is made, Hugo provides a very fast feedback loop. This is essential when you are designing websites, but also very useful when creating content.

## What makes Hugo different?

Web site generators render content into HTML files. Most are “dynamic site generators.” That means the HTTP server (which is the program running on your website that the user’s browser talks to) runs the generator to create a new HTML file each and every time a user wants to view a page.

Creating the page dynamically means that the computer hosting the HTTP server has to have enough memory and CPU to effectively run the generator around the clock. If not, then the user has to wait in a queue for the page to be generated.

Nobody wants users to wait longer than needed, so the dynamic site generators programmed their systems to cache the HTML files. When a file is cached, a copy of it is temporarily stored on the computer. It is much faster for the HTTP server to send that copy the next time the page is requested than it is to generate it from scratch.

Hugo takes caching a step further. All HTML files are rendered on your computer. You can review the files before you copy them to the computer hosting the HTTP server. Since the HTML files aren’t generated dynamically, we say that Hugo is a “static site generator.”

Not running a web site generator on your HTTP server has many benefits. The most noticeable is performance - HTTP servers are very good at sending files. So good that you can effectively serve the same number of pages with a fraction of the memory and CPU needed for a dynamic site.

Hugo has two components to help you build and test your web site. The one that you’ll probably use most often is the built-in HTTP server. When you run `hugo server`, Hugo renders all of your content into HTML files and then runs an HTTP server on your computer so that you can see what the pages look like.

The second component is used when you’re ready to publish your web site to the computer running your website. Running Hugo without any actions will rebuild your entire web site using the `baseURL` setting from your site’s configuration file. That’s required to have your page links work properly with most hosting companies.

## How fast is Hugo?

<div class="aspect-ratio aspect-ratio--16x9">
  <iframe class="aspect-ratio--object" width="853" height="510" src="https://www.youtube.com/embed/CdiDYZ51a2o" frameborder="0" allowfullscreen></iframe>
</div>

## What does Hugo do?

In technical terms, Hugo takes a source directory of files and templates and uses these as input to create a complete website.

Hugo boasts the following features:

### General
- Extremely fast build times (1 ms per page)
- Completely cross platform: Runs on <i class="fa fa-apple"></i>&nbsp;macOS, <i class="fa fa-linux"></i>&nbsp;Linux, <i class="fa fa-windows"></i>&nbsp;Windows, and more!
- Easy [installation][12]
- Render changes [on the fly][13] with [LiveReload][14] as you develop
- Complete theme support
 - Host your site anywhere

### Organization
- Straightforward [organization][15]
- Support for [website sections][16]
- Completely customizable [URLs][17]
- Support for configurable [taxonomies][18] which includes categories and tags. Create your own custom organization of content
- Ability to [sort content][19] as you desire
- Automatic [table of contents][20] generation
- Dynamic menu creation
- [Pretty URLs][21] support
- [Permalink][22] pattern support
- [Aliases][23] (redirects)

### Content
- Native support for content written in [Markdown][24]
  - Support for other languages through *external helpers*, see [supported formats][25]
- Support for TOML, YAML and JSON metadata in [frontmatter][26]
- Completely [customizable homepage][27]
- Support for multiple [content types][28]
- Automatic and user defined [summaries][29]
- [Shortcodes][30] to enable rich content inside of Markdown
- [“Minutes to Read”][31] functionality
- [“Wordcount”][32] functionality

### Additional Features
- Integrated [Disqus][33] comment support
- Integrated [Google Analytics][34] support
- Automatic [RSS][35] creation
- Support for [Go][36], [Amber][37] and [Ace][38] HTML templates
- Syntax [highlighting][39] powered by [Pygments][40]

See what’s coming next in the [roadmap][41].

## Who should use Hugo?

Hugo is for people that prefer writing in a text editor over a browser.

Hugo is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.

Hugo is for people building a blog, company site, portfolio, tumblog, documentation, single page site or a site with thousands of pages.

## Why did you write Hugo?

I wrote Hugo ultimately for a few reasons. First, I was disappointed with WordPress, my then website solution. With it, I couldn’t create content as efficiently as I wanted to. It rendered slowly. It required me to be online to write posts: plus its constant security updates and the horror stories of people’s hacked blogs! I hated how content for it was written only in HTML, instead of the much simpler Markdown. Overall, I felt like WordPress got in my way much more than it helped me. It kept me from writing great content.

I looked at the existing static site generators like [Jekyll][42], [Middleman][43] and [Nanoc][44]. All had complicated installation dependencies and took far longer to render my blog with its hundreds of posts than I felt was acceptable. I wanted a framework to be able to give me rapid feedback while making changes to the templates, and the 5+-minute render times were just too slow. In general, they were also very blog minded and didn’t have the ability to provide other content types and flexible URLs.

I wanted to develop a fast and full-featured website framework without any dependencies. The [Go language][45] seemed to have all the features I needed in a language. I began developing Hugo in Go and fell in love with the language. I hope you will enjoy using Hugo (and contributing to it) as much as I have writing it.

—Steve Francia (@spf13)

## Next Steps
 - Install Hugo
 - Quick start
 - Join the Mailing List
 - Star us on GitHub
 - Discussion Forum

<div></div>

[1]: https://www.heroku.com/ "Heroku"
[2]: https://www.godaddy.com/ "Godaddy"
[3]: http://www.dreamhost.com/ "DreamHost"
[4]: https://pages.github.com/ "Github Pages"
[5]: https://www.netlify.com/ "Netlify"
[6]: https://surge.sh "Surge"
[7]: https://www.aerobatic.com/ "Aerobatic"
[8]: https://firebase.google.com/docs/hosting/ "Firebase Hosting"
[9]: http://cloud.google.com/storage/ "Google Cloud Storage"
[10]: http://aws.amazon.com/s3/ "Amazon S3"
[11]: http://aws.amazon.com/cloudfront/ "Cloudfront"
[12]: https://gohugo.io/overview/installing/
[13]: https://gohugo.io/overview/usage/
[14]: https://gohugo.io/extras/livereload/
[15]: https://gohugo.io/content/organization/
[16]: https://gohugo.io/content/sections/
[17]: https://gohugo.io/extras/urls/
[18]: https://gohugo.io/taxonomies/overview/
[19]: https://gohugo.io/content/ordering/
[20]: https://gohugo.io/extras/toc/
[21]: https://gohugo.io/extras/urls/
[22]: https://gohugo.io/extras/permalinks/
[23]: https://gohugo.io/extras/aliases/
[24]: https://gohugo.io/content/example/
[25]: https://gohugo.io/content/supported-formats
[26]: https://gohugo.io/content/front-matter/
[27]: https://gohugo.io/layout/homepage/
[28]: https://gohugo.io/content/types/
[29]: https://gohugo.io/content/summaries/
[30]: https://gohugo.io/extras/shortcodes/
[31]: https://gohugo.io/layout/variables/
[32]: https://gohugo.io/layout/variables/
[33]: https://disqus.com/
[34]: https://google-analytics.com/
[35]: https://gohugo.io/layout/rss/
[36]: http://golang.org/pkg/html/template/
[37]: https://github.com/eknkc/amber
[38]: https://github.com/yosssi/ace
[39]: https://gohugo.io/extras/highlighting/
[40]: http://pygments.org/
[41]: https://gohugo.io/meta/roadmap/
[42]: http://jekyllrb.com/ "Jekyll"
[43]: https://middlemanapp.com/ "Middleman"
[44]: http://nanoc.ws/ "Nanoc"
[45]: http://golang.org/ "Go language"
