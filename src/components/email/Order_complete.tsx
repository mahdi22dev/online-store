import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
interface EmailTemplateProps {
  orderid: string;
}
export const EmailOrderCompletedTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ orderid }) => (
  <Html>
    <Tailwind>
      <Body className="mx-auto my-auto bg-white px-2 font-sans">
        <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
          <Section className="mt-[32px]">
            <Img
              src={`https://images.ctfassets.net/xp3ehvbs6dy6/538KBeTDIpu6PceSPdIlIr/4d3383f2d94afbd12cc3622eba5a68bd/nav-logo.png`}
              width="100"
              height="100"
              alt="Phonearmor"
              className="mx-auto my-0"
            />
          </Section>
          <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
            <strong>Thank your for your order</strong>
          </Heading>
          <Text>Your order : #{orderid}</Text>
          <Section className="bg-slate-100 px-10">
            <div className="flex items-center justify-between">
              <p className="text-2xl">Total :</p>
              <p>USA $150</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl">Shipping cost :</p>
              <p>free</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl">Purshased Items :</p>
              <p>4 products</p>
            </div>
          </Section>
          <Section className="mb-[32px] mt-[32px] text-center">
            <Button
              className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              href={"http://localhost:3000/orders"}
            >
              View Your Orders
            </Button>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
