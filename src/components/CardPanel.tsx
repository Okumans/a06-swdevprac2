"use client";

import { useReducer, useState } from "react";
import Card from "./Card";

type CardPaneRatingsReducerActionType = "add" | "remove";

interface CardPaneRatingsRedbcerValueType {
  key: string;
  value?: number;
}

export default function CardPanel() {
  function ratingsReducer(
    state: Map<string, number>,
    action: {
      type: CardPaneRatingsReducerActionType;
      value: CardPaneRatingsRedbcerValueType;
    },
  ) {
    switch (action.type) {
      case "add": {
        state.set(action.value.key, action.value.value ?? 0);
        return new Map(state);
      }
      case "remove": {
        state.delete(action.value.key);
        return new Map(state);
      }
    }
  }

  const [ratings, dispatchRatings] = useReducer(
    ratingsReducer,
    new Map([
      ["The Bloom Pavilion", 0],
      ["Spark Space", 0],
      ["The Grand Table", 0],
    ]),
  );

  function handleSetRatings(venueName: string, newValue: number) {
    dispatchRatings({
      type: "add",
      value: { key: venueName, value: newValue },
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-center gap-5 p-5">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/image/bloom.jpg"
          onSetRating={handleSetRatings}
        />
        <Card
          venueName="Spark Space"
          imgSrc="/image/sparkspace.jpg"
          onSetRating={handleSetRatings}
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/image/grandtable.jpg"
          onSetRating={handleSetRatings}
        />
      </div>

      <div className="p-6">
        <p className="text-lg font-bold">
          Venue List with Ratings : {ratings.size}
        </p>

        <div>
          {Array.from(ratings).map(([venueName, rating]) => (
            <p
              key={venueName}
              data-testid={venueName}
              onClick={() =>
                dispatchRatings({ type: "remove", value: { key: venueName } })
              }
            >
              {venueName} : {rating}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
