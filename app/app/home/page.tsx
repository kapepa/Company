import {Header, HomeProps} from "@/widgets/Header/ui/Header";
import {Histories, HistoriesProps} from "@/widgets/Histories/ui/Histories";
import {Suggestion, SuggestionProps} from "@/widgets/Suggestion/ui/Suggestion";
import {Education, EducationProps} from "@/widgets/Education/ui/Education";
import {Problems, ProblemsProps} from "@/widgets/Problems/ui/Problems";
import {Request, RequestProps} from "@/widgets/Request/ui/Request";
import {Footer} from "@/widgets/Footer/ui/Footer";

interface GetHomeProps {
  header: HomeProps,
  stories: HistoriesProps,
  suggestion: SuggestionProps,
  education: EducationProps,
  problems: ProblemsProps,
  request: RequestProps
}

export default async function Home() {
  const {header, stories, suggestion, education, problems, request} = await GetHome();

  return (
    <main>
      {!!header && <Header title={header.title} info={header.info} img={header.img}/>}
      {!!stories && <Histories title={stories.title} histories={stories.histories} />}
      {!!suggestion && <Suggestion title={suggestion.title} desc={suggestion.desc}/>}
      {!!education && <Education title={education.title} educations={education.educations}/>}
      {!!problems && <Problems title={problems.title} subtitle={problems.subtitle} list={problems.list}/>}
      {!!request && <Request title={request.title} subtitle={request.subtitle}/>}
      <Footer/>
    </main>
  )
}

async function GetHome (): Promise<GetHomeProps> {
  return await fetch(`${process.env.API}/api/home/receive`, {
    method: 'GET',
    cache: 'no-store',
  })
    .then((res) => res.json())
    .catch(err => new Error("Cannot loading data for Home page."));
}