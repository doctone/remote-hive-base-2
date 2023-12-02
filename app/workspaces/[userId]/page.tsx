export default function Page({ params }: { params: { userId: string } }) {
  return <div>My User: {params.userId}</div>;
}
