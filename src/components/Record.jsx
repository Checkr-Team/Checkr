import {
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";
import AppHeader from "./AppHeader";

export default function Record() {
  return (
    <div className="h-screen py-8 px-4 font-ginger">
      <AppHeader textValue="&lt; Records" />
      <div className="pl-2">
        <h1 className="mt-4 text-lg">Malaria Parasite Test</h1>
        <div className="bg-[#3870FF] w-fit p-2 mt-4 text-white rounded-xl">
          Laboratory
        </div>
        <p className="mt-4">
          Laboratory Scientist : <span>Dr.Eniola</span>
        </p>
        <div className="mt-4 flex">
          <CalendarDaysIcon className="w-5 h-5 text-[#3870FF] " />
          <p className="ml-3">
            Date: <span>02-08-2023</span>
          </p>
        </div>
      </div>
      <div className="mt-4 border m-2 border-[#5A5A5A] rounded-2xl p-6">
        <h1 className="mb-2 text-lg">Report</h1>
        <p className="text-xs my-4 text-[#5A5A5A]">
          Lorem ipsum dolor sit amet consectetur. Commodo rhoncus mi magna
          dignissim enim. Aliquam dolor leo vestibulum auctor maecenas.
          Facilisis morbi In erat elementum faucibus viverra donec. Nam
          vestibulum nulla phasellus ornare posuere. Lorem habitant cursus
          facilisis nec purus. Nulla massa elementum arcu cursus. Tempor nunc
          ultrices dui viverra diam. Tincidunt purus in in gravida auctor dui.
        </p>
      </div>
      <div className="pl-2 flex justify-between mt-8">
        <div className="w-fit bg-gradient-to-r from-[#3870FF] to-[#83A5FF] flex p-4 rounded-md">
          <ArrowDownTrayIcon className="w-5 h-5 text-white " />
          <p className="ml-4 text-white">Download</p>
        </div>
        <div className="w-fit text-[#5A5A5A] border border-[#5A5A5A] flex p-4 rounded-md">
          <ArrowUpOnSquareIcon className="w-5 h-5  " />
          <p className="ml-4">Share</p>
        </div>
      </div>
    </div>
  );
}
