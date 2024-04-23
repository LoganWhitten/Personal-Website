import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, f as renderHead, A as AstroError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent } from './astro_BawiUQG_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
/* empty css                          */
/* empty css                        */
/* empty css                          */
/* empty css                                 */
/* empty css                         */
/* empty css                         */
/* empty css                         */
/* empty css                         */
/* empty css                         */
/* empty css                         */

const $$Astro$l = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="stack gap-2" data-astro-cid-bbe6dxrz> <h1 class="title" data-astro-cid-bbe6dxrz>${title}</h1> ${tagline && renderTemplate`<p class="tagline" data-astro-cid-bbe6dxrz>${tagline}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$k = createAstro();
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Logan Whitten: Lighting Portfolio",
    description = "The personal portfolio of Logan Whitten"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8"><meta name="description" property="og:description"', '><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", `</title><link rel="icon" type="image/x-icon" href="src/avatar.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet"><script>
	// This code is inlined in the head to make dark mode instant & blocking.
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

	if (typeof localStorage !== 'undefined') {
		// Watch the document element and persist user preference when it changes.
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('theme-dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title);
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/MainHead.astro", void 0);

const iconPaths = {
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "lightbulb": `<path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>`,
  "lightbulb-filament": `<path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z" > </path>`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
  "poker-chip": `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,152a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm39.21-98.53a63.66,63.66,0,0,0-31.21-13V40.37a87.6,87.6,0,0,1,48.28,20ZM120,64.52a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37a87.6,87.6,0,0,1,20-48.28ZM64.52,136a63.66,63.66,0,0,0,13,31.21L60.4,184.28a87.6,87.6,0,0,1-20-48.28Zm24.27,42.53A63.66,63.66,0,0,0,120,191.48v24.15a87.6,87.6,0,0,1-48.28-20ZM136,191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07a87.6,87.6,0,0,1-48.28,20Zm42.53-24.27A63.66,63.66,0,0,0,191.48,136h24.15a87.6,87.6,0,0,1-20,48.28ZM191.48,120a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72a87.6,87.6,0,0,1,20,48.28Z"></path>`,
  "mask-happy": `<path d="M217,34.8a15.94,15.94,0,0,0-14.82-1.71C188.15,38.55,159.82,47.71,128,47.71S67.84,38.55,53.79,33.09A16,16,0,0,0,32,48v55.77c0,35.84,9.65,69.65,27.18,95.18,18.16,26.46,42.6,41,68.82,41s50.66-14.57,68.82-41C214.35,173.44,224,139.63,224,103.79V48A16,16,0,0,0,217,34.8Zm-9,69c0,32.64-8.66,63.23-24.37,86.13C168.54,211.9,148.79,224,128,224s-40.54-12.1-55.63-34.08C56.66,167,48,136.43,48,103.79V48c15.11,5.87,45.58,15.71,80,15.71S192.9,53.87,208,48v55.81Zm-18,18.87A8,8,0,1,1,178,133.33c-2.68-3-8.85-5.33-14-5.33s-11.36,2.34-14,5.33A8,8,0,1,1,138,122.66c5.71-6.38,16.14-10.66,26-10.66S184.25,116.28,190,122.66ZM92,128c-5.19,0-11.36,2.34-14,5.33A8,8,0,1,1,66,122.66C71.75,116.28,82.18,112,92,112s20.25,4.28,26,10.66A8,8,0,1,1,106,133.33C103.36,130.34,97.19,128,92,128Zm76.45,45.19a52.9,52.9,0,0,1-80.9,0A8,8,0,1,1,99.72,162.8a36.89,36.89,0,0,0,56.56,0,8,8,0,0,1,12.17,10.39Z"></path>`,
  "headset": `<path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>`,
  "wrench": `<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"> </path>`
};

const $$Astro$j = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Icon;
  const { color = "currentcolor", gradient, icon, size } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size)
    attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, void 0, { "class": "astro-patnjmll" })} data-astro-cid-patnjmll> <g data-astro-cid-patnjmll>${unescapeHTML(iconPath)}</g> ${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll> <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll></stop> <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll></stop> <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll></stop> </linearGradient>`} </svg> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Icon.astro", void 0);

const $$Astro$i = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-x3pjskd3": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Dark theme</span> <span class="icon light" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "data-astro-cid-x3pjskd3": true })}</span> <span class="icon dark" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "data-astro-cid-x3pjskd3": true })}</span> </button> ` })}  `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/ThemeToggle.astro", void 0);

const $$Astro$h = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "Resume", href: "/resume/" }
  ];
  const iconLinks = [
    { label: "GitHub", href: "https://github.com/lights9999", icon: "github-logo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/L-Whitten/", icon: "linkedin-logo" },
    { label: "Instagram", href: "https://instagram.com/loganwhitten512", icon: "instagram-logo" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <div class="menu-header" data-astro-cid-dmqpwcec> <a href="/" class="site-title" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Icon", $$Icon, { "icon": "lightbulb-filament", "color": "White", "size": "1.1em", "data-astro-cid-dmqpwcec": true })}
Logan Whitten
</a> ${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-dmqpwcec": true }, { "default": () => renderTemplate` <template data-astro-cid-dmqpwcec> <button class="menu-button" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "data-astro-cid-dmqpwcec": true })} </button> </template> ` })} </div> <noscript> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> </noscript> <noscript> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> </div> </noscript> <div id="menu-content" hidden data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> <div class="theme-toggle" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> </div> </div> </nav>  `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Nav.astro", void 0);

