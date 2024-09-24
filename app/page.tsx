import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/topicCreateForm";
import TopicList from "@/components/topics/topicList";
import { fetchTopPosts } from "@/db/queries/posts";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <Button>
          <Link href={"/nice"}>Goto Test</Link>
        </Button>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
