import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  email: z.string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string()
    .min(6, 'A palavra-passe deve ter no mínimo 6 caracteres')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function App(){
  const [output, setOutput] = useState('')
  const { 
    register,
    handleSubmit,
    formState: { errors}
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='h-screen flex flex-col gap-10 items-center justify-center'>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(createUser)}
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>E-mail</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h-10 px-3'
            type='email'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Senha</label>
          <input 
            className='border border-zinc-200 shadow-sm rounded h-10 px-3'
            type='password'
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
          type='submit'>
            Enviar
        </button>
      </form>
      <pre>
        {output}
      </pre>
    </main>
  )
}