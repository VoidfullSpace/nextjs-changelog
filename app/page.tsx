import { PostItem } from "./components/PostItem";
import { Header } from "./components/Header";

const updates = [
  {
    title: "A new home for all your meetings",
    description: [
      "Too often, notes get scattered (or forgotten).",
      <>
        The new Meetings tab in your sidebar organizes notes from every meeting
        you’ve run or joined.
        <br />
        It syncs with your calendar so you can easily prep notes, join calls and
        use AI Meeting Notes
        <br />
        to transcribe every detail.
      </>,
      <>
        Just type <span className="font-semibold text-gray-600">/meet</span> on
        any page and click start to kick off a meeting note.
      </>,
    ],
    img: "https://images.unsplash.com/photo-1769263077636-0681e8f2e363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    date: "January 4, 2026",
    tags: [
      { label: "New", color: "bg-blue-400" },
      { label: "Enhancement", color: "bg-purple-500" },
      { label: "Feature", color: "bg-green-500" },
      { label: "Design", color: "bg-yellow-400" },
    ],
  },
  {
    title: "Create and manage tasks right in Calendar",
    description: [
      "Manage your work tasks, milestones, even personal goals, alongside your schedule.",
      <>
        Connect any database with dates to Calendar, then create, schedule, and
        complete tasks in
        <br />
        the same place you plan your time.
      </>,
      "Here's a quick guide to get started. Try it out now!",
    ],
    img: "https://images.unsplash.com/photo-1768517296837-2457934c92fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
    date: "December 29, 2025",
    tags: [
      { label: "Enhancement", color: "bg-purple-500" },
      { label: "Feature", color: "bg-green-500" },
    ],
  },
];

export default function Home() {
  return (
    <>
    <Header />

    <main className="mt-12 max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-2 text-gray-700">
        Product Updates
      </h2>
      <p className="text-gray-500 mb-16">
        Stay up to date with new features, improvements, and bug fixes shipped.
      </p>

      <div>
        {updates.map((update) => (
          <PostItem key={update.title} update={update} />
        ))}
      </div>
    </main>
    </>
  );
}
