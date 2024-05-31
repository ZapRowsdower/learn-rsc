import ToggleDialog from "./components/ToggleDialog";

// npm run dev > dev.log 2>&1 &

export default function Home() {
  return (
    <main className="m-5 flex justify-center items-center flex-col">
      <h1 className="text-3xl">Hello world</h1>
      <p className="m-5">
        Lorem asdf dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      </p>
      <ToggleDialog/>
    </main>
  );
}
