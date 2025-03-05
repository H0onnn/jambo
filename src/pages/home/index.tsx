import { useCardQuery } from "@/features/home/hooks/queries";

import { CardList } from "@/features/home/components";

export default function HomePage() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useCardQuery();

  return (
    <CardList
      data={data.pages.flatMap((page) => page.list)}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
