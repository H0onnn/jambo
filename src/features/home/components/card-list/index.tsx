import { useIntersectionObserver } from "@/shared/hooks";
import { cn, formatCount, formatTime } from "@/shared/utils";
import type { CardResponse, List, Card as CardType } from "@/features/home/types";

type CardListProps = {
  data: CardResponse["list"];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

export const CardList = ({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: CardListProps) => {
  const observerRef = useIntersectionObserver<HTMLDivElement>({
    onIntersect: () => fetchNextPage && fetchNextPage(),
    hasNextPage,
    isFetchingNextPage,
    threshold: 0.1,
  });

  return (
    <section>
      <ul className="flex flex-col gap-2">
        {data.map((item) => {
          const isVideo = item.cardType === "VIDEO";

          return (
            <li
              key={item.card.cardId}
              className={cn(
                "w-full h-fit rounded-[32px] bg-white",
                "relative p-5 overflow-hidden",
                isVideo && "text-white min-h-[665px] p-0"
              )}
            >
              {isVideo ? <VideoCard item={item} /> : <PostCard item={item} />}
            </li>
          );
        })}

        {hasNextPage && !isFetchingNextPage && <div ref={observerRef} className="w-full h-px" />}
      </ul>
    </section>
  );
};

const ProfileSection = ({ item }: { item: List }) => (
  <div className="flex items-center gap-2 mb-[18px]">
    <div className={cn("w-[34px] h-[34px] overflow-hidden rounded-full", "border border-gray-c3")}>
      <img
        src={item.profile.profileImage.imageUrl}
        alt="profile-img"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-[14px] leading-[14px] font-bold">{item.profile.nickName}</span>
      <span className="text-[14px] leading-[14px]">{formatTime(item.card.createdAt)}</span>
    </div>
  </div>
);

const CategorySection = ({ card }: { card: CardType }) => (
  <div className="flex items-center gap-1 mb-2">
    <img src={card.category.imageUrl} alt="category" width={14} height={14} />
    <span className="font-bold text-[13px] leading-[15px]">{card.category.name}</span>
  </div>
);

const TitleSection = ({ card }: { card: CardType }) => (
  <h3 className="font-extrabold text-[20px] leading-6 mb-2">{card.title}</h3>
);

const StatsSection = ({ card, isVideo }: { card: CardType; isVideo: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1">
      <img
        src={isVideo ? "/src/assets/chart-white.svg" : "/src/assets/chart.svg"}
        width={12}
        height={12}
        alt="viewer"
      />
      <span className="text-[13px] leading-4 tracking-[-0.25px]">
        {formatCount(card.viewCount)}
      </span>
    </div>

    <div className="flex items-center gap-1">
      <img
        src={isVideo ? "/src/assets/people-white.svg" : "/src/assets/people.svg"}
        width={12}
        height={12}
        alt="user"
      />
      <span className="text-[13px] leading-4 tracking-[-0.25px]">
        {formatCount(card.userCount)}
      </span>
    </div>
  </div>
);

const PostCard = ({ item }: { item: List }) => (
  <div className="w-full">
    <ProfileSection item={item} />
    <CategorySection card={item.card} />
    <TitleSection card={item.card} />

    {item.card.body && (
      <p className="text-[14px] leading-[18px] tracking-[-0.5px] mb-3">{item.card.body}</p>
    )}

    {item.card.cardImage && item.card.cardImage.length > 0 && (
      <div className="flex items-center gap-2 mb-2 rounded-lg overflow-hidden">
        {item.card.cardImage.map((image) => (
          <img
            key={image.imageUrl}
            src={image.imageUrl}
            alt="card-img"
            className="w-full h-full rounded-lg object-cover"
          />
        ))}
      </div>
    )}

    <StatsSection card={item.card} isVideo={false} />
  </div>
);

const VideoCard = ({ item }: { item: List }) => (
  <>
    {item.card.video && (
      <video autoPlay className="absolute top-0 left-0 w-full h-full rounded-[32px] object-cover">
        <source src={item.card.video[0].videoUrl} type="video/mp4" />
      </video>
    )}

    <div className="p-5 absolute inset-0 w-full h-full flex flex-col justify-between">
      <ProfileSection item={item} />

      <div>
        <CategorySection card={item.card} />
        <TitleSection card={item.card} />
        <StatsSection card={item.card} isVideo={true} />
      </div>
    </div>
  </>
);
