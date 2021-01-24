import { UpdownButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <UpdownButton namespace={namespace} id={id} />;
}
