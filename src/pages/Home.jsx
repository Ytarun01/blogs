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
<p>
1.Sign Up or Sign In:

Click on the "Sign Up" or "Sign In" button on the home page.
Fill in the required information (name, email, password) and click "Submit".

<br></br>
2.Write a Blog:
Once signed in, click on the "Add Post" button.
Enter a title and content for your blog in the provided form.
Click on the "Upload Photo" button to add a picture to your blog.
Click on the "Submit" button to publish your blog.

<br></br>
3.Edit a Blog:
After posting a blog, you can edit it by clicking on the "Edit" button on the blog post.
Update the title, content, or photo as needed.
Click on the "Save" button to save your changes.

<br></br>
View All Posts:
To view all the posts, click on the "All Posts" button on the home page.
This will display a list of all the posts with their titles and photos.</p>

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
