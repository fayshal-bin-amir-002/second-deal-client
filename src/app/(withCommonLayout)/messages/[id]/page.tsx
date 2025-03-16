import ConversationManagement from "@/components/modules/messages/conversation";
import Container from "@/components/shared/Container";

const MessageConversationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Container>
      <div className="py-6 md:py-8 lg:py-10min-h-[calc(100vh-72px-250px)] bg-gray-50/75">
        <ConversationManagement id={id} />
      </div>
    </Container>
  );
};

export default MessageConversationPage;
