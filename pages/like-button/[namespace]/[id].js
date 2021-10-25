import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
      <LikeButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          handlePress,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <>
            <button onClick={handlePress} disabled={isLoading}>
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Great! I like pizza as well!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};

import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <LikeButton namespace={namespace} id={id} />;
}
