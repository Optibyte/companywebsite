"use client";

import { useEffect } from "react";
import EnergyPage from "../page";

export default function ManagementSolutionsPage() {
  useEffect(() => {
    // Small delay to ensure the DOM is ready
    setTimeout(() => {
      const el = document.getElementById("iso50001");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return <EnergyPage />;
}
