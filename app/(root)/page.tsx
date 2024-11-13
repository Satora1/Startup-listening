import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name:"KUBA"},
    _id: 1,
    description: "The description",
    image: "https://private-user-images.githubusercontent.com/116550178/336055617-9df90d22-17bc-41d2-a84f-a2739478b6df.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE1MDUxNTUsIm5iZiI6MTczMTUwNDg1NSwicGF0aCI6Ii8xMTY1NTAxNzgvMzM2MDU1NjE3LTlkZjkwZDIyLTE3YmMtNDFkMi1hODRmLWEyNzM5NDc4YjZkZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExM1QxMzM0MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYzc1YWRhYjVkZDc5MWYzYWNkZjQ2MjI5NWZlZjNiYTQ3MTI3YzI1MmRjNzdhY2MyZGYwZGM2YTlmODU3ZTgwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DrBiumGGLcfhCpiQWq8tegdslA2_Nry1iq--Vit-OIg",
    category: "Crypto",
    title: "W Blockchain",
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup,<br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas ,Vote on Pitches, and get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` :
            "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) :
            <p className="no-results">No startups</p>
          }
        </ul>
      </section>
    </>
  )
}