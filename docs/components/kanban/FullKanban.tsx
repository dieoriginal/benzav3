import { useRef } from "react";
import { KanbanBoard } from "./components/KanbanBoard";

export function FullKanban() {
  const kanbanRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={kanbanRef}>
      <KanbanBoard />
    </div>
  );
}
