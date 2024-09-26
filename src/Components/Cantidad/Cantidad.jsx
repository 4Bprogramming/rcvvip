import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
      return import("react-animated-numbers");
    },
    { ssr: false }
  );
  
  const achievementsList = [
    {
      metric: "Clientes",
      value: "1000",
      postfix: "+",
    },
    {
      prefix: "+",
      metric: "Años",
      value: "2",
    },
    {
        prefix: "+",
      metric: "Aliados Comerciales",
      value: "7",
    },
    
  ];


export default function Cantidad() {
  return (
    <div className="tituli py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 text-black">
      <div className="sm:border-[#d4ac0d] text-black sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="tituli flex flex-col text-black items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="tituli text-black text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-black  text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
