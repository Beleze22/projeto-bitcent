import { Icon24Hours } from "@tabler/icons-react";

export default function Index() {
  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-black text-white
    text-6xl
    `}
    >
      <Icon24Hours size={100} strokeWidth={0.5} />
      <span>Pagina!!</span>
    </div>
  );
}
