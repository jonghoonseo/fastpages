
var documents = [{
    "id": 0,
    "url": "https://jonghoonseo.github.io/site/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://jonghoonseo.github.io/site/about/",
    "title": "About Me",
    "body": "This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://jonghoonseo.github.io/site/",
    "title": "",
    "body": "This site is built with fastpages, An easy to use blogging platform with extra features for Jupyter Notebooks.  fastpages automates the process of creating blog posts via GitHub Actions, so you don’t have to fuss with conversion scripts.  A full list of features can be found on GitHub. You can edit the index. html file to change this content. Posts"
    }, {
    "id": 3,
    "url": "https://jonghoonseo.github.io/site/search/",
    "title": "Search",
    "body": "          "
    }, {
    "id": 4,
    "url": "https://jonghoonseo.github.io/site/categories/",
    "title": "Tags",
    "body": "{% if site. categories. size &gt; 0 %} Contents: {% assign categories = “” | split:”” %} {% for c in site. categories %}  {% assign categories = categories | push: c[0] %} {% endfor %} {% assign categories = categories | sort_natural %}  {% for category in categories %}  {{ category }} {% endfor %} {% for category in categories %}   &lt;h3 id = {{ category }} &gt;&lt;/i&gt; {{ category }}&lt;/h3&gt;      {% for post in site. categories[category] %}    {% if post. hide != true %}    {%- assign date_format = site. minima. date_format | default: “%b %-d, %Y” -%}    &lt;article class= archive-item &gt;     &lt;p class= post-meta post-meta-title &gt;{{post. title}} • {{ post. date | date: date_format }}&lt;/p&gt;    &lt;/article&gt;    {% endif %}   {% endfor %} {% endfor %} {% endif %} "
    }, {
    "id": 5,
    "url": "https://jonghoonseo.github.io/site/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "https://jonghoonseo.github.io/site/Hello_Jupyter/",
    "title": "Hello Jupyter",
    "body": "2020/12/26 -     Overview This is my very first Jupyter notebook post for fastpages. I hope this page is built to valid markdown post. To verify build validity, I will test the following topics in this article: Import packagesThird-party packages: ex. numpyMy own packages: ex. hello_world. pyPlay wavsDisplay imageImport Packages In this chapter, I'll test importing packages. Basically, fastpages provides a build-in Docker image to launch Jupyter Notebook. However, for package manage aspect, it makes cumbersome to expand packages - defining packages in Dockerfile , building it again, and so on. So, I recommend you not to use the docker image (actually, I removed execution from the docker-compose, see d5930ef756d849dee01cb9e6037972b4fadadab3) Instead of docker image, I recommend to use local Jupyter Notebook and pyenv pairs or Google Colab Third-party Packages :       import numpy as npnp. arange(100)  array([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,    34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,    68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,    85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])  Custom Packages :       !cat hello_world. pyimport hello_worldprint(&#39;-&#39; * 20)hello_world. say(&#39;JSeo&#39;)  &#34;&#34;&#34;Hello World Library&#34;&#34;&#34;def say(name):  &#34;&#34;&#34;Say `hello world` with given name&#34;&#34;&#34;  print(f&#39;hello world {name}!&#39;)--------------------hello world JSeo!  Play wavs To play wavs in Jupyter notebook, we can use IPython. display. Audio class.       import IPython. display as ipd!wget https://file-examples-com. github. io/uploads/2017/11/file_example_WAV_1MG. wavipd. Audio(&#39;file_example_WAV_1MG. wav&#39;)  --2020-12-27 15:09:02-- https://file-examples-com. github. io/uploads/2017/11/file_example_WAV_1MG. wavResolving file-examples-com. github. io (file-examples-com. github. io). . . 185. 199. 108. 153, 185. 199. 110. 153, 185. 199. 111. 153, . . . Connecting to file-examples-com. github. io (file-examples-com. github. io)|185. 199. 108. 153|:443. . . connected. HTTP request sent, awaiting response. . . 200 OKLength: 1073218 (1. 0M) [audio/wav]Saving to: ‘file_example_WAV_1MG. wav’file_example_WAV_1M 100%[===================&gt;]  1. 02M --. -KB/s  in 0. 05s  2020-12-27 15:09:03 (22. 2 MB/s) - ‘file_example_WAV_1MG. wav’ saved [1073218/1073218]                            Your browser does not support the audio element.                  Display image To show image in Jupyter notebook, we can use IPython. display. Image class       !wget https://cdn. pixabay. com/photo/2020/12/03/05/23/lion-5799523_960_720. jpgipd. Image(&#39;lion-5799523_960_720. jpg&#39;)  --2020-12-27 15:13:35-- https://cdn. pixabay. com/photo/2020/12/03/05/23/lion-5799523_960_720. jpgResolving cdn. pixabay. com (cdn. pixabay. com). . . 104. 18. 21. 183, 104. 18. 20. 183, 2606:4700::6812:14b7, . . . Connecting to cdn. pixabay. com (cdn. pixabay. com)|104. 18. 21. 183|:443. . . connected. HTTP request sent, awaiting response. . . 200 OKLength: 194358 (190K) [image/jpeg]Saving to: ‘lion-5799523_960_720. jpg’lion-5799523_960_72 100%[===================&gt;] 189. 80K --. -KB/s  in 0. 02s  2020-12-27 15:13:35 (12. 1 MB/s) - ‘lion-5799523_960_720. jpg’ saved [194358/194358]  "
    }, {
    "id": 7,
    "url": "https://jonghoonseo.github.io/site/test/",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -     About This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter : The first cell in your Jupyter Notebook or markdown blog post contains front matter. Front matter is metadata that can turn on/off options in your Notebook. It is formatted like this: #  My Title &gt;  Awesome summary - toc:true- branch: master- badges: true- comments: true- author: Hamel Husain &amp; Jeremy Howard- categories: [fastpages, jupyter]Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. The title and description need to be enclosed in double quotes only if they include special characters such as a colon. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts : A #hide comment at the top of any code cell will hide both the input and output of that cell in your blog post. A #hide_input comment at the top of any code cell will only hide the input of that cell.     The comment #hide_input was used to hide the code that produced this.   put a #collapse-hide flag at the top of any cell if you want to hide that cell by default, but give the reader the option to show it:              import pandas as pdimport altair as alt       put a #collapse-show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              cars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       place a #collapse-output flag at the top of any cell if you want to put the output under a collapsable element that is closed by default, but give the reader the option to open it:       print(&#39;The comment #collapse-output was used to collapse the output of this cell by default but you can expand it. &#39;)         The comment #collapse-output was used to collapse the output of this cell by default but you can expand it.     Interactive Charts With Altair : Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown :       # use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(df). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips :       alt. Chart(df). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  alt. X(&#39;Rotten_Tomatoes_Rating&#39;, type=&#39;quantitative&#39;),  alt. Y(&#39;IMDB_Rating&#39;, type=&#39;quantitative&#39;, axis=alt. Axis(minExtent=30)),#   y=alt. Y(&#39;IMDB_Rating:Q&#39;, ), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=500,  height=400)    Example 3: More Tooltips :       label = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=500,  height=400)    Data Tables : You can display tables per the usual way in your blog:       df[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;Distributor&#39;, &#39;MPAA_Rating&#39;, &#39;IMDB_Rating&#39;, &#39;Rotten_Tomatoes_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   Distributor   MPAA_Rating   IMDB_Rating   Rotten_Tomatoes_Rating         0   The Land Girls   146083. 0   8000000. 0   Gramercy   R   6. 1   NaN       1   First Love, Last Rites   10876. 0   300000. 0   Strand   R   6. 9   NaN       2   I Married a Strange Person   203134. 0   250000. 0   Lionsgate   None   6. 8   NaN       3   Let's Talk About Sex   373615. 0   300000. 0   Fine Line   None   NaN   13. 0       4   Slam   1087521. 0   1000000. 0   Trimark   R   3. 4   62. 0     Images : Local Images : You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images : Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs : Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions : You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements GitHub Flavored Emojis : Typing I give this post two :+1:! will render this: I give this post two :+1:! Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:  Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this:   Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. Footnotes : You can have footnotes in notebooks, however the syntax is different compared to markdown documents. This guide provides more detail about this syntax, which looks like this: For example, here is a footnote {% fn 1 %}. And another {% fn 2 %}{{ 'This is the footnote. ' | fndetail: 1 }}{{ 'This is the other footnote. You can even have a [link](www. github. com)!' | fndetail: 2 }}For example, here is a footnote 1. And another 2 1. This is the footnote. ↩ 2. This is the other footnote. You can even have a link!↩ "
    }, {
    "id": 8,
    "url": "https://jonghoonseo.github.io/site/test-markdown-post/",
    "title": "An Example Markdown Post",
    "body": "2020/01/14 - Example Markdown PostBasic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: You can format text and code per usual General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Formatting text as shell commands: echo  hello world . /some_script. sh --option  value wget https://example. com/cat_photo1. pngFormatting text as YAML: key: value- another_key:  another value Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});