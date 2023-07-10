import getAllPosts from "@/lib/getAllPosts";
import PostItem from "./open-position-item";
import EmptyDisplay from "@/components/empty-display";

interface Post {
  id: number;
  sticky: boolean;
  title: string;
  name: string;
  image: string;
  tag1: string;
  tag2: string;
  date: string;
}

export default async function OpenPositionList() {
  const posts: any = [];

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Latest jobs</h2>

      {posts.length == 0 && <EmptyDisplay message="No jobs currently available" />}
      {/* List container */}
      <div className="flex flex-col">
        {posts.map((post: any) => {
          return <PostItem key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}
