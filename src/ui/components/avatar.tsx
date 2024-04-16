import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-11 rounded-full">
        <Image src="https://github.com/shadcn.png" alt="@shadcn" width={44} height={20} />
      </div>
    </div>
  )
}