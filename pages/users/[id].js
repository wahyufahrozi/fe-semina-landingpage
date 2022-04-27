import React from "react";
import { useRouter } from "next/router";
useRouter;
function EditUsers({ user }) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <ul>
        <li>Name : {user.name}</li>
        <li>email : {user.email}</li>
        <li>phone : {user.phone}</li>
      </ul>
    </div>
  );
}

export default EditUsers;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  const paths = users.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  console.log(user);
  // Pass user data to the page via props
  return { props: { user } };
}
