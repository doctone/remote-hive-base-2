export default function WorkspacePage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
