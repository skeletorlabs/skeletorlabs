import CvPage from "@/app/components/cv/CvPage";
import { cvMetadata } from "@/app/lib/cv/metadata";

// Refresh GitHub project data every hour.
export const revalidate = 3600;

export const metadata = cvMetadata("en");

export default function Home() {
  return <CvPage locale="en" />;
}
