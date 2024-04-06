import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BawiUQG_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"The Addams Family (2023)","publishDate":"2022-11-30T00:00:00.000Z","img":"/assets/addams/Addams-1.jpg","img_2":"/assets/addams/Addams-2.jpg","img_3":"/assets/addams/Addams-4.jpg","img_4":"/assets/addams/Addams-5.jpg","img_alt":"An Image of Logan Whittens Lighting Design for The Addams Family","img_2_alt":"An Image of Logan Whittens Lighting Design for The Addams Family","img_3_alt":"An Image of Logan Whittens Lighting Design for The Addams Family","img_4_alt":"An Image of Logan Whittens Lighting Design for The Addams Family","description":"The Addams Family is a playful look at \"the darkness\" of life.  By using intense shadows and cooler tones I was able to express this goal \n","tags":["Lighting Designer","ETC Eos"]};
				const file = "/Users/loganwhitten/Documents/GitHub/website/src/content/work/3 The Addams Family.md";
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
