import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Satej Gandre
      </h1>
      <p className="mb-4">
        {`I'm a high school student who enjoys computer science and mathematics, especially when it comes to solving complex problems or building innovative projects. I've worked with C++ and Python, explored cybersecurity, and dabbled in statistics. Lately, I've been involved in competitive programming alongside machine learning and embedded systems.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
