import { LikeButton } from '@lyket/react';
<LikeButton
  id="pizza"
  namespace="great-things"
>
  {({ handlePress, totalLikes, userLiked, isLoading }) => {
    return (
      <div>
        <button
          className="big"
          onClick={handlePress}
          disabled={isLoading}
        >
          🍕
        </button>
        <strong>Total likes: {totalLikes}</strong>
        {userLiked && <div>Thanks for liking pizza!</div>}
      </div>
    )
  }}
</LikeButton>

import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <LikeButton namespace={namespace} id={id} />;
}
