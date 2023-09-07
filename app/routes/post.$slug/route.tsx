import { json, type LoaderArgs } from "@remix-run/node";
import { ArticleCard } from "./article-card";

export function loader({ params }: LoaderArgs) {
  return json({ slug: params.slug })
}

export default function() {
  return (<article>
    <ArticleCard />
  </article>)
}