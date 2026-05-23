import { ChefHat, UtensilsCrossed, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { Card } from "@/components/ui/card";

import { SectionTitle } from "@/components/typography/section-title";
import { Text } from "@/components/typography/text";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

const features = [
  {
    icon: ChefHat,
    title: "Kitchen Assistance",
    description:
      "Supporting chefs in food preparation and maintaining smooth kitchen operations.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Preparation",
    description:
      "Experienced in ingredient preparation, plating support, and maintaining consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Standards",
    description:
      "Committed to cleanliness, food safety, and professional kitchen hygiene.",
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="space-y-16">
          <FadeIn>
            <SectionTitle
              eyebrow="About Me"
              title="Dedicated Kitchen Support with Passion for Culinary Excellence"
              description="Experienced in assisting kitchen operations, preparing ingredients,
                            maintaining hygiene standards, and supporting chefs in delivering high-quality dining experiences."
            />
          </FadeIn>

          <div className=" grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-bold leading-snug">
                    Creating Better Dining Experiences Through Teamwork and
                    Precision
                  </h3>

                  <Text size="lg">
                    Passionate about supporting fast-paced kitchen environments
                    with discipline, adaptability, and attention to detail.
                  </Text>

                  <Text>
                    I believe great dining experiences are built not only by
                    chefs, but also by strong teamwork behind the kitchen. From
                    food preparation to maintaining cleanliness and
                    organization, every detail contributes to exceptional
                    service.
                  </Text>
                </div>

                {/* Mini Stats */}
                <div className=" grid  grid-cols-2  gap-4 pt-4">
                  <Card>
                    <h4 className="text-3xl font-bold text-primary">3+</h4>

                    <p className="mt-2 text-sm text-foreground/70">
                      Years Experience
                    </p>
                  </Card>

                  <Card>
                    <h4 className="text-3xl font-bold text-primary">Fast</h4>

                    <p className="mt-2 text-sm text-foreground/70">
                      Team Adaptation
                    </p>
                  </Card>
                </div>
              </div>
            </FadeIn>

            {/* Right Features */}
            <Stagger className="grid gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <FadeIn key={feature.title}>
                    <Card className="flex items-start gap-5 rounded-4xl p-8 hover:-translate-y-1">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">
                          {feature.title}
                        </h3>

                        <Text>{feature.description}</Text>
                      </div>
                    </Card>
                  </FadeIn>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
