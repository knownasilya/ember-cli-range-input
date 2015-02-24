# ember-cli-range-input

Range slider input which uses [jQuery Tools RangeInput][rangeinput] library behind the scenes.
This slider has custom styling.

![screenshot]

## Usage

```sh
ember install:addon ember-cli-range-input
```

```hbs
{{range-input min=0 max=1 step=0.1 value=awesomeness}}

Awesomeness: {{awesomeness}}
```

## Attributes

- `min` - Defaults to 0
- `max` - Defaults to 10
- `step` - Defaults to 1
- `value` - Defaults to min if falsy and not 0

## Contributing

If you'd like to submit a pull request or just run the latest code, this is how you do it.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[rangeinput]: http://jquerytools.github.io/documentation/rangeinput/index.html
[screenshot]: screenshot.png
