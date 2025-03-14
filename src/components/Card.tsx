import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface Props {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: Props) {
  return (
    <div className="h-80">
      <InteractiveCard>
        <div className="relative w-full min-h-52 h-1/2 overflow-hidden rounded-lg">
          <Image
            src={imgSrc}
            alt="Product Picture"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="h-1/3 p-2">
          <h3 className="font-bold text-brown-700">{venueName}</h3>
        </div>
      </InteractiveCard>
    </div>
  );
}
