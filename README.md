#TODO

Dry run is on the 18th of August.
First dojo is on the 6th of September.

## Dojo pre-requisites

* HTML
* Basic familiarity with Bootstrap 3 (or similar css framework)

## Part 1 - Some thoery

The overaching concept is "Expectatations of the web".

Put together the theory description and a good vs bad example for the following themes:

* UI Design
    * Alignment
        * Page layouts
            * where do you expect the actions/elements to be
        * Responsiveness
        * Form layouts
    * Bigger click areas
        * Cursor styling (pointer!)
        * Text clicabkle on checkboxes and radio buttons
    * Navigations
        * Where did we come from?
        * Where can we go now?
* The Technical Side of UI Design
    * Componentization
        * Isolation
        * Reuse of elements
        * Partials, html helpers etc.
    * No blurred images
* Simplicity
    * Have a page with a a tonne of things & actions vs a page that correctly highlights the primary action
        * Managing the user attention
        * Button placement - people look from left to right (vs asia right to left)
        * Button colours
    * Doing updates, created, deletes, edit etc. all on the same page vs doing each of those operations in isloation.
        * Modals and sub panel still count as being on the same page.
    * Have a form that needs to collection tonnes of data, vs a form that collects just the data that it actually needs, and progressivly discloses to the user.
        * monster form vs "here's a bit at a time"
        * maybe a checkout scanario as an example (upfront signup with billing details vs getting the details as we need them on checkout.)
* Consistency
    * One page should look like the next. Pages and elements must look similair
    * Have an exagerated corporate website that has a tonne of inconsistencies, even though they follow the same corporate identity.
        * Amazon is a prime culprit of this
* Clarity
    * What actions can I do?
    * Do I know that those actions are going to do
    * I.e. do the words actually describe the effect?
    * e.g. buttons with icons and no text
        * Stand OST Stop loss trigger. Icons.
        * Disco's red chilly pepper example.
    * Placeholders should not be the hints.
* Branding
    * Careful usage of corporate colours.
        * Use monochomatic themes if the corporate colours suck.
        * E.g. Fleet Africa.
    * Print fonts are not web fonts.
    * The font palette is very important. And must be audience appropriate

## Part 2 - Practical

Put together a "bad" site that makes all of the mistakes made in the theory part (plus a few more)
And allow the attendees to work through it to fix it.

Bootstraped CRUD pages may be the best tool to do this?

## Part 3 - Some ideas to take away

* Would you actually use the site that you're building?
    * If no, no one else will either.
    * As the developer, you are the mose forgiving user: if you don't like it, everyone else will hate it.

## Part 4 - Further reading resources