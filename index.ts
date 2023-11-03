import { load } from "cheerio";
import type { Cheerio, AnyNode, CheerioAPI } from "cheerio";
import defaults from "./settings";
import type { Tag } from "./types";

type Settings = typeof defaults;

function cleanNode(node: Cheerio<AnyNode>, settings: Settings) {
	const tag = node.prop("tagName")!.toLowerCase() as Tag;

	if ((node.html() ?? "") === "") {
		node.remove();
		return;
	}

	if (settings.allowedTags.includes(tag)) {
		const allowedAttributes = settings.allowedAttributes[tag] ?? [];
		Object.keys(node.attr() ?? {}).forEach((attr) => {
			if (!allowedAttributes.includes(attr)) {
				node.removeAttr(attr);
			}
		});
	} else if (tag === "style") {
		node.remove();
	} else {
		node.replaceWith(node.html() ?? "");
	}
}

function traverse(children: Cheerio<AnyNode>, $: CheerioAPI, settings: Settings) {
	for (const childEl of children) {
		const child = $(childEl);

		const children = child.children();
		if (children.length > 0) {
			traverse(children, $, settings);
		}

		cleanNode(child, settings);
	}
}

export default function sanitizeHtml(html: string, settings: Settings = defaults): string {
	const $ = load(html.replaceAll("&nbsp;", ""));
	const root = $("body");

	traverse(root.contents(), $, settings);

	return root.html() ?? "";
}

export class Cleaner {
	private settings: Settings;
	constructor(settings: Settings = defaults) {
		this.settings = settings;
	}

	sanitizeHtml(html: string): string {
		return sanitizeHtml(html, this.settings);
	}
}
