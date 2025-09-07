import "./global.css";

export const metadata = {
  title: "F1 RAG",
  description:
    "F1 RAG is a Retrieval-Augmented Generation (RAG) application that provides accurate and up-to-date information about Formula 1 racing. It leverages advanced AI techniques to retrieve relevant data and generate informative responses to user queries.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
