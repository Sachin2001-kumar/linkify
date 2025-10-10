import { cn } from "@/lib/utils";

interface props {
  children: React.ReactNode;
  className?: string;
}

const MaxwidthWrapper = ({ children, className }: props) => {
  <section
    className={cn(
      "h-full mx-auto w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20",
      className
    )}
  >
    {children}
  </section>;
};

export default MaxwidthWrapper;
