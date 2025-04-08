import { useRouter } from "next/router";

export default function Submitted() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary-light to-primary-medium text-white">
        {/* Cool Animated Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7 12a5 5 0 0110 0v7H7v-7z"
            />
          </svg>
        </div>

        {/* Cool Thank-You Message */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Thank You for Applying!
        </h1>
        <p className="text-lg text-center max-w-lg mb-6  px-4">
          Thank you for submitting your application. We're excited about your
          interest in joining our team. We will carefully review your details
          and get back to you soon!
        </p>

        {/* A Call-to-Action */}
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-white text-primary-medium font-semibold rounded shadow hover:bg-gray-200 transition duration-300">
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
}
