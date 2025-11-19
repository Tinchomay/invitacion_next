import Countdown from '@/components/Countdown'
import DressCode from '@/components/DressCode'
import Gallery from '@/components/Gallery'
import Gifts from '@/components/Gifts'
import Hero from '@/components/Hero' // Asegúrate de que la ruta sea correcta
import Location from '@/components/Location'
import Parents from '@/components/Parents'
import RSVP from '@/components/RSVP'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Gallery /> */}
      <Countdown />
      <Parents />
      <Location />
      <DressCode />
      <RSVP />
      <Gifts />
    </>
  )
}