import type { Tag } from "./types";

export const allowedTags: Tag[] = [
	// Sections derived from MDN element categories and limited to the more
	// benign categories.
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
	// Content sectioning
	"address",
	"article",
	"aside",
	"footer",
	"header",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"hgroup",
	"main",
	"nav",
	"section",
	// Text content
	"blockquote",
	"dd",
	"div",
	"dl",
	"dt",
	"figcaption",
	"figure",
	"hr",
	"li",
	"main",
	"ol",
	"p",
	"pre",
	"ul",
	// Inline text semantics
	"a",
	"abbr",
	"b",
	"bdi",
	"bdo",
	//"br",
	"cite",
	"code",
	"data",
	"dfn",
	"em",
	"i",
	"kbd",
	"mark",
	"q",
	"rb",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"s",
	"samp",
	"small",
	//"span",
	"strong",
	"sub",
	"sup",
	"time",
	"u",
	"var",
	"wbr",
	// Table content
	"caption",
	"col",
	"colgroup",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"tr",
	//image
	"img",
];

type AllowedAttributes = {
	[k in Tag]?: string[];
};

export const allowedAttributes: AllowedAttributes = {
	a: ["href", "name", "target"],
	img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
};

export const allowedSchemes: string[] = ["http", "https"];

export default {
	allowedAttributes,
	allowedSchemes,
	allowedTags,
};
