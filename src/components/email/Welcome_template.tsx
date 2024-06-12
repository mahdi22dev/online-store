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
  fullName: string;
  email: string;
}
export const EmailWelcomeTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
}) => (
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
            <strong>Welcome to Phonearmror</strong>, {fullName}!
          </Heading>
          <Section className="mb-[32px] mt-[32px] text-center">
            <Button
              className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              href={"http://localhost:3000/home"}
            >
              Start Shopping today
            </Button>
          </Section>
          <Section className="mb-[32px] mt-[32px] text-center">
            <Text className="text-[14px] leading-[24px] text-black">
              This email sent to you because you registred new account at{" "}
              <Link href="http://localhost:3000/home">phonearmor</Link>;
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
