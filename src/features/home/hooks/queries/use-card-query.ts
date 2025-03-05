import api from "@/shared/apis";
import { useSuspenseInfiniteQuery, useQueryClient, type InfiniteData } from "@tanstack/react-query";
import { CardResponse } from "@/features/home/types";

const cardKeys = {
  all: ["cards"] as const,
  lists: () => [...cardKeys.all, "list"] as const,
  list: (lastCardId: string | undefined) => [...cardKeys.lists(), { lastCardId }] as const,
};

const fetchCardData = async (lastCardId?: string): Promise<CardResponse> => {
  const url = lastCardId ? `/v1/card?page=${lastCardId}` : "/v1/card";

  try {
    const response = await api.get(url);
    return response.data;
  } catch {
    return {
      list: [],
      hasNext: false,
    };
  }
};

export const useCardQuery = (lastCardId?: string) => {
  const queryClient = useQueryClient();

  const initialData = queryClient.getQueryData<CardResponse>(cardKeys.list(lastCardId));

  return useSuspenseInfiniteQuery<CardResponse, Error, InfiniteData<CardResponse>>({
    queryKey: cardKeys.list(lastCardId),
    queryFn: ({ pageParam }) => {
      if (!pageParam && initialData) {
        return initialData;
      }
      return fetchCardData(pageParam as unknown as string);
    },
    initialPageParam: lastCardId,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext === false) {
        return undefined;
      }

      if (lastPage.list.length > 0) {
        const lastItem = lastPage.list[lastPage.list.length - 1];
        return lastItem.card.cardId;
      }

      return undefined;
    },
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [lastCardId],
        }
      : undefined,
  });
};
