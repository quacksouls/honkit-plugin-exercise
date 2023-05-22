# HonKit plugin: exercise

Formats and numbers each exercise. Numbering is automatic and starts at 1. An
exercise can be labelled to allow for cross-referencing.

## Installation

Install via npm:

```sh
npm install honkit-plugin-exercise --save-dev
```

Add the plugin to your `book.json`:

```js
{
    plugins: [ "exercise" ]
}
```

## Usage

An exercise is added by the block:

```
{% exercise %}
Insert your exercise text here.
{% endexercise %}
```

To help cross-reference an exercise, you can add a label. The label text should
not have any white spaces.

```
{% exercise label="my_label" %}
Insert your exercise text here.
{% endexercise %}
```

For example, the following exercise blocks

```
{% exercise %}
What Is the airspeed velocity of an unladen swallow?
{% endexercise %}

{% exercise label="a_label" %}
What do you mean? An African or a European swallow?
{% endexercise %}
```

would be rendered as

![Unladen swallow](example.png "Unladen swallow")

Cross-reference an exercise like how you cross-reference a section in a Markdown
file. In the above example, the exercise having the label `"a_label"` can be
cross-referenced as:

```
[this exercise](/path/to/file.md#a_label)
```
