import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

<Provider
  apiKey="pt_69f886ba5ef0a518d4a43a896a51d9",
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
