import { useFetcher, useLoaderData } from "react-router-dom";

export default function Team() {
  const data = useLoaderData();
  const fetcher = useFetcher();
  const team = data.team;

  if (!team) {
    return <div>Team not found.</div>;
  }
  return (
    <div>
      <h3>Team {team.name}</h3>
      {/* <Form method="delete">
        <button type="submit">Delete</button>
      </Form> */}
      <fetcher.Form method="delete" action="/team">
        <input type="hidden" name="id" value={team.id} />
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}
