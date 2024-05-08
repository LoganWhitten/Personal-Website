import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_D9qiLCuz.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from './404_BU-URf9c.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume | Logan Whitten", "description": "Logan Whitten's Resume", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-ruvg6z4q> <main class="wrapper about" data-astro-cid-ruvg6z4q> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Resume", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="sm:hidden" data-astro-cid-ruvg6z4q> <embed src="/assets/LoganWhittenResume.pdf" type="application/pdf" width="700px" height="700px" data-astro-cid-ruvg6z4q> </div> <p1 data-astro-cid-ruvg6z4q><a href="/assets/LoganWhittenResume.pdf" data-astro-cid-ruvg6z4q>Download</a> a copy here.</p1> ` })} </main></div>` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/resume.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/resume.astro";
const $$url = "/resume";

export { $$Resume as default, $$file as file, $$url as url };
