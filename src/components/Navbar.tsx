import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center relative">
        <div className="absolute left-4 hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-60 h-20  rounded-lg flex items-center justify-center">
            <img src="/lovable-uploads/logogeo.png" alt="Bare Form Logo" className="w-10 h-10" />
            <span className="font-bold text-lg">
              BARE<span className="text-red-500">FORM</span>
            </span>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
