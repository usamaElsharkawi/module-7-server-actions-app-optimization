import Image from "next/image";
import { addMovie } from "@/actions/action";

export default function Home() {
  return (
    <form action={addMovie}>
      <input type="text" name="name" />
      <button type="submit">add movie</button>
    </form>
  );
}
