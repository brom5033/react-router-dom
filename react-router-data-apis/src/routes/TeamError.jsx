import {useRouteError} from 'react-router-dom';

export default function TeamError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Team Error</h1>
      <p>{error.message}</p>
    </div>
  );
}