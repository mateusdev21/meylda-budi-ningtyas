import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { SectionTitle } from "@/components/typography/section-title";

import { FadeIn } from "@/components/motion/fade-in";

import { GalleryCard } from "@/components/ui/gallery-card";

import { galleryItems, type GalleryItem } from "@/data/gallery";

export function GallerySection() {
  return (
    <Section id="gallery" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-125 w-125 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="space-y-16">
          <FadeIn>
            <SectionTitle
              eyebrow="Food Gallery"
              title="Signature Dishes and Culinary Presentations"
              description="A collection of dishes and culinary presentations showcasing food preparation, plating aesthetics, and passion for creating memorable dining experiences."
            />
          </FadeIn>

          {/* Masonry Grid */}
          <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
            {galleryItems.map((item: GalleryItem) => (
              <div key={item.title} className="break-inside-avoid">
                <GalleryCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
