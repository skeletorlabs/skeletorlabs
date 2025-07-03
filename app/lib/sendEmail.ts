export type MessageData = {
  email: string;
  title: string;
  message: string;
};

export async function sendEmail(data: MessageData): Promise<boolean> {
  try {
    const response = await fetch("/api/resend", {
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

    return true;
  } catch (error) {
    console.error("Error uploading testimonial:", error);
    return false;
  }
}
