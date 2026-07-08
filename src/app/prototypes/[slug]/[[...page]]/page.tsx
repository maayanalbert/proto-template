import { createPrototypePage, createPrototypeStateMapPage } from "proto-plugin";
import { notFound } from "next/navigation";

import prototypeConfig from "../../../../../prototype.config";

const prototypePage = createPrototypePage(prototypeConfig);
const stateMapPage = createPrototypeStateMapPage(prototypeConfig);

type PrototypeRoutePageProps = {
  params: Promise<{ slug: string; page?: string[] }>;
};

export function generateStaticParams() {
  return prototypePage.generateStaticParams().flatMap(({ slug }) => [
    { slug, page: undefined },
    { slug, page: ["states"] as string[] },
  ]);
}

export default async function PrototypeRoutePage({ params }: PrototypeRoutePageProps) {
  const { slug, page } = await params;

  if (page?.length === 1 && page[0] === "states") {
    return stateMapPage.default({ params: Promise.resolve({ slug }) });
  }

  if (page && page.length > 0) {
    notFound();
  }

  return prototypePage.default({ params: Promise.resolve({ slug }) });
}
