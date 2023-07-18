export default async function Blog() {
  await GetBlog();

  return (
    <main>
      <div className="container">Blog</div>
    </main>
  )
}

const GetBlog = () => new Promise<void>((resolve) => {
  setTimeout(() => resolve(), 1000)
})