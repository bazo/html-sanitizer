import assert from "assert";
import { expect, test } from "bun:test";
import sanitizeHtml, { Cleaner } from "..";
import { html } from "./html";
import { clean } from "./output";

const cleaner = new Cleaner();

const clean1 = cleaner.sanitizeHtml(html);
const clean2 = sanitizeHtml(html);

test("cleans are the same", () => {
	expect(clean1).toEqual(clean);
	expect(clean2).toEqual(clean);
	expect(clean1).toEqual(clean2);
});

assert(clean1 === clean2);
