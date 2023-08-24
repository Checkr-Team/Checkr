import { Outlet } from "react-router-dom";

import BottomBar from "../components/BottomBar";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Outlet />
      <BottomBar />
    </div>
  );
}
