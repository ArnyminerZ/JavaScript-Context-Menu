# JavaScript-Context-Menu
Creating Context Menus for JavaScript as easy as never!

[![Build Status](https://img.shields.io/github/forks/ArnyminerZ/JavaScript-Translator.svg?style=flat-square)](https://github.com/ArnyminerZ/JavaScript-Translator)
[![Build Status](https://img.shields.io/github/stars/ArnyminerZ/JavaScript-Translator.svg?style=flat-square)](https://github.com/ArnyminerZ/JavaScript-Translator)
[![License](https://img.shields.io/github/license/ArnyminerZ/JavaScript-Translator.svg?style=flat-square)](https://github.com/ArnyminerZ/JavaScript-Translator)

# Requires
For this project to work you must have *ECMAScript 6* Support.

This project requires *JQuery 1.7*+, you can download it from [The Official Website](https://jquery.com/) or use their CDN:
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

# Usage
## Import
You can download the project, or use our CDN.
### Download
You can download our build files.

[![js-contextmenu.min.js](https://img.shields.io/static/v1.svg?label=1.0.0&message=js-contextmenu.min.js&color=success&style=flat-square)](https://cdn.jsdelivr.net/gh/ArnyminerZ/JavaScript-Context-Menu@1.0.0/dist/js-contextmenu.min.js)
[![js-contextmenu.js](https://img.shields.io/static/v1.svg?label=1.0.0&message=js-contextmenu.js&color=success&style=flat-square)](https://cdn.jsdelivr.net/gh/ArnyminerZ/JavaScript-Context-Menu@1.0.0/dist/js-contextmenu.js)
### CDN
We have our project hosted in jDelivr, import it to your HTML page with:
```HTML
<script src="https://cdn.jsdelivr.net/gh/ArnyminerZ/JavaScript-Context-Menu@1.0.0/dist/js-contextmenu.min.js"></script>
```
## Setup
Once you have imported the JS file and jQuery, everything is ready to create your own custom context menu.

## Using
For getting started, create a list of elements, with some styles, don't worry about the position of it, it's preferable 
to put it the body, outside of any other div, but anything will work.

We will change the `display` and `positon` attributes, so don't bother yourself by touching them.

Here we have the HTML code of the example:
```html
<div class="menu context-menu" data-selector="html">
    <ul class="menu-options">
        <li class="menu-option">Cancel</li>
        <li class="menu-option">Reload</li>
        <li class="menu-option">Save</li>
        <li class="menu-option">Save As</li>
        <li class="menu-option">Inspect</li>
    </ul>
</div>
```
The important things you have to take care of is adding the `context-menu` class to the parent div, and a `data-selector`
attribute. This selector refers to from which element you want to activate the context menu, in this example, we are going
to activate the context menu whenever you right click of the page. So we choose `html`.

As simple as that, you have a fully working context menu, you can add as much as you want, they will react to the page
size, and will be activated whenever you right click on the specified selector element.