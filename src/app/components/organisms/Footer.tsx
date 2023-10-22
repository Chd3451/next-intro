import { FooterContent } from "../molecules/FooterContent";

export function Footer() {
  const footerLinks = ['Github', 'YouTube', 'Twitch'];
  
  return (
    <footer className="flex flex-center justify-center w-full py-12 mt-8 border-t-2 border-t-black">
      <FooterContent footerLinks={footerLinks} />
    </footer>
  );
}
