/**

[
[
    [
      "'Scrimba','Project Odin','Frontend Horse','BuilderGroop','TypeScript','Remix','Gatsby','Next.js','Replay.io','Tailwind CSS','JWC Courses','KCD','Other'",
      1
    ],
    [ "TypeScript", 7 ],
    [ "Other", 19 ],
    [ "", 65 ],
    [ "Next.js,KCD", 3 ],
    [ "TypeScript,Next.js,Tailwind CSS", 6 ],
    [ "Remix,Other", 2 ],
    [ "Gatsby", 1 ],
    [ "TypeScript,Remix,Next.js", 1 ],
    [ "Next.js,Other", 4 ],
    [ "Project Odin,Next.js,Tailwind CSS", 1 ],
    [ "Next.js", 9 ],
    [ "TypeScript,Remix", 3 ],
    [ "Project Odin,TypeScript,Other", 2 ],
    [ "TypeScript,Next.js", 7 ],
    [ "TypeScript,Remix,Next.js,Tailwind CSS,JWC Courses,KCD", 1 ],
    [ "Project Odin", 2 ],
    [ "Remix", 3 ],
    [ "Frontend Horse,TypeScript,Tailwind CSS", 1 ],
    [ "Next.js,Tailwind CSS", 2 ],
    [ "TypeScript,Next.js,Other", 3 ],
    [ "Tailwind CSS", 2 ],
    [
      "Next.js,Tailwind CSS,Other,Nodeiflux, The Coding Gen, Expo Developer, w3schools, The Programmer’s Hangout, React Native Developers, Fireship, Laravel",
      1
    ],
    [ "Gatsby,Next.js,Other", 1 ],
    [ "TypeScript,Gatsby,Next.js,Tailwind CSS", 1 ],
    [ "TypeScript,Other", 5 ],
    [
      "Scrimba,Frontend Horse,BuilderGroop,TypeScript,Remix,Gatsby,Next.js,Replay.io,Tailwind CSS,KCD",
      1
    ],
    [ "Remix,KCD", 1 ],
    [ "TypeScript,Next.js,KCD", 1 ],
    [
      "Remix,Other,Apollo, Storybook, Testing library, git nation, supabase, tswizzard, exercism",
      1
    ],
    [ "Remix,Next.js,KCD", 1 ],
    [
      "Scrimba,Project Odin,Frontend Horse,BuilderGroop,Next.js,KCD,Other",
      1
    ],
    [ "Remix,Gatsby,Next.js", 1 ],
    [
      "Frontend Horse,TypeScript,Remix,Gatsby,Next.js,Tailwind CSS,JWC Courses",
      1
    ],
    [ "KCD", 1 ],
    [ "Frontend Horse,TypeScript,Next.js,Tailwind CSS", 2 ],
    [ "Replay.io", 1 ],
    [ "Gatsby,Next.js", 1 ],
    [ "Scrimba,TypeScript,Next.js,Tailwind CSS", 1 ],
    [ "Scrimba", 1 ],
    [ "'TypeScript','Next.js','KCD','Other'", 1 ],
    [ "Project Odin,Next.js", 1 ]
  ],
  [
    [ "SO MANY", 1 ],
    [ "", 133 ],
    [ "StorageReview", 1 ],
    [ "Local groups", 1 ],
    [ "The Programmers Hub", 1 ],
    [ "Mantine", 1 ],
    [ "SpeakJS", 2 ],
    [ "Coder Foundry", 1 ],
    [ "Eslint", 1 ],
    [ "Nodeiflux", 1 ],
    [ "Recoiljs, assemblyScript", 1 ],
    [ "Cloudflare Developers", 1 ],
    [ "Hoosat", 1 ],
    [ "Daily", 1 ],
    [ "strapi", 1 ],
    [ "Lazy Developers", 1 ],
    [ "Weekly", 1 ],
    [ "Flutter (", 1 ],
    [ "Expo & Supabase", 1 ],
    [ "ZeroToMastery, Nodeiflux, Angular Community", 1 ],
    [ "Callstack", 1 ],
    [ "Fireship", 1 ],
    [ "FSO", 1 ],
    [ "tech with tim", 1 ],
    [ "Frontend Masters", 1 ],
    [ "Hundreds, but not js libs", 1 ],
    [ "TanStack", 1 ],
    [ "Obsidian,Vite Land", 1 ],
    [ "JavaScript Mastary", 1 ],
    [ "WOC", 1 ],
    [ "Flutter", 1 ],
    [ "Nest, Electron, Docusaurus, MUI", 1 ],
    [ "LoFi (Local-First)", 1 ],
    [ "Storybook", 1 ],
    [ "Unleashed Design", 1 ],
    [ "Testing Library", 1 ],
    [ "expo", 1 ]
  ]
  ]
  
  
  */

