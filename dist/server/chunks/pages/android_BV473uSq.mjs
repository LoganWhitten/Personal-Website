import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_D9qiLCuz.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from './404_BU-URf9c.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Android = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Android;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "boom | android download", "description": "download the latest boom apk", "data-astro-cid-bbpm3pud": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-bbpm3pud> <main class="wrapper about" data-astro-cid-bbpm3pud> ${renderComponent($$result2, "Hero", $$Hero, { "title": "boom apk", "data-astro-cid-bbpm3pud": true }, { "default": ($$result3) => renderTemplate` <p1 data-astro-cid-bbpm3pud><a href="/assets/LoganWhittenResume.pdf" data-astro-cid-bbpm3pud>download</a> the boom apk here.</p1> ` })}  </main> </div>` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/android.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/android.astro";
const $$url = "/android";

export { $$Android as default, $$file as file, $$url as url };
