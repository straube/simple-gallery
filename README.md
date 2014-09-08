Simple Gallery
==============

A simple image gallery based on (jQuery)[http://jquery.com].

The idea behind this javascript gallery is to be extremely simple. Just a 
simple fade transition between the images with a navigation possibility.

There is a lot of gallery plugins for jQuery, but I made this one for two 
reasons:

1. get some basic skill on jQuery plugins development;
2. create a real simple solution for projects that don't require a polished 
solution.

Demo
----

Clone the project and check out the `demo.html` page.

Installation
------------

Include script *after* the jQuery library (unless you are packaging scripts 
somehow else):

    <script src="/path/to/jquery.simple-gallery.js"></script>

Do not include the script directly from GitHub (http://raw.github.com/...). The 
file is being served as text/plain and as such being blocked in Internet 
Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom 
line: GitHub is not a CDN.

Usage
-----

### HTML

The basic HTML sintax is as follows:

    <div class="simple-gallery" data-loop="true" data-interval="5">
        <figure id="image-1">
            <img src="http://placehold.it/1000x400/003366">
        </figure>
        <figure id="image-2">
            <img src="http://placehold.it/1000x400/006633">
        </figure>
        <figure id="image-3">
            <img src="http://placehold.it/1000x400/336600">
        </figure>
        <figure id="image-4">
            <img src="http://placehold.it/1000x400/663300">
        </figure>
        <nav>
            <a href="#image-1">Image 1</a>
            <a href="#image-2">Image 2</a>
            <a href="#image-3">Image 3</a>
            <a href="#image-4">Image 4</a>
        </nav>
    </div>

The HTML for **Simple Gallery** is very flexible, so the only requirement is 
that the links used for navigation contains the anchor for the gallery 
elements.

If you use another HTML element to holds the images instead of `<figure>`, just 
let the plugin know it within the options (see below to more information).

### Javascript

If you have the `simple-gallery` CSS class on your gallery container element, 
you don't need any Javascript code to make your gallery works.

### CSS

This plugins doesn't require any custom CSS to properly work.

Only one CSS class is added during the execution of the plugin: `current` class 
on the gallery element currently displayed.

### Options

You can define the options by three distinct ways:

1. using `data-` HTML attributes;
2. when using the jQuery call to start the gallery, as a hash of parameters to 
`gallery` function: `jQuery('.my-gallery').({ loop : false });`
3. also when using the jQuer call to start the gallery, overriding the default 
settings, before call the jQuery `gallery` function: 
`$.fn.gallery.defaults.elements = 'span';`.

#### elements

If you want to use a different HTML tag to your gallery elements instead of 
`<figure>` define it with the `elements` option:

    {
        elements : 'div'
    }

#### loop

By default the will automatically loop over the elements on document ready. You 
can change this behavior setting the `loop` option to `false`.

#### interval

This option expect a integer number with the amount of seconds for each image 
loop. The default value is `5`.

Authors
-------

(Gustavo Straube)[https://github.com/straube/]