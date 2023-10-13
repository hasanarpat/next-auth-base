import Image from "next/image";
import React from "react";

type Session = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    session : Session
}
const User = ({session}:Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className=" first-letter:capitalize">{session?.name}</h1>
      <span>{session?.email}</span>
      <Image
        alt=""
        src={session?.image as string}
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
  );
};

export default User;
