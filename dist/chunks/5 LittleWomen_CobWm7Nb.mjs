import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BawiUQG_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Little Women (2021)","publishDate":"1899-11-30T00:00:00.000Z","img":"/assets/LW/LW-1.jpg","img_2":"/assets/LW/LW-4.jpg","img_4":"/assets/LW/LW-2.jpg","img_alt":"An Image of Logan Whittens Lighting Design for Little Women","img_2_alt":"An Image of Logan Whittens Lighting Design for Little Women","img_4_alt":"An Image of Logan Whittens Lighting Design for Little Women","description":"","tags":["Lighting Designer","ETC Eos"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 LittleWomen.md";
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
