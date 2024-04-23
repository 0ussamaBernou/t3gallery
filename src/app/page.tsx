import { db } from "~/server/db";

// import Link from "next/link";
const images = "https://picsum.photos/200/300 ".repeat(4).split(" ", 4)
console.log(images)

export default async function HomePage() {
  const posts = await db.query.posts.findMany() 
  console.log(posts)
  return (
    <main className="">
      <div className=" flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, id) => (
          <div key={id} className="w-48">
            <img src={image} alt="image" />
          </div>
        )
        )}
      </div>
    </main>
  );
}
