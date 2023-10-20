import { SecondaryTitle } from "./components/SecondaryTitle";
import { Button } from "./components/Button";
import { ReactIcon } from "./icons/ReactIcon";

export default function Home() {
  return (
    <div className='bg-yellow-400 min-h-screen flex flex-col'>
      <header className='flex justify-between items-center w-full mx-auto my-4 max-w-4xl'>
        <h1 className='text-black text-xl font-bold'>
         🗳️Vota.dev
        </h1>
      </header>
      <section className='mt-48 max-w-[1000px] mx-auto'>
        <h1 className='max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl'>
          Vota los mejores del desarrollo web
        </h1>
        <p className='max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70'>
          Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
        </p>
        <div className='max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg'>
          <SecondaryTitle title='Mejor nueva funcionalidad ECMAScript' />
          <div className="text-2xl font-semibold text-gray-700 mb-20">Nullish Coalescing Operator</div>
          <SecondaryTitle title='Mejor biblioteca UI' />
          <Button>
            <ReactIcon />
          </Button>
        </div>
      </section>
    </div>
  )
}
