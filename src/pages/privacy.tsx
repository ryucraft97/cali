import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">
          Your privacy is important to us. This privacy policy explains how Bare Form collects, uses, and protects your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <p className="mb-4 text-muted-foreground">
          We collect information that you provide when purchasing our products, including your name, email address, and billing information. We may also collect data on how you interact with our website using analytics tools.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
        <p className="mb-4 text-muted-foreground">
          We use your information to deliver digital products, provide customer support, and improve our website experience. We do not sell or share your data with third parties except as necessary to fulfill orders or comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Data Protection</h2>
        <p className="mb-4 text-muted-foreground">
          Your data is securely stored and protected using encryption and best practices. Access is limited to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Your Rights</h2>
        <p className="mb-4 text-muted-foreground">
          You may request access to, correction of, or deletion of your personal information at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-4 text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us at support@bareform.co
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
