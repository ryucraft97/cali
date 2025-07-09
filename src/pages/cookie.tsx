

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4 text-muted-foreground">
          This Cookie Policy explains how Bare Form uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What are cookies?</h2>
        <p className="mb-4 text-muted-foreground">
          Cookies are small text files stored on your device to help websites function properly and analyze usage.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why we use cookies</h2>
        <p className="mb-4 text-muted-foreground">
          We use cookies to ensure website functionality, enhance user experience, and collect analytical data to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Types of cookies we use</h2>
        <ul className="list-disc ml-6 text-muted-foreground">
          <li className="mb-2"><strong>Essential Cookies:</strong> Required for core website functionality.</li>
          <li className="mb-2"><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li className="mb-2"><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Managing cookies</h2>
        <p className="mb-4 text-muted-foreground">
          You can control and manage cookies through your browser settings. However, disabling cookies may affect site functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Changes to this policy</h2>
        <p className="mb-4 text-muted-foreground">
          We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-4 text-muted-foreground">
          If you have any questions about our use of cookies, please contact us at support@bareform.co
        </p>
      </main>
      <Footer />
    </>
  );
};

export default CookiePage;