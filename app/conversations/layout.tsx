import getConversation from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import SideBar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();
  const users = await getUsers();
  return (
    // @ts-expect-errors Server Component
    <SideBar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