const $$Astro$g = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Footer;
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2024 Logan Whitten</p> </footer> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Footer.astro", void 0);

const $$Astro$f = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="stack backgrounds" data-astro-cid-37fxchfa> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-37fxchfa": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </div>   </body> </html>`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/layouts/BaseLayout.astro", void 0);

const $$Astro$e = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/404.astro", void 0);

const $$file$7 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/404.astro";
const $$url$7 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
const $$Boom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Boom;
  return renderTemplate`${maybeRenderHead()}<div id="redirect"></div> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/boom.astro", void 0);

const $$file$6 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/boom.astro";
const $$url$6 = "/boom";

const boom = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Boom,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Deleteaccount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Deleteaccount;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "delete your boom account", "description": "simply access the leaderboard, and click the trash can in the upper right", "data-astro-cid-afstclql": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-10" data-astro-cid-afstclql> <main class="wrapper about" data-astro-cid-afstclql> ${renderComponent($$result2, "Hero", $$Hero, { "title": "delete your boom account", "tagline": "Last Updated: 12/7/23", "data-astro-cid-afstclql": true }, { "default": ($$result3) => renderTemplate` <h5 data-astro-cid-afstclql>
simply access the leaderboard, and click the trash can in the upper right </h5> ` })}  </main> </div> ` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/deleteaccount.astro", void 0);

const $$file$5 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/deleteaccount.astro";
const $$url$5 = "/deleteaccount";

const deleteaccount = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Deleteaccount,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/CallToAction.astro", void 0);

const $$Astro$a = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:logan@loganwhitten.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/ContactCTA.astro", void 0);

