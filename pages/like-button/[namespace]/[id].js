import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <LikeButton namespace={namespace} id={id} />;
}
const defaultTheme = {
    colors: {
        primary: '#22c1c3',
        secondary: '#ff00c3',
        background: 'transparent',
        text: '#292929',
        highlight: '#e095ed',
        icon: '#292929',
    },
    fonts: {
        body: 'inherit',
    },
};
