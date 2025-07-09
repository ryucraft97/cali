
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Download, Star, Shield, Clock, Target, Users, ArrowRight, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Check your email for the free 1-week sample guide.",
      });
      setEmailPopupOpen(false);
      setEmail("");
    }
  };

  const handleDownload = () => {
    toast({
      title: "Redirecting to checkout...",
      description: "You'll be redirected to secure payment in a moment.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  No Gym Required
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Transform Your Body{" "}
                  <span className="text-primary">Without a Gym</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build muscle, burn fat, and get stronger with proven bodyweight workouts you can do anywhere in just 25 minutes a day.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://sugardelete.myshopify.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpaUjczUzRWTjhNMjFWWlhYR1lKWFE1Vw"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center pulse-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-md"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Now - $27
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  7-Day Money Back Guarantee
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4 text-primary" />
                  Instant Download
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="float">
                <img 
                  src="/lovable-uploads/9127be74-163e-4cfc-8dda-f393d1b9c3e9.png" 
                  alt="The No-Gym Calisthenics Starter Guide"
                  className="max-w-md w-full h-auto shadow-2xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-xl text-muted-foreground">Everything you need to start your transformation today</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "4-Week Workout Plan",
                description: "Progressive bodyweight exercises designed to build strength and muscle"
              },
              {
                icon: Clock,
                title: "25-Minute Routines",
                description: "Time-efficient workouts perfect for busy schedules"
              },
              {
                icon: Users,
                title: "Nutrition Basics",
                description: "Simple nutrition guidelines for strength and fat loss"
              },
              {
                icon: CheckCircle,
                title: "Progress Tracking",
                description: "Bonus PDF worksheet to monitor your transformation"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <feature.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Why Calisthenics Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Compound Movements</h3>
              <p className="text-muted-foreground">Work multiple muscle groups simultaneously for maximum efficiency and functional strength.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">No Equipment Needed</h3>
              <p className="text-muted-foreground">Use your bodyweight to build lean muscle and burn fat anywhere, anytime.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Progressive System</h3>
              <p className="text-muted-foreground">Scientifically designed progressions that adapt to your growing strength.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4" id="testimonials">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground">4.9/5 from 500+ users</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                content: "Lost 15 lbs and gained so much strength in just 4 weeks. The workouts fit perfectly into my busy schedule!"
              },
              {
                name: "Mike Chen",
                role: "Software Developer",
                content: "Finally found a workout routine I can stick to. No more gym excuses - I can do these anywhere!"
              },
              {
                name: "Jessica Rodriguez",
                role: "Working Mom",
                content: "The 25-minute routines are perfect. I can squeeze them in before the kids wake up. Feeling stronger than ever!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20" id="faq">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                Is this suitable for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! The guide includes beginner-friendly progressions and modifications for every exercise. You'll start where you're comfortable and build up gradually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                How much space do I need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You only need enough space to lie down with your arms extended - about 6x3 feet. Perfect for apartments, hotel rooms, or any small space.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                Do I need any equipment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No equipment required! All exercises use just your bodyweight. Optional equipment suggestions are included for those who want to progress further.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most people notice increased strength and energy within the first week. Visible muscle definition and fat loss typically appear within 2-3 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                What if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 7-day money-back guarantee. If you're not completely satisfied, simply email us for a full refund.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card p-6 md:p-12 rounded-2xl border border-primary/20">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">7-Day Money-Back Guarantee</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Try the complete system risk-free. If you're not completely satisfied with your results, 
              we'll refund every penny within 7 days. No questions asked.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://sugardelete.myshopify.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpaUjczUzRWTjhNMjFWWlhYR1lKWFE1Vw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center pulse-glow text-base md:text-lg px-8 md:px-12 py-4 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-md w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Get Started Today - $27
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Email Popup */}
      <Dialog open={emailPopupOpen} onOpenChange={setEmailPopupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get Your Free Sample</DialogTitle>
            <DialogDescription>
              Enter your email to receive a free 1-week sample of the workout plan.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-base py-3"
            />
            <Button type="submit" className="w-full py-3" size="lg">
              <ArrowRight className="mr-2 h-4 w-4" />
              Send My Free Sample
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
