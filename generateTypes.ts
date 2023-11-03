import fs from "fs";
import { htmlTagNames } from "html-tag-names";

const tagsDefinition = htmlTagNames
	.map((tag) => {
		return `"${tag}"`;
	})
	.join(" | ");

const code = `export type Tag = ${tagsDefinition} ;`;

fs.writeFileSync("types.ts", code);
