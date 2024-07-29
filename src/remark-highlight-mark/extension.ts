import type { Processor } from 'unified'
import {
  highlightMark,
  highlightMarkFromMarkdown,
  highlightMarkToMarkdown,
} from '../index.js'

/**
 * Plugin to support mark highlight.
 *
 * @this {import('unified').Processor}
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export function remarkHighlightMark(this: Processor) {
  const data = this.data()

  add('micromarkExtensions', highlightMark())
  add('fromMarkdownExtensions', highlightMarkFromMarkdown)
  add('toMarkdownExtensions', highlightMarkToMarkdown)

  function add(field: string, value: unknown) {
    // @ts-expect-error ignore types
    if (data[field]) data[field].push(value)
    // @ts-expect-error ignore types
    else data[field] = [value]
  }
}