import Image from "next/image";
import Link from "next/link";

export function PartnerCard({ ...props }) {
  return (
    <Link
      href={props.link}
      className="w-64 h-32 bg-[#212121] shadow-lg hover:bg-transparent hover:shadow-none transition-all hover:border-manthra-red border-manthra-yellow hover:border-2 overflow-hidden rounded-md"
    >
      <Image
        src={props.image}
        width={200}
        height={200}
        alt={`${props.name} logo`}
        className="object-cover"
      />
      {/* Image size 2:1 */}
    </Link>
  );
}
