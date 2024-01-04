import { Form, useLoaderData } from "react-router-dom";

export default function Team() {
  const data = useLoaderData();
  const team = data.team;

  if (!team) {
    return <div>Team not found.</div>;
  }
  return (
    <div>
      <h3>Team {team.name}</h3>
      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
