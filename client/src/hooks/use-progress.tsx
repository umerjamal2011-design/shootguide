import { useState, useEffect } from "react";

export interface ProgressData {
  completedItems: Set<string>;
  totalItems: number;
  percentage: number;
}

export function useProgress() {
  const [completedItems, setCompletedItems] = useState<Set<string>>(
    () => {
      const saved = localStorage.getItem("car-photoshoot-progress");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
  );

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      "car-photoshoot-progress",
      JSON.stringify(Array.from(completedItems))
    );
  }, [completedItems]);

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isCompleted = (itemId: string) => completedItems.has(itemId);

  const resetProgress = () => {
    setCompletedItems(new Set());
    localStorage.removeItem("car-photoshoot-progress");
  };

  const percentage = totalItems > 0 ? Math.round((completedItems.size / totalItems) * 100) : 0;

  const registerTotalItems = (count: number) => {
    setTotalItems(count);
  };

  return {
    completedItems,
    totalItems,
    percentage,
    toggleItem,
    isCompleted,
    resetProgress,
    registerTotalItems,
  };
}
