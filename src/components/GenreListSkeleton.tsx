import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle borderRadius={8} height={12} width={12} />
      <SkeletonText width={200} />
    </HStack>
  );
};

export default GenreListSkeleton;
