import { GraduationCap, ChefHat, UtensilsCrossed } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { SectionTitle } from "@/components/typography/section-title";
import { Text } from "@/components/typography/text";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-0
          top-0
          h-125
          w-125
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <Container>
        <div className="space-y-16">
          {/* Section Title */}
          <FadeIn>
            <SectionTitle
              eyebrow="About Me"
              title="Dedicated to Supporting Professional Culinary Operations"
              description="
                Passionate about hospitality, teamwork, food preparation,
                and maintaining efficient kitchen environments in fast-paced
                culinary operations.
              "
            />
          </FadeIn>

          {/* Main Content */}
          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
            "
          >
            {/* Left Content */}
            <FadeIn>
              <Card
                className="
                  h-full
                  rounded-4xl
                  border-border/60
                  bg-card/70
                  p-10
                  backdrop-blur-xl
                "
              >
                <div className="space-y-8">
                  {/* Intro */}
                  <div className="space-y-5">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                      "
                    >
                      <ChefHat className="h-8 w-8 text-primary" />
                    </div>

                    <div className="space-y-4">
                      <h3
                        className="
                          text-3xl
                          font-bold
                          tracking-tight
                        "
                      >
                        Culinary Passion & Hospitality Mindset
                      </h3>

                      <Text size="lg">
                        Experienced in supporting kitchen operations through
                        food preparation, kitchen organization, hygiene
                        standards, and teamwork in professional culinary
                        environments.
                      </Text>

                      <Text size="lg">
                        Strongly committed to maintaining efficiency,
                        cleanliness, and consistency while helping culinary
                        teams deliver high-quality dining experiences.
                      </Text>
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div
                    className="
                      grid
                      gap-5
                      sm:grid-cols-2
                    "
                  >
                    <div
                      className="
                        rounded-2xl
                        border
                        border-border/60
                        bg-background/50
                        p-6
                      "
                    >
                      <h4
                        className="
                          text-3xl
                          font-bold
                        "
                      >
                        3+
                      </h4>

                      <p className="mt-2 text-foreground/60">
                        Years Kitchen Experience
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-border/60
                        bg-background/50
                        p-6
                      "
                    >
                      <h4
                        className="
                          text-3xl
                          font-bold
                        "
                      >
                        50+
                      </h4>

                      <p className="mt-2 text-foreground/60">
                        Culinary Dishes Prepared
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Right Content */}
            <Stagger className="space-y-6">
              {/* Education Card */}
              <FadeIn>
                <Card
                  className="
                    rounded-4xl
                    border-border/60
                    bg-card/70
                    p-8
                    backdrop-blur-xl
                  "
                >
                  <div className="space-y-6">
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-primary/10
                        "
                      >
                        <GraduationCap className="h-7 w-7 text-primary" />
                      </div>

                      <div>
                        <p
                          className="
                            text-sm
                            font-medium
                            tracking-[0.2em]
                            text-primary
                            uppercase
                          "
                        >
                          Education
                        </p>

                        <h3
                          className="
                            text-2xl
                            font-bold
                          "
                        >
                          Universitas Bunda Mulia
                        </h3>
                      </div>
                    </div>

                    <div
                      className="
                        relative
                        border-l
                        border-primary/20
                        pl-6
                      "
                    >
                      <div
                        className="
                          absolute
                          -left-2.25
                          top-1
                          h-4
                          w-4
                          rounded-full
                          bg-primary
                        "
                      />

                      <div className="space-y-2">
                        <p
                          className="
                            text-sm
                            font-medium
                            tracking-[0.2em]
                            text-primary
                            uppercase
                          "
                        >
                          2018 — 2021
                        </p>

                        <h4
                          className="
                            text-xl
                            font-semibold
                          "
                        >
                          Bachelor of Hospitality & Tourism
                        </h4>

                        <Text>
                          Focused on hospitality, teamwork, discipline, and
                          operational readiness in professional working
                          environments.
                        </Text>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>

              {/* Personal Values */}
              <FadeIn delay={0.1}>
                <Card
                  className="
                    rounded-4xl
                    border-border/60
                    bg-card/70
                    p-8
                    backdrop-blur-xl
                  "
                >
                  <div className="space-y-6">
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-primary/10
                        "
                      >
                        <UtensilsCrossed className="h-7 w-7 text-primary" />
                      </div>

                      <div>
                        <p
                          className="
                            text-sm
                            font-medium
                            tracking-[0.2em]
                            text-primary
                            uppercase
                          "
                        >
                          Core Values
                        </p>

                        <h3
                          className="
                            text-2xl
                            font-bold
                          "
                        >
                          Professional Work Principles
                        </h3>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        "Teamwork & Collaboration",
                        "Kitchen Hygiene Standards",
                        "Discipline & Consistency",
                        "Fast & Efficient Workflow",
                        "Positive Hospitality Attitude",
                      ].map((value) => (
                        <div
                          key={value}
                          className="
                            rounded-2xl
                            border
                            border-border/60
                            bg-background/50
                            px-5
                            py-4
                          "
                        >
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
