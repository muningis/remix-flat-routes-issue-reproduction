import { useRouteLoaderData } from "@remix-run/react";

export function ArticleCard() {
  const data = useRouteLoaderData("routes/post.$slug");

  return <main>Data: {JSON.stringify(data)}</main>;
}