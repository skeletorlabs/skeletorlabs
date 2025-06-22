export type TestimonialData = {
  address: string;
  name: string;
  role: string;
  message: string;
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

export async function readTestimonialsFromIPFS(
  cids: string[]
): Promise<TestimonialData[]> {
  try {
    const CLOUD_URL = process.env.NEXT_PUBLIC_PINATA_CLOUD;
    const testimonials: TestimonialData[] = await Promise.all(
      cids.map(async (cid) => {
        const res = await fetch(`${CLOUD_URL}/ipfs/${cid}`);
        return res.json();
      })
    );

    return testimonials;
  } catch (error) {
    console.error("Error reading testimonials:", error);
    throw error;
  }
}
