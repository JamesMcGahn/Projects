import PageHead from '../Components/layout/PageHead'
import ContactForm from '../Components/forms/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue font-andada">
      <PageHead title='Kellie Reyes, Esq.' />
      <div className='mb-4'>
        <h1 className='text-3xl text-white'>Kellie Reyes, Esq.</h1>
      </div>
      <ContactForm />
    </div >
  )
}
