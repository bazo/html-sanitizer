import html from "./html";

// import sanitizeHtml from "sanitize-html";

// console.log(sanitizeHtml);

// const clean = (dirty: string) =>
//   sanitizeHtml(dirty, {
//     allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
//   });

// const res = clean(html);

// console.log(res);

import { load, Cheerio, AnyNode, Document, Element } from "cheerio";
import defaults from "./settings";

const $ = load(`<body>${html}</body>`);

function cleanNode(node: Cheerio<AnyNode>) {
	node.removeAttr("class");

	const tag = node.prop("tagName")!.toLowerCase();
	if (defaults.allowedTags.includes(tag)) {
		const allowedAttributes = defaults.allowedAttributes[tag] ?? []
		//console.log({allowedAttributes}, node.attr())
		Object.keys(node.attr() ?? {}).forEach((attr) => {
			if(!allowedAttributes.includes(attr)) {
				node.removeAttr(attr)
			}
		})
		
	}
}

function traverse(children: Cheerio<AnyNode>) {
	for (const childEl of children) {
		const child = $(childEl);
		//console.log(child.prop("tagName"));
		//console.log(child.)

		cleanNode(child);

		traverse(child.children());
	}
}

const root = $("body");

traverse(root.contents());

console.log(root.html());
