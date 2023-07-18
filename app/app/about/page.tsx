export default async function About() {
  await GetAbout();

  return (
    <main>
      <div className="container">About</div>
    </main>
  )
}

const GetAbout = () => new Promise<void>((resolve) => {
  setTimeout(() => resolve(), 1000)
})