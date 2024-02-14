import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h3 className="text-2xl font-bold hover:text-gray-500">
                WELCOME
              </h3>
<div class="max-w-3xl mx-auto py-8 px-4">
    <div class="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 class="text-xl font-semibold mb-2">How to Use:</h3>
        <ol class="list-decimal list-inside">
            <li class="mb-2">Sign Up or Sign In:
                <ul class="list-disc list-inside pl-4">
                    <li>Click on the "Sign Up" or "Sign In" button on the home page.</li>
                    <li>Fill in the required information (name, email, password) and click "Submit".</li>
                </ul>
            </li>
            <li class="mb-2">Write a Blog:
                <ul class="list-disc list-inside pl-4">
                    <li>Once signed in, click on the "Add Blog" button.</li>
                    <li>Enter a title and content for your blog in the provided form.</li>
                    <li>Click on the "Choose File" button to add a picture to your blog.</li>
                    <li>Click on the "Submit" button to publish your blog.</li>
                </ul>
            </li>
            <li class="mb-2">Edit a Blog:
                <ul class="list-disc list-inside pl-4">
                    <li>After posting a blog, you can edit it by clicking on the "Edit" button on the blog post.</li>
                    <li>Update the title, content, or photo as needed.</li>
                    <li>Click on the "Save" button to save your changes.</li>
                </ul>
            </li>
            <li class="mb-2">View All Posts:
                <ul class="list-disc list-inside pl-4">
                    <li>To view all the posts, click on the "All Posts" button on the home page.</li>
                    <li>This will display a list of all the posts with their titles and photos.</li>
                </ul>
            </li>
        </ol>
      
    </div>
</div>

            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
