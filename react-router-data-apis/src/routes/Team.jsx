import { useLoaderData } from "react-router-dom";

export default function Team() {
  const data = useLoaderData();
  return (
    <div>
      <h3>Team {data.team.name}</h3>
    </div>
  );
}
