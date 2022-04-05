import Head from 'next/head'
import Form from './Components/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BhaloTech Gen 2</title>
      </Head>

      {/* Componenets */}
      <Form/>
    </div>
  )
}
