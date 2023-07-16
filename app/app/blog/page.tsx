export default async function Blog() {
  await GetBlog();

  return (
    <main>
      <div className="container">Blog</div>
    </main>
  )
}

const GetBlog = () => new Promise(resolve => {
  setTimeout(() => resolve(), 1000)
})