import { cn } from "@/shared/utils/cn";

export const CardFallback = () => (
  <section className="flex flex-col gap-2">
    {Array.from({ length: 3 }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </section>
);

const SkeletonPulse = ({ className }: { className: string }) => (
  <div className={cn("animate-pulse bg-gray-200 rounded", className)} />
);

const ProfileSkeleton = () => (
  <div className="flex items-center gap-2 mb-[18px]">
    <SkeletonPulse className="w-[34px] h-[34px] rounded-full" />
    <div className="flex flex-col gap-1">
      <SkeletonPulse className="w-20 h-[14px] rounded" />
      <SkeletonPulse className="w-16 h-[14px] rounded" />
    </div>
  </div>
);

const CategorySkeleton = () => (
  <div className="flex items-center gap-1 mb-2">
    <SkeletonPulse className="w-[14px] h-[14px] rounded" />
    <SkeletonPulse className="w-24 h-[15px] rounded" />
  </div>
);

const TitleSkeleton = () => <SkeletonPulse className="w-3/4 h-6 mb-2 rounded" />;

const BodySkeleton = () => (
  <div className="mb-3">
    <SkeletonPulse className="w-full h-[18px] mb-1 rounded" />
    <SkeletonPulse className="w-5/6 h-[18px] mb-1 rounded" />
    <SkeletonPulse className="w-4/6 h-[18px] rounded" />
  </div>
);

const ImageSkeleton = () => <SkeletonPulse className="w-full h-40 mb-2 rounded-lg" />;

const StatsSkeleton = () => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1">
      <SkeletonPulse className="w-[12px] h-[12px] rounded" />
      <SkeletonPulse className="w-10 h-4 rounded" />
    </div>
    <div className="flex items-center gap-1">
      <SkeletonPulse className="w-[12px] h-[12px] rounded" />
      <SkeletonPulse className="w-10 h-4 rounded" />
    </div>
  </div>
);

const PostCardSkeleton = () => (
  <div className="w-full">
    <ProfileSkeleton />
    <CategorySkeleton />
    <TitleSkeleton />
    <BodySkeleton />
    <ImageSkeleton />
    <StatsSkeleton />
  </div>
);

const CardSkeleton = () => (
  <div className={cn("w-full h-fit rounded-[32px] bg-white", "relative p-5 overflow-hidden")}>
    <PostCardSkeleton />
  </div>
);
