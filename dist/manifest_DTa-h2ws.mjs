import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_BawiUQG_.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/boom/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/boom","isIndex":false,"type":"page","pattern":"^\\/boom\\/?$","segments":[[{"content":"boom","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boom.astro","pathname":"/boom","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/deleteaccount/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/deleteaccount","isIndex":false,"type":"page","pattern":"^\\/deleteaccount\\/?$","segments":[[{"content":"deleteaccount","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/deleteaccount.astro","pathname":"/deleteaccount","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/privacypolicy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacypolicy","isIndex":false,"type":"page","pattern":"^\\/privacypolicy\\/?$","segments":[[{"content":"privacypolicy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacypolicy.astro","pathname":"/privacypolicy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/loganwhitten/Documents/GitHub/website/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/loganwhitten/Documents/GitHub/website/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/deleteaccount.astro",{"propagation":"none","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/privacypolicy.astro",{"propagation":"none","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/resume.astro",{"propagation":"none","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["/Users/loganwhitten/Documents/GitHub/website/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/boom@_@astro":"pages/boom.astro.mjs","\u0000@astro-page:src/pages/deleteaccount@_@astro":"pages/deleteaccount.astro.mjs","\u0000@astro-page:src/pages/privacypolicy@_@astro":"pages/privacypolicy.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DTa-h2ws.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/1 TIOY.md?astroContentCollectionEntry=true":"chunks/1 TIOY_DXPTxSfM.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/2 Photona.md?astroContentCollectionEntry=true":"chunks/2 Photona_vKVNkqJR.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/3 The Addams Family.md?astroContentCollectionEntry=true":"chunks/3 The Addams Family_L308bH5l.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/4 Internship.md?astroContentCollectionEntry=true":"chunks/4 Internship_DTtV_k-v.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Cinderella.md?astroContentCollectionEntry=true":"chunks/5 Cinderella_DWpT7WUn.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Fortress.md?astroContentCollectionEntry=true":"chunks/5 Fortress_DMYTjQXi.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 LittleWomen.md?astroContentCollectionEntry=true":"chunks/5 LittleWomen_BgRH_QOf.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/1 TIOY.md?astroPropagatedAssets":"chunks/1 TIOY_ytR78249.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/2 Photona.md?astroPropagatedAssets":"chunks/2 Photona_DYPe2CgG.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/3 The Addams Family.md?astroPropagatedAssets":"chunks/3 The Addams Family_C1pJDVGo.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/4 Internship.md?astroPropagatedAssets":"chunks/4 Internship_DtLaUoa1.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Cinderella.md?astroPropagatedAssets":"chunks/5 Cinderella_Bzih8Fta.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Fortress.md?astroPropagatedAssets":"chunks/5 Fortress_RwPnNPcz.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 LittleWomen.md?astroPropagatedAssets":"chunks/5 LittleWomen_DvLsUO7x.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/1 TIOY.md":"chunks/1 TIOY_C2UNchdP.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/2 Photona.md":"chunks/2 Photona_wCIZrDTr.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/3 The Addams Family.md":"chunks/3 The Addams Family_DhxeL9sb.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/4 Internship.md":"chunks/4 Internship_DiUdikFh.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Cinderella.md":"chunks/5 Cinderella_ChopkfTQ.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 Fortress.md":"chunks/5 Fortress_D4HzPQXT.mjs","/Users/loganwhitten/Documents/GitHub/website/src/content/work/5 LittleWomen.md":"chunks/5 LittleWomen_CobWm7Nb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BfZPoLCI.js","/astro/hoisted.js?q=1":"_astro/hoisted.CvN_TNCx.js","/astro/hoisted.js?q=2":"_astro/hoisted.Ism9x0a1.js","astro:scripts/before-hydration.js":""},"assets":["/file:///Users/loganwhitten/Documents/GitHub/website/dist/404.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/boom/index.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/deleteaccount/index.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/privacypolicy/index.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/resume/index.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/work/index.html","/file:///Users/loganwhitten/Documents/GitHub/website/dist/index.html"],"buildFormat":"directory"});

export { manifest };
