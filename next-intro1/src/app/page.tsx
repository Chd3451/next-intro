
export default function Home() {
  return (
    <div className='bg-yellow-400 min-h-screen flex flex-col'>
      <header className='flex justify-between items-center w-full mx-auto my-4 max-w-4xl'>
        <h1 className='text-black text-xl font-bold'>
         🗳️Vota.dev
        </h1>
      </header>
      <section className='mt-48 max-w-[1000px] mx-auto'>
        <h1 className='text-black text-center font-extrabold text-8xl mb-10'>
          Vota los mejores del desarrollo web
        </h1>
        <p className='max-w-[600px] mx-auto text-center text-2xl text-black opacity-80'>
          Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
        </p>
        <div className='bg-white h-screen max-w-3xl p-10 mx-auto mt-20 rounded-lg'>
          <h2>Mejor framework</h2>
          <ul>
            <li>React</li>
            <li>Wue</li>
            <li>Angular</li>

          </ul>
        </div>
      </section>
    </div>
  )
}
