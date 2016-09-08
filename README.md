Simple Gallery
==============

A simple image gallery plugin based on [jQuery](http://jquery.com).

The idea behind this javascript gallery is to be extremely simple. Just a simple fade transition between the images and 
navigation enabled.

There is a lot of gallery plugins for jQuery, but I made this one for two reasons:

1. Get some skill on jQuery plugins development.
2. Create a real simple solution for projects that don't require a fancy gallery.


Demo
----

Clone the project and check out the `demo.html` page.


Installation
------------

Include script *after* the jQuery library (unless you are packaging scripts 
somehow else):

    <script src="/path/to/jquery.simple-gallery.js"></script>

Do NOT include the script directly from GitHub (http://raw.github.com/...). The file is being served as text/plain and 
as such being blocked in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: 
GitHub is NOT a CDN.


Usage
-----


### HTML

The basic HTML sintax is as follows:

    <div data-gallery="simple">
        <figure id="image-1">
            <img src="//placehold.it/1000x400/003366">
        </figure>
        <figure id="image-2">
            <img src="//placehold.it/1000x400/006633">
        </figure>
        <figure id="image-3">
            <img src="//placehold.it/1000x400/336600">
        </figure>
        <figure id="image-4">
            <img src="//placehold.it/1000x400/663300">
        </figure>
        <nav>
            <a href="#image-1">Image 1</a>
            <a href="#image-2">Image 2</a>
            <a href="#image-3">Image 3</a>
            <a href="#image-4">Image 4</a>
        </nav>
    </div>

The HTML for **Simple Gallery** is very flexible, so the only requirement is that the links used for navigation contains 
the anchor for the gallery elements (identified by their IDs).

If you use another HTML element to hold the images instead of `<figure>`, just let the plugin know that through the 
options (see below for more information).


### Javascript

If you add the `data-gallery="simple"` attribute to your gallery container element, you don't have to write any 
Javascript code to make your gallery work. You still can configure the plugin within `data-*` attributes or changing the 
plugin's defaults. See below.


### CSS

This plugin doesn't require any custom CSS to work properly.

Only one class is added to HTML during the execution of the plugin: `current` class in the element currently displayed.


### Options

You have three ways to define the options:

1. Using `data-*` HTML attributes: `data-interval="8"`;
2. When using the jQuery call to start the gallery, as a hash of parameters passed to `gallery` function: 
  `jQuery('.my-gallery').gallery({ loop : false });`
3. Overriding the default settings, before call the jQuery `gallery` function: 
  `$.fn.gallery.defaults.elements = 'span';`.


#### tag

If you want to use a different HTML tag to your gallery elements instead of `<figure>` define it with the `tag` option:

    {
        tag : 'div'
    }

#### loop

By default the plugin will automatically loop over the elements on document ready. You can change this behavior setting 
the `loop` option to `false`.


#### interval

This option expect a integer number with the amount of seconds between each image in the loop. The default value is `5`.


Authors
-------

[Gustavo Straube](https://github.com/straube/)