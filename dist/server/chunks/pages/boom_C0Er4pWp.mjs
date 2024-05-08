import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_D9qiLCuz.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Boom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boom;
  return renderTemplate`${maybeRenderHead()}<div id="redirect"></div> `;
}, "/Users/loganwhitten/Documents/GitHub/website/src/pages/boom.astro", void 0);

const $$file = "/Users/loganwhitten/Documents/GitHub/website/src/pages/boom.astro";
const $$url = "/boom";

export { $$Boom as default, $$file as file, $$url as url };
