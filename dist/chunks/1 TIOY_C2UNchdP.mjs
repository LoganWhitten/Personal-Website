import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BawiUQG_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"This is Our Youth (2024)","publishDate":"2023-11-30T00:00:00.000Z","img":"/assets/TIOY/TIOY-3.jpg","img_2":"/assets/TIOY/TIOY-4.jpg","img_3":"/assets/TIOY/TIOY-2.jpg","img_4":"/assets/TIOY/TIOY-1.jpg","img_alt":"An Image of Logan Whittens Lighting Design for This is Our Youth","img_2_alt":"An Image of Logan Whittens Lighting Design for This is Our Youth","img_3_alt":"An Image of Logan Whittens Lighting Design for This is Our Youth","img_4_alt":"An Image of Logan Whittens Lighting Design for This is Our Youth","description":"","tags":["Lighting Designer","ETC Eos"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/1 TIOY.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
