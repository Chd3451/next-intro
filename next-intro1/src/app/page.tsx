import { SecondaryTitle } from "./components/SecondaryTitle";
import { Button } from "./components/Button";
import { ReactIcon } from "./components/icons/ReactIcon";
import { VueIcon } from "./components/icons/VueIcon";
import { AngularIcon } from "./components/icons/AngularIcon";
import { SvelteIcon } from "./components/icons/SvelteIcon";
import { LitIcon } from "./components/icons/LitIcon";
import { NestIcon } from "./components/icons/NestIcon";
import { ExpressIcon } from "./components/icons/ExpressIcon";
import { FastifyIcon } from "./components/icons/FastifyIcon";
import { HapiIcon } from "./components/icons/HapiIcon";
import { NextIcon } from "./components/icons/NextIcon";
import { NuxtIcon } from "./components/icons/NuxtIcon";
import { SvelteKitIcon } from "./components/icons/SvelteKitIcon";
import { RemixIcon } from "./components/icons/RemixIcon";
import { AstroIcon } from "./components/icons/AstroIcon";
import { BlitzJSIcon } from "./components/icons/BlitzJSIcon";
import { WebpackIcon } from "./components/icons/WebpackIcon";
import { ParcelIcon } from "./components/icons/ParcelIcon";
import { RollupIcon } from "./components/icons/RollupIcon";
import { EsBuildIcon } from "./components/icons/EsBuildIcon";
import { ViteIcon } from "./components/icons/ViteIcon";
import { NodeIcon } from "./components/icons/NodeIcon";
import { DenoIcon } from "./components/icons/DenoIcon";
import { StitchesIcon } from "./components/icons/StitchesIcon";
import { StyledComponentsIcon } from "./components/icons/StyledComponentsIcon";
import { EmotionIcon } from "./components/icons/EmotionIcon";
import { JestIcon } from "./components/icons/JestIcon";
import { TestingLibraryIcon } from "./components/icons/TestingLibraryIcon";
import { VitestIcon } from "./components/icons/VitestIcon";


export default function Home() {
  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col">
      <header className="flex justify-between items-center w-full mx-auto my-4 max-w-6xl">
        <h1 className="text-black text-xl font-bold">🗳️Vota.dev</h1>
        <div className="flex justify-between items-center">
          <button className="bg-white border-2 border-white rounded-lg mx-2">
          <a href="/#" className="py-3 text-base font-semibold px-7 text-dark hover:opacity-60">
                Sign In
              </a>
          </button>
          <button className="bg-black border-2 border-black rounded-lg mx-2">
            <a href="/#" className="py-3 text-base font-semibold text-white rounded-lg  px-7 hover:opacity-60" >
                Sign Up
            </a>
          </button>  
        </div>
      </header>
      <section className="mt-48 max-w-[1000px] mx-auto">
        <h1 className="max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl">
          Vota los mejores del desarrollo web
        </h1>
        <p className="max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70">
          Decide qué stack, tecnologías y frameworks han sido los mejores del
          año. ¡Cada voto cuenta!
        </p>
        <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <SecondaryTitle title="Mejor nueva funcionalidad ECMAScript" />

          <div className="text-2xl text-center font-semibold text-gray-700 mb-20">
            Nullish Coalescing Operator
          </div>

          <SecondaryTitle title="Mejor biblioteca UI" />

          <ul className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-4">
            <Button buttonLabel='React'>
              <ReactIcon />
            </Button>
            <Button buttonLabel='Vue.js'>
              <VueIcon />
            </Button>
            <Button buttonLabel='Angular'>
              <AngularIcon />
            </Button>
            <Button buttonLabel='Svelte'>
              <SvelteIcon />
            </Button>
            <Button buttonLabel='Lit'>
              <LitIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejor biblioteca UI" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Nest.js'>
              <NestIcon />
            </Button>
            <Button buttonLabel='Express'>
              <ExpressIcon />
            </Button>
            <Button buttonLabel='Fastify'>
              <FastifyIcon />
            </Button>
            <Button buttonLabel='Hapi'>
              <HapiIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejor framework FullStack" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Next.js'>
              <NextIcon />
            </Button>
            <Button buttonLabel='Nuxt'>
              <NuxtIcon />
            </Button>
            <Button buttonLabel='SvelteKit'>
              <SvelteKitIcon />
            </Button>
            <Button buttonLabel='Remix'>
              <RemixIcon />
            </Button>
            <Button buttonLabel='Astro'>
              <AstroIcon />
            </Button>
            <Button buttonLabel='BlitzJS'>
              <BlitzJSIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejores empaquetadores de código" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Webpack'>
              <WebpackIcon />
            </Button>
            <Button buttonLabel='Rollup'>
              <RollupIcon />
            </Button>
            <Button buttonLabel='Parcel'>
              <ParcelIcon />
            </Button>
            <Button buttonLabel='EsBuild'>
              <EsBuildIcon />
            </Button>
            <Button buttonLabel='Vite'>
              <ViteIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejor entorno de ejecución de JavaScript" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Node.js'>
              <NodeIcon />
            </Button>
            <Button buttonLabel='Deno'>
              <DenoIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejor librería CSS en JS" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Stitches'>
              <StitchesIcon />
            </Button>
            <Button buttonLabel='Styled Components'>
              <StyledComponentsIcon />
            </Button>
            <Button buttonLabel='Emotion'>
              <EmotionIcon />
            </Button>
          </ul>

          <SecondaryTitle title="Mejor herramienta de testing" />

          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Button buttonLabel='Jest'>
              <JestIcon />
            </Button>
            <Button buttonLabel='Testing Library'>
              <TestingLibraryIcon />
            </Button>
            <Button buttonLabel='Vitest'>
              <VitestIcon />
            </Button>
          </ul>

        </div>
      </section>
    </div>
  );
}
