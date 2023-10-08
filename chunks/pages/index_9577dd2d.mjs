/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_c525b821.mjs';
import 'html-escaper';
import 'clsx';
import { FaGamepad } from 'react-icons/fa6/index.esm.js';

const $$Astro$a = createAstro("https://uncompa.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Aaron Vargas | Landing Page</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">${renderHead()}</head><body class="bg-zinc-100 dark:bg-slate-800 dark:text-zinc-100">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/layout/Layout.astro", void 0);

const $$Astro$9 = createAstro("https://uncompa.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="h-16 w-full flex justify-between shadow-lg sticky"><h1>Hola</h1><h2>Nombre</h2><nav><ul><li>menu</li><li>menu</li><li>menu</li></ul></nav></header>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Header.astro", void 0);

const $$Astro$8 = createAstro("https://uncompa.github.io");
const $$Box = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Box;
  const { content, animation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${animation} opacity-0 my-8 text-white text-2xl flex items-center justify-center`, "class")} data-astro-cid-wezlmloa>${content}</div>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Box.astro", void 0);

const $$Astro$7 = createAstro("https://uncompa.github.io");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<h2 class="w-full text-3xl col-start-2 text-center relative my-8 border-b-4 border-blue-500 py-4">
Información
</h2><section class="col-start-2 w-full">${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-1" })}${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-2" })}${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-3" })}${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-4" })}${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-5" })}${renderComponent($$result, "Box", $$Box, { "content": "Hola", "animation": "animate-over-6" })}</section>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Info.astro", void 0);

const $$Astro$6 = createAstro("https://uncompa.github.io");
const $$CardP = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardP;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card w-full border-2 border-black my-8 shadow-caja" data-astro-cid-5awtkn2o><div class="temporary_text h-full " data-astro-cid-5awtkn2o><img${addAttribute(img, "src")} alt="" class="object-cover h-full w-full" data-astro-cid-5awtkn2o></div><div class="card_content" data-astro-cid-5awtkn2o><span class="card_title" data-astro-cid-5awtkn2o>This is a Title</span><span class="card_subtitle" data-astro-cid-5awtkn2o>Thsi is a subtitle of this page. Let us see how it looks on the Web.</span><p class="card_description" data-astro-cid-5awtkn2o>Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p></div></article>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/CardP.astro", void 0);

const $$Astro$5 = createAstro("https://uncompa.github.io");
const $$Intereses = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Intereses;
  return renderTemplate`${maybeRenderHead()}<h2 class="w-full text-3xl col-start-2 text-center relative my-8 border-b-4 border-yellow-500 py-4">Intereses</h2><section class="col-start-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-12 lg:gap-10">${renderComponent($$result, "CardP", $$CardP, { "img": "./space.jpg" })}${renderComponent($$result, "CardP", $$CardP, { "img": "./space.jpg" })}${renderComponent($$result, "CardP", $$CardP, { "img": "./space.jpg" })}</section>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Intereses.astro", void 0);

const $$Astro$4 = createAstro("https://uncompa.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="col-start-1 col-span-3 bg-red-500 w-full h-96 shadow flex"><div><img src="" alt="Xd"><ul><li>XD</li><li>XD</li><li>XD</li></ul></div><div><div><ul><li>Hola</li><li>Hola</li><li>Hola</li></ul></div><div><ul><li>Hola</li><li>Hola</li><li>Hola</li></ul></div><div><ul><li>Hola</li><li>Hola</li><li>Hola</li></ul></div></div></footer>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://uncompa.github.io");
const $$Gustos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Gustos;
  const { title, text, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-hlpdogy6><div class="content" data-astro-cid-hlpdogy6><div class="back" data-astro-cid-hlpdogy6><div class="back-content" data-astro-cid-hlpdogy6><div class="text-5xl " data-astro-cid-hlpdogy6>${renderSlot($$result, $$slots["default"])}</div><strong data-astro-cid-hlpdogy6>${title}</strong></div></div><div class="front" data-astro-cid-hlpdogy6><div class="img h-full w-full" data-astro-cid-hlpdogy6><img${addAttribute(img, "src")} alt="Imagen" class="h-full w-full object-cover" data-astro-cid-hlpdogy6></div><div class="front-content" data-astro-cid-hlpdogy6><small class="badge" data-astro-cid-hlpdogy6>${title}</small><div class="description" data-astro-cid-hlpdogy6><div class="title" data-astro-cid-hlpdogy6><p class="title" data-astro-cid-hlpdogy6><strong data-astro-cid-hlpdogy6>${text}</strong></p><svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hlpdogy6><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#ff0" data-astro-cid-hlpdogy6><g transform="scale(8,8)" data-astro-cid-hlpdogy6><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" data-astro-cid-hlpdogy6></path></g></g></svg></div></div></div></div></div></div>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Gustos.astro", void 0);

const $$Astro$2 = createAstro("https://uncompa.github.io");
const $$GustosBox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GustosBox;
  return renderTemplate`${maybeRenderHead()}<h2 class="w-full text-3xl col-start-2 text-center relative my-8 border-b-4 border-orange-500 py-4">
Gustos
</h2><section class="col-start-2 grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-12 place-items-center gap-y-4 lg:gap-x-8 my-4">${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}${renderComponent($$result, "Gustos", $$Gustos, { "title": "Jugar", "text": "Hola", "img": "./space.jpg" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGamepad", FaGamepad, {})}` })}</section>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/GustosBox.astro", void 0);

const $$Astro$1 = createAstro("https://uncompa.github.io");
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Habilidades;
  return renderTemplate`${maybeRenderHead()}<h2 class="w-full text-3xl col-start-2 text-center relative my-8 border-b-4 border-yellow-500 py-4">Intereses</h2><section></section>`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/components/Habilidades.astro", void 0);

const $$Astro = createAstro("https://uncompa.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${maybeRenderHead()}<div class="w-full relative h-caja"><img class="absolute h-caja w-full object-cover object-top" src="/taekwondo.jpg"><div class="h-caja w-full bg-yellow-600 opacity-30"></div></div><main class="container mx-auto grid grid-cols-layout place-items-center h-full relative font-poppins"><div class="relative -top-32 col-span-3"><div class="bg-white relative w-circulo h-circulo col-start-2 rounded-full"><img class="h-full w-full rounded-full p-2" src="/space.jpg" alt=""></div><h2 class="w-full text-4xl col-start-3 text-center relative top-16">
Aaron Vargas
</h2></div><p class="w-full text-xl text-center col-start-2">
Un chico que se va a convertir en hombre que tiene 16 años y ama hacer
          deporte donde se especializa en el Taekwondo siendo muy en esta
          disiciplina deportiva, ama los gatos y dejo de jugar basketball. Además es
          una persona que se fuga mucho de su colegio para ver a sus seres queridos.
</p>${renderComponent($$result2, "Info", $$Info, {})}${renderComponent($$result2, "GustosBox", $$GustosBox, {})}${renderComponent($$result2, "Intereses", $$Intereses, {})}${renderComponent($$result2, "Habilidades", $$Habilidades, {})}</main>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/pages/index.astro", void 0);

const $$file = "C:/Users/GUILLERMO/Desktop/programacion/Pana1/src/pages/index.astro";
const $$url = "/aaron-vargas";

export { $$Index as default, $$file as file, $$url as url };
