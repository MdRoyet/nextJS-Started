const BlogsPage = () => {
  const blogData = [
    {
      id: 1,
      title: "Mastering Tailwind CSS v4",
      description:
        "Explore the new features of Tailwind CSS v4, including the new engine and CSS-first configuration.",
      author: "Alex Rivera",
      date: "April 10, 2026",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      tags: ["Frontend", "Tailwind"],
      readingTime: "5 min read",
    },
    {
      id: 2,
      title: "Why daisyUI is a Game Changer",
      description:
        "Stop writing endless utility classes and start using component classes that make sense for your workflow.",
      author: "Jordan Smith",
      date: "April 12, 2026",
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
      tags: ["UI Design", "CSS"],
      readingTime: "4 min read",
    },
    {
      id: 3,
      title: "The Future of Next.js",
      description:
        "A deep dive into the App Router, Server Actions, and the upcoming performance optimizations in the Next.js ecosystem.",
      author: "Sam Chen",
      date: "April 14, 2026",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      tags: ["NextJS", "React"],
      readingTime: "8 min read",
    },
    {
      id: 4,
      title: "Building Accessible Web Apps",
      description:
        "Learn the core principles of web accessibility and how to ensure your site is usable for everyone.",
      author: "Taylor Reed",
      date: "April 15, 2026",
      image:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      tags: ["A11y", "Web Dev"],
      readingTime: "6 min read",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      {blogData.map((blog) => (
        <div key={blog.id}>
          {" "}
          <h2 className="text-4xl font-bold mb-4">{blog.title}</h2>{" "}
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
