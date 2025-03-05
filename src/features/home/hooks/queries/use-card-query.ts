import api from "@/shared/apis";
import { useInfiniteQuery, useQueryClient, type InfiniteData } from "@tanstack/react-query";
import { CardResponse } from "@/features/home/types";

const cardKeys = {
  all: ["cards"] as const,
  lists: () => [...cardKeys.all, "list"] as const,
  list: (filters: string | undefined) => [...cardKeys.lists(), { filters }] as const,
};

const fetchCardData = async (page?: string): Promise<CardResponse> => {
  const url = page ? `/v1/card?page=${page}` : "/v1/card";

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

export const useCardQuery = (page?: string) => {
  const queryClient = useQueryClient();

  const initialData = queryClient.getQueryData<CardResponse>(cardKeys.list(page));

  return useInfiniteQuery<CardResponse, Error, InfiniteData<CardResponse>>({
    queryKey: cardKeys.list(page),
    queryFn: ({ pageParam }) => {
      if (!pageParam && initialData) {
        return initialData;
      }
      return fetchCardData(pageParam as unknown as string);
    },
    initialPageParam: page,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.hasNext === false) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [page],
        }
      : undefined,
  });
};
