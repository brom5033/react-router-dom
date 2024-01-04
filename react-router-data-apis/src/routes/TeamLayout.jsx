import { Link, useLoaderData, Outlet, useFetcher } from "react-router-dom";

export default function TeamLayout() {
  const data = useLoaderData();
  const fetcher = useFetcher();
  return (
    <div>
      <h2>Team Layout</h2>
      <fetcher.Form method="post">
        <button type="submit">Create</button>
      </fetcher.Form>
      <nav>
        <ul>
          {data.teams.map((team) => (
            <li key={team.id}>
              <Link to={`/team/${team.id}`}>{team.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
