import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

<Provider
  apiKey="st_37c8c8b56b1a1efadfad5978811009"
  theme={{
    colors: {
      background: "rgba(255, 224, 138, 0.4)",
      text: "violet",
      primary: "#b8fff3"
      secondary: "rgba(220, 234, 108, 0.6)"
    }
  }}
>

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <LikeButton namespace={namespace} id={id} />;
}
