export default async function News() {
  await GetNews();

  return (
    <main>
      <div className="container">News</div>
    </main>
  )
}

const GetNews = () => new Promise<void>((resolve) => {
  setTimeout(() => resolve(), 1000)
})