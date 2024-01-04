import { useMatch } from "react-router-dom";

export default function Random() {
  const match = useMatch("/team/:teamId/task/:taskId");

  if (match === null) {
    return (
      <div>
        <h2>Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Team: {match.params.teamId}, Tack: {match.params.taskId}
      </h2>
    </div>
  );
}
