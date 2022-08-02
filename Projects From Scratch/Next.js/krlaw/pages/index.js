import PageHead from '../components/layout/PageHead'
import ContactSection from '../components/sections/ContactSection'


export default function Home({ csrfToken }) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2 pb-6 bg-blue font-andada">
      <PageHead title='Kellie Reyes, Esq.' />
      <div className='m-7 text-center'>
        <h1 className='text-3xl text-white'>Kellie Reyes, Esq.</h1>
      </div>
      <ContactSection csrfToken={csrfToken} />
    </div >
  )
}
