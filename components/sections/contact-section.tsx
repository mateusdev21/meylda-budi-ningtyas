import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { SectionTitle } from "@/components/typography/section-title";
import { Text } from "@/components/typography/text";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";

export function ContactSection() {
  return (
    <Section id="contact" className=" relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="space-y-16">
          <FadeIn>
            <SectionTitle
              eyebrow="Contact"
              title="Let’s Create Exceptional Dining Experiences Together"
              description="
                  Open to new culinary opportunities, kitchen collaborations,
                  and hospitality experiences. Feel free to reach out for
                  professional inquiries or future opportunities.
                "
            />
          </FadeIn>

          {/* Main CTA Card */}
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-card/60 p-10 backdrop-blur-xl md:p-16">
              {/* Glow */}
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative mx-auto max-w-3xl space-y-8 text-center">
                <h3 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                  Passionate About Supporting Professional Culinary Environments
                </h3>

                <Text size="lg" className="text-foreground/70">
                  Dedicated to teamwork, food preparation, kitchen organization,
                  and maintaining high hospitality standards in every service.
                </Text>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="mailto:your@email.com">Send Email</Button>
                  <Button href="https://instagram.com" variant="outline">
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Grid */}
          <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FadeIn>
              <ContactCard
                icon="mail"
                title="Email"
                value="imeldatyasbudi20@gmail.com"
                href="mailto:imeldatyasbudi20@gmail.com"
              />
            </FadeIn>

            <FadeIn>
              <ContactCard
                icon="phone"
                title="Phone"
                value="+62 812 3456 7890"
                href="tel:+6281234567890"
              />
            </FadeIn>

            <FadeIn>
              <ContactCard
                icon="instagram"
                title="Instagram"
                value="@yourusername"
                href="https://instagram.com"
              />
            </FadeIn>

            <FadeIn>
              <ContactCard
                icon="map"
                title="Location"
                value="Yogyakarta, Indonesia"
                href="#"
              />
            </FadeIn>
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
