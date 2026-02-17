import Navbar from "../../components/Navbar";
import CreateCommunityForm from "../../components/CreateCommunityForm";
import Feed from "../../components/Feed";
import { getAllCommunities } from "../../actions/community";

export default async function Home() {
  const communities = await getAllCommunities();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Communautés populaires</h2>
            <Feed communities={communities} />
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Créer un groupe</h3>
              <p className="text-sm text-slate-500 mb-6">Partagez vos centres d'intérêt avec le monde.</p>
              <CreateCommunityForm />
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}