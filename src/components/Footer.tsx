import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <div className="w-100 h-20  rounded-lg flex items-center justify-center">
            <img src="/lovable-uploads/logogeo.png" alt="Bare Form Logo" className="w-10 h-10" />
            <span className="font-bold text-lg">
              BARE<span className="text-red-500">FORM</span>
            </span>

          </div>
            <p className="text-muted-foreground text-sm">
              Transform your body with proven bodyweight workouts. No gym required.
            </p>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/tos" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 FitHome. All rights reserved.</p>
          <p>Made with ❤️ for your fitness journey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
