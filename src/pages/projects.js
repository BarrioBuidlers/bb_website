import FirstSection from "@/components/projects/FirstSection";
import SingleProject from "@/components/projects/SingleProject";

export default function CurrentProjects() {
  return (
    <>
      <FirstSection />
      <SingleProject id="firstAddress" />
      <SingleProject id="secondAddress" />
    </>
  );
}
