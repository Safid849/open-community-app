import Navbar from "../components/Navbar";
import CreateCommunityForm from "../components/CreateCommunityForm";
import Feed from "../components/Feed";
import { getAllCommunities } from "../actions/community";
import { syncUser } from "../actions/user";

export default async function Home() {
  await syncUser();
  
  const communities = await getAllCommunities();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Communautés</h2>
            <Feed communities={communities} />
          </div>

          <aside>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Lancer un groupe</h3>
              <CreateCommunityForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}