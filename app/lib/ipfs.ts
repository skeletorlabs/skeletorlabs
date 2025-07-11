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
  chainId?: number;
};

export async function uploadTestimonialToIPFS(
  chainId: number,
  data: TestimonialData
): Promise<string> {
  try {
    const response = await fetch("/api/pinata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, chainId: chainId }),
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
    const ipfsTestimonials: TestimonialData[] = await Promise.all(
      storedTestimonials
        .filter((item) => item.hash !== invalidHash)
        .map(async (testimonial) => {
          const res = await fetch(
            `${CLOUD_URL}/ipfs/${bytes32ToIpfsHash(testimonial.hash)}`
          );
          return res.json();
        })
    );

    const testimonials: TestimonialData[] = [];
    for (let index = 0; index < ipfsTestimonials.length; index++) {
      testimonials.push({
        ...ipfsTestimonials[index],
        id: storedTestimonials[index].id,
        address: storedTestimonials[index].author,
        likes: storedTestimonials[index].likes,
        active: storedTestimonials[index].active,
        chainId: storedTestimonials[index].chainId,
      });
    }

    return testimonials;
  } catch (error) {
    console.error("Error reading testimonials:", error);
    throw error;
  }
}
