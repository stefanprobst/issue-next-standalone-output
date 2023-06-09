import fs from 'node:fs/promises'

import { unified } from 'unified'
import fromMarkdown from 'remark-parse'
import toHast from 'remark-rehype'
import toHtml from 'rehype-stringify'
import path from 'node:path'

interface Props {
	html: string
}

const processor = unified().use(fromMarkdown).use(toHast).use(toHtml)

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'content', 'test.md')
	const fileContent = await fs.readFile(filePath, { encoding: 'utf-8'})

	const vfile = await processor.process({ value: fileContent, path: filePath })
	const html = String(vfile)

	return { props: { html }}
}

export default function IndexPage(props: Props) {
	return (
		<main>
			<div dangerouslySetInnerHTML={{ __html: props.html }} />
		</main>
	)
}
