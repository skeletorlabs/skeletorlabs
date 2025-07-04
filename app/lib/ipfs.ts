import { StoredTestimonial } from "../contracts/testimonialRegistry";
import { bytes32ToIpfsHash } from "../utils/bytes32Conversor";

export type TestimonialData = {
  name: string;
  role: string;
  message: string;
  id?: number;
  address?: string;
  likes?: number;
  active?: boolean;
};

export async function uploadTestimonialToIPFS(
  data: TestimonialData
): Promise<string> {
  try {
    const response = await fetch("/api/pinata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`
      );
    }

    const result = await response.json();
    return result.cid;
  } catch (error) {
    console.error("Error uploading testimonial:", error);
    throw error;
  }
}

async function getCloudUrl() {
  const res = await fetch("/api/internal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data.pinataCloud;
}

export async function readTestimonialsFromIPFS(
  storedTestimonials: StoredTestimonial[]
): Promise<TestimonialData[]> {
  const invalidHash =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  try {
    const CLOUD_URL = await getCloudUrl();
    const testimonials: TestimonialData[] = await Promise.all(
      storedTestimonials
        .filter((item) => item.hash !== invalidHash)
        .map(async (testimonial) => {
          const res = await fetch(
            `${CLOUD_URL}/ipfs/${bytes32ToIpfsHash(testimonial.hash)}`
          );
          return res.json();
        })
    );

    for (let index = 0; index < testimonials.length; index++) {
      testimonials[index].id = storedTestimonials[index].id;
      testimonials[index].address = storedTestimonials[index].author;
      testimonials[index].likes = storedTestimonials[index].likes;
      testimonials[index].active = storedTestimonials[index].active;
    }

    return testimonials;
  } catch (error) {
    console.error("Error reading testimonials:", error);
    throw error;
  }
}
