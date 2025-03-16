export const dynamic = "force-dynamic";

import AllMessageManagement from "@/components/modules/messages";
import Container from "@/components/shared/Container";

const AllMessagesPage = () => {
  return (
    <Container>
      <AllMessageManagement />
    </Container>
  );
};

export default AllMessagesPage;
