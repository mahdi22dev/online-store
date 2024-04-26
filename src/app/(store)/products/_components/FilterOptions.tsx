import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export function FilterOptions() {
  return (
    <Accordion type="single" collapsible className="w-full px-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>Style</AccordionTrigger>
        <AccordionContent>
          <div className="mb-2 ml-3 flex items-center justify-start gap-3">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Patterns
            </label>
          </div>
          <div className="mb-2 ml-3 flex items-center justify-start gap-3">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Florals
            </label>
          </div>
          <div className="mb-2 ml-3 flex items-center justify-start gap-3">
            <Checkbox id="terms3" />
            <label
              htmlFor="terms3"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Christmas
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Collections</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
