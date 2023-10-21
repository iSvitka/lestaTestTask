import Filter from "@/components/Filter/Filter";
import ShipsList from "@/components/ShipsList/ShipsList";
import { getShipsData } from "@/utils/getShipsData";

export default async function Home() {

  const shipsData = await getShipsData();

  return (
    <main className='max-w-screen w-full min-h-screen flex items-start justify-center bg-gradient-to-r from-cyan-800 to-teal-700'>
      <div className='w-9/12 flex flex-col items-start justify-center gap-5 pt-4'>
        <Filter {...shipsData.filters}/>
        <ShipsList ships={shipsData.ships}/>
      </div>
    </main>
  )
}
