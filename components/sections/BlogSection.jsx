import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Leaf } from "lucide-react";

const blogPosts = [
  {
    category: "Real Estate",
    date: "May 18, 2025",
    title: "Top 7 Tips for Finding Your Perfect Home",
    description:
      "Discover essential tips and expert advice to help you find a home that truly fits your lifestyle and budget.",
    author: "Adil Khan",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Home & Living",
    date: "May 14, 2025",
    title: "Small Space, Big Impact: Smart Interior Ideas",
    description:
      "Learn how to make the most of your space with clever design ideas that are both functional and stylish.",
    author: "Adil Khan",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Lifestyle",
    date: "May 10, 2025",
    title: "Weekend Getaways: Places You Must Visit",
    description:
      "Explore some of the best weekend getaway destinations to relax, unwind, and create unforgettable memories.",
    author: "Adil Khan",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1500534623283-312a752e68ce?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-dark px-6 py-20 font-syne text-off-white md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl flex items-center flex-col @container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue">
            <span className="h-px w-10 bg-blue/50" />
            <span className="flex items-center gap-2">
              Our Blogs <Leaf size={16} />
            </span>
            <span className="h-px w-10 bg-blue/50" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-off-white sm:text-5xl md:text-6xl">
            Latest Insights &amp; Articles
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray sm:text-lg">
            Explore our latest blog posts on industry trends, tips, and insights
            designed to help you stay informed and inspired.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 @max-[1000px]:max-w-150 w-full @min-[1000px]:grid-cols-3  gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group flex max-w-150 w-full  h-full flex-col overflow-hidden rounded-2xl border border-gray/15 bg-dark1 transition hover:-translate-y-1 hover:border-blue/40"
            >
              <div className="relative aspect-[1.7] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-blue px-3 py-1.5 text-xs font-semibold text-off-white">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-sm text-gray">
                  <CalendarDays size={15} className="text-blue" />
                  {post.date}
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-off-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray/15 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue text-sm font-bold text-off-white">
                      AK
                    </span>
                    <span className="text-sm text-gray">By {post.author}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm text-gray">
                    <Clock3 size={15} className="text-blue" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blogs"
            className="flex items-center gap-3 rounded-lg bg-blue px-7 py-3.5 text-sm font-semibold text-off-white transition hover:brightness-110"
          >
            View All Blogs <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}