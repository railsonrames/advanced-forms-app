export function App(){
  return (
    <main className='h-screen flex flex-row gap-6 items-center justify-center'>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>E-mail</label>
          <input type='email' name='email'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label>Senha</label>
          <input type='password'/>
        </div>
        <button className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600' type='submit'>Enviar</button>
      </form>
    </main>
  )
}