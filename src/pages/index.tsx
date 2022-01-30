import Image from 'next/image'

import Layout from "../components/layout";
import Box from "../components/box";

import Pirmin from "../../public/assets/pirmin-head.gif";
import Patrick from "../../public/assets/patrick-head.gif";
import Robin from "../../public/assets/robin-head.gif";
import Bolzfieber from "../../public/assets/bf-logo.png";
import Dropception from "../../public/assets/dc-transparent-bg.png";
import HAC from "../../public/assets/hac.png";
import PIN from "../../public/assets/pin.png";

export default function Home() {
  return (
    <Layout>
      <div className="mansory">
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
              <button className='bg-white my-4 border shadow-inset rounded-3xl'>Kontakt</button>
            </div>

          </div>
        </Box>
        <Box className="box-2h flex items-center flex-col justify-around p-6">
          <div className="bg-amazon-500 flex items-center justify-center p-6 rounded-3xl">
            <Image
              src={Bolzfieber}
              alt="Bolzfieber Logo"
              objectFit='contain'
              placeholder="blur"
              width="100px"
              height="100px"
            />
          </div>
          <Image
            src={Dropception}
            alt="Dropception Logo"
            objectFit='contain'
            placeholder="blur"
            width="100px"
            height="100px"
          />
          <Image
            src={HAC}
            alt="Dropception Logo"
            objectFit='contain'
            placeholder="blur"
            width="100px"
            height="100px"
          />
          <button className='bg-white border shadow-inset rounded-3xl mr-4'>Projekte</button>
        </Box>
        <Box className='bg-cover bg-no-repeat w-full h-full group' style={{ backgroundImage: `url(/assets/nbg.png)` }}>
          <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-white/30 flex flex-col item-center justify-center text-center'>
            <Image src={PIN} height={50} objectFit='contain' />
            <span className='font-bold'>Nürnberg,</span><span>Germany</span>
          </div>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box className="box-2w"></Box>
      </div >
    </Layout >
  )
}
