import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Login() {
  const navigate = useNavigate();

  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/app");
  }

  return (
    <div className="h-screen">
      <div className="h-2/3 flex flex-col items-center justify-around">
        <h1 className="font-ginger text-2xl">Connect Wallet</h1>
        <form className="flex flex-col items-center " onSubmit={handleSubmit}>
          <SearchBar
            placeholder="Wallet Address/NFT ID"
            value={walletAddress}
            onChangeHandler={setWalletAddress}
          >
            <UserIcon className="h-5 w-5 absolute m-1 pointer-events-none" />
          </SearchBar>
          <SearchBar
            placeholder="Password"
            value={password}
            onChangeHandler={setPassword}
            cssClass="mt-8"
          >
            <LockClosedIcon className="h-5 w-5 absolute m-1 pointer-events-none" />
          </SearchBar>

          <button className="text-white bg-gradient-to-r from-[#3870FF] to-[#83A5FF] w-fit font-ginger p-3 mt-16 rounded-md">
            Connect Wallet &gt;
          </button>
        </form>
      </div>
      <div className="font-ginger">
        <h1 className=" text-sm text-center mt-24 mb-8">Forgot Password?</h1>
        <Link to="/signup">
          <h1 className="text-center text-sm text-[#3870FF] underline underline-offset-2 decor">
            Create an account
          </h1>
        </Link>
      </div>
    </div>
  );
}