const $$Astro$9 = createAstro();
const $$Privacypolicy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Privacypolicy;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "boom privacy policy", "description": "privacy policy for the boom app", "data-astro-cid-qrgg6lin": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-10" data-astro-cid-qrgg6lin> <main class="wrapper about" data-astro-cid-qrgg6lin> ${renderComponent($$result2, "Hero", $$Hero, { "title": "boom privacy policy", "tagline": "Last Updated: 12/7/23", "data-astro-cid-qrgg6lin": true }, { "default": ($$result3) => renderTemplate` <h5 data-astro-cid-qrgg6lin>
thank you you for using boom, this privacy policy is designed to help you understand how your personal information is collected, used, and shared when you use boom.</h5> ` })} <div class="content text-center" data-astro-cid-qrgg6lin></div> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>Information We Collect:</h2> <div class="content" data-astro-cid-qrgg6lin> <ol data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Personal Information:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>If you register for an account we collect your name, email address, and other information you provide voluntarily.</li> <li data-astro-cid-qrgg6lin>If you make in-app purchases, we may collect information related to your transactions.
</li> </ul> </li> <li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Device Information:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We automatically collect certain information about your device, including the device model, operating system, and unique device identifiers.
</li> </ul> </li><li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Usage Information:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We collect information about how you use the app, such as the features you interact with, the content you view, and the actions you take.
</li> </ul> </li> </ol> </div> </section> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>How We Use Your Information:</h2> <div class="content" data-astro-cid-qrgg6lin> <ol data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Provide and Improve the App:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We use your information to provide, maintain, and improve the functionality of Boom.</li> <li data-astro-cid-qrgg6lin>Your feedback and usage patterns help us enhance the user experience.
</li> </ul> </li> <li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Communicate with You:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We may use your email address to send you important updates, announcements, and information related to the app.
</li> </ul> </li><li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Personalization:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We use your information to personalize your experience within the app, such as recommending sounds based on your preferences.
</li> </ul> </li><li data-astro-cid-qrgg6lin><b data-astro-cid-qrgg6lin>Analytics:</b> <ul data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We use analytics tools to understand how users interact with the app, helping us make informed decisions for future improvements.
</li> </ul> </li> </ol> </div> </section> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>Sharing Your Information:</h2> <div class="content" data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as set forth in this Privacy Policy or if required by law.
</li> </div></section> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>Security:
</h2> <div class="content" data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We prioritize the security of your personal information and attempt to implement industry-standard security measures to protect against unauthorized access or disclosure.
</li> </div></section> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>Your Choices:
</h2> <div class="content" data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>You can control the collection and use of certain information by contacting the boom team. If you have any questions or concerns about your privacy, please contact us at <a href="mailto:logan@loganwhitten.com" data-astro-cid-qrgg6lin>logan@loganwhitten.com</a>.
</li> </div></section> <section data-astro-cid-qrgg6lin> <h2 class="section-title" data-astro-cid-qrgg6lin>Updates to this Privacy Policy:
</h2> <div class="content" data-astro-cid-qrgg6lin> <li data-astro-cid-qrgg6lin>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically.
</li> </div></section> </main> <h5 data-astro-cid-qrgg6lin>By using Boom, you agree to the terms outlined in this Privacy Policy.
<br data-astro-cid-qrgg6lin> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qrgg6lin": true })} </h5></div> ` })}  `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/privacypolicy.astro", void 0);

const $$file$4 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/privacypolicy.astro";
const $$url$4 = "/privacypolicy";

const privacypolicy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacypolicy,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Resume;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume | Logan Whitten", "description": "Logan Whitten's Resume", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-ruvg6z4q> <main class="wrapper about" data-astro-cid-ruvg6z4q> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Resume", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <embed src="/assets/LoganWhittenResume.pdf" type="application/pdf" width="700px" height="700px" data-astro-cid-ruvg6z4q> <p1 data-astro-cid-ruvg6z4q><a href="/assets/LoganWhittenResume.pdf" data-astro-cid-ruvg6z4q>Download</a> a copy here. </p1> ` })}</main></div>` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/resume.astro", void 0);

const $$file$3 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/resume.astro";
const $$url$3 = "/resume";

const resume = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Resume,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/1 TIOY.md": () => import('./1 TIOY_DXPTxSfM.mjs'),"/src/content/work/2 Photona.md": () => import('./2 Photona_vKVNkqJR.mjs'),"/src/content/work/3 The Addams Family.md": () => import('./3 The Addams Family_L308bH5l.mjs'),"/src/content/work/4 Internship.md": () => import('./4 Internship_DTtV_k-v.mjs'),"/src/content/work/5 Cinderella.md": () => import('./5 Cinderella_DWpT7WUn.mjs'),"/src/content/work/5 Fortress.md": () => import('./5 Fortress_DMYTjQXi.mjs'),"/src/content/work/5 LittleWomen.md": () => import('./5 LittleWomen_BgRH_QOf.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"1-tioy":"/src/content/work/1 TIOY.md","3-the-addams-family":"/src/content/work/3 The Addams Family.md","2-photona":"/src/content/work/2 Photona.md","4-internship":"/src/content/work/4 Internship.md","5-cinderella":"/src/content/work/5 Cinderella.md","5-fortress":"/src/content/work/5 Fortress.md","5-littlewomen":"/src/content/work/5 LittleWomen.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/1 TIOY.md": () => import('./1 TIOY_ytR78249.mjs'),"/src/content/work/2 Photona.md": () => import('./2 Photona_DYPe2CgG.mjs'),"/src/content/work/3 The Addams Family.md": () => import('./3 The Addams Family_C1pJDVGo.mjs'),"/src/content/work/4 Internship.md": () => import('./4 Internship_DtLaUoa1.mjs'),"/src/content/work/5 Cinderella.md": () => import('./5 Cinderella_Bzih8Fta.mjs'),"/src/content/work/5 Fortress.md": () => import('./5 Fortress_RwPnNPcz.mjs'),"/src/content/work/5 LittleWomen.md": () => import('./5 LittleWomen_DvLsUO7x.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$7 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="eager" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/PortfolioPreview.astro", void 0);

const $$Astro$6 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Grid.astro", void 0);

const $$Astro$5 = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Logan Whitten", "description": "Learn about Logan Whitten's most recent projects", "data-astro-cid-jljc7dey": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-jljc7dey> <main class="wrapper stack gap-8" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start", "data-astro-cid-jljc7dey": true })} <div class="gallery" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-jljc7dey": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-jljc7dey": true })} </li>`)}` })} </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-jljc7dey": true })} </div> ` })} `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/work.astro", void 0);

const $$file$2 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/work.astro";
const $$url$2 = "/work";

const work = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$LightBox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LightBox;
  return renderTemplate`${maybeRenderHead()}<div class="app-lightbox" data-astro-cid-ebs6pfml> <div class="portal" data-astro-cid-ebs6pfml></div> </div>  `;
}, "/Users/loganwhitten/Documents/GitHub/website/node_modules/@julian_cataldo/astro-lightbox/LightBox.astro", void 0);

const $$Astro$3 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Pill.astro", void 0);

const $$Astro$2 = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`<head>${renderComponent($$result, "Lightbox", $$LightBox, { "data-astro-cid-qwekciqp": true })}${renderHead()}</head> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-qwekciqp": true }, { "default": ($$result2) => renderTemplate` <div class="stack gap-20" data-astro-cid-qwekciqp> <div class="stack gap-15" data-astro-cid-qwekciqp> <header data-astro-cid-qwekciqp> <div class="wrapper stack gap-2" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-qwekciqp": true }, { "default": ($$result3) => renderTemplate` <div class="details" data-astro-cid-qwekciqp> <div class="tags" data-astro-cid-qwekciqp> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-qwekciqp": true }, { "default": ($$result4) => renderTemplate`${t}` })}`)} </div> <!--<p class="description">{entry.data.description}</p> --> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-qwekciqp> <div class="gap-10 content" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-qwekciqp": true }, { "default": ($$result3) => renderTemplate` <div data-lightbox="true" data-astro-cid-qwekciqp> <img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-qwekciqp> </div> <div data-lightbox="true" data-astro-cid-qwekciqp> <img${addAttribute(entry.data.img_2, "src")}${addAttribute(entry.data.img_2_alt || "", "alt")} data-astro-cid-qwekciqp> </div> <div data-lightbox="true" data-astro-cid-qwekciqp> <img${addAttribute(entry.data.img_3, "src")}${addAttribute(entry.data.img_3_alt || "", "alt")} data-astro-cid-qwekciqp> </div> <div data-lightbox="true" data-astro-cid-qwekciqp> <img${addAttribute(entry.data.img_4, "src")}${addAttribute(entry.data.img_4_alt || "", "alt")} data-astro-cid-qwekciqp> </div> <div class="content" data-astro-cid-qwekciqp> ${renderComponent($$result3, "Content", Content, { "data-astro-cid-qwekciqp": true })} </div> ` })} </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> </div>  ` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/work/[...slug].astro", void 0);

