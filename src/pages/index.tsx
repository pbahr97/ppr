import Image from 'next/image'

import Layout from "../components/layout";
import Box from "../components/box";

import Pirmin from "../../public/assets/pirmin-head.gif";
import Patrick from "../../public/assets/patrick-head.gif";
import Robin from "../../public/assets/robin-head.gif";

export default function Home() {
  return (
    <Layout>
      <div className="mansory" style={{ gridTemplateRows: "280px 280px 280px 280px" }}>
        <Box className="box-2w box-2h">
          <div className="p-6 flex flex-col items-start">
            <div className="flex justify-end items-end">
              <Image
                src={Patrick}
                alt="Patrick"
                className="w-1/3 h-auto"
              />
              <Image
                src={Pirmin}
                alt="Pirmin"
                className="w-1/3 h-auto"
              />
              <Image
                src={Robin}
                alt="Robin"
                className="w-1/3 h-auto"
              />
            </div>
            <h2 className='font-bold text-4xl py-6'>Hi!</h2>
            <p className="text-lg">Wir sind Patrick, Pirmin und Robin. 3 Freunde, interessiert an Software-Entwicklung, coolen Projekten, kreativen Ideen und innovativen Produkten.</p>
            <br />
            <p className="text-lg">Wenn du mehr über unsere Arbeits erfahren willst, dann klick dich durch oder schreib uns gleich an!</p>
            <div className='flex'>
              <button className='bg-white my-4 border shadow-inset rounded-3xl mr-4'>Über uns</button>
              <button className='bg-emerald-600 my-4 rounded-3xl text-white'>Kontakt</button>
            </div>

          </div>
        </Box>
        <Box className="box-2h"></Box>
        <Box></Box>
        <Box></Box>
        <Box>Box 5</Box>
        <Box className="">Box 6</Box>
        <Box className="box-2w">Box 7</Box>
      </div >
    </Layout >
  )
}
