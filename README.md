# remark-highlight-mark

## What is this?

This package contains extensions that add support for highlight-mark(`==abc==`) to [`micromark`][micromark], [`mdast`][mdast] and [`remark`][remark].

Inspired by [`micromark-extension-gfm-strikethrough`][micromark-extension-gfm-strikethrough], [`mdast-util-gfm-strikethrough`][mdast-util-gfm-strikethrough] and [`remark-gfm`][remark-gfm]

## Install

This package is [ESM only][esm].

```sh
npm install remark-highlight-mark
```

## When to use this

This project is useful when you want to support highlight-mark(`==abc==`) in markdown.

When you need to support [`micromark`][micromark], you need to use the exported `highlightMarkHtml` and `highlightMark` from the package.

```ts
import { highlightMarkHtml, highlightMark } from 'micromark-extension-highlight-mark'

micromark('a ==b==', {
  extensions: [defaults],
  htmlExtensions: [html],
})
```

When you need to support [`mdast`][mdast], you need to use the exported `highlightMarkFromMarkdown` and `highlightMarkToMarkdown` from the package.

```ts
import { highlightMarkFromMarkdown, highlightMarkToMarkdown } from 'mdast-util-highlight-mark'

fromMarkdown('a ==b== c.', {
  extensions: [highlightMark()],
  mdastExtensions: [highlightMarkFromMarkdown],
})

toMarkdown(
  {
    type: 'paragraph',
    children: [
      { type: 'text', value: 'a ' },
      { type: 'mark', children: [{ type: 'text', value: 'b' }] },
      { type: 'text', value: ' c.' },
    ],
  },
  { extensions: [highlightMarkToMarkdown] }
)
```

When you need to support [`remark`][remark], you need to use the exported `remarkHighlightMark`  from the package.

```ts
import { remarkHighlightMark } from 'remark-highlight-mark'

export const remark = () =>
  unified().use(remarkParse).use(remarkStringify).use(remarkGfm).use(remarkHighlightMark)

```

## Types

This package is fully typed with [TypeScript][].

## HTML

When tilde sequences match, they together relate to the `<mark>` element in
HTML.
See [*§ 4.5.23 The mark element*][html-mark] in the HTML spec for more info.

## License

[MIT][license]

[mdast-util-gfm-strikethrough]: https://github.com/syntax-tree/mdast-util-gfm-strikethrough

[license]: license

[mdast-util-gfm-strikethrough]: https://github.com/syntax-tree/mdast-util-gfm-strikethrough

[micromark-extension-gfm-strikethrough]: https://github.com/micromark/micromark-extension-gfm-strikethrough

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[micromark]: https://github.com/micromark/micromark

[mdast]: https://github.com/syntax-tree/mdast?tab=readme-ov-file#thematicbreak

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[remark]: https://remarkjs.com/#1

[html-mark]: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element