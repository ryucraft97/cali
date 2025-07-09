

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4 text-muted-foreground">
          By accessing or using the Bare Form website, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Use of Website</h2>
        <p className="mb-4 text-muted-foreground">
          You may use this site for lawful purposes only. You agree not to use the site in a way that could harm, disable, or impair the functionality or security of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Intellectual Property</h2>
        <p className="mb-4 text-muted-foreground">
          All content on this website, including text, graphics, logos, and digital downloads, is the property of Bare Form and protected by applicable copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Purchases</h2>
        <p className="mb-4 text-muted-foreground">
          All digital product sales are final. Once purchased, you receive instant access and no refunds will be issued unless otherwise stated.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4 text-muted-foreground">
          Bare Form is not liable for any direct or indirect damages resulting from the use of this site or products purchased. Use at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Changes to Terms</h2>
        <p className="mb-4 text-muted-foreground">
          We reserve the right to update these terms at any time. Updates will be posted on this page and become effective immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contact</h2>
        <p className="mb-4 text-muted-foreground">
          For any questions about these Terms, contact us at support@bareform.co
        </p>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;