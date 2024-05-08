import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_D9qiLCuz.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from './404_BU-URf9c.mjs';
/* empty css                                  */

const $$Astro = createAstro();
const $$Deleteaccount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Deleteaccount;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "delete your boom account", "description": "simply access the leaderboard, and click the trash can in the upper right", "data-astro-cid-afstclql": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-10" data-astro-cid-afstclql> <main class="wrapper about" data-astro-cid-afstclql> ${renderComponent($$result2, "Hero", $$Hero, { "title": "delete your boom account", "tagline": "Last Updated: 12/7/23", "data-astro-cid-afstclql": true }, { "default": ($$result3) => renderTemplate` <h5 data-astro-cid-afstclql>
simply access the leaderboard, and click the trash can in the upper right </h5> ` })}  </main> </div> ` })}`;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/deleteaccount.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/deleteaccount.astro";
const $$url = "/deleteaccount";

export { $$Deleteaccount as default, $$file as file, $$url as url };
