import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export function Component() {
  const data = useLoaderData();
  return (
    <>
      <h2>Home</h2>
      <Suspense fallback={<p>Loading date...</p>}>
        <Await resolve={data.date} errorElement={<p>Error loading date...</p>}>
          {(date) => <p>Data from loader: {date}</p>}
        </Await>
      </Suspense>
    </>
  );
}
