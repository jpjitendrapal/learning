import { PageContextProvider } from "./context";
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";

const ContextPOC = () => {
  return (
    <PageContextProvider>
      <File1 />
      <File2 />
      <File3 />
    </PageContextProvider>
  );
};
