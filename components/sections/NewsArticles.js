// NewsArticles.jsx
import { ArrowRight, Clock } from "lucide-react";

const defaultArticles = [
    {
        id: 1,
        category: "Real Estate",
        image: "/hero.jpg",
        title: "5 Things to Check Before Buying Your First Home",
        author: "Nadia",
        date: "2026-08-27",
        readTime: "8 min",
        href: "#",
    },
    {
        id: 2,
        category: "Market Trends",
        image: "/images/image.png",
        title: "How Property Prices Are Shifting Across Lahore",
        author: "Muhammad Saif",
        date: "2026-08-26",
        readTime: "10 min",
        href: "#",
    },
    {
        id: 3,
        category: "Investment",
        image: "/hero3.jpg",
        title: "Rental Yield vs Capital Gain: What Should You Chase?",
        author: "Ammar Basit",
        date: "2026-08-25",
        readTime: "11 min",
        href: "#",
    },
];

function ArticleCard({ article, isDark }) {
    return (
        <a
            href={article.href}
            className={`group block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 backdrop-blur-md ${isDark ? ' bg-brand-text/6 border-brand-text/10 border' : 'bg-brand-navy'}`}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-brand-dark">
                    {article.category}
                </span>
            </div>

            <div className="p-5">
                <h3
                    className={`mb-4 line-clamp-2 text-lg font-semibold leading-snug text-brand-text`}
                >
                    {article.title}
                </h3>

                <div className="flex items-center justify-between text-sm">
                    <div>
                        <p className="font-semibold text-brand-gold">{article.author}</p>
                        <p className={isDark ? "text-brand-muted" : "text-slate-500"}>
                            {article.date}
                        </p>
                    </div>
                    <span
                        className={`flex items-center gap-1 ${isDark ? "text-brand-muted" : "text-slate-500"
                            }`}
                    >
                        <Clock size={14} />
                        {article.readTime}
                    </span>
                </div>
            </div>
        </a>
    );
}

export default function NewsArticles({
    variant = "dark", // "dark" | "light" — switch based on page flow
    title = "News & Articles",
    highlight = "Articles",
    articles = defaultArticles,
}) {
    const isDark = variant === "dark";
    const [normal, gold] = title.includes(highlight)
        ? [title.replace(highlight, "").trim() + " ", highlight]
        : [title, ""];

    return (
        <section
            className={`px-6 py-20  md:py-28 ${isDark ? "bg-brand-navy" : "bg-white"
                }`}
        >
            <div className="mx-auto max-w-310">
                <p className={`text-xl  font-bold text-brand-gold`}>Blogs</p>
                <h2 className="mb-14 text-4xl font-bold md:text-4xl">
                    <span className={isDark ? "text-brand-text" : "text-brand-dark"}>
                        {normal}
                    </span>
                    {gold && <span className="text-brand-gold">{gold}</span>}
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} isDark={isDark} />
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <button
                        className={`inline-flex items-center gap-2 rounded-md px-3 py-2 border-2 font-semibold transition ${isDark
                            ? "bg-brand-darkGold text-brand-text border-brand-darkGold hover:bg-transparent hover:border-brand-text"
                            : "bg-brand-dark text-brand-text hover:bg-transparent hover:text-brand-accent"
                            }`}
                    >
                        View All
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}