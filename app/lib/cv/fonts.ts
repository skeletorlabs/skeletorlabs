import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";

/** Same display face as the Skeletor Labs page. */
export const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const mono = Fira_Code({ subsets: ["latin"], weight: ["400", "500"] });
