import Image from "next/image";
import { ReactNode } from "react";

interface Tag {
  label: string;
  color: string;
}

interface Update {
  title: string;
  description: (string | ReactNode)[];
  img: string;
  date: string;
  tags: Tag[];
}

interface PostItemProps {
  update: Update;
}

export function PostItem({ update }: PostItemProps) {
  return (
    <div className="grid sm:grid-cols-[120px_40px_1fr] md:grid-cols-[220px_40px_1fr] gap-4 mb-16">

      {/* { date & tags } */}
      <div className="flex flex-col text-xs sm:text-right mb-6">
        <p className=" text-gray-500 mb-3 font-bold mt-3">{update.date}</p>
        <div className="flex flex-wrap sm:justify-end gap-1">
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
      <div className="hidden sm:flex flex-col items-center mt-3">
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="flex-1 w-px bg-gray-200 mt-3" />
      </div>

      {/* { Content } */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-700">
          {update.title}
        </h2>

        <div className="space-y-3 text-gray-500 mb-6 text-sm sm:text-base">
          {update.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 p-2 sm:p-4 md:mx-6">
          <div className="relative w-full aspect-2/1">
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
  );
}
