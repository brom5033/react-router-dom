import { Link, useLoaderData, Outlet, Form } from "react-router-dom";

export default function TeamLayout() {
  const data = useLoaderData();
  return (
    <div>
      <h2>Team Layout</h2>
      <Form method="post">
        <button type="submit">Create</button>
      </Form>
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
