import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Satej Gandre
      </h1>
      <p className="mb-4">
        {`I'm a high school student who enjoys computer science and mathematics, especially when it means solving complex problems or building innovative projects. I've worked with C++, Python, and C#, explored cybersecurity, and dabbled in statistics. Lately, I've been really into competitive programming alongside machine learning.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
