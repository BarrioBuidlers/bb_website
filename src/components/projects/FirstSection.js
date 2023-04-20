import StyledButton from "../common/StyledButton";

export default function FirstSection() {
  return (
    <div className="text-9xl gap-5 flex flex-col justify-center items-center min-h-screen">
      <h1>PROJECTS:</h1>
      <div className="flex flex-col gap-2 text-6xl">
        <StyledButton
          onClick={() => console.log("Ciao")}
          label="-Hello World"
        />
        <StyledButton
          onClick={() => console.log("Ciao 2")}
          label="-Hello World 2"
        />
      </div>
    </div>
  );
}
