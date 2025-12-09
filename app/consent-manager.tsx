"use client";

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from "@c15t/nextjs";
import { ClientSideOptionsProvider } from "@c15t/nextjs/client";
import { showConsentBanner } from "lib/handlers";
import { type ReactNode } from "react";
export default function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "custom",
        consentCategories: [
          "necessary",
          "functionality",
          "marketing",
          "measurement",
        ],

        // Passing callbacks causes a rerender
        // @ts-expect-error endpointHandlers type is not yet exposed by the package
        // endpointHandlers: {
        //   showConsentBanner: () => showConsentBanner(true),
        // },
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      {/* Passing scripts (or any prop) also cause a rerender */}
      {/* <ClientSideOptionsProvider scripts={scripts}>{children}</ClientSideOptionsProvider> */}
      <ClientSideOptionsProvider>{children}</ClientSideOptionsProvider>
    </ConsentManagerProvider>
  );
}
