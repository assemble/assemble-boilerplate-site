### Markdown Headings

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

``` md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```


## Paragraphs

This is a paragraph. It has two sentences.

This is another paragraph. It also has
two sentences.


``` md
This is a paragraph. It has two sentences.

This is another paragraph. It also has
two sentences.
```

## Lists


* Bullet lists are easy too
- Another one
+ Another one

1. A numbered list
2. Which is numbered
3. With periods and a space


* An item in a bulleted (unordered) list
    * A subitem, indented with 4 spaces
* Another item in a bulleted list
1. An item in an enumerated (ordered) list
   1.1. A subitem, indented with 4 spaces
2. Another item in an enumerated list

``` md
* An item in a bulleted (unordered) list
    * A subitem, indented with 4 spaces
* Another item in a bulleted list
1. An item in an enumerated (ordered) list
   1.1. A subitem, indented with 4 spaces
2. Another item in an enumerated list
```


## Line return

Line breaks inserted in the text are removed from the final result: the web browser is in charge of breaking lines depending on the available space. To force a line break, insert two spaces at the end of the line.


## Emphasized text
_italics_,  **bold**, and `code()`. 

``` md
_italics_,  **bold**, and `code()`. 
```

## Code

To include code (formatted in monospace font), you can either surround inline code with backticks (`), like in:

Some text with `some code` inside.

``` md
Some text with `some code` inside.
```

Or indent several lines of code by at least four spaces, as in:

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Or wrap the code with backtick "fences" before and after the code: ` ``` `

``` md
line 1 of code
line 2 of code
line 3 of code
```
GFM, or "GitHub Flavored Markdown" also supports syntax highlighting. To activate it, simply add the file extension of the language you want to use directly after the first "fence": ` ``` js ` 

``` js
assemble: {
  // Files to build into pages
  pages: {
    src:  'templates/pages/*.hbs',
    dest: 'dist/'
  }
}
```


The latter option makes Markdown retain all whitespace—as opposed to the usual behaviour, which, by removing line breaks and excess spaces, would break indentation and code layout.

## Escaping

Use `\` for escaping code, such as handlebars templates, so the following:

``` md
\{{ page.title }}
```
would translate literally.


## Line breaks
When you do want to insert a break tag using Markdown, you end a line with two or more spaces, then type return. For example:

``` md
def show_results
tag_br space space
end
```

Result:

``` html
def show_results

end
```

You can also use two newlines. For example:
```
sentence A

sentence B
```
Result:

``` html
sentence A
sentence B
```

## Blockquotes

> "This entire paragraph of text will be enclosed in an HTML blockquote element.
Blockquote elements are reflowable. You may arbitrarily
wrap the text to your liking, and it will all be parsed
into a single blockquote element."

``` md
> "This entire paragraph of text will be enclosed in an HTML blockquote element.
Blockquote elements are reflowable. You may arbitrarily
wrap the text to your liking, and it will all be parsed
into a single blockquote element."
```


> Blockquotes are like quoted text in email replies
>> And, they can be nested



The above would translate into the following HTML:

``` html
<blockquote><p>This entire paragraph of text will be enclosed in an HTML blockquote element. Blockquote
elements are reflowable. You may arbitrarily wrap the text to your liking, and it will all
be parsed into a single blockquote element.</p></blockquote>
```

## External links

Links may be included inline. Here is a markdown link to [Assemble](https://github.com/assemble/assemble), and a literal <https://github.com/assemble/assemble/>. 


``` md
[link text here](link.address.here)
Ex. [Markdown](http://en.wikipedia.com/wiki/Markdown)
```
Literal links
``` md
<https://github.com/assemble/assemble/>
```

Alternatively, links can be placed in footnotes outside of the paragraph, being referenced with some sort of reference tag. For example, including the following inline:

``` md
[link text here][linkref]
```

would produce a link if the following showed up outside of the paragraph (or at the end of the document):

``` md

[linkref]: link.address.here "link title here"
```

## Images
Images have similar syntax to links, except the square brackets are preceded by an exclamation point.

``` md
![Alt text](http://octodex.github.com/images/minion.png)
```
![Alt text](http://octodex.github.com/images/minion.png)

or
``` md
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

``` md
![Alt text][id]
```
![Alt text][id]

With a reference later in the document defining the URL location:

``` md

[id]: http://octodex.github.com/images/dojocat.jpg  "The Dojocat"
```


## Horizontal rules
Horizontal rules are created by placing three or more hyphens, asterisks, or underscores on a line by themselves. You may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

``` md
* * *
***
*****
- - -
---------------------------------------
```

* * * *
****
--------------------------


## Tables

| Heading 1          | Heading 2          | Heading 3          |
| ------------------ | ------------------ | ------------------ |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |


* A colon can be used to right align text within a column: `| -------: |`




## HTML elements

<div class="alert alert-warning"> This is a div wrapping some **markdown**.</div>

<div class="custom-class" markdown="1">
This is a div wrapping some **markdown**.
</div>




