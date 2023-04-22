import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY={3}>
      <SkeletonCircle height={12} width={12} />
      <SkeletonText width={100} />
    </HStack>
  );
};

export default GenreListSkeleton;
