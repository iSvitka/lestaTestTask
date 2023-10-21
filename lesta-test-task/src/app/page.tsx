import ShipsPage from "@/components/ShipsPage/ShipsPage";
import { getShipsData } from "@/utils/getShipsData";

export default async function Home() {
  const shipsData = await getShipsData();

  return (
    <main className='max-w-screen w-full min-h-[73vh] flex items-start justify-center'>
      <ShipsPage shipsData={shipsData} />
    </main>
  )
}
