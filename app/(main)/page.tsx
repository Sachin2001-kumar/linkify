import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";

export default function MainPage() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <MaxwidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer>
            <div>Hello World</div>
          </AnimationContainer>
        </div>
      </MaxwidthWrapper>
    </div>
  );
}
