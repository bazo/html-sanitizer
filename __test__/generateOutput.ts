import { writeFileSync } from "fs";
import sanitizeHtml, { Cleaner } from "..";
import { html } from "./html";

const clean = sanitizeHtml(html);

writeFileSync("output.ts", `export const clean = \`${clean}\``);
