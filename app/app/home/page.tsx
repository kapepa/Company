import {Header, HomeProps} from "@/widgets/Header/ui/Header";
import {Histories, HistoriesProps} from "@/widgets/Histories/ui/Histories";


interface GetHomeProps {
  header: HomeProps,
  stories: HistoriesProps
}

export default async function Home() {
  const {header, stories} = await GetHome();

  return (
    <main>
      <Header title={header.title} info={header.info} img={header.img}/>
      <Histories title={stories.title} histories={stories.histories} />
    </main>
  )
}

async function GetHome (): Promise<GetHomeProps> {
  return await fetch("http://localhost:5000/api/home/receive", {
    method: 'GET',
    headers: {cache: 'no-store'}
  }).then((res) => res.json());
}