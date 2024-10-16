import React from "react";
import MarketingCard from "./MarketingCard";


function MarketingArticles() {
  return (
    <div className="p-8 flex flex-col py-24">
      <div className="flex justify-between py-4">
        <h1 className="text-start px-6 font-bold text-3xl">Marketing Articles</h1>
        <button className="darkText">See all</button>
      </div>
      <div className="w-full p-4 flex flex-row gap-12">
        <MarketingCard img={"https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VklbcHnUfieAYs79t1ZtpA8eYkrH7UE-euDBWaXOm2SFF1koyi5bwEAxWL7UzvBlWFDvSo5F59mgw5kMtaCpv4cy35R3Wz3NFMyFHZO4jbLY1fhxurOiApCfQb~rRmBX-7ku39hIU0Bja2m66bEYOofbZOHyc74OJgGnHbUatVVPuQur1KOn7aad76j8ijHqHmKS~wHo2zz1biZ9c7Q2Bo0ul8t5sqF5~YAY8gMk8KgwJSkjMJa84wY9qmA8EcdVoFq~OEenYh71a3FLhChagb57z7mHsacR5TFvv5vFUP76v~2pnYwZRX9WMKDILSV~RfyhsO1ygd8Hp~2o6gbrMA__"}/>
        <MarketingCard img={"https://s3-alpha-sig.figma.com/img/9150/3c25/c25d4396ab15991e79418fb801fd5efa?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PkEhN4hr7uECAmXrosBfEEZAO6hdpiqsdt3mY24TWGZPcVuGer8nZ26fcVcsfpiTR5d59Qtt0xClvSKSiH9WMnQtlN0aVNXRLPCmZCe1jWgOQvg9nz6PDTrS4Q1RpiyFMMhAlhHiNpTr10iy-r7oYVPXiVBhuAKeG4nIi5DpLWEcv0TmyYq-Uwm4Mp8IfvOtxscFRmTNPcSjO7j7r1kghEQbtCMWetn0Ey2JCi1K0qBAuboyXcqcZOvtKCp3EM~hVGQ-a-kNNtuWTrig06emJS4-J1XIP7S0WhFVlPlSYkXYPfhqLGNIpmBXPMJEgDfLCCyYD7OpxHc-gz5ZU8mOiw__"}/>
        <MarketingCard img={"https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0g7H3sqOTRJvdC-61Y7dhV2q8LsIc5rWccB~6adUv5-wjQpjlzwRyIkEcbTQiX57N6LL3a3RabyGIv62wvZ7bVfsIwSKQFdfUJUQB4mXogwe7YfwBx8PaHM66rcdw0GqORNHe64LXOhSDkvSgOXXMDhrCk-gOeSsknc7P7Ic1FLrkaTcu9PfxXOxPLi-VrSkqgAylLmItprqfnYBI9K1Y-dsqbQQCT8YCwn506k7K9X~j8-iDv49uCaHwJyptC3jkYdzaq8PLx0iYpgQjAqSVY59D8CeZCowqhiEwf7H6qYN8x1dePSaxAfpSuC-wVKsU55FrpmRv17t15UE9MErw__"}/>
        <MarketingCard img={"https://s3-alpha-sig.figma.com/img/a6a7/5cf5/ca47b6a4fceb75f355da0105034713c7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdkVSpaAzTyw5uhCJ2bmdVjP8Dzi2e33HZmEXn9izVJTx4NtvTEVUA2aUB1VHIGzUmMYLEgxod1Dg6lOz4UGKrDAE9SFz4SZvYYaNH1lOqz~-vLnyIZ~5IMLTMQQ0jUwm2rEjFDESiEuC7MXV6uToOPfijRABHGuV4urrsAGAffqyIg9yRd4COS7xLiI6YlmcEwvo7YETVvqGWa5IzyI4Zih9ewvbMDVfX1V4EzluW~PRJIAdwYtxg5ZbhocA8yUJd5qKwe4Z5V6LZQID6CLQInUHQ1xcnjyICYwANgNhaT0IGNsJ6fqEcUb16Zvk8T4jDge57LQzinX-aSStV1GPw__"}/>       
      </div>
    </div>
  );
}

export default MarketingArticles;
