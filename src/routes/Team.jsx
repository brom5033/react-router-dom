import { useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  const [searchParams, setSearchPrams] = useSearchParams();
  const message = searchParams.get("message");

  const handleClick = useCallback(() => {
    setSearchPrams({
      message: "world",
    });
  }, [setSearchPrams]);

  return (
    <div>
      <h3>Team:{teamId}</h3>
      <button onClick={handleClick}>Click</button>
      {message && <h4>{message}</h4>}
    </div>
  );
}