const $$file$1 = "/Users/loganwhitten/Documents/GitHub/website/src/pages/work/[...slug].astro";
const $$url$1 = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "headset", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Professional Work</h2> <p data-astro-cid-ab4ihpzs>
I have had the opportunity to work as a designer or assistant
			designer for several clients including <a data-astro-cid-ab4ihpzs>Denton ISD</a>, <a data-astro-cid-ab4ihpzs>Lewisville ISD</a>, in addition to the Flower Mound High School <a data-astro-cid-ab4ihpzs>Band</a>, <a data-astro-cid-ab4ihpzs>Orchestra</a>, and
<a data-astro-cid-ab4ihpzs>Choir</a>.
</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "mask-happy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Volunteer Work</h2> <p data-astro-cid-ab4ihpzs>
I have been able to design several community productions with <a data-astro-cid-ab4ihpzs>OhLook PAC</a>, <a data-astro-cid-ab4ihpzs>Trietsh UMC</a>, <a data-astro-cid-ab4ihpzs>Stage Right Ministry</a>, <a data-astro-cid-ab4ihpzs>Flower Mound High School Theatre</a>, as well as several others.
</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "wrench", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Internship</h2> <p data-astro-cid-ab4ihpzs>
I was fortunate enough to intern with <a data-astro-cid-ab4ihpzs>ProFormance Systems</a> where
			I gained valuable experience in the installation and maintenance of lighting and sound
			systems. View photos <a href="/work/4-internship" data-astro-cid-ab4ihpzs>here</a>.
</p> </div> </section> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Logan Whitten!", "tagline": "I am a freelance lighting designer/programmer currently studying at the University of North Carolina School of the Arts.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Lighting Designer` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} GrandMA3 Programmer ` })} </div> ` })} <img alt="Logan Whitten" width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Selected Work</h3> <p data-astro-cid-j7pv25f6>Take a look below at some of my featured work for clients from the past few years.</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <!--<section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Awards/Achievements</h3>
					<p>
						I have been fortunate enough to recieve recognition for my work. Take
						a look below to learn more.
					</p>
				</header>

				<div class="gallery">
					<Grid variant="small">
						{
							['Flower Mound High School Technician of the Term 2021/2023', 'Betty Buckley Award for Outstanding Lighting Design'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div>
			</section>
		</main></--> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </main></div> ` })} `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/index.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, ____slug_ as a, boom as b, deleteaccount as d, index as i, privacypolicy as p, resume as r, work as w };
