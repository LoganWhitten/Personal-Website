import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_D9qiLCuz.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Grid, b as $$PortfolioPreview, $ as $$ContactCTA } from './index_BOb2N1y5.mjs';
import { $ as $$Hero, a as $$BaseLayout } from './404_BU-URf9c.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Logan Whitten", "description": "Learn about Logan Whitten's most recent projects", "data-astro-cid-jljc7dey": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-jljc7dey> <main class="wrapper stack gap-8" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start", "data-astro-cid-jljc7dey": true })} <div class="gallery" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-jljc7dey": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-jljc7dey": true })} </li>`)}` })} </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-jljc7dey": true })} </div> ` })} `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/work.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
