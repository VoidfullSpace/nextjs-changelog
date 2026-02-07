import Image from "next/image";

const updates = [
  {
    title: "A new home for all your meetings",
    description: [
      "Too often, notes get scattered (or forgotten).",
      <>
        The new Meetings tab in your sidebar organizes notes from every meeting you’ve run or joined.
        <br />
        It syncs with your calendar so you can easily prep notes, join calls and use AI Meeting Notes
        <br />
        to transcribe every detail.
      </>,
      <>
        Just type{" "}
        <span className="font-semibold text-gray-600">/meet</span>
        {" "} on any page and click start to kick off a meeting note.
      </>
    ],
    img: "https://images.unsplash.com/photo-1769263077636-0681e8f2e363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    date: "January 4, 2026",
    tags: [
      { label: "New", color: "bg-blue-400" },
      { label: "Enhancement", color: "bg-purple-500" },
      { label: "Feature", color: "bg-green-500" },
      { label: "Design", color: "bg-yellow-400" },
    ]
  },
  {
    title: "Create and manage tasks right in Calendar",
    description: [
      "Manage your work tasks, milestones, even personal goals, alongside your schedule.",
      <>
        Connect any database with dates to Calendar, then create, schedule, and complete tasks in
        <br />
        the same place you plan your time.
      </>,
      "Here's a quick guide to get started. Try it out now!"
    ],
    img: "https://images.unsplash.com/photo-1768517296837-2457934c92fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
    date: "December 29, 2025",
    tags: [
      { label: "Enhancement", color: "bg-purple-500" },
      { label: "Feature", color: "bg-green-500" }
    ]
  }
]

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 bg-gray-100">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-2 text-gray-700">Product Updates</h2>
      <p className="text-gray-500 mb-16">
        Stay up to date with new features, improvements, and bug fixes shipped.
      </p>

      <div>
        {
          updates.map((update, i) => (
            <div className="grid grid-cols-[220px_40px_1fr] gap-4 mb-10 text-gray-300" key={i}>

              {/* { date & tags } */}
              <div className="flex flex-col text-xs text-right">
                <p className=" text-gray-500 mb-3 font-bold mt-3">{update.date}</p>
                <div className="flex flex-wrap justify-end gap-1">
                  {update.tags.map((tag) => (
                    <div key={tag.label} className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs text-gray-500">
                      <span
                        className={`w-2 h-2 rounded-full ${tag.color}`}
                      >
                      </span>
                      <span className="whitespace-nowrap w-fit font-semibold">{tag.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* { middle line } */}
              <div className="flex flex-col items-center mt-3">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="flex-1 w-px bg-gray-200 mt-3" />
              </div>

              {/* { Content } */}
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                  {update.title}
                </h2>

                <div className="space-y-3 text-gray-500 mb-6">
                  {update.description.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>

                <div className="rounded-xl border p-4">
                  <div className="relative w-full aspect-[2/1]">
                    <Image
                      src={update.img}
                      alt={update.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

              </div>

            </div>
          ))
        }
      </div>

    </main>
  );
}
