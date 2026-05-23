import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { SectionTitle } from "@/components/typography/section-title";

import { SkillCard } from "@/components/ui/skill-card";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

import { skills } from "@/data/skills";

export function SkillsSection() {
    return (
        <Section
            id="skills"
            className="relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <Container>
                <div className="space-y-16">
                    <FadeIn>
                        <SectionTitle
                            eyebrow="Skills & Expertise"
                            title="Supporting Culinary Operations with Discipline and Precision"
                            description="Experienced in assisting kitchen workflows, maintaining hygiene standards,
                            preparing ingredients, and supporting fast-paced culinary environments with consistency and teamwork."
                        />
                    </FadeIn>

                    <Stagger
                        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {skills.map((skill) => (
                            <FadeIn key={skill.title}>
                                <SkillCard
                                    icon={skill.icon}
                                    title={skill.title}
                                    description={skill.description}
                                />
                            </FadeIn>
                        ))}
                    </Stagger>
                </div>
            </Container>
        </Section>
    );
}