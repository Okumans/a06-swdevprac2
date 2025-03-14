import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface Props {
  venueName: string;
  imgSrc: string;
  onSetRating: Function;
}

export default function Card({ venueName, imgSrc, onSetRating }: Props) {
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
        <div className="flex flex-col gap-1 h-1/3 p-2">
          <h3 className="font-bold text-brown-700">{venueName}</h3>

          <Rating
            data-testid={venueName + " Rating"}
            id={venueName + " Rating"}
            name={venueName + " Rating"}
            onChange={(event, newValue) => {
              onSetRating(venueName, newValue);
              event.stopPropagation();
            }}
          ></Rating>
        </div>
      </InteractiveCard>
    </div>
  );
}
