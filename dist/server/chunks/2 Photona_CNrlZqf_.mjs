import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D9qiLCuz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Photona Team Polychrome (2023)","publishDate":"2028-11-30T00:00:00.000Z","img":"/assets/photona/photona-4.jpg","img_2":"/assets/photona/photona-2.jpg","img_3":"/assets/photona/photona-3.jpg","img_4":"/assets/photona/photona-1.jpg","img_alt":"An Image of Logan Whittens Lighting Design for Photona 2023","img_2_alt":"An Image of Logan Whittens Lighting Design for Photona 2023","img_3_alt":"An Image of Logan Whittens Lighting Design for Photona 2023","img_4_alt":"An Image of Logan Whittens Lighting Design for Photona 2023","description":"","tags":["Assistant Programmer","ETC Eos"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/2 Photona.md";
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
