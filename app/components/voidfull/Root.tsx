import { clsx } from "clsx";

import { Checklist } from "./Checklist";
import { ReferenceLinks } from "./ReferenceLinks";

export function Root() {
  return (
    <div className={clsx("border border-gray-300 rounded-lg my-8 max-w-6xl mx-auto", "bg-gray-50")}>
      <div className={clsx("px-4 pt-2", "text-xs text-gray-500 text-right")}>
        This is welcome guide from Voidfull.
      </div>

      <div
        className={clsx(
          "grid md:grid-cols-2 md:gap-x-12",
          "divide-x divide-gray-300",
          "p-8",
        )}
      >
        <Checklist />
        <ReferenceLinks />
      </div>
    </div>
  );
}