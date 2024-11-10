// pages/_error.tsx
import { NextPageContext } from 'next';

type ErrorProps = {
  statusCode?: number;
};

function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
