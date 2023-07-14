import {Header, HomeProps} from "@/widgets/Header/ui/Header";
import {Histories, HistoriesProps} from "@/widgets/Histories/ui/Histories";
import {Suggestion, SuggestionProps} from "@/widgets/Suggestion/ui/Suggestion";

interface GetHomeProps {
  header: HomeProps,
  stories: HistoriesProps,
  suggestion: SuggestionProps,
}

export default async function Home() {
  const {header, stories, suggestion} = await GetHome();

  return (
    <main>
      <Header title={header.title} info={header.info} img={header.img}/>
      <Histories title={stories.title} histories={stories.histories} />
      <Suggestion title={suggestion.title} desc={suggestion.desc}/>
    </main>
  )
}

async function GetHome (): Promise<GetHomeProps> {
  return await fetch<GetHomeProps>("http://localhost:5000/api/home/receive", {
    method: 'GET',
    cache: 'no-store',
  })
    .then((res) => res.json())
    .catch(err => new Error("Cannot loading data for Home page."));
}