'use client'
import ProgressBar from "./ProgressBar";

export default function Home() {
  const bars=[5,10,30,40,50,60,70,80,90,95]
  return (
    <div className="app">
      <h1 className="flex justify-center mt-10">Progress Bar</h1>

      {bars.map(value=> <ProgressBar key={value} progress={value} />)}

    </div>
  );
}
