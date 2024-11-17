import useSWR from 'swr';

type Data = {
  name: string;
};

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then((res) => res.json())
console.log(fetcher);

export default function SwrPage() {
  const { data } = useSWR<Data>('/api/hello', fetcher)
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}
