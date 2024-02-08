import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorContainer } from './styles';
import { SentimentVeryDissatisfied } from '@mui/icons-material';

const Error = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <ErrorContainer>
        <SentimentVeryDissatisfied sx={{ fontSize: '10rem' }} />
        <h1>Eitaa!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </ErrorContainer>
    );
  } else {
    return (
      <ErrorContainer>
        <h1>Eitaa!</h1>
        <p>Algo deu errado!</p>
      </ErrorContainer>
    );
  }
};

export default Error;
