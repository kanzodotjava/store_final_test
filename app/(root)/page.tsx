
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="m-10">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center items-center">
              <Image src="/banner.png" alt="banner" width={1080} height={720} />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
              <Image src="/logo.png" alt="banner" width={1080} height={720} />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
              <Image src="/banner.png" alt="banner" width={1080} height={720} />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      </div>
      <div className="m-10 border-t-2 border-gray-300">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why choose SuperPads?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What's the best mousepad for me?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does it take to be shipped?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can i contact customer support?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>


    </>
  );
}

export const dynamic = "force-dynamic";

