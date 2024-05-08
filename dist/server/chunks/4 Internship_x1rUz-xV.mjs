import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D9qiLCuz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"PFS Internship (Summer 2021)","publishDate":"2020-11-30T00:00:00.000Z","img":"/assets/internship/internship-1.jpg","img_2":"/assets/internship/internship-2.jpg","img_3":"/assets/internship/internship-3.jpg","img_4":"/assets/internship/internship-4.jpg","img_alt":"An Image of Logan Whittens Lighting Design for His Summer Internship","img_2_alt":"An Image of Logan Whittens Lighting Design for His Summer Internship","img_3_alt":"An Image of Logan Whittens Lighting Design for His Summer Internship","img_4_alt":"An Image of Logan Whittens Lighting Design for His Summer Internship","description":"","tags":["Lighting Designer","6 Week Internship","Install Work"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/4 Internship.md";
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