import React from "react";

import { Layout } from "@components";

const data = {
  Age: [
    ["28–34", 36],
    ["23–27", 38],
    ["(no response)", 35],
    ["18–22", 21],
    ["45–59", 9],
    ["35–44", 21],
    ["Under 18", 10],
  ],
  Gender: [
    ["Male", 123],
    ["(no response)", 28],
    ["Non-binary or genderfluid", 5],
    ["Female", 13],
    ["Prefer not to say", 1],
  ],
  "Trans?": [
    ["No", 134],
    ["(no response)", 29],
    ["Yes", 4],
    ["Prefer not to say", 3],
  ],
  Disability: [
    ["No", 123],
    ["Yes", 15],
    ["(no response)", 28],
    ["Prefer not to say", 4],
  ],
  "Sexual identity": [
    ["Queer", 3],
    ["Heterosexual", 95],
    ["Prefer not to say", 16],
    ["(no response)", 30],
    ["Bisexual", 10],
    ["Asexual", 8],
    ["Homosexual", 2],
    ["Pansexual", 4],
    ["Other", 2],
  ],
  Region: [
    [
      "Americas",
      {
        total: 51,
        subregions: [
          ["Northern America", 43],
          ["South America", 4],
          ["Central America", 1],
          ["Caribbean", 1],
        ],
      },
    ],
    [
      "Europe",
      {
        total: 51,
        subregions: [
          ["Eastern Europe", 15],
          ["Western Europe", 20],
          ["Southern Europe", 2],
          ["Northern Europe", 12],
        ],
      },
    ],
    [
      "Asia",
      {
        total: 27,
        subregions: [
          ["Southern Asia", 15],
          ["South-eastern Asia", 8],
          ["Polynesia", 1],
          ["Eastern Asia", 1],
          ["Western Asia", 1],
        ],
      },
    ],
    [
      "Africa",
      {
        total: 7,
        subregions: [
          ["Western Africa", 4],
          ["Sourthern Africa", 2],
          ["Eastern Africa", 1],
        ],
      },
    ],
    [
      "Oceania",
      {
        total: 1,
        subregions: [],
      },
    ],
    ["(no response)", 33],
  ],
  Religion: [
    ["No religion", 72],
    ["(no response)", 28],
    ["Agnostic", 17],
    ["Catholocism", 8],
    ["Other", 4],
    ["Hinduism", 8],
    ["Buddhism", 1],
    ["Christianity", 17],
    ["Sikhism", 2],
    ["Islam", 9],
    ["Protestantism", 2],
    ["Judaism", 2],
  ],
  "Do you feel represented?": [
    ["Yes", 64],
    ["(no response)", 44],
    ["Somewhat", 44],
    ["No", 18],
  ],
  "Have you felt marginalized?": [
    ["No", 123],
    ["Yes", 3],
    ["(no response)", 43],
    ["Somewhat", 1],
  ],
  "Career stage": [
    ["Career", 124],
    ["(no response)", 3],
    ["Pre-career", 31],
    ["Hobbyist", 12],
  ],
  "Company size": [
    ["Just me", 26],
    ["101 to 1000", 21],
    ["(no response)", 3],
    ["🚫 Not Applicable", 20],
    ["More than 1000", 30],
    ["2 to 10", 22],
    ["51 to 100", 15],
    ["11 to 50", 33],
  ],
  "React experience": [
    ["More than 10 years", 5],
    ["3 to 5 years", 61],
    ["(no response)", 5],
    ["Less than one year", 35],
    ["1 to 2 years", 42],
    ["6 to 10 years", 22],
  ],
  "Professional experience": [
    ["11 to 20 years", 24],
    ["3 to 5 years", 42],
    ["(no response)", 5],
    ["Less than one year", 17],
    ["None", 19],
    ["6 to 10 years", 27],
    ["1 to 2 years", 30],
    ["More than 20 years", 6],
  ],
  "Visit frequency": [
    ["Daily", 34],
    ["Rarely — only when I need help", 63],
    ["Weekly", 45],
    ["Monthly", 20],
    ["Thanks for everything.", 1],
    ["(no response)", 7],
  ],
};

const title = "2023 Census Results";
export default function Census2023() {
  return (
    <Layout
      title={title}
      sidebar={false}
      as={undefined}
      description={undefined}
    >
      <h1>{title}</h1>
    </Layout>
  );
}
