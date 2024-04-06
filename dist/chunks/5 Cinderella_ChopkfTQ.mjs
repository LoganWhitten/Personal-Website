import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BawiUQG_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Cinderella (2022)","publishDate":"1899-11-30T00:00:00.000Z","img":"/assets/cinderella/cinderella-1.jpg","img_2":"/assets/cinderella/cinderella-2.jpg","img_3":"/assets/cinderella/cinderella-3.jpg","img_4":"/assets/cinderella/cinderella-4.jpg","img_alt":"An Image of Logan Whittens Lighting Design for Cinderella","img_2_alt":"An Image of Logan Whittens Lighting Design for Cinderella","img_3_alt":"An Image of Logan Whittens Lighting Design for Cinderella","img_4_alt":"An Image of Logan Whittens Lighting Design for Cinderella","description":"","tags":["Associate Lighting Designer","ETC Eos"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Cinderella.md";
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
