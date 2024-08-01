"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Social } from "./Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md ">
      <CardHeader>
        <Header label={headerLabel} />
        <CardContent>{children}</CardContent>
      </CardHeader>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Footer label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
