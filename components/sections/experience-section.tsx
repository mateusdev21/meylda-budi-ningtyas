import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { SectionTitle } from "@/components/typography/section-title";

import { FadeIn } from "@/components/motion/fade-in";

import { TimelineCard } from "@/components/ui/timeline-card";

import { experiences, type Experience } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-100 w-100 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="space-y-16">
          <FadeIn>
            <SectionTitle
              eyebrow="Work Experience"
              title="Professional Kitchen Experience in Fast-Paced Culinary Environments"
              description="
                Experienced in supporting kitchen operations, maintaining hygiene standards,
                assisting food preparation, and collaborating with culinary teams to deliver
                efficient and high-quality dining experiences.
              "
            />
          </FadeIn>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Timeline Line */}
            <div className=" absolute left-0 top-0 hidden h-full w-px bg-linear-to-b from-primary/0 via-primary/40 to-primary/0 lg:left-6 lg:block" />

            <div className="space-y-10 lg:pl-20">
              {experiences.map((experience: Experience) => (
                <TimelineCard
                  key={`${experience.company}-${experience.period}`}
                  company={experience.company}
                  role={experience.role}
                  period={experience.period}
                  description={experience.description}
                  responsibilities={experience.responsibilities}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
